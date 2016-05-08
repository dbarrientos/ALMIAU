/**
 * CheckaccountController
 *
 * @description :: Server-side logic for managing checkaccounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res){
		CheckAccount.find({
			user_x_user: req.param('id')
		}).exec(function afterwards(err, populatedRecords){
			res.json(populatedRecords);
		});
	}
};

