import sys
from playwright.sync_api import sync_playwright
out=sys.argv[1]
with sync_playwright() as p:
    b=p.chromium.launch()
    for t in 'ABC':
      for w,h,s in [(1440,900,1),(390,844,2)]:
        pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=s)
        pg.goto('file:///home/claude/brianselzer/brianselzer.github.io/index.html');
        pg.evaluate(f"document.documentElement.dataset.type='{t}';document.documentElement.classList.add('review')");pg.wait_for_timeout(700)
        pg.screenshot(path=f'{out}/{t}{w}.png',full_page=True)
        print(t,w,pg.evaluate('document.documentElement.scrollWidth'))
    b.close()
