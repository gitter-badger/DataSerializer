DataSerializer
==============


```javascript
var model = {
  username: 'kulakowka',
  firstname: 'Anton',
  lastname: 'Kulakov',
  password: 'qwerty'
}

var rules = {
  'username': true,
  'fullname': function() {
      return this.firstname + ' ' + this.lastname;    
  }
}

var result = Serializer(rules, model);

console.log('Serialized data', result); 

// Serialized data Object {username: "kulakowka", fullname: "Anton Kulakov"} 


```