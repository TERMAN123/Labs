var DetectLanguage = require('detectlanguage');

var detectlanguage = new DetectLanguage('9ade33b0449ee865e08d7cdc3482f213');

var text = "全球";

detectlanguage.detectCode(text).then(function(result) {
    console.log(JSON.stringify(result));
  });