import { RamsayappPage } from './app.po';

describe('ramsayapp App', () => {
  let page: RamsayappPage;

  beforeEach(() => {
    page = new RamsayappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
