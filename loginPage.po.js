
'use strict'; 
var env = readENV('../Env.json');
var util = require('../Utilities/util.js');

module.exports = { 
		
    signUpLocators: {  
    	profileIcon : element(by.className('anticon user-profile-icon qa-cursor')),
    	signUpBtn : element(by.xpath('//*[text()[contains(.,"Sign up")]]')),
    },  
      
    
    go: function() {	//Naviagte to Qalara URL
    	browser.ignoreSynchronization = true;
    	browser.waitForAngular(false);
    	browser.get(readURL("../"+env+".json"));     
    },  
      
    signUp: function() {	//Sign up to Qalara  
        
    	var signUpLoc = this.signUpLocators;  
         
    	signUpLoc.profileIcon.click();
    	util.fluentWaitForClickable(signUpLoc.signUpBtn);
    	signUpLoc.signUpBtn.click();
    	browser.sleep(5000);
    },
};

function readENV(filePath){
	 var test = require(filePath);
	 var val= test.env;
	 return val;
}

function readURL(filePath){
	 var test = require(filePath);
	 var val= test.url;
	 return val;
}

