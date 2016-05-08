/**
 * Prize.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    photo : { type: 'string' },

    order : { type: 'string' },

    raffle_x_raffle : { model: 'raffle' },
  }
};

