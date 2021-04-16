  
const adminRole = 'admin';

module.exports = (req, res, next) => {
	if(req.session.user && req.session.user.rol == adminRole) {
		next()
	}else{
		res.redirect('/')
	}
}