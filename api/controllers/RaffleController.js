/**
 * RaffleController
 *
 * @description :: Server-side logic for managing Raffles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `RaffleController.default()`
   */
  default: function (req, res) {
    return res.view('index');
  },

  confirm: function (req, res) {
    return res.view('index');

  },

  pay: function (req, res) {
    return res.view('index');

  },
  new: function (req, res) {
    return res.view('index');

  },
  payto: function (req, res) {    
    return res.json({
      status:1
    });
  },
  newto: function (req, res) {
    return res.json({
      status:1
    });
  },
  index: function(req,res){
    
  }
};

