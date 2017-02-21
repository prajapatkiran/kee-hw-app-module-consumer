import { KeeHwAppModuleConsumerPage } from './app.po';

describe('kee-hw-app-module-consumer App', function() {
  let page: KeeHwAppModuleConsumerPage;

  beforeEach(() => {
    page = new KeeHwAppModuleConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
