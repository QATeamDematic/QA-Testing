
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then, And } from cucumber;




Given('user on the login page of Deployer', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.goto('https://deployer-qa.kion-onyx.com');
});
When(
  'user login to Deployer application with valid credentials',
  async function (this: ICustomWorld) {
    const { page } = this;
  },
);
Then('user click on Deployment', async function (this: ICustomWorld) {
  const { page } = this;
  await page?.getByRole('link', { name: 'Deployment' }).click();
});
And ('user click on an available site', async function (this: ICustomWorld){
  const { page } = this;
  await page?.getByRole('cell', { name: 'Dior' }).click();
});
Then ('click on Software button', async function (this: ICustomWorld){
  const { page } = this;
  await page?.getByTestId('manage-software').click();
});
Then ('click on the select a view dropdown', async function (this: ICustomWorld){
  const { page } = this;
  await page?.getByRole('combobox', { name: 'Select a view Available' }).locator('div').nth(3).click();
});
And ('select History option from the select a view dropdown', async function (this: ICustomWorld){
  const { page } = this;
  await page?.getByText('History').click();
});
Then ('user click on view logs', async function (this: ICustomWorld){
  const { page } = this;
  await page?.getByText('View Logs').click();
});
Then ('user can download the logs in .txt format by clicking on Export button', async function (this: ICustomWorld){
  const { page } = this;
  const downloadPromise = page?.waitForEvent('download');
  await page?.getByRole('button', { name: 'Export' }).click();
  const download = await downloadPromise;
});