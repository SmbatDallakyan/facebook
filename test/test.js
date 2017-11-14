var constants = require('./constants');

describe('Facebook', function () {
    it('Login', function () {
        // browser.windowHandleMaximize();
        browser.url('/');
        console.log(browser.getTitle());
        browser.setValue('#email', constants.email);
        browser.setValue('#pass', constants.password);
        browser.click(constants.submitButton);
    });
    it('Get user id', function () {
        var cookie = browser.getCookie();
        for (var i = 0; i < cookie.length; ++i) {
            if (cookie[i].name === 'c_user') {
                var uId = cookie[i].value;
                break;
            }
        }
        console.log('---------------------- USER ID = ' + uId);
    });
});