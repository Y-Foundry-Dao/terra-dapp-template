import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('localhost:3000');
  const submitButton = page.locator('#submitName');
  await expect(submitButton).toHaveText('Submit');
});
