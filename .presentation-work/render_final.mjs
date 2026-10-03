import fs from 'node:fs/promises'; import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const src='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/output/pptx/Invierte360_Diagnostico_y_Propuesta_Digital_Final.pptx';
const out='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/.presentation-work/review-final-roadmap'; await fs.mkdir(out,{recursive:true}); const p=await PresentationFile.importPptx(await FileBlob.load(src));
for(let i=0;i<p.slides.items.length;i++){const b=await p.slides.items[i].export({format:'png',scale:.7}); await fs.writeFile(`${out}/slide-${i+1}.png`,new Uint8Array(await b.arrayBuffer()));}
