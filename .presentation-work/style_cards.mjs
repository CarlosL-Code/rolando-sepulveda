import fs from 'node:fs/promises'; import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const src='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/output/pptx/Invierte360_Diagnostico_y_Propuesta_Digital_Con_Marca.pptx'; const p=await PresentationFile.importPptx(await FileBlob.load(src));
const palette=['#1D482B','#F2464E','#152348'];
for(let si=0;si<p.slides.items.length;si++){
 const slide=p.slides.items[si]; let railIndex=0;
 for(const sh of slide.shapes.items){
  if(!sh.name?.startsWith('Rounded Rectangle')) continue;
  const f=sh.frame;
  if(f.width<=12 && f.height>=60){sh.fill=palette[railIndex%palette.length];railIndex++;}
  
 }
}
p.resolve('sh/k3yl0zql').fill='#152348';
const updates=[
 ['sh/k3y5ov21','PRIORIZACIÓN','ROADMAP'],
 ['sh/76p4jqls','Qué atender primero','Fases, resultados y criterios para avanzar'],
 ['sh/s7y5sv2x','Validar','Validación técnica'],
 ['sh/na5476l8','Formulario · CTA/anchors · estados críticos','Formulario · CTA · estados | Salida: recepción probada + baseline'],
 ['sh/hsvat0fa','Recuperar contexto','Contexto del lead'],
 ['sh/upkrilwj','WhatsApp · vendedor · taxonomías','WhatsApp · vendedor · catálogo | Salida: lead con contexto'],
 ['sh/it4rm5wv','Filtros · ficha · calculadora · confianza','Filtros · ficha · calculadora | Salida: recorridos aprobados'],
 ['sh/1kjyt83e','Eventos · UTMs · recepción real','GA4/GTM · UTMs · seguimiento | Salida: origen ligado al lead'],
 ['sh/ehsfyt43','Escalar','Escalar con evidencia'],
 ['sh/p8jyx83q','SEO técnico y campañas después de validar','SEO · campañas | Avanzar con trazabilidad y calidad del lead'],
 ['sh/qh4nupg7','Orden recomendado para validación e implementación posterior.','Fases, acciones, resultados y condiciones para avanzar.']
];
for(const [id,oldText,newText] of updates) p.resolve(id).text.replace(oldText,newText);
// Give the execution roadmap the stronger, high-contrast card treatment from the visual references.
const roadmap=p.slides.items[14];
p.resolve('sh/76p4jqls').text.replace('Secuencia de implementación','Roadmap de ejecución');
const rowIds=['sh/65gnqlk7','sh/m9c3e1kn','sh/vqdsrqx4','sh/judsvqxg','sh/gjax03m9'];
const rowColors=['#1D482B','#152348','#F2464E','#152348','#1D482B'];
for(let i=0;i<rowIds.length;i++) p.resolve(rowIds[i]).fill=rowColors[i];
for(const id of ['sh/t87ml0ji','sh/s7y5sv2x','sh/na5476l8','sh/wrm9kvep','sh/hsvat0fa','sh/upkrilwj','sh/4vm9ovel','sh/5wvax0f6','sh/it4rm5wv','sh/0z29cbyh','sh/l0bqlgf2','sh/1kjyt83e','sh/fi1grylo','sh/ehsfyt43','sh/p8jyx83q']){
 const box=p.resolve(id); box.text.style={typeface:'Arial',fontSize:id.includes('na547')||id.includes('upkr')||id.includes('it4r')||id.includes('1kj')||id.includes('p8jy')?14:17,bold:true,color:'#FFFFFF',autoFit:'shrinkText'};
}
const note=p.slides.items[14].shapes.add({geometry:'textbox',position:{left:72,top:617,width:1120,height:35},fill:'none',line:{fill:'none',width:0}});
note.text='Dependencia: iniciar SEO y campañas cuando la medición confirme origen, recepción y calidad del lead.';
note.text.style={typeface:'Arial',fontSize:18,bold:true,color:'#15334A',autoFit:'none'};
const out='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs/.presentation-work/build/roadmap-cards-candidate.pptx'; await (await PresentationFile.exportPptx(p)).save(out); console.log(out);

