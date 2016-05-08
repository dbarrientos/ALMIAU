/**
 * TicketController
 *
 * @description :: Server-side logic for managing Tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `TicketController.default()`
   */
  default: function (req, res) {
    return res.view('index');
  },

  /**
   * `TicketController.getFromRaffle()`
   */
  getFromRaffle: function (req, res) {
    return res.view('index');
  }
};

