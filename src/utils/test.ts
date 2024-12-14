// 数组去重
export function uniqueArray(arr: [any]) {
  return Array.from(new Set(arr));
}

/**
 * 计算两个数字的和
 * @param num1 - 第一个数字
 * @param num2 - 第二个数字
 * @returns 两个数字的和
 */
export function add(num1: number, num2: number): number {
  return num1 + num2;
}
