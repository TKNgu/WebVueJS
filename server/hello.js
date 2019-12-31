const jwt = require("jsonwebtoken")

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

module.exports = (req, res, next) => {
	if((req.url == "/api/login" || req.url == "/login") &&
		req.method == "POST") {
		if (req.body != null && 
			req.body.name == USERNAME &&
			req.body.password == PASSWORD) {
			let token = jwt.sign({data: USERNAME, expiresIn: "1h"},
				APP_SECRET);
			res.json({success: true, token: token})
			res.statusCode = 200;
			res.end();
			return;	
		}
	} else if((req.url == "/api/products" || req.url == "/products") &&
		req.method == "GET") {
		let token = req.headers["authorization"];
		if(token != null && token.startsWith("Bearer")) {
			token = token.substring(7, token.length);
			try {
				jwt.verify(token, APP_SECRET);
				next();
				return;
			} catch (err) {
				console.log(err);
				res.statusCode = 401;
				res.end();
				return;
			}
		}
	}
	res.statusCode = 404;
	res.end();
	return;
}