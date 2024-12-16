/**
 * 在数组中查找具有指定属性值的对象。
 *
 * @param arr - 需要检查的数组，每个元素应为对象。
 * @param key - 对象中要匹配的属性名。
 * @param value - 要匹配的属性值。
 * @param returnItem - （可选）是否返回对象本身。如果为 `true`，返回匹配的对象；否则返回对象的索引。默认 `false`。
 * @returns 匹配的对象（如果 `returnItem` 为 `true`）或对象的索引；如果未找到则返回 `-1`。
 *
 * @example
 * const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * findArrayItem(data, 'name', 'Bob'); // 1
 * findArrayItem(data, 'name', 'Bob', true); // { id: 2, name: 'Bob' }
 */
export function findArrayItem<T extends Record<string, any>>(
  arr: T[],
  key: keyof T,
  value: any,
  returnItem: boolean = false
): T | number {
  const index = arr.findIndex((item) => item[key] === value);
  return returnItem && index !== -1 ? arr[index] : index;
}
