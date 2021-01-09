const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://poligonosapp.herokuapp.com/');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();