Promise.prototype.finally = function(callback) {
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => {
            return value;
        });
    }, (err) => {
        return Promise.resolve(callback()).then(() => {
            throw err;
        });
    });
}

//https://blog.csdn.net/zl13015214442/article/details/96744447