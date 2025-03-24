type RandomFuncType = (max: number, min?: number) => number;

/**
 * 生成一个指定区间内的随机整数
 *
 * @param {number} min - 随机数生成的下边界（包含），默认为 0
 * @param {number} max - 随机数生成的上边界（不包含）
 * @returns {number} 一个 [min, max) 的随机整数
 * @throws {RangeError} 如果 min 或 max 不是整数，或 max 小于等于 min，将抛出 RangeError 异常。
 */
export const getRandom: RandomFuncType = (max: number, min: number = 0): number => {
  if (!Number.isInteger(min) || !Number.isInteger(max) || max <= min) {
    throw new RangeError(
      "参数错误：请确保 min 和 max 为整数，并且 max 大于 min"
    );
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

