import { test, expect } from '@playwright/test';

test('GitHub- change user profile name', async ({ page }) => {
  //  test.setTimeout(120000);

  await page.goto('https://github.com/');

  await expect(page).toHaveTitle('GitHub: Let’s build from here · GitHub');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#login_field').fill('');

  await page.locator('#password').fill('');

  await page.click('input[value="Sign in"]');

  await page.click('span.Button-label > img.avatar');

  await page.waitForTimeout(2000);

  await page.getByText('Your profile').click();

  await page.getByText('Edit profile').click();

  await page.waitForTimeout(2000);

  await page.fill('#user_profile_name', ''); // give new name inside ''

  await page.click('span.Button-label:has-text("Save")');

  await page.close();
});
