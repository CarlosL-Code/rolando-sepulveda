import zipfile,re
p=r'C:\Users\carlo\Documents\Propuestas\Propuesta_Final\nuevos\Informe_Estrategico_Invierte360_Diseño_Final.pptx'
z=zipfile.ZipFile(p)
x=z.read('ppt/presentation.xml').decode()
print(re.search(r'<p:presentation[^>]*',x).group(0))
s=''.join(z.read(n).decode(errors='ignore') for n in z.namelist() if n.endswith('.xml'))
print(sorted(set(re.findall(r'typeface="([^"]+)',s))))
