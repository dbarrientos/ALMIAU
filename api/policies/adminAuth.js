/**
 * adminAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
 //  	if(typeof res.locals.user != "undefined"){
 //  		if(res.locals.user.admin == 1){
 //  			next();
 //  		}
 //  		else
 //  		{
 //  			return res.json({
	//   			status: "3",
	//   			error: "forbidden"
	//   		});
 //  		}
 //  	}
 //  	else
 //  	{
 //  		return res.json({
 //  			status: "3",
 //  			error: "forbidden"
 //  		});
	// }
  //
  next();
};
