/**
 * 防抖：
 * 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
 */
window.onload = function () {
    let myDeBounce = document.getElementById('debounce');
    myDeBounce.addEventListener('click',debounce(sayDeBounce,1000));

    //对页面滚动添加防抖
    // window.addEventListener('scroll',debounce(sayDeBounce,1000));
}

function debounce (fn,wait) {
    let timeout = null;
    return function(){
        //如果已经有定时器，则清除
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(this);
            // 或fn.call(this,arguments);由于sayDeBounce不需传参，所以arguments可以不写
        }, wait);
    }
    // 任何点击操作，都要等待一秒再执行。别催，催就重新计时
}

function sayDeBounce () {
    console.log('防抖成功');
}