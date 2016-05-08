/**
 * WinnerController
 *
 * @description :: Server-side logic for managing Winners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `WinnerController.default()`
   */
  index: function (req, res) {
    Winner.find({
      raffle_x_raffle: req.param('id')
    },function(error,result){
      return res.json(result);
    })
  }

};

