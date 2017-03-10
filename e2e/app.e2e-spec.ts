import { Angular2ExplorePage } from './app.po';

describe('angular2-explore App', () => {
  let page: Angular2ExplorePage;

  beforeEach(() => {
    page = new Angular2ExplorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
