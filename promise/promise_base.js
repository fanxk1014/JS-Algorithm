/**
 * 简易版Promise手写实现
 */
function Promise(constructor) {
    let self = this;
    self.status = 'pending';//初始状态
    self.value = undefined;//resolve时使用
    self.reason = undefined;//reject时使用

    function resolve(value) {
        if(self.status === 'pending') {
            self.status = 'resolved';//改变状态
            self.value = value;//resolve=>获取值
        }
    }

    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'rejected';//改变状态
            self.reason = reason;//reject=>获取失败原因
        }
    }

    try {//捕获异常
        constructor(resolve, reject);
    } catch(e) {
        reject(e);
    }
}

//在Promise的原型上，定义链式调用的then方法
Promise.prototype.then = function(onFullfilled, onRejected) {
    let self = this;
    switch(self.status) {
        case 'resolved':
            onFullfilled(self.value);
            break;
        case 'rejected':
            onRejected(self.value);
            break;
        default:
    }
}

//test
var a = new Promise(function(resolve, reject) {
    resolve(137);
})

a.then(function(x) {
    console.log(x);
})

