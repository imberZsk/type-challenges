type MyReturnType<T extends Function> = T extends (...args: any) => infer Value
  ? Value
  : never
