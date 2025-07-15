// 第二步：分析两个函数类型
// 左边函数：<G>() => G extends string ? 1 : 2
// 右边函数：<G>() => G extends any ? 1 : 2
// 第三步：测试不同的 G 值
// 让我们看看当传入不同类型 G 时，这两个函数的行为：
// 当 G = string 时：
// 左边：string extends string ? 1 : 2 → 1
// 右边：string extends any ? 1 : 2 → 1
// 结果相同 ✓
// 当 G = number 时：
// 左边：number extends string ? 1 : 2 → 2
// 右边：number extends any ? 1 : 2 → 1
// 结果不同 ✗
// 第四步：函数类型兼容性
// 由于存在某个类型 G（比如 number）使得两个函数产生不同的返回值，TypeScript 认为这两个函数类型不兼容

type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U
  ? 1
  : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? IsEqual<U, First> extends true
    ? true
    : Includes<Rest, U>
  : false
