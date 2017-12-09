/**
 * 判断数据的类型
 */
typeof 1  //"number"
typeof 'a'  //"string"
typeof function(){}   //"function"
typeof []   //"object"
typeof true   //"boolean"
typeof undefined  //"undefined"

/**
 * 定义一个字符串变量的区别
 */
var str = 'abc'
console.log((typeof str),(str instanceof Object),(str instanceof String))
//output: string false false 

var str = String('abc') //String()是js里强制类型转换的函数，var str = String(123)得到的结果仍然一样
console.log((typeof str),(str instanceof Object),(str instanceof String))
//output: string false false

var str = new String('abc')
console.log((typeof str),(str instanceof Object),(str instanceof String))
//output: object true true


/**
 * Object.prototype.toString
 */

 Object.prototype.toString.apply([])
 Object.prototype.toString.apply(function(){})
 Object.prototype.toString.apply("")
 Object.prototype.toString.apply(123)
 Object.prototype.toString.apply(true)

