import { ICustomWorld } from '../support/custom-world';
import { When, Then } from '@cucumber/cucumber';
When('user click on toggle menu', async function (this: ICustomWorld) {
  const { page } = this;

  await page?.locator('a').filter({ hasText: 'Toggle menu' }).click();
});

Then('user see Dashboard', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Dashboard' }).click();
});

Then('user see Project', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Project' }).click();
});
Then('user see Deployment', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Deployment' }).click();
});
Then('user see Reports', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Reports' }).click();
});
Then('user see User Management', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'User Management' }).click();
});
Then('user see Settings', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Settings' }).click();
  await page?.locator('a').filter({ hasText: 'Toggle menu' }).click();
});
