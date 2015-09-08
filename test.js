var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
 
webdriverio
    .remote(options)
    .init()
    .url('http://localhost:9090')
    .waitForVisible('.color-box')
    .then(function(visible) {
        console.log(arguments);
    })
    // .click('.color-box', function(err, res) {
    //     console.log('err', err);
    //     console.log('res', res);
    // })
    .end();