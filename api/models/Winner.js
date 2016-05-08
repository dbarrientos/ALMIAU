/**
 * Winner.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
    ticket_x_ticket : { model: 'ticket' },

    user_x_user : { model:'user' },

    raffle_x_raffle : { model: 'raffle' },

    prize_x_prize : { model: 'prize' }
  }
};

