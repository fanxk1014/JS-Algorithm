/**
 * 判断一组字符串是否为回文
 * 是 返回true，不是 返回false
 */
{
    function testReverse(str) {
        let newStr = str.split('').reverse().join('');
        return newStr === str;
    }

    let str = 'abcdcba';
    console.log(testReverse(str));
}