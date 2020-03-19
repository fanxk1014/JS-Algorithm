Promise.all_ = function(promises) {
    if(typeof promises[Symbol.iterator] !== 'function') {
        Promise.reject('args is not iteratable!');
    }
    return new Promise((resolve, reject) => {
        promises = Array.from(promises);
        if(promises.length === 0) {
            resolve([]);
        } else {
            let result = [];
            let index = 0;
            for(let i=0; i<promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    result[i] = data;
                    if(++index === promises.length) {
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}