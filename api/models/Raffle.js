/**
 * Raffle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    category_x_category : { type: 'string' },

    prize_x_prize : { type: 'string' },

    value : { type: 'string' },

    date_finish : { type: 'string' },

    min_user : { type: 'string' },

    max_user : { type: 'string' },

    CheckAccount_x_CheckAccount : { type: 'string' }
  }
};

