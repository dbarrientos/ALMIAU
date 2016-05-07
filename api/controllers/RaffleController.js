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


  /**
   * `RaffleController.create()`
   */
  create: function (req, res) {

      return res.view('index');
  },


  /**
   * `RaffleController.update()`
   */
  update: function (req, res) {
    return res.view('index');
  },


  /**
   * `RaffleController.destroy()`
   */
  destroy: function (req, res) {
    return res.view('index');
  },

  confirm: function (req, res) {
    return res.view('index');

  },

  pay: function (req, res) {
    return res.view('index');

  }
};

