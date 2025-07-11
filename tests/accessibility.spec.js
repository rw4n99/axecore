const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://record-a-goose-sighting.apps.live.cloud-platform.service.justice.gov.uk/');

    const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']) // Specify the tags for WCAG 2.0 A and AA
    .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});