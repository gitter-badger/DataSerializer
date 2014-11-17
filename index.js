module.exports = function Serializer(rules, data){
  
  if( Object.prototype.toString.call( data ) === '[object Array]' ){
    return data.map(function(item){ 
      return serializeData(rules, item);
    });
  }else if(data === Object(data)){
    return serializeData(rules, data);
  }else{
    return null;
  }

}

var serializeData = function(rules, model){
  
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

