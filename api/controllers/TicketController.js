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
  index: function (req, res) {
    Ticket.find({
      id:req.param('id')
    }).exec(function(result){

    });
  }
};

