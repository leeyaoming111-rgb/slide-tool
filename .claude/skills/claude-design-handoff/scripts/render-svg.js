// Renders an SVG file to a PNG at its intrinsic (viewBox) size using headless Chromium,
// at 1.5x device scale to match this repo's existing component PNGs (e.g.
// components/charts-finance/football-field/football-field.png is 1440x810 for a
// 960x540 viewBox). Requires the environment's pre-installed Playwright + Chromium
// (see the note in ../SKILL.md about the require() path workaround).
// NOTE: components use font-family "Calibri, Carlito, Arial, sans-serif". Install Carlito
// first (sudo apt-get install -y fonts-crosextra-carlito) or text silently falls back to Arial.
//
// Usage: node render-svg.js <input.svg> <output.png>
const fs = require('fs');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

async function main() {
  const [, , inputSvg, outputPng] = process.argv;
  if (!inputSvg || !outputPng) {
    console.error('Usage: node render-svg.js <input.svg> <output.png>');
    process.exit(1);
  }
  const svg = fs.readFileSync(inputSvg, 'utf8');
  const viewBoxMatch = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const w = viewBoxMatch ? Math.ceil(parseFloat(viewBoxMatch[1])) : 960;
  const h = viewBoxMatch ? Math.ceil(parseFloat(viewBoxMatch[2])) : 540;

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1.5 });
  const html = `<!doctype html><html><head><style>html,body{margin:0;padding:0;background:#fff;}</style></head><body>${svg}</body></html>`;
  await page.setContent(html);
  await page.waitForTimeout(50);
  await page.screenshot({ path: outputPng, clip: { x: 0, y: 0, width: w, height: h } });
  await browser.close();
  console.log(`Rendered ${outputPng} (${w}x${h} @1.5x)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
