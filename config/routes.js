/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'parts/home'},
  /* AUTH */
  'GET /login': 'AuthController.login',
  'POST /logout': 'AuthController.logout',
  'GET /register': 'AuthController.register',

  'POST /auth/local': 'AuthController.callback',
  'POST /auth/local/:action': 'AuthController.callback',

  'GET /auth/:provider': 'AuthController.provider',
  'GET /auth/:provider/callback': 'AuthController.callback',
  'GET /auth/:provider/:action': 'AuthController.callback',
  'GET /angular/:ang': 'AngularController.default',
  /* RIFAS */
  '/raffle/new/:category': 'RaffleController.new',
  '/raffle/new': 'RaffleController.newto',
  '/raffle/confirm': 'RaffleController.confirm',
  '/raffle/pay': 'RaffleController.pay',
  '/raffle': 'RaffleController.index',
  '/raffle/payto': 'RaffleController.payto',

  /* BANK */

  '/bank/create': 'BankController.create',
  '/bank/destroy': 'BankController.destroy',
  /* CATEGORY */
  '/category/create': 'CategoryController.create',
  '/category/destroy': 'CategoryController.destroy',
  /* PRIZE */
  '/prize': 'PrizeController.index',
  '/prize/create': 'PrizeController.create',
  '/prize/destroy': 'PrizeController.destroy',

  /* CHECK ACCOUNT */
  '/checkaccount': 'CheckAccountController.index',
  '/checkaccount/create': 'CheckAccountController.create',
  '/checkaccount/destroy': 'CheckAccountController.destroy',
  /* TICKET */
  '/ticket': 'TicketController.index',
  '/ticket/create': 'TicketController.create',
  '/ticket/destroy': 'TicketController.destroy',
  /* WINNER */

  '/winner': 'WinnerController.index',
  '/winner/create': 'WinnerController.create',
  '/winner/destroy': 'WinnerController.destroy',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
