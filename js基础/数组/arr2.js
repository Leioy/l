/**
 * 过滤数组，只保留正数，在原数组操作
 */
var arr = [3,1,0,-1,-3,2,-5]
function filter(array){
  for(var i = 0;i<array.length;i++){
    if(array[i] <= 0){
      array.splice(i,1)
      i--
    }
  }
  return array
}
filter(arr)

/**
 * 过滤如下数组，只保留正数，原数组不变，生成新数组
 */
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  var newArr = []
  for(var i = 0;i < arr.length;i++){
    if(arr[i] > 0){
      newArr.push(arr[i])
    }
  }
  return newArr
}
filter(arr)

/**
 * 写一个深拷贝函数，用两种方式实现
 */
var obj={
	a:1,
	b:2,
	c:{
		d:1,
		e:2
	}
}
 function deepCopy1(obj){
	 var result = {}
	 for(var key in obj){
		result[key] = (typeof obj[key] === 'object')?deepCopy1(obj[key]):obj[key]
	 }
	 return result
 }
 deepCopy1(obj)

 function deepCopy2(obj){
	 var result = {}
	 result = JSON.parse(JSON.stringify(obj))
	 return result
 }
 deepCopy2(obj)