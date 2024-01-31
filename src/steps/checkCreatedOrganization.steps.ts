import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('user is on the Identity login page', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.setViewportSize({ width: 900, height: 768 });
  await page?.goto('https://stack-identity-tst.azurewebsites.net/app/usergroups');
  await page?.waitForTimeout(3000);
  await page?.setViewportSize({ width: 1516, height: 1080 });
});
When('user enters a username', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByLabel('Email').click();
  await page?.getByLabel('Email').fill('turker.dogruer@kiongroup.com');
  await page?.waitForTimeout(3000);
});
Then('user enters a password', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByLabel('Password', { exact: true }).click();
  await page?.getByLabel('Password', { exact: true }).fill('123Salla321');
  await page?.waitForTimeout(3000);
});
Then('user clicks on the Sign In button', { timeout: 3000 }, async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Sign In' }).click();
  await page?.waitForTimeout(3000);
});
Then('click on the organization tab', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Organizations' }).click();
  await page?.evaluate(() => {
    window.scrollBy(0, 300);
  });
  await page?.waitForTimeout(3000);
});
