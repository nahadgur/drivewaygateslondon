from pathlib import Path
import json,re,shutil,posixpath
from urllib.parse import urlsplit,urlunsplit,unquote
from html import unescape
import argparse
parser=argparse.ArgumentParser(description='Import the approved static showcase into the production template layer.')
parser.add_argument('source', type=Path, help='Directory containing showcase index.html and assets')
src=parser.parse_args().source.resolve();dst=Path(__file__).resolve().parents[1]
comp=dst/'components/showcase';comp.mkdir(parents=True,exist_ok=True)
(dst/'data/showcase').mkdir(exist_ok=True)
(dst/'public/showcase').mkdir(exist_ok=True)
shutil.copytree(src/'assets',dst/'public/showcase/assets',dirs_exist_ok=True)
css=['styles.css','subpages.css','navigation.css','hero-backgrounds.css','brand-footer.css','responsive.css']
for name in css:
 text=(src/name).read_text(encoding='utf8').replace("url('assets/","url('/showcase/assets/")
 (comp/name).write_text(text,encoding='utf8')
def convert(html,route):
 def url(value):
  value=unescape(value);p=urlsplit(value)
  if p.scheme in ['tel','mailto','data'] or p.netloc and p.netloc not in ['www.drivewaygateslondon.co.uk','drivewaygateslondon.co.uk']:return value
  if not p.path:return value
  absolute=posixpath.normpath(posixpath.join(route,p.path)) if not p.path.startswith('/') else p.path
  if '/assets/' in absolute:absolute='/showcase/assets/'+absolute.split('/assets/',1)[1]
  elif absolute.endswith('/index.html'):absolute=absolute[:-10]
  elif p.path.endswith('/') and not absolute.endswith('/'):absolute+='/'
  return urlunsplit(('', '',absolute,p.query,p.fragment))
 html=re.sub(r'\b(href|src|srcset)="([^"]+)"',lambda m:m[1]+'="'+url(m[2]).replace('&','&amp;')+'"',html)
 html=html.replace('Design preview. Images illustrate gate styles.','Images illustrate gate styles.')
 html=re.sub(r'<script\b.*?</script>','',html,flags=re.S)
 return html
pages={};shared={}
for f in sorted(src.rglob('index.html')):
 route='/'+f.parent.relative_to(src).as_posix().strip('./')+'/'
 if route=='//':route='/'
 html=convert(f.read_text(encoding='utf8'),route)
 body=re.search(r'<body([^>]*)>(.*)</body>',html,re.S)
 cls=re.search(r'class="([^"]+)"',body[1])
 main=re.search(r'<main[^>]*>(.*?)</main>',body[2],re.S)[1]
 pages[route]={'className':cls[1] if cls else '', 'main':main}
 if route=='/':
  shared['header']=re.search(r'<a class="skip-link".*?</dialog>',body[2],re.S)[0]
  shared['footerHome']=re.search(r'<footer.*?</footer>',body[2],re.S)[0]
  shared['footerHome']=re.sub(r'<button\b[^>]*\bid="replay-intro"[^>]*>.*?</button>', '', shared['footerHome'], flags=re.S)
  shared['enquiry']=re.search(r'<div class="mobile-enquiry-bar".*?</div>',body[2],re.S)[0]
  shared['entrance']=re.search(r'(<div id="entrance".*?)(?=<div id="site-shell")',body[2],re.S)
  if shared['entrance'] is None:
   shared['entrance']=body[2].split('<div id="site-shell"')[0]
  else:shared['entrance']=shared['entrance'][1]
  shared['entrance']=re.sub(r'<a class="skip-link".*?</a>','',shared['entrance'],flags=re.S)
 if route=='/contact/':
  shared['footer']=re.search(r'<footer.*?</footer>',body[2],re.S)[0]
  pages[route]['hero']=re.search(r'<header class="contact-heading">.*?</header>',main,re.S)[0]
  pages[route]['methods']=re.search(r'<section class="contact-intro">(.*?)</section>',main,re.S)[1]
  after=main[main.index('<section class="sub-section'):]
  pages[route]['after']=after.rsplit('</div>',1)[0]
  del pages[route]['main']
(dst/'data/showcase/pages.json').write_text(json.dumps(pages,ensure_ascii=False,indent=2),encoding='utf8')
(dst/'data/showcase/shared.json').write_text(json.dumps(shared,ensure_ascii=False,indent=2),encoding='utf8')
