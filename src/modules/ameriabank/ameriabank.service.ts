import { Injectable, Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class AmeriabankService {
  async getDataViaPuppeteerAmeriabank(location = '') {
    try {
      const URL = `https://ameriabank.am/${location}`;
      const browser = await puppeteer.launch({
        headless: false,
      });
      const page = await browser.newPage();
      await page.goto(URL, { waitUntil: 'networkidle2' });

      await page.evaluate(() => {
        console.log('headel qwe dffi hoelldo assd fj');
      });
      browser.close();
      return page;
    } catch (error) {
      Logger.log('get data via puppeteer ameriabank function ', error);
      throw error;
    }
  }

  async getDataViaPuppeteerAmeriabankTest(pagesToScrape: number) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!pagesToScrape) {
          pagesToScrape = 1;
        }
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://ameriabank.am/');
        let currentPage = 1;
        let urls = [];
        while (currentPage <= pagesToScrape) {
          const newUrls = await page.evaluate(() => {
            const results = [];
            const items = document.querySelectorAll('wrapping-box');
            items.forEach((item) => {
              results.push({
                url: item.getAttribute('href'),
                // text: item.innerText,
              });
            });

            return results;
          });
          urls = urls.concat(newUrls);
          if (currentPage < pagesToScrape) {
            await Promise.all([
              await page.click('a.morelink'),
              await page.waitForSelector('a.storylink'),
            ]);
          }
          currentPage++;
        }

        browser.close();
        return resolve(urls);
      } catch (e) {
        return reject(e);
      }
    });
  }
}
