/**
 * substring方法
 * substring() 方法用于提取字符串中介于两个指定下标之间的字符
 * 
 * 语法：stringObject.substring(start,stop)
 * 参数：start ===> 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
 *      end ===> 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
 *              如果省略该参数，那么返回的子串会一直到字符串的结尾。 
 * 注：substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
 *      如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
 *      如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
 */
var str = 'hello world'
str.substring(2,5)  //"llo"

/**
 * substr方法
 * substr() 方法可在字符串中抽取从 start 下标开始的指定长度的字符
 * 
 * stringObject.substr(start,length)
 * 参数：start ===> 必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置
 *      length ===> 可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
 */
 var str = 'hello world'
 str.substr(2,6)    //"llo wo"


 /**
  * indexOf
    indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    语法：stringObject.indexOf(searchvalue,fromindex)
    参数：searchvalue ===> 必需。规定需检索的字符串值
         fromindex ===>	可选的整数参数。规定在字符串中开始检索的位置。
        它的合法取值是 0 到 stringObject.length - 1。如省略该参数，则将从字符串的首字符开始检索。
    注：indexOf() 方法对大小写敏感！如果要检索的字符串值没有出现，则该方法返回 -1。
    与之对应的lastIndexOf,用法与之相同
  */
  var str = 'hello world'
  str.indexOf('g')  // -1


  /**
   * split方法
   * 
   * split() 方法用于把一个字符串分割成字符串数组。
   * 语法：stringObject.split(separator,howmany)
   * 参数：separator ===> 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。
   *       howmany ===> 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。
   *       如果没有设置该参数，整个字符串都会被分割，不考虑它的长度
   * 注：该方法执行的操作与Array.join()是相反的
   */
    var str = 'hello world'
    str.split('')   //["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

    /**
     * toLowerCase and toUpperCase
     * 将目标字符串转换成大(小)写，并返回一个新的字符串
     * 
     */
    var str = 'hello world'
    str.toUpperCase()   //  "HELLO WORLD"

    //还有一些不是经常用的方法，charCodeAt，fromCharCode，charAt
