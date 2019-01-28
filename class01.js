/**
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

    function unique(arr) {  
        let hashTable = {};
        let data = [];debugger
        for(let i=0,l=arr.length;i<l;i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
        }
        return data
    }
    let arr=[0,2,4,6,8,4,5,0];

    console.log(unique(arr));