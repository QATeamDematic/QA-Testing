import { ICustomWorld } from '../support/custom-world';

import { When, Then } from '@cucumber/cucumber';

When('user click on User Management', async function (this: ICustomWorld) {
  const { page } = this;

  await page?.getByRole('link', { name: 'User Management' }).click();

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByRole('link', { name: 'Create new user' })

    .click();
});

When('user creates a new user', async function (this: ICustomWorld) {
  const { page } = this;

  await page?.frameLocator('iframe[title="userManagement"]').getByLabel('Email').click();

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Email')

    .fill('test@test.com');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .click();

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .press('CapsLock');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .fill('A');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .press('CapsLock');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .fill('Atlanta10!');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Password', { exact: true })

    .press('Tab');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Confirm password')

    .press('CapsLock');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Confirm password')

    .fill('A');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Confirm password')

    .press('CapsLock');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByLabel('Confirm password')

    .fill('Atlanta10!');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByRole('listbox', { name: 'UserGroups' })

    .selectOption('1');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByRole('listbox', { name: 'Roles' })

    .selectOption('459a0706-56d0-4e1c-9410-1ac3752a3f6d');

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByRole('button', { name: 'Create' })

    .click();
});

Then('user see the new user', async function (this: ICustomWorld) {
  const { page } = this;

  await page

    ?.frameLocator('iframe[title="userManagement"]')

    .getByRole('cell', { name: 'test@test.com' })

    .click();
});
