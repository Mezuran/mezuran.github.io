import { chromium } from 'playwright';

const projects = [
  { name: 'gor-hames', url: 'https://gor-hames.vercel.app' },
  { name: 'kas-kelas', url: 'https://kas-kelas-ten.vercel.app' },
  { name: 'piring-rasa', url: 'https://piring-rasa.vercel.app' },
];

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });

  for (const project of projects) {
    console.log(`Taking screenshot of ${project.name}...`);
    const page = await context.newPage();
    
    try {
      await page.goto(project.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      
      await page.screenshot({
        path: `public/projects/${project.name}.png`,
        fullPage: false,
      });
      
      console.log(`Saved: public/projects/${project.name}.png`);
    } catch (error) {
      console.error(`Failed to screenshot ${project.name}:`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Done!');
}

takeScreenshots();
