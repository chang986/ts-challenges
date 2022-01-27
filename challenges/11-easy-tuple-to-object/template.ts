type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P
}


// 1. typeof => 将js数据 转换为 ts类型
// 2. const tuple = ['xx', '12'] as const => 定义数组内项目为常量
// 3. [P in T[number]]: P => 遍历数组的方法
// 4. @ts-expect-error => 错误断言，下面内容不报错它就报错