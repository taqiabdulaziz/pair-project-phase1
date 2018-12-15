let checkaccess = function(req, res, next) {
    if (req.session != null) {
        next()
    } else {
        res.redirect(`/login`)
    }   
}


module.exports = checkaccess