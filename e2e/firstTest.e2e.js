const detox = require('detox');

describe('CIdemo', () => {
    beforeAll(async () => {
        // await detox.init();
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have "Step One" section', async () => {
        await expect(element(by.text('Step One'))).toBeVisible();
    });

    it('should have "See Your Changes" section', async () => {
        await expect(element(by.text('See Your Changes'))).toBeVisible();
    });

    it('should have View', async () => {
        await expect(element(by.id('MyUniqueId123'))).toExist();
    });

    // it('should show hello screen after tap', async () => {
    //   await element(by.id('hello_button')).tap();
    //   await expect(element(by.text('Hello!!!'))).toBeVisible();
    // });

    // it('should show world screen after tap', async () => {
    //   await element(by.id('world_button')).tap();
    //   await expect(element(by.text('World!!!'))).toBeVisible();
    // });
});
