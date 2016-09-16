import { InventoryMonitoringSystemPage } from './app.po';

describe('inventory-monitoring-system App', function() {
  let page: InventoryMonitoringSystemPage;

  beforeEach(() => {
    page = new InventoryMonitoringSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
