DataSerializer
==============
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]




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
[travis-image]: https://img.shields.io/travis/kulakowka/DataSerializer.svg?style=flat
[travis-url]: https://travis-ci.org/kulakowka/DataSerializer

[node-version-image]: https://img.shields.io/badge/node.js-%3E%3D_10.0-brightgreen.svg?style=flat
[node-version-url]: http://nodejs.org/download/

[downloads-image]: https://img.shields.io/npm/dm/dataserializer.svg?style=flat
[downloads-url]: https://www.npmjs.org/package/dataserializer
