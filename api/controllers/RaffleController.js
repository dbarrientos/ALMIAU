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
    Category.findOne({
      id: req.param('category')
    },function(err,result){
      return res.view('parts/CreacionRifa',{
        name: result.name,
        id: result.id
      });
    });
  },
  payto: function (req, res) {
    var ticket = JSON.parse(req.param('ticket'));
    Role.findOne({
      user_x_user: res.locals.user.id,
      raffle_x_raffle: req.param('id')
    },function(error, result){
      if(!result){
        Role.create({
          user_x_user: res.locals.user.id,
          raffle_x_raffle: req.param('id'),
          rol: 3
        },function(err,result){
          for(i=0;i<ticket.length;i++){
            Ticket.create({
              role_x_role: result.id,
              number: ticket[i].number,
              transaction: ticket[i].transaction

            })
          }
          return res.json({
            status:1
          });
        })
      }else{
        for(i=0;i<ticket.length;i++){
          Ticket.insert({
            role_x_role: result.id,
            number: ticket[i].number,
            transaction: ticket[i].transaction
          })
        }
        return res.json({
          status:1
        });
      }
    })

  },
  newto: function (req, res) {
    console.log(req.param("prize"));
    var prize_obj = JSON.parse(req.param("prize"));

    Raffle.create({
      value: req.param('value'),
      date_finish: req.param('date_finish'),
      min_user: req.param('min_user'),
      max_user: req.param('max_user'),
      CheckAccount_x_CheckAccount: req.param('CheckAccount_x_CheckAccount')
    },function(error, result){
      console.log(prize_obj[0].file);
      for(i=0;i < prize_obj.length;i++){
        var file = prize_obj[i].file;
        Prize.create({
          raffle_x_raffle: result.id,
          photo: prize_obj[i].photo,
          name: prize_obj[i].name,
          order: prize_obj[i].order
        },function(error, result){
          console.log(result)

          Document.create({
            file: file,
            prize_x_prize: result.id
          }, function(error, result){
            console.log(result);
          })

        })
      }
      console.log(res.locals.user);
      Role.create({

        user_x_user: res.locals.user.id,
        raffle_x_raffle: result.id,
        rol: 2
      })

    })
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

