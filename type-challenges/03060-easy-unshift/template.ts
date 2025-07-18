type Unshift<T extends readonly unknown[], U> = [U, ...T]

type Result = Unshift<[1, 2], 0> // [0, 1, 2]
