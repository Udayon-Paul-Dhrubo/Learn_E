


exports.getHome = (req, res, next)=>{
    res.render('home/home-view.ejs',{
        pageTitle : 'Home',
        error: 'false',
        
    })
}
