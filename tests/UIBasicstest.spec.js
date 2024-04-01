const {test, expect} = require('@playwright/test');


test('Login Test',async ({browser})=>
{
   //chrome -plugins/cookies
   const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://127.0.0.1/ui/admin2/index.html#/");
    console.log(await page.title());
    await expect(page).toHaveTitle("FileCloud | Admin");


});

test.only('Login Test_direct_page',async ({page})=>
{
   
    await page.goto("https://dogfooding.filecloudlabs.com/ui/admin2/index.html#/");
    console.log(await page.title());

    
});