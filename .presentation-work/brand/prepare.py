from PIL import Image
from pathlib import Path
items=[(Path(r'C:\Users\carlo\Downloads\logo.webp'),Path(r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\.presentation-work\brand\invierte360.png')),(Path(r'C:\Users\carlo\Documents\PROYECTOS\MI LOGO\ChatGPT Image 16 ago 2026, 17_30_14 (3).png'),Path(r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\.presentation-work\brand\carlos_lozano.png'))]
for src,out in items:
 im=Image.open(src).convert('RGBA'); bbox=im.getchannel('A').getbbox(); crop=im.crop(bbox); crop.save(out); print(out.name, 'source', im.size,'alpha_bbox',bbox,'trim',crop.size)
