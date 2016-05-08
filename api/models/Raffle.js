/**
 * Raffle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    category_x_category : { model: 'category' },

    value : { type: 'string' },

    date_finish : { type: 'datetime' },

    min_user : { type: 'string' },

    max_user : { type: 'string' },

    CheckAccount_x_CheckAccount : { model: 'checkAccount' }
  }
};

