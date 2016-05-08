/**
 * PrizeController
 *
 * @description :: Server-side logic for managing Prizes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `PrizeController.default()`
   */
  index: function (req, res) {
    Prize.find({
      raffle_x_raffle: req.param('id')
    },function(error,result){
      return res.json(result);
    })
  },


  /**
   * `PrizeController.update()`
   */
  update: function (req, res) {
    return res.view('index');
  }
};

