type MyExclude<T, U> = T extends U ? never : T

type ExcludeResult = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
