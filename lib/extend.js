function extend(target) {
  var argLength = arguments.length,
  i,
  sourceObj
  ;
  
  if (argLength < 2 || target === null) {
    return target;
  }
  
  if (Object.assign) {
    for (i=0; i<argLength; i++) {
      Object.assign(target, arguments[i]);
    }
    
  } else {
    for (i=0; i<argLength; i++) {
      sourceObj = arguments[i];
      
      for (var key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
          target[key] = sourceObj[key];
        }
      }
    }
  }
  
  return target;
}

module.exports = extend;
