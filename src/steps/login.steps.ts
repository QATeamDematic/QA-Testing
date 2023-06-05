import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';

Given('user navigates to KION application', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('https://deployer-qa.kion-onyx.com/project/projects');
});
When('user login to KION application with valid credentials', async function (this: ICustomWorld) {
  const { page } = this;

  await page?.getByLabel('Email').click();
  await page?.getByLabel('Email').fill('saheli.sen@kiongroup.com');
  await page?.getByRole('button', { name: 'Continue' }).click();
  await page?.getByLabel('Password').click();
  await page?.getByLabel('Password').press('CapsLock');
  await page?.getByLabel('Password').fill('F');
  await page?.getByLabel('Password').press('CapsLock');
  await page?.getByLabel('Password').fill('Falcon#35');
  await page?.getByRole('button', { name: 'Continue' }).click();
});

Then('user see the homepage', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('figure').click();
});
