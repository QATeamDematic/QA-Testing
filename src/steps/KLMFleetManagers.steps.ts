import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
Given('User navigates to the KLM Designer page', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('http://localhost:5000/');
});
When('User click on the load file button', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Load from file' }).click();
  //await page?.getByRole('file-input').sendKeys('/path/to/file.json');
});

Then('The file is loaded into the application', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Build' }).click();
});

Then('User click on the Fleet Managers', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByText('Fleet Managers').click();
});
