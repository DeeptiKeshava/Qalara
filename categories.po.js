
'use strict'; 
var dataFile = require('../TestData.json')
var util = require('../Utilities/util.js');

module.exports = { 
		
	commonLocators: {
		sortBy : element(by.xpath('(//*[@class="ant-select-selection-search-input"])[2]')),
		loadMore : element(by.xpath('//*[@class="load-more-button-text" and text()[contains(.,"Load More")]]')),
	},
		
	categoryLocators: {
		allCategories : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"All Categories")]]')),
		homeFurnishing : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"Home Furnishing")]]')),
		homeDecorAccessories : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"Home Décor & Accessories")]]')),
		furnitureStorage : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"Furniture & Storage")]]')),
		fashion : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"Fashion")]]')),
		kitchenDining : element(by.xpath('//*[@id="category$Menu"]/li[text()[contains(.,"Kitchen & Dining")]]')),
	},
	
	valuesFilterLocators: {
		artisanal : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Artisanal")]]')),
		ecoFriendly : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Eco friendly")]]')),
		fairTrade : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Fair trade")]]')),
		recycled : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Recycled")]]')),
		sustainable : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Sustainable")]]')),
		organic : element(by.xpath('//*[@id="key1$Menu"]/div/label/span[text()[contains(.,"Organic")]]')),
	},
	
	orderTypesFilterLocators: {
		makeToOrder : element(by.xpath('//*[@id="key2$Menu"]/div/label/span[text()[contains(.,"Make to order")]]')),
		readyToMake : element(by.xpath('//*[@id="key2$Menu"]/div/label/span[text()[contains(.,"Ready to make")]]')),
		readyToShip : element(by.xpath('//*[@id="key2$Menu"]/div/label/span[text()[contains(.,"Ready to ship")]]')),
		developToOrder : element(by.xpath('//*[@id="key2$Menu"]/div/label/span[text()[contains(.,"Develop to order")]]')),
	},
	
	productionMethodsFilterLocators: {
		handwoven : element(by.xpath('//*[@id="key4$Menu"]/div/label/span[text()[contains(.,"Hand-woven")]]')),
		blockPrinting : element(by.xpath('//*[@id="key4$Menu"]/div/label/span[text()[contains(.,"Block printing")]]')),
	},
		
    homeFurnishingSellersLocators: {  
    	
    	artAge : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"art age")]]')),
    	bhadohiCarpets : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"bhadohi carpets")]]')),
    	creativeDeHome : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"creative de home")]]')),
    	kalkatteVaali : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"kalkatte vaali")]]')),
    	rangsutra : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"rangsutra")]]')),
    	zeba : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"zeba")]]')),
    	kalaGhar : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"kala ghar")]]')),
    	skilledSamaritan : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"kala ghar")]]')),
 
    },  
    
    homeDecorAccessoriesSellerLocators: {  
    	
    	coloredRims : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"colored rims")]]')),
    	tatvaYog : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"tatva yog")]]')),
    	metalArtHandicraft : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"metal art handicraft")]]')),
    	tribalKrafts : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"tribal krafts")]]')),
    	pristineInteriors : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"pristine interiors")]]')),
    	aravali : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"aravali")]]')),
    	kutchJiChhap : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"kutch ji chhap")]]')),
    	sohamCrafts : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"soham crafts")]]')),
    	rajeshKumarJangid : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"rajesh kumar jangid")]]')),
    	boneAndHorn : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"bone and horn")]]')),
    	chhapak : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"chhapak")]]')),
    	zainaByCtok : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"zaina by ctok")]]')),
    	collectiveCraft : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"collective craft")]]')),
    	theKraftInternational : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"the kraft international")]]')),
    	kalaGhar : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"kala ghar")]]')),
    	sasha : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"sasha")]]')),
    	woodArt : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"wood art")]]')),
    	shahid : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"shahid")]]')),
    	ahadOverseas : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"ahad overseas")]]')),
    	aarkayaInternational : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"aarkaya international")]]')),
    	craftizenDesigns : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"craftizen designs")]]')),
    	skilledSamaritan : element(by.xpath('//*[@class="qa-font-butler qa-fs-16 qa-text-ellipsis qa-tc-f qa-titlecase" and text()[contains(.,"skilled samaritan")]]')),
    }, 
      
    
    
    browseCategory: function() {	//Browse Categories  
        
    	var commonLoc = this.commonLocators;
    	var categoryLoc = this.categoryLocators;
    	var homeDecorAccessoriesSellerLoc = this.homeDecorAccessoriesSellerLocators;
    	
    	categoryLoc.allCategories.click();
    	util.fluentWaitForPresence(commonLoc.loadMore);
  		util.scrollToView(commonLoc.loadMore);
       	commonLoc.loadMore.click();
       	util.scrollToView(commonLoc.sortBy);
       	commonLoc.sortBy.sendKeys("A-Z");
       	util.fluentWaitForPresence(homeDecorAccessoriesSellerLoc.aravali);
       	util.scrollToView(homeDecorAccessoriesSellerLoc.aravali);
    	homeDecorAccessoriesSellerLoc.aravali.click();
    	browser.sleep(10000);
    	var pdfElement = element(by.xpath('//*[@class="qa-tc-white qa-text-ellipsis" and text()[contains(.,"Home Decor")]]')).click();
    	util.fluentWaitForPresence(pdfElement);
    	element(by.xpath('(//*[@class="anticon"])[6]')).click();
//    	var homeFur = element(by.xpath('//*[@class="qa-font-butler qa-fs-but-22 qa-mar-btm-05"]'));
//    	expect(homeFur.getText()).toContain("Home furnishing suppliers");
    },
};


