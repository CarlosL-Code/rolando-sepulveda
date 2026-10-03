from pypdf import PdfReader
p=PdfReader(r'C:\Users\carlo\Documents\Propuestas\Propuesta_Final\nuevos\Informe_Diagnostico_Estrategia_Digital_Invierte360_Diseño_Final.pdf')
print('PDF pages',len(p.pages))
with open(r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\.presentation-work\report.txt','w',encoding='utf8') as f:
 for i,pg in enumerate(p.pages):
  f.write(f'--- PAGE {i+1} ---\n{pg.extract_text() or ""}\n')
