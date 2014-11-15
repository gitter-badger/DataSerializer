module.exports = function Serializer(rules, model){
  var resultObj = {};
  model = model || {};
  
  for(var key in rules) { 
    if (rules.hasOwnProperty(key)) {
      if(rules[key] === true){
        resultObj[key] = model[key];
      }
      if(typeof rules[key] === 'function'){
        resultObj[key] = rules[key].call(model); 
      }          
    }
  }   
  return resultObj;
}
