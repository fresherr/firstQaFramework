import {expect} from 'chai';
import BasicAuthPage from 'src/pages/BasicAuthPage';

describe('Basic auth', () => {
    it('works if username and password are passed in the url', () => {
        browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');
        browser.call(()=>puppeteer.pages())[0];
        expect(BasicAuthPage.message).to.eq('Congratulations! You must have the proper credentials.');
    });
});
