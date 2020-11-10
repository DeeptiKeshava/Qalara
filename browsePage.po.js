
'use strict'; 
var env = readENV('../Env.json');
var util = require('../Utilities/util.js');

module.exports = { 
		
    BrowseLocators: {  
    	shopBtn : element(by.xpath('//*[text() [contains(. , "SHOP")]]')),
    	homefurnishingBtn : element(by.xpath('//*[text() [contains(. , "Home Furnishing")]]')),
    	profileIcon : element(by.className('anticon user-profile-icon qa-cursor')),
    	signUpBtn : element(by.xpath('//*[text()[contains(.,"Sign up")]]')),
    },  
      
    
    go: function() {	//Naviagte to Qalara URL
    	browser.ignoreSynchronization = true;
    	browser.waitForAngular(false);
    	browser.get(readURL("../"+env+".json"));     
    },  
      
    signUp: function() {	//Sign up to Qalara  
        
    	var BrowseLoc = this.BrowseLocators;  
         
    	BrowseLoc.shopBtn.click();
    	util.fluentWaitForClickable(BrowseLoc.shopBtn);
    	BrowseLoc.homefurnishingBtn.click();
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

