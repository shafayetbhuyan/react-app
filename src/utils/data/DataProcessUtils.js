export function processRelationData(inputObj) {
    let outputObj = {};
  
    for (let key in inputObj) {
      if (key.includes('.')) {
        let keys = key.split('.');
        let tempObj = outputObj;
  
        for (let i = 0; i < keys.length; i++) {
          if (!tempObj[keys[i]]) {
            tempObj[keys[i]] = {};
          }
  
          if (i === keys.length - 1) {
            tempObj[keys[i]] = inputObj[key];
          } else {
            tempObj = tempObj[keys[i]];
          }
        }
      } else {
        outputObj[key] = inputObj[key];
      }
    }
  
    return outputObj;
  }