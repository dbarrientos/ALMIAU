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
    return res.json({
      status:1
    });
  },


  /**
   * `PrizeController.update()`
   */
  update: function (req, res) {
    return res.view('index');
  }
};

