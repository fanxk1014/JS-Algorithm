Promise.race_ = function(promises) {
    if(typeof promises[Symbol.iterator] !== 'function') {
        Promise.reject('args is not iteratable!');
    }
    return new Promise((resolve, reject) => {
        promises = Array.from(promises);
        if(promises.length === 0) {
            return;
        } else {
            for(let i; i<promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    resolve(data);
                    return;
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}