const {test, expect} = require('@playwright/test');


test('Login Test',async ({browser})=>
{
   //chrome -plugins/cookies
   const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("http://127.0.0.1/ui/admin2/index.html#/");
    console.log(await page.title());
    await expect(page).toHaveTitle("FileCloud | Admin");

    await page.locator("#userid").fill("admins");
    await page.locator("[type='password']").fill("password");
    await page.locator("[type='submit']").click();
    await expect(page.locator(".content-space")).toContainText(['Invalid Username or Password.']);

});