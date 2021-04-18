const puppeteer = require('puppeteer');



(async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('https://www.poligonosapp.herokuapp.com/api/v1/poligonos');

  await page.emulatedMediaType('geojson');

  await page.json({ path: 'print.pdf' });

  await browser.close();

  const browser2 = await puppeteer.launch();
  const page2 = await browser.newPage();
  await page2.goto('https://poligonosapp.herokuapp.com/api/v1/poligonos');
  await page2.screenshot({path: 'example.png'});

  await browser2.close();
})();