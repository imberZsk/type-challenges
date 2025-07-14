type First<T extends unknown[]> = T extends [infer A, ...unknown[]] ? A : never
