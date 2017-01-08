import { HttprequestsPage } from './app.po';

describe('httprequests App', function() {
  let page: HttprequestsPage;

  beforeEach(() => {
    page = new HttprequestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
