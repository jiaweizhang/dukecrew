import { DukecrewPage } from './app.po';

describe('dukecrew App', function() {
  let page: DukecrewPage;

  beforeEach(() => {
    page = new DukecrewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
