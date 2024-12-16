/**
 * @description 将 Blob URL 转换为 Base64 编码的字符串
 * @param {string} blobUrl - 需要转换的 Blob URL
 * @returns {Promise<string>} 返回一个 Promise，解析为 Base64 格式的字符串
 *
 * @example
 * const base64 = await blobToBase64('blob:http://example.com/abcd-1234');
 * console.log(base64); // data:image/png;base64,xxxxxx
 */
export function blobToBase64(blobUrl: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // 处理跨域问题（可选）
    img.src = blobUrl;

    img.onload = () => {
      // 创建一个画布元素，用于绘制图片并生成 Base64
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        reject(new Error("Canvas context is not supported."));
        return;
      }

      // 设置画布的宽高为图片的实际尺寸
      canvas.width = img.width;
      canvas.height = img.height;

      // 在画布上绘制图片
      context.drawImage(img, 0, 0, img.width, img.height);

      try {
        // 将画布内容转换为 Base64 编码的字符串
        const base64String = canvas.toDataURL("image/png");
        resolve(base64String);
      } catch (error) {
        reject(new Error("Failed to convert Blob URL to Base64."));
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load image from Blob URL."));
    };
  });
}
