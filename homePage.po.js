
'use strict'; 
var dataFile = require('../TestData.json')
var util = require('../Utilities/util.js');

module.exports = { 
		
    homePageLocators: {  
    	
    	homeBtn : element(by.xpath('//*[@class="anticon home-icon"]')),
      	shopBtn : element(by.xpath('//*[text()[contains(.,"SHOP")]]')),
    	reqForQuote : element(by.xpath('//*[@class="send-query-button-text" and text()[contains(.,"Request for Quote")]]')),
    	inviteOnlyAccess : element(by.xpath('//*[@class="send-query-button-text" and text()[contains(.,"Invite only access >>")]]')), 
    	profileIcon : element(by.className('anticon user-profile-icon qa-cursor')),
    	signUpBtn : element(by.xpath('//*[@class="header-popup" and text()[contains(.,"Sign up")]]')),
    	signInBtn : element(by.xpath('//*[@class="header-popup" and text()[contains(.,"Sign up")]]')),
   
    },  
    
    
    homeMenuLocators: {  
    	
    	homeFurnish : element(by.linkText("Home Furnishing")),
    	homeDecor : element(by.linkText("Home Decor")),
    	homeKitchecnDining : element(by.linkText("Kitchen & Dining")),
    	homeFashionAcc : element(by.linkText("Fashion & Accessories")),
    	homeZeba : element(by.linkText("Zeba")),
    	homeBilalBagh : element(by.linkText("Bilal Bagh Print")),
    	homeAMEnterprises : element(by.linkText("AM Enterprises")),
    	homeWoodArt : element(by.linkText("Wood art")),
   
    },   
    
    go: function() {	//Naviagte to Qalara Home Page
    	browser.ignoreSynchronization = true;
    	browser.waitForAngular(false);
    	browser.get(dataFile.url);     
    },  
      
    menuClicks: function() {	//Menu clicks  
        
    	var homePageLoc = this.homePageLocators;
    	var homeMenuLoc = this.homeMenuLocators;

    	util.fluentWaitForPresence(homePageLoc.shopBtn);
    	browser.actions().mouseMove(homePageLoc.shopBtn).perform();
    	homeMenuLoc.homeFurnish.click();
    	
    	var homeFur = element(by.xpath('//*[@class="qa-font-butler qa-fs-but-22 qa-mar-btm-05"]'));
    	expect(homeFur.getText()).toContain("Home furnishing suppliers");
    },
    
};


