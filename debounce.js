/**
 * 防抖
 */
window.onload = function () {
    let myDeBounce = document.getElementById('debounce');
    myDeBounce.addEventListener('click',debounce(sayDeBounce));
}

function debounce (fn) {
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(this);
            // 或fn.call(this,arguments);由于sayDeBounce不需传参，所以arguments可以不写
        }, 1000);
    }
    // 任何点击操作，都要等待一秒再执行。别催，催就重新计时
}

function sayDeBounce () {
    console.log('防抖成功！');
}