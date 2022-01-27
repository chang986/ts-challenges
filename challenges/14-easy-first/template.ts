// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never

// 1. T是空数组的话，T[0] 为 undefined
// 2. 获取 tuple 的 length 属性，T["length"] 
// 3. P extends T[number] => 看看P是否在 tuple T 里面
// 4. infer 的使用（推断）