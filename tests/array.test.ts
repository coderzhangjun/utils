import { findArrayItem } from "../src/utils/array"; // 假设函数文件为 findArrayItem.ts

// 测试数据
const testData = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

describe("findArrayItem", () => {
  // 测试1：查找对象索引
  test("should return the index of the object with matching property value", () => {
    const index = findArrayItem(testData, "name", "Bob");
    expect(index).toBe(1); // Bob 在 testData 中的索引是 1
  });

  // 测试2：返回对象本身
  test("should return the object itself when returnItem is true", () => {
    const result = findArrayItem(testData, "name", "Charlie", true);
    expect(result).toEqual({ id: 3, name: "Charlie", age: 35 });
  });

  // 测试3：未找到对象时返回 -1
  test("should return -1 when no object matches the condition", () => {
    const index = findArrayItem(testData, "id", 999);
    expect(index).toBe(-1);
  });

  // 测试4：返回对象本身时对象不存在
  test("should return -1 when returnItem is true but object is not found", () => {
    const result = findArrayItem(testData, "name", "Nonexistent", true);
    expect(result).toBe(-1);
  });

  // 测试5：输入空数组
  test("should return -1 for empty array", () => {
    const result = findArrayItem([], "id", 1);
    expect(result).toBe(-1);
  });

  // 测试6：无效的 key
  test("should handle invalid key gracefully", () => {
    const index = findArrayItem(testData, "invalidKey" as any, "value");
    expect(index).toBe(-1);
  });
});
