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
    var ticket = JSON.parse(req.param('ticket'));
    console.log(res.locals.user);
    Role.findOne({
      user_x_user: res.locals.user.id,
      raffle_x_raffle: req.param('id')
    },function(error, result){
      if(!result){
        Role.insert({
          user_x_user: res.locals.user.id,
          raffle_x_raffle: req.param('id'),
          rol: 3
        },function(err,result){
          console.log(result)
          for(i=0;i<ticket.length;i++){
            Ticket.insert({
              role_x_role: result.id,
              number: ticket[i].number,
              transaction: ticket[i].transaction

            })
          }
        })
      }else{
        for(i=0;i<ticket.length;i++){
          Ticket.insert({
            role_x_role: result.id,
            number: ticket[i].number,
            transaction: ticket[i].transaction
          })
        }
      }
    })

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
    return res.json({
      status:1
    });
  },

};

