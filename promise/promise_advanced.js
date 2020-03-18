/**
 * 完全版Promise手写实现
*/
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(constructor) {
    let self = this;
    self.status = PENDING;
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCallback = [];
    self.onRejectetCallback = [];

    function resolve(value) {
        if(value instanceof Promise) {
            return value.then(resolve, reject);
        }

        setTimeout(() => {
            if(self.status === PENDING) {
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilledCallback.forEach(cb => {
                    cb(self.value);
                });
            }
        })
    }

    function reject(reason) {
        setTimeout(() => {
            if(self.status === PENDING) {
                self.status = REJECTED;
                self.reason = reason;
                self.onRejectetCallback.forEach(cb => {
                    cb(self.reason);
                });
            }
        })
    }

    try {
        constructor(resolve, reject);
    } catch(e) {
        reject(e);
    }

}

Promise.prototype.then = function(onFulfilled, onRejected) {
    const self = this;
    let newPromise;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ?onRejected : reason => {throw reason;}

    if(self.status === FULFILLED) {// 成功态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        })
    }

    if (that.status === REJECTED) {// 失败态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }


    if (that.status === PENDING) {// 等待态
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

}