DataSerializer
==============
[![NPM Version][npm-image]][npm-url]


```javascript
var Serializer = require('dataserializer');

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

[npm-image]: https://img.shields.io/npm/v/dataserializer.svg?style=flat
[npm-url]: https://www.npmjs.org/package/dataserializer
