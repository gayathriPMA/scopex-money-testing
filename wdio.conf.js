exports.config = {
    runner: 'local',
    specs: [
        // Define location for spec files here
        './test/specs/**/*.spec.js'  // Adjust this to the path where your test files are located
    ],
    exclude: [
        // List files to be excluded from testing
    ],
    maxInstances: 10,
    services: ['appium'],  // Enable the Appium service
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'RZCX10FYQMA',  // Your Android device ID
        'appium:platformVersion': '14.0',  // Android version
        'appium:automationName': 'UiAutomator2',  // Automation engine for Android
        'appium:app': 'C:/Users/91701/Downloads/scopexmobile.apk',  // Path to your APK file
        'appium:appActivity': '.MainActivity'  // Main activity of the app
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    // reporters: [
    //     'spec',
    //     ['wdio-mochawesome-reporter', {
    //         outputDir: './test/reports/mochawesome',
    //         reportFilename: 'scopex-report',
    //         overwrite: true,
    //         html: true,
    //         json: false
    //     }]
    // ],
    
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
