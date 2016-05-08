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
    Prize.find().populate("raffle_x_raffle", {
      where:{
        x_raffle: req.param('id')
      }
    });
  },


  /**
   * `PrizeController.update()`
   */
  update: function (req, res) {
    return res.view('index');
  }
};

