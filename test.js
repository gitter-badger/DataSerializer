var should = require("should");

var Serializer = require('./index');

var model = {
  username: 'kulakowka',
  firstname: 'Anton',
  lastname: 'Kulakov',
  password: 'qwerty'
}

var collection = [model, model];

var rules = {
  'username': true,
  'fullname': function() {
      return this.firstname + ' ' + this.lastname;    
  }
}

var Model = Serializer(rules, model);

var Collection = Serializer(rules, collection);

describe('Serializer', function(){
  it('Serializer return true data', function(){

    Model.should.have.property('username', 'kulakowka');
    Model.should.have.property('fullname', 'Anton Kulakov');

    Collection.should.be.instanceof(Array).and.have.lengthOf(2);
    Collection.map(function(user){
      user.should.have.property('username', 'kulakowka');
      user.should.have.property('fullname', 'Anton Kulakov');
    });

  })
})
