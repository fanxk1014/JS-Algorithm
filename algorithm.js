// Javascript 算法练习

/**
 * 1
 * 判断一组字符串是否为回文
 * 是 返回true，不是 返回false
 */
// {
//     function testReverse(str) {
//         let newStr = str.split('').reverse().join('');
//         return newStr === str;
//     }
//     let str = 'abcdcba';
//     console.log(testReverse(str));
// }

/**
 * 2.1
 * 去重
 */
// {
//   function unique(arr) {  
//         let hashTable = {};
//         let data = [];
//         for(let i=0,l=arr.length;i<l;i++) {
//         if(!hashTable[arr[i]]) {
//             hashTable[arr[i]] = true;
//             data.push(arr[i]);
//         }
//         }
//         return data
//     }
//     let arr=[0,2,4,6,8,4,5,0];
//     console.log(unique(arr));
// }

/**
 * 2.2
 * 去重
 *  */
// {
//     function unique(arr){
//         let tempArr = [];
//         for(let i=0;i<arr.length;i++){
//             if(tempArr.indexOf(arr[i]) == -1){
//                 tempArr.push(arr[i]);
//             }
//         }
//         return tempArr;
//     }
//     let arr = [1,2,3,3,4,5,5];
//     console.log(unique(arr));
// }
    
/**
 * 2.3
 * 去重
 */
// {
//     function unique(arr){
//         let set = new Set(arr);
//         console.log(set);
//     }
//     let arr = [1,2,3,3,4,5,5];
//     unique(arr);
// }

/**
 * 3
 * 找出出现次数最多的字符
 */
// {
//   function findMaxDuplicateChar(str){
//     if(str.length==1){
//       return str;
//     }
//     let tempObj = {};
//     for(let i=0;i<str.length;i++){
//       if(!tempObj[str.charAt(i)]){
//         tempObj[str.charAt(i)] = 1;
//       }else{
//         tempObj[str.charAt(i)] += 1;
//       }
//     }
//     let maxChar = '';
//     let maxValue = 1;
//     for(x in tempObj){
//       if(tempObj[x]>maxValue){
//         maxValue = tempObj[x];
//         maxChar = x;
//       }
//     }
//     return maxChar;
//   }
//   let dupStr = '112235487651231111';
//   console.log(findMaxDuplicateChar(dupStr));
// }

/**
 * 4
 * 数组冒泡排序-从小到大
 */
// {
//   function bubbleSotr(arr){
//     let tempVal = '';
//     for(let i=0;i<arr.length-1;i++){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//           tempVal = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tempVal;
//         }
//       }
//     }
//     return arr;
//   }
//   let randomArr = [2,4,9,7,3,1,6,5,8,5];
//   console.log(bubbleSotr(randomArr));
// }

/**
 * 5
 * 快速排序-从小到大
 */
// {
//   function quickSort(arr){
//     if(arr.length <= 1){//注意这里有坑，必须有<1的判断，不然会陷入死循环
//       return arr;
//     }
//     let leftArr = [];
//     let rightArr = [];
//     let q = arr[0];
//     for(let i=1;i<arr.length;i++){
//       if(arr[i]<q){
//         leftArr.push(arr[i]);
//       }else{
//         rightArr.push(arr[i]);
//       }
//     }
//     return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
//   }
//   let quickArr = [5,6,8,9,1,3,0,2,4,2,5];
//   console.log(quickSort(quickArr));
// }

/**
 * 6
 * 不借助临时变量，交换两数位置
 */
// {
//   function swap(a , b) {  
//     b = b - a;
//     a = a + b;
//     b = a - b;
//     return [a,b];
//   }
//   console.log(swap(1,3));
// }

/**
 * 7
 * 生成斐波那契数组
 */
// {
//     function getFibonacci(n){
//         let fiboArr = [];
//         let i = 0;
//         while(i<n){
//             if(i<=1){
//                 fiboArr.push(i);
//             }else{
//                 fiboArr.push(fiboArr[i-1]+fiboArr[i-2]);
//             }
//             i++
//         }
//         return fiboArr;
//     }
//     console.log(getFibonacci(22));
// }

/**
 * 8
 * 找出数组中的最大差值
 */
// {
//     function getMaxProfit(arr){
//         let minNum = arr[0];
//         let maxProfit = 0;
//         for(let i=0;i<arr.length;i++){
//             let currentProfit = arr[i];
//             minNum = Math.min(currentProfit,minNum);
//             let potentialProfit = arr[i] - minNum;
//             maxProfit = Math.max(potentialProfit,maxProfit);
//         }
//         return maxProfit;
//     }
//     let arrTest = [5,-8,2,9,13,5];
//     console.log(getMaxProfit(arrTest));
// }

/**
 * 9
 * 随机生成指定长度字符串
 */
// {
//     function randomString(n){
//         let str = 'asdfghjklzxcvbnm0123456789';
//         let strL = str.length;
//         let rdStr = '';
//         for(let i=0;i<n;i++){
//             rdStr += str.charAt(Math.floor(Math.random()*strL));
//         }
//         return rdStr;
//     }
//     console.log(randomString(5));
// }

/**
 * 10
 * 数组中任意两数之和，等于指定值，返回这两数脚标数组
 */
// var twoSum = function(nums, target) {
//     var numsL = nums.length;
//     for(var i=0;i<numsL-1;i++){
//         for(var j=i+1;j<numsL;j++){
//             if(nums[i]===target-nums[j]){
//                console.log(i,j);
//                }
//         }
//     }
// };
// var arr = [2,7,11,13];
// var targetVal = 9;
// twoSum(arr,targetVal);


/**
 * 11
 * 写一个字符串，找出其中最长的连续子字符串
 * 例：‘aabbcdnnnnmmk’,输出：‘nnnn’
 */
// function getLongChar(char){
//     if(!arguments.length){
//         console.log('没有参数');
//         return;
//     }
//     if(!char.length){
//         console.log('空字符串');
//         return;
//     }

// console.log(char[0]);

// }
// console.log(getLongChar('abcde'));