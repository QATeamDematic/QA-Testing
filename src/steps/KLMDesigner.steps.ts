import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
Given('user navigates to the KLM Designer page', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('http://localhost:5000/');
});
When('user click on the load file button', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Load from file' }).click();
  //await page?.getByRole('file-input').sendKeys('/path/to/file.json');
});

Then('the file is loaded into the application', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('button', { name: 'Build' }).click();
});
