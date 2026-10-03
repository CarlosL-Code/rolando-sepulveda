import fs from 'node:fs/promises'; import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const p=await PresentationFile.importPptx(await FileBlob.load('C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/output/pptx/Invierte360_Diagnostico_y_Propuesta_Digital.pptx'));
console.log('slides',p.slides.items.length);
for(let i=0;i<p.slides.items.length;i++){const b=await p.slides.items[i].export({format:'png',scale:.7}); await fs.writeFile(`ppt-${i+1}.png`,new Uint8Array(await b.arrayBuffer()));}
