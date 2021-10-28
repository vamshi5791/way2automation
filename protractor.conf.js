
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
     directConnect:true,
  
     getPageTimeout:60000,
     allScriptsTimeout:50000,
     framework: 'custom',
     frameworkPath: require.resolve('protractor-cucumber-framework'),
     capabilities:{
       "browserName":"chrome"
       
     },
    
  //   plugins: [{
  //     package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
  //     options:{
  //       automaticallyGenerateReport: true,
  //       removeExistingJsonReportFile: true
  //     }
  // }],
   
  
    //  specs: ['features/stepDefinitions/login.feature'],
      specs: ['features/pages/features/login.feature'],
      cucumberOpts: {
        // require step definitions
       // tags:false,
       format: 'json:cucumber_report.json',
      
        require: [
         'features/pages/features/stepdefinitions.js/stepdefinition.js',
          'timeout.js' 
        ]
      },
     
    };
    