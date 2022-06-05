describe('CIdemo', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have View', async () => {
        await expect(element(by.id('MyUniqueId123'))).toBeVisible();
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
