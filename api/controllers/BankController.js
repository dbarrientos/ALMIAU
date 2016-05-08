/**
 * BankController
 *
 * @description :: Server-side logic for managing Banks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `BankController.default()`
   */
  default: function (req, res) {
    return res.view('index');
  },


  /**
   * `BankController.create()`
   */
  create: function (req, res) {
    console.log('perrto');
  },


  /**
   * `BankController.update()`
   */
  update: function (req, res) {
    return res.view('index');
  },


  /**
   * `BankController.destroy()`
   */
  destroy: function (req, res) {
    return res.view('index');
  }
};

