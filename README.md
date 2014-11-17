DataSerializer
==============


```javascript
var Serializer = require('./index.js');

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

var model = Serializer(rules, model);

console.log('Serialized model', model); 

var collection = Serializer(rules, collection);

console.log('Serialized collection', collection); 

/*
Serialized model 
{ 
  username: 'kulakowka', 
  fullname: 'Anton Kulakov' 
}

Serialized collection 
[ 
  { 
    username: 'kulakowka', 
    fullname: 'Anton Kulakov' 
  },
  { 
    username: 'kulakowka', 
    fullname: 'Anton Kulakov' 
  } 
]
*/
```