/**
 * 以下三种解构赋值不得使用圆括号:
 */ 

//（1）变量声明语句中，不能带有圆括号。
// 全部报错
var [(a)] = [1];
var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};
var { o: ({ p: p }) } = { o: { p: 2 } };
//上面三个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号

//（2）函数参数中，模式不能带有圆括号
// 函数参数也属于变量声明，因此不能带有圆括号。
// 报错
function f([(z)]) { return z; }

//（3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
//上面代码将整个模式放在圆括号之中，导致报错。
// 报错
[({ p: a }), { x: c }] = [{}, {}];
//上面代码将嵌套模式的一层，放在圆括号之中，导致报错。

//可以使用圆括号的情况：赋值语句的非模式部分，可以使用圆括号。
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
// 上面三行语句都可以正确执行,它们的圆括号都不属于模式的一部分。
// 第一行语句中，模式是取数组的第一个成员，跟圆括号无关
// 第二行语句中，模式是p，而不是d
// 第三行语句与第一行语句的性质一致

/**
 * 即：
 * 括号扩的是值而不是模式时可以使用括号，
 * 但建议能不用括号的尽量不用，避免产生歧义
 */