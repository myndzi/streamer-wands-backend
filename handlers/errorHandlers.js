exports.catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next)
    }
}

exports.notFound = (req, res, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
}

exports.devError = (err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
        message: err.message,
        status: err.status
    }
    res.status(err.status || 500)
    res.json(errorDetails)
}

exports.productionError = (err, req, res, next) => {
    err.stack = err.stack || ""
    res.status(err.status || 500)
    res.send("404 Not found")
}