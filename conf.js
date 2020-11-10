var HtmlScreenshotReporter = require('./node_modules/protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('./node_modules/jasmine-reporters');
var fs = require('./node_modules/fs-extra');
var HTMLReport = require('./node_modules/protractor-html-reporter-2');
var VideoReporter = require('./node_modules/protractor-video-reporter');
var path = require('./node_modules/path')
var baseDirectory = 'E:/Automation/AutoZipFiles/Qalara/Reports';
//Create below reports and dashboardReportDirectory folders manually
var reportsDirectory = './Reports';
var dashboardReportDirectory = reportsDirectory + '/DashboardReport';


exports.config = {
	directConnect: false, //True => This will use the selenium webdriver downloaded to project specific node_modules folder rather than from global installation folder
	highlightDelay: 2000,	// For slowing down the speed of Protractor.
	seleniumAddress: 'http://localhost:4444/wd/hub',
	allScriptsTimeout: 30000,
//	plugins: [{
//	    package: 'protractor-testability-plugin'
//	}],
	multiCapabilities: [
//	{
//		browserName: 'internet explorer',
//        version: 11,
//        nativeEvents: false,
//        unexpectedAlertBehaviour: 'accept',
//        ignoreProtectedModeSettings: true,
//        enablePersistentHover: true,
//        'disable-popup-blocking': true
//	}, 
//	{
//	    browserName: 'MicrosoftEdge'
//	 },
	{
		browserName: 'chrome',
//		'chromeOptions': {
//	      'args': ['incognito']
//	    }
	},
//	{
//		browserName: 'firefox',
//	}
	],
    
	  framework: 'jasmine',
//    specs: ['./specs/**/*.js'],
	  
	  specs : [
		    './Specs/**/homePage_spec.js'
                                  ],
		//  	'./Specs/**/homePage_spec.js',
		  //	'./Specs/**/categories_spec.js'],



	  jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
    },
    
    
    onPrepare: function () 
    {
       	browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        
        
        // XML Report generated for Dashboard
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: reportsDirectory + '/xml',
            filePrefix: 'xmlOutput'
        }));

        
        if (!fs.existsSync(dashboardReportDirectory)) {
        	fs.mkdir(dashboardReportDirectory);
        }

        //Screenshot code
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
            
            
            //To get the Result of multiple browsers in simple HTML format
            browser.getProcessedConfig().then(function(config) {
                var capabilities = config.capabilities;
                jasmine.getEnv().addReporter(
                  new HtmlScreenshotReporter({
                    savePath: dashboardReportDirectory + '/Reports/',
                    screenshotsFolder: '/Screenshots',
                    filePrefix: 'protractor-demo-tests-report_modified-' + capabilities.platform + '-' + capabilities.browserName,
                    consolidateAll: true,
                    takeScreenshotsOnlyOnFailures: true,
                  })
                );
              });
            
            
        //Video Recording code for Tests
        VideoReporter.prototype.jasmineStarted = function () {
			var self = this;
			if (self.options.singleVideo) {
				var d = new Date();
				var date = d.getFullYear().toString() + (d.getMonth()+1).toString() + d.getDate().toString();
				var time = d.getHours().toString() + d.getMinutes().toString() + d.getSeconds().toString();
				var new_date = date+time;
				var videoPath = path.join(self.options.baseDirectory, new_date+'.mpg');
				self._startScreencast(videoPath);
				if (self.options.createSubtitles) {
					self._subtitles = [];
					self._jasmineStartTime = new Date();
				}
			}
    	};

            
    	//Video Recorder FFmpeg properties
    	jasmine.getEnv().addReporter(new VideoReporter({
	    	baseDirectory: path.join(baseDirectory,'/Videos'),
	    	createSubtitles: false,
	    	saveSuccessVideos: true,
	    	singleVideo: true,
	    	ffmpegCmd: "E:/Automation/AutoZipFiles/Qalara/dependencies/ffmpeg-4.2-win64-static/bin/ffmpeg.exe",
	    	ffmpegArgs: [
    				'-f', 'gdigrab',
    				'-s', '1920x1080',
    				'-framerate', '30',
    				'-video_size', 'wsxga',
    				'-i', 'desktop',
    				'-q:v', '10',
    				]
    	}));

            
    },

    //HTML Report code here
    onComplete: function () 
    {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: dashboardReportDirectory,
                outputFilename: 'Result',
                screenshotPath: './',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
        });
    },
};
