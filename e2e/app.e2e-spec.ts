import { Angular2WillPage } from './app.po';

describe('angular2-will App', function() {
  let page: Angular2WillPage;

  beforeEach(() => {
    page = new Angular2WillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
