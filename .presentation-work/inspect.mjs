import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const src='C:/Users/carlo/Documents/Propuestas/Propuesta_Final/nuevos/Informe_Estrategico_Invierte360_Diseño_Final.pptx'; const p=await PresentationFile.importPptx(await FileBlob.load(src));
const x=await p.inspect({kind:'slide,textbox',maxChars:200000}); await (await import('node:fs/promises')).writeFile('deck.ndjson',x.ndjson);
