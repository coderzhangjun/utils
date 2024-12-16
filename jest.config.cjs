/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/default-esm", // 使用 ts-jest 的 ESM 预设
  testEnvironment: "jest-environment-jsdom", // 使用 jsdom 作为测试环境
  transform: {
    "^.+\\.tsx?$": "ts-jest", // 使用 ts-jest 处理 TypeScript 文件
  },
  extensionsToTreatAsEsm: [".ts"], // 将 .ts 文件视为 ESM
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // 修复 ESM 导入路径问题
  },
};
