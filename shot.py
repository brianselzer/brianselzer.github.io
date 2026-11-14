import sys
from playwright.sync_api import sync_playwright
out=sys.argv[1]
with sync_playwright() as p:
    b=p.chromium.launch()
    for w,h in [(1440,900),(768,1024),(390,844),(320,700)]:
        pg=b.new_page(viewport={'width':w,'height':h},device_scale_factor=1 if w>400 else 2)
        pg.goto('file:///home/claude/brianselzer/brianselzer.github.io/index.html');pg.wait_for_timeout(600)
        pg.screenshot(path=f'{out}/s{w}.png',full_page=True)
        print(w,pg.evaluate('document.documentElement.scrollWidth'),pg.evaluate('document.fonts.check("600 20px \\"Inter Tight\\"")'))
    b.close()
