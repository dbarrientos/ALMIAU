var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    name      : { type: 'string' },
    lastname  : { type: 'string' },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    type: { type: 'integer'} //0:USUARIO ,1:ADMIN
  }
};

module.exports = User;
