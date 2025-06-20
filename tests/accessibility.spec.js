const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.use({ headless: false, slowMo: 500 });

test.describe('text', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://demo.experience.insights.com/invitation/welcome?dialect=en-GB#token=80860deb-3f33-4ad9-b2fd-31dc5ca9322c');

    await expect (page.locator('text=Welcome')).toBeVisible();

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22a', 'wcag22aa']) // Specify the tags for WCAG 2.0 A and AA
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://demo.experience.insights.com/invitation/welcome?dialect=en-GB#token=80860deb-3f33-4ad9-b2fd-31dc5ca9322c');

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22a', 'wcag22aa']) // Specify the tags for WCAG 2.0 A and AA
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});