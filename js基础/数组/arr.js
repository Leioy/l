/**
 * push方法
 * 
 * push() 方法可向数组的末尾添加一个或多个元素，该方法接受一个或多个参数，并返回新的长度。
 * 注：该方法是直接修改原数组，而不是创建一个新的数组。
 */
var arr = ['jack','frank']
arr.push('nick')
console.log(arr)    // ["jack", "frank", "nick"]

/**
 * pop方法
 * 
 * pop() 方法将删除 原数组的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
 * 如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
 */
var arr = ['jack','frank']
var value = arr.pop()
console.log(arr) //["jack"]
console.log(value)  //"frank"

/**
 * unshift方法
 * 
 *  和push方法类似，该方法向数组的开头添加一个或多个元素，该方法接受一个或多个参数，并返回新的长度。
 */
var arr = ['jack','frank']
arr.unshift('leio','juce')
console.log(arr)  // ["leio", "juce", "jack", "frank"]

/**
 * concat方法 例1
 * 
 * concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
 */
var arr = [1,2,3]
console.log(arr.concat(4,5))    //[1,2,3,4,5]
/**
 * 例2
 */
var  arr = ['Geoge','John','Thoms']
var arr1 = ['jams','jack']
var arr2 = arr.concat(arr1)
console.log(arr)    // ["Geoge", "John", "Thoms"]
console.log(arr1)   // ["jams", "jack"]
console.log(arr2)   // ["Geoge", "John", "Thoms", "jams", "jack"]


/**
 * splice方法
 * 
 * splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 * 注：该方法会改变原始数组。
 * 
 * 语法：arrayObject.splice(index,howmany,item1,.....,itemX)
 * index:必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany:必需。要删除的项目数量。如果设置为 0，则不会删除项目。
 * item1, ..., itemX:可选。向数组添加的新项目
 */

 var arr = ['jack','john','jams','thoms','andrew']
 arr.splice(4,1)
 console.log(arr) // ["jack", "john", "jams", "thoms"]
 arr.splice(1,1,'frank')
 console.log(arr)   // ["jack", "frank", "jams", "thoms"]

 /**
  * slice方法
    slice() 方法可从已有的数组中返回选定的元素。
    语法：arrayObject.slice(start,end)
    start:	必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
            也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推
    end:   可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
           如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
    注：该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()
  */

  var arr = ['jack','john','jams','thoms','andrew']
  arr.slice(2,3)    //['jams']
  console.log(arr)  //['jack','john','jams','thoms','andrew']

  /**
   * sort方法
   * 
   * sort() 方法用于对数组的元素进行排序。
   * 该方法直接只在原数组操作，并不返回新的数组
   * 
   * 如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，
   * 说得更精确点，是按照字符编码的顺序进行排序。要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较
   */
   //例1 该例子没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数
  var arr = [1,6,10,87,60]
  arr.sort()    //[1, 10, 6, 60, 87]

  //例2
  var arr = [1,6,10,87,60]
  function sortNum(a,b){
      return a - b
  }
  arr.sort(sortNum) //[1, 6, 10, 60, 87]

  /**
   * reverse方法
   * reverse() 方法用于颠倒数组中元素的顺序
   * 该方法直接在原数组操作，并不返回新的数组
   */
  var arr = [1,6,10,87,60]
  arr.reverse() //[60, 87, 10, 6, 1]

  /**
   * join方法
   * join() 方法用于把数组中的所有元素放入一个字符串,元素是通过指定的分隔符进行分隔的
   * 语法: arrayObject.join(separator)
   * 参数: 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。
   */
  var arr = ['jack','john','jams','thoms','andrew']
  arr.join()    //"jack,john,jams,thoms,andrew"
  arr.join('')  //"jackjohnjamsthomsandrew"
  




