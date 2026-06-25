const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1080, height: 1350 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const htmlPath = 'file:///home/z/my-project/scripts/instagram-poster.html';
  await page.goto(htmlPath, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1000);

  // Screenshot the poster element
  const element = await page.$('.poster');
  await element.screenshot({
    path: '/home/z/my-project/download/village-eyecare-instagram-poster.png',
    type: 'png',
  });

  console.log('PNG saved: /home/z/my-project/download/village-eyecare-instagram-poster.png');
  await browser.close();
})();
