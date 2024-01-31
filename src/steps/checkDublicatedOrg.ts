import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('the user is on the Identity login page', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.setViewportSize({ width: 900, height: 768 });
  await page?.goto('https://stack-identity-tst.azurewebsites.net/app/usergroups');
  await page?.waitForTimeout(1000);
  await page?.setViewportSize({ width: 1516, height: 1080 });
});
When('the user enters a username', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByLabel('Email').click();
  await page?.getByLabel('Email').fill('turker.dogruer@kiongroup.com');
  await page?.waitForTimeout(1000);
});
Then('the user enters a password', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByLabel('Password', { exact: true }).click();
  await page?.getByLabel('Password', { exact: true }).fill('123Salla321');
  await page?.waitForTimeout(1000);
});
Then('the user clicks on the Sign In button', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Sign In' }).click();
  await page?.waitForTimeout(1000);
});
Then('opens a new tab', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.waitForTimeout(2000);
  await page?.getByRole('button', { name: 'New' }).click();
});
Then('selects the New Organization menu option', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('menuitem', { name: 'New Organization' }).click();
  await page?.waitForTimeout(1000);
});
Then('enters the organization name into the field', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByText('Organization Name').click();
  await page?.getByLabel('Organization Name').fill('automationtest');
  await page?.waitForTimeout(1000);
});
Then('specifies the parent organization', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByText('Parent Organization*').click();
  await page?.getByRole('option', { name: 'Default' }).locator('span').click();
  await page?.waitForTimeout(1000);
});
Then('clicks on the Done button', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Done' }).click();
  await page?.waitForTimeout(1000);
});
