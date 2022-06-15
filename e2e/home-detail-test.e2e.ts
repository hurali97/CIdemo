import { expect } from 'detox';

describe('Home-Detail Screen Test', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should have "Welcome" text', async () => {
        await expect(element(by.text('Welcome to CI Demo'))).toBeVisible();
    });

    it('should have "Input Text Empty"', async () => {
        await expect(element(by.id('nameInput'))).toHaveText('');
    });

    it('should type "John Doe" in input', async () => {
        await element(by.id('nameInput')).typeText('John Doe');
    });

    it('should show detail screen after tap', async () => {
        await element(by.id('clickMe')).tap();
        await expect(element(by.text('Hi John Doe'))).toBeVisible();
    });
});
