import fs from 'node:fs/promises';
import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const src='C:/Users/carlo/Documents/Propuestas/Propuesta_Final/nuevos/Informe_Estrategico_Invierte360_Diseño_Final.pptx';
const p=await PresentationFile.importPptx(await FileBlob.load(src));
for(let i=0;i<p.slides.items.length;i++){const b=await p.slides.items[i].export({format:'png',scale:.7}); await fs.writeFile(`s${i+1}.png`,new Uint8Array(await b.arrayBuffer()));}
