import { NGLPage } from './app.po';

describe('ngl App', () => {
  let page: NGLPage;

  beforeEach(() => {
    page = new NGLPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
