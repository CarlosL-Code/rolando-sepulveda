import fs from 'node:fs/promises';
import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const src='C:/Users/carlo/Documents/Propuestas/Propuesta_Final/nuevos/Informe_Estrategico_Invierte360_Diseño_Final.pptx';
const p=await PresentationFile.importPptx(await FileBlob.load(src));
const edits=[
['sh/7qp4be9c','INFORME ESTRATÉGICO','PROPUESTA DE MEJORA DIGITAL'],
['sh/65g3298r','Diagnóstico visual,\nfuncional y de conversión','Diagnóstico y plan de mejora\npara convertir visitas en contactos'],
['sh/sryl4zqx','Hallazgos · evidencia · impacto · recomendaciones','Diagnóstico · soluciones · prioridades · propuesta'],
['sh/rm1k7yt4','La oportunidad no está solo en atraer tráfico','La conversión requiere continuidad en cada paso'],
['sh/z2tcnm5s','Las piezas existen; el contexto puede perderse entre ellas','Las interrupciones aparecen entre interés y seguimiento'],
['sh/76p4jqls','Qué atender primero','Secuencia de implementación'],
['sh/dsri9sr6','Next.js + CMS/BD','Next.js + CMS y base de datos'],
['sh/rm5czq50','Eventos recomendados - no auditados internamente','Eventos recomendados, pendientes de validación interna'],
['sh/vitozqt8','Arquitectura: decidir con evidencia','La plataforma se define tras la auditoría técnica'],
['sh/rq50vmp8','ENTREGABLES','PROPUESTA'],
['sh/4nu1krqh','Paquete de Diagnóstico y Estrategia Digital','Diagnóstico y Estrategia Digital'],
['sh/0f2lon6p','CIERRE','SIGUIENTE PASO'],
['sh/ra9kryp8','No se trata de hacer una web más bonita.','La prioridad es convertir el interés en contactos medibles'],
['sh/qp03yt8n','Se trata de que el recorrido pueda responder:','La propuesta mejora seis momentos del recorrido:'],
['sh/8rqxw3q5','Primero recuperar y medir. Después escalar.','Aprobar el paquete presentado · $100.000 CLP']
];
for(const [id,oldText,newText] of edits){const x=p.resolve(id);x.text.replace(oldText,newText);}
const coverTitle=p.resolve('sh/65g3298r'); coverTitle.text.style={typeface:'Arial',fontSize:40,bold:true,color:'#15334A',autoFit:'none'};
const proposalTitle=p.resolve('sh/4nu1krqh'); proposalTitle.text.style={typeface:'Arial',fontSize:38,bold:true,color:'#15334A',autoFit:'none'};
const closingTitle=p.resolve('sh/ra9kryp8'); closingTitle.text.style={typeface:'Arial',fontSize:38,bold:true,color:'#15334A',autoFit:'none'};
const im=p.resolve('im/294fqhsb'); im.crop={left:0,top:0,right:0,bottom:0}; im.frame={left:70,top:198,width:600,height:390};
const out='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/.presentation-work/build/candidate.pptx';
await (await PresentationFile.exportPptx(p)).save(out);
console.log('saved',out);






