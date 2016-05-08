/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `CategoryController.default()`
   */
  default: function (req, res) {
    Category.find({
      where: {
      id:req.param('id')
      }
    }).exec(function(result){
      console.log("hurra!!")
    });
  }

};

