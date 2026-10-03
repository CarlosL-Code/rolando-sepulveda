import fs from 'node:fs/promises'; import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const p=await PresentationFile.importPptx(await FileBlob.load('C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/output/pptx/Invierte360_Diagnostico_y_Propuesta_Digital_Final.pptx'));
const b=await p.slides.items[12].export({format:'png',scale:1}); await fs.writeFile('seller_final.png',new Uint8Array(await b.arrayBuffer()));
console.log('slide_count',p.slides.items.length);
