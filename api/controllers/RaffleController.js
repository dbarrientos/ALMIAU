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
    return res.view('parts/confirm',{
      link: "/raffle/pay/"+req.param("id")
    });
  },

  pay: function (req, res) {
    Raffle.findOne({
      id: req.param("id")
    },function(err,data){
      return res.view('parts/pay',{
        rifa: data
      });
    })
  },
  new: function (req, res) {
    Category.findOne({
      id: req.param('category')
    },function(err,result){
      if(result){
        Bank.find(function(err,resultbank){
          return res.view('parts/CreacionRifa',{
            bancos: resultbank,
            category: result
          });
        });
      }
      else
      {
        return res.view('parts/home');
      }
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
    var premios = JSON.parse(req.param('premio'));
    CheckAccount.create({
      bank_x_bank : req.param('banco'),
      type : req.param('tcuenta'),
      rut : req.param('rut'),
      titular_name : req.param('titularcuenta'),
      user_x_user : res.locals.user
    }, function(err,result){
        Raffle.create({
          value: req.param('value'),
          date_finish: req.param('date'),
          min_user: req.param('min'),
          max_user: req.param('max'),
          CheckAccount_x_CheckAccount: result.id
        },function(error, result2){
            var k = 0;
            for(i=0;i < premios.length;i++){
              Prize.create({
                 raffle_x_raffle: result2.id,
                 photo: premios[i].imagen,
                 name: premios[i].premio
              },function(error3, result3){
                  if(++k >= premios.length){
                    Role.create({
                      user_x_user: res.locals.user.id,
                      raffle_x_raffle: result2.id,
                      rol: 2
                    },function(err,result4){
                       return res.json({
                          link: '/raffle/confirm/'+result2.id,
                          status:1
                       });
                    });
                  }
              });
            }
        });
    });


    // categoria:categoria,
    //         name: name,
    //         lastname: lastname,
    //         descripcion: descripcion,
    //         value: value,
    //         min: min,
    //         max: max,
    //         date: date,
    //         premio: premio,
    //         ncuenta:ncuenta,
    //         tcuenta:tcuenta,
    //         banco: banco,
    //         titularcuenta: titularcuenta,
    //         rut:rut


    // Raffle.create({
    //   value: req.param('value'),
    //   date_finish: req.param('date'),
    //   min_user: req.param('min'),
    //   max_user: req.param('max'),
    //   CheckAccount_x_CheckAccount: req.param('CheckAccount_x_CheckAccount')
    // },function(error, result){
    //   console.log(prize_obj[0].file);
    //   for(i=0;i < prize_obj.length;i++){
    //     var file = prize_obj[i].file;
    //     Prize.create({
    //       raffle_x_raffle: result.id,
    //       photo: prize_obj[i].photo,
    //       name: prize_obj[i].name,
    //       order: prize_obj[i].order
    //     },function(error, result){
    //       console.log(result)

    //       Document.create({
    //         file: file,
    //         prize_x_prize: result.id
    //       }, function(error, result){
    //         console.log(result);
    //       })

    //     })
    //   }
    //   console.log(res.locals.user);
    //   

    // })
    // return res.json({
    //   status:1
    // });
  },


  index: function(req,res){
    return res.json({
      status:1
    });
  },

};

