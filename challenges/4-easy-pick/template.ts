type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// js逻辑类比
// function myPick(todo, keys) {
//     const obj = {}

//     keys.forEach(key => {
//         if (key in todo) {
//             obj[key] = todo[key]
//         }
//     })
//     return obj
// }
// 1. 返回一个对象
// 2. 遍历foreach => mapped
// 3. todo[key] 取值 => indexed
// 4. 看看 key 是否在todo里 => keyof lookup、generic constraints