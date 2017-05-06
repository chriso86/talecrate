import { StoryWorldPage } from './app.po';

describe('story-world App', () => {
  let page: StoryWorldPage;

  beforeEach(() => {
    page = new StoryWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
