/**
 * 节流：
 * 指定时间间隔内只会执行一次任务。
 */
window.onload = function () {
    let myThrottle = document.getElementById('throttle');
    myThrottle.addEventListener('click',throttle(sayThrottle,1000));
}

function throttle (fn,wait) {
    let canRun = true;
    return function () {
        if(!canRun){
            return;
        }
        canRun = false;
        setTimeout(()=>{
            fn.call(this);
            canRun = true;
        },wait)
    }
}

function sayThrottle () {
    console.log('执行节流');
}

