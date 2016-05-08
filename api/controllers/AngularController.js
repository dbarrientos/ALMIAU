/**
 * AngularController
 *
 * @description :: Server-side logic for managing angulars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	default: function(req,res){
		return res.view('angular/'+req.param('ang'));
	}
};

