import { blobToBase64 } from "../src/utils/files";
import { createCanvas } from "canvas";

// 注入 Canvas 到 jsdom
Object.defineProperty(global, "HTMLCanvasElement", {
  value: class HTMLCanvasElement {
    getContext = createCanvas().getContext; // 使用 node-canvas 的 getContext 实现
  },
});

// Mock Image 对象
class MockImage {
  private _src = "";
  onload: (() => void) | null = null;
  onerror: ((error: ErrorEvent) => void) | null = null;

  get src(): string {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
    if (value === "invalid-url") {
      setTimeout(() => {
        if (this.onerror)
          this.onerror(new ErrorEvent("error", { message: "Invalid URL" }));
      }, 0);
    } else {
      setTimeout(() => {
        if (this.onload) this.onload();
      }, 0);
    }
  }
}

// 设置 global.Image
(global as any).Image = MockImage;

// Jest 配置
jest.setTimeout(10000);

describe("blobToBase64", () => {
  it("should convert a Blob URL to a Base64 string", async () => {
    const mockBlobUrl = "data:image/png;base64,fakebase64data";
    const result = await blobToBase64(mockBlobUrl);
    expect(result).toBe(mockBlobUrl);
  });

  it("should throw an error if the image cannot be loaded", async () => {
    const invalidBlobUrl = "invalid-url";
    await expect(blobToBase64(invalidBlobUrl)).rejects.toThrow(
      "Failed to load image from Blob URL."
    );
  });
});
