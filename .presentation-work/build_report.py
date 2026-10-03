from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image as RLImage
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas
import os

OUT=r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\output\pdf\Invierte360_Informe_Diagnostico_y_Propuesta_Roadmap.pdf'
COMPANY_LOGO=r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\.presentation-work\brand\invierte360.png'
PERSONAL_LOGO=r'C:\Users\carlo\Documents\PROYECTOS\CONTADORES\contabilidad-rs\.presentation-work\brand\carlos_lozano.png'
NAVY=colors.HexColor('#15334A'); TEAL=colors.HexColor('#1D482B'); CORAL=colors.HexColor('#F2464E'); INK=colors.HexColor('#253747'); MUTED=colors.HexColor('#607486'); PALE=colors.HexColor('#EEF3F6'); LINE=colors.HexColor('#D9E2E8'); WHITE=colors.white; AMBER=colors.HexColor('#B77B19')
font=r'C:\Windows\Fonts\Arial.ttf'; bold=r'C:\Windows\Fonts\Arialbd.ttf'
if os.path.exists(font): pdfmetrics.registerFont(TTFont('Arial',font)); BODY='Arial'
else: BODY='Helvetica'
if os.path.exists(bold): pdfmetrics.registerFont(TTFont('Arial-Bold',bold)); BOLD='Arial-Bold'
else: BOLD='Helvetica-Bold'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='CoverLabel',fontName=BOLD,fontSize=9,textColor=TEAL,leading=13,spaceAfter=10))
styles.add(ParagraphStyle(name='CoverTitle',fontName=BOLD,fontSize=29,textColor=NAVY,leading=34,spaceAfter=12))
styles.add(ParagraphStyle(name='CoverSub',fontName=BODY,fontSize=13,textColor=MUTED,leading=19))
styles.add(ParagraphStyle(name='H1x',fontName=BOLD,fontSize=21,textColor=NAVY,leading=25,spaceAfter=9))
styles.add(ParagraphStyle(name='H2x',fontName=BOLD,fontSize=13,textColor=NAVY,leading=16,spaceBefore=5,spaceAfter=5))
styles.add(ParagraphStyle(name='Bodyx',fontName=BODY,fontSize=9.3,textColor=INK,leading=13.4,spaceAfter=5))
styles.add(ParagraphStyle(name='Smallx',fontName=BODY,fontSize=8.2,textColor=INK,leading=11))
styles.add(ParagraphStyle(name='Labelx',fontName=BOLD,fontSize=7.3,textColor=TEAL,leading=9,spaceAfter=3))
styles.add(ParagraphStyle(name='HeaderWhite',fontName=BOLD,fontSize=7.3,textColor=WHITE,leading=9,spaceAfter=3))
styles.add(ParagraphStyle(name='Footerx',fontName=BODY,fontSize=7,textColor=MUTED,leading=9))
styles.add(ParagraphStyle(name='Calloutx',fontName=BOLD,fontSize=12,textColor=NAVY,leading=16))
P=lambda text,style='Bodyx': Paragraph(text,styles[style])

def header_footer(c,doc):
    if doc.page==1: return
    w,h=A4
    c.saveState(); c.setStrokeColor(TEAL); c.setLineWidth(2); c.line(17*mm,h-15*mm,w-17*mm,h-15*mm)
    c.drawImage(COMPANY_LOGO,17*mm,h-13*mm,width=8*mm,height=8*mm,mask='auto',preserveAspectRatio=True,anchor='c')
    c.setFont(BOLD,7); c.setFillColor(MUTED); c.drawString(28*mm,h-11*mm,'INVIERTE360  /  DIAGNÓSTICO Y ESTRATEGIA DIGITAL')
    c.setStrokeColor(LINE); c.setLineWidth(.5); c.line(17*mm,14*mm,w-17*mm,14*mm)
    c.setFont(BODY,7); c.drawString(17*mm,9*mm,'Confidencial · Invierte360')
    c.drawRightString(w-17*mm,9*mm,f'Informe de propuesta  ·  {doc.page}')
    c.restoreState()

def threecol(items):
    data=[[P('EVIDENCIA','HeaderWhite'),P('IMPACTO','HeaderWhite'),P('SOLUCIÓN PROPUESTA','HeaderWhite')],
          [P(items[0],'Smallx'),P(items[1],'Smallx'),P(items[2],'Smallx')]]
    t=Table(data,colWidths=[56*mm,56*mm,56*mm])
    t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),NAVY),('BACKGROUND',(0,1),(-1,1),colors.HexColor('#FAFBFC')),('BOX',(0,0),(-1,-1),.5,LINE),('INNERGRID',(0,0),(-1,-1),.4,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
    return t

def finding(n,title,evidence,impact,action):
    return [P(f'{n:02d}  {title}','H2x'),threecol([evidence,impact,action]),Spacer(1,8)]

story=[]
# cover
company_cell=Table([[RLImage(COMPANY_LOGO,width=20*mm,height=20*mm),P('INVIERTE360','H2x')]],colWidths=[24*mm,64*mm]); company_cell.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),4),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
brand_row=Table([[company_cell,RLImage(PERSONAL_LOGO,width=22*mm,height=25.25*mm)]],colWidths=[121*mm,47*mm]); brand_row.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'MIDDLE'),('ALIGN',(1,0),(1,0),'RIGHT'),('LEFTPADDING',(0,0),(-1,-1),0),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]))
story += [brand_row,Spacer(1,8*mm),P('DIAGNÓSTICO Y ESTRATEGIA DIGITAL','CoverLabel'),P('Diagnóstico y plan de mejora','CoverTitle'),P('De la experiencia pública del sitio a un recorrido de contacto medible','CoverSub'),Spacer(1,26*mm)]
cover=Table([[P('TESIS CENTRAL','Labelx')],[P('Asegurar que el interés existente llegue a un contacto real, con contexto suficiente para que el equipo pueda dar seguimiento.','Calloutx')]],colWidths=[168*mm])
cover.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),PALE),('LINEBEFORE',(0,0),(0,-1),3,TEAL),('LEFTPADDING',(0,0),(-1,-1),14),('RIGHTPADDING',(0,0),(-1,-1),14),('TOPPADDING',(0,0),(-1,-1),11),('BOTTOMPADDING',(0,0),(-1,-1),11)]))
story += [cover,Spacer(1,26*mm),P('Diagnóstico visual, funcional y de conversión','H2x'),P('Documento de respaldo del levantamiento realizado sobre la experiencia pública, sus recorridos de contacto y oportunidades de mejora.','Bodyx'),Spacer(1,40*mm),P('Paquete de diagnóstico y estrategia digital  ·  $100.000 CLP','Labelx'),PageBreak()]
# exec summary
story += [P('Síntesis ejecutiva','H1x'),P('La revisión identifica oportunidades para reducir interrupciones entre el interés del usuario, el contacto y el seguimiento comercial. La prioridad inmediata es confirmar la recepción real de formularios y preservar el contexto de cada consulta.','Bodyx'),Spacer(1,5),P('Alcance y nivel de evidencia','H2x'),P('Se revisaron páginas públicas y recorridos funcionales. No hubo acceso a WordPress Admin, hosting, SMTP, GA4/GTM ni cuentas publicitarias. Por ello, las causas internas, el rendimiento histórico y la recepción técnica quedan pendientes de validación autorizada.','Bodyx')]
levels=[[P('EVIDENCIA','HeaderWhite'),P('QUÉ SIGNIFICA','HeaderWhite')],[P('Comprobado','Smallx'),P('Prueba manual o confirmación directa durante el levantamiento.','Smallx')],[P('Público actual','Smallx'),P('Visible en el sitio durante la revisión.','Smallx')],[P('Snapshot','Smallx'),P('Hallazgo inicial que puede haber cambiado.','Smallx')],[P('Pendiente','Smallx'),P('Requiere acceso técnico o confirmación del equipo.','Smallx')]]
t=Table(levels,colWidths=[43*mm,125*mm]); t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),NAVY),('LINEBELOW',(0,0),(-1,-1),.4,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5)])); story += [t,Spacer(1,10),P('Roadmap de ejecución','H2x')]
rows=[[P('ETAPA','HeaderWhite'),P('FASE','HeaderWhite'),P('ACCIONES Y RESULTADO DE CIERRE','HeaderWhite')],
[P('P0','Smallx'),P('Validación técnica','Smallx'),P('Probar formulario, CTA y estados críticos. Cierre: recepción confirmada y línea base documentada.','Smallx')],
[P('P1','Smallx'),P('Contexto del lead','Smallx'),P('Ordenar WhatsApp, ruta de vendedor y datos del proyecto. Cierre: cada consulta llega identificada y clasificable.','Smallx')],
[P('P2','Smallx'),P('Conversión','Smallx'),P('Revisar filtros, fichas, calculadora y señales de confianza. Cierre: recorridos acordados y validados con Invierte360.','Smallx')],
[P('P3','Smallx'),P('Medición','Smallx'),P('Configurar/validar GA4, GTM, UTMs y seguimiento comercial. Cierre: origen vinculado al lead y su resultado.','Smallx')],
[P('P4','Smallx'),P('Escalamiento','Smallx'),P('Activar SEO y campañas con medición vigente. Cierre: decisión de avanzar basada en trazabilidad y calidad del lead.','Smallx')]]
t=Table(rows,colWidths=[17*mm,39*mm,112*mm]); t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),NAVY),('BACKGROUND',(0,1),(0,-1),PALE),('LINEBELOW',(0,0),(-1,-1),.4,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6)])); story += [t,Spacer(1,7),P('<b>Dependencia:</b> iniciar P4 solo después de validar P3: origen, recepción y calidad del lead.','Smallx'),PageBreak()]
# findings page 3
story += [P('Hallazgos  /  experiencia y contacto','H1x'),P('Los hallazgos describen señales observadas y una respuesta propuesta. Los puntos que dependen de sistemas internos se señalan como pendientes.','Bodyx'),Spacer(1,6)]
story += finding(1,'Home: el CTA debe terminar en una acción verificable','Se observó un CTA o ancla durante el levantamiento. Revalidar su estado actual.','Una interrupción puede perder una intención de contacto.','Asignar cada CTA a una acción y destino funcional. Medir clic y resultado.')
story += finding(2,'Filtros: hacer visible el resultado de cada acción','Catálogo y filtros respondían durante la revisión. La combinación de “Actualizar” y “Aplicar” puede sentirse repetida.','El usuario puede dudar si los criterios se aplicaron.','Definir una lógica única, confirmar cambios y mostrar resultados actualizados.')
story += finding(3,'Formulario: confirmar la recepción real','La interfaz mostró confirmación; se reportó que el mensaje no llegó al destinatario. La recepción técnica aún requiere verificación.','La confirmación visual podría no representar una consulta recibida.','Probar destinatario, SMTP, registros y recepción con un envío controlado.')
story += [P('La confirmación visual del formulario no demuestra por sí sola que el mensaje llegó al equipo.','Smallx'),PageBreak()]
# findings page 4
story += [P('Hallazgos  /  continuidad y confianza','H1x'),Spacer(1,9)]
story += finding(4,'WhatsApp: conservar el contexto del proyecto','La ficha individual puede precargar el proyecto; otros accesos entregan menos contexto.','El equipo puede recibir consultas difíciles de identificar o priorizar.','Incluir proyecto, comuna, origen y URL en el mensaje inicial.')
story += finding(5,'Calculadora: conectar la simulación con asesoría','La herramienta permite simular variables financieras; no se observó un paso estructurado hacia el contacto.','Una intención de inversión de alto valor puede terminar sin continuidad.','Ofrecer proyectos compatibles y una solicitud de asesoría con los datos relevantes.')
story += finding(6,'Confianza: respaldar los mensajes con información visible','El sitio comunica cercanía y asesoría. La evidencia disponible para sostener experiencia y método puede reforzarse.','Afirmaciones generales pueden dejar dudas antes de contactar.','Presentar equipo, experiencia y metodología con evidencia real y autorizada.')
story += [P('Las mejoras de confianza deben usar información aprobada por Invierte360.','Smallx'),PageBreak()]
# findings page 5
story += [P('Hallazgos  /  catálogo e intenciones','H1x'),Spacer(1,9)]
story += finding(7,'Ficha de proyecto: alinear estado y contenido','Se observó una posible inconsistencia entre el estado del proyecto y el texto de la ficha.','La diferencia puede afectar la confianza y la calidad de los filtros.','Mantener una fuente única de estado y un control editorial antes de publicar.')
story += finding(8,'Vendedor: separar el recorrido de venta','La intención de vender deriva al contacto genérico.','Se mezclan solicitudes de propietarios con consultas de inversionistas.','Crear una página y un formulario específicos para venta de propiedades.')
story += finding(9,'Beneficios: detallar condiciones y vigencia','Se observaron mensajes como bono pie o arriendo garantizado.','Sin condiciones claras, la oferta puede interpretarse de forma distinta a la prevista.','Indicar proyecto, vigencia y condiciones en cada beneficio.')
story += [P('Benchmark orientativo','H2x'),P('Los recorridos observados en Houm, Propital y Capitalizarme sirven para revisar cómo se conectan catálogo, datos, filtros y asesoría. La recomendación es adaptar principios de claridad al flujo actual de Invierte360.','Bodyx'),PageBreak()]
# proposal
story += [P('Propuesta y siguiente decisión','H1x'),P('El paquete ordena el diagnóstico y las prioridades para que Invierte360 pueda decidir las mejoras con evidencia y definir una implementación posterior.','Bodyx'),Spacer(1,8)]
rows=[[P('ENTREGABLE','HeaderWhite'),P('CONTENIDO','HeaderWhite')],
[P('Informe diagnóstico','Smallx'),P('Alcance, nivel de evidencia, hallazgos, impacto y recomendaciones.','Smallx')],
[P('Presentación ejecutiva','Smallx'),P('Resumen visual para revisar prioridades y acordar decisiones.','Smallx')],
[P('Roadmap','Smallx'),P('Secuencia sugerida desde las validaciones críticas hasta la medición y escalamiento.','Smallx')]]
t=Table(rows,colWidths=[48*mm,120*mm]); t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),NAVY),('LINEBELOW',(0,0),(-1,-1),.4,LINE),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),8),('RIGHTPADDING',(0,0),(-1,-1),8),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),9)])); story += [t,Spacer(1,14)]
price=Table([[P('INVERSIÓN DEL PAQUETE','Labelx')],[P('$100.000 CLP','Calloutx')]],colWidths=[168*mm]); styles['Calloutx'].textColor=CORAL; price.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),PALE),('LINEBEFORE',(0,0),(0,-1),3,CORAL),('LEFTPADDING',(0,0),(-1,-1),14),('RIGHTPADDING',(0,0),(-1,-1),14),('TOPPADDING',(0,0),(-1,-1),10),('BOTTOMPADDING',(0,0),(-1,-1),10)])); story += [price,Spacer(1,12),P('Alcance posterior','H2x'),P('La implementación técnica es una etapa independiente. Antes de recomendar migración o inversión en campañas, se requiere validar accesos, estado del formulario, analítica, hosting y costos de operación.','Bodyx'),Spacer(1,10),P('Siguiente paso','H2x'),P('Aprobar el paquete de Diagnóstico y Estrategia Digital para formalizar la revisión y acordar los accesos necesarios para la validación técnica.','Bodyx'),Spacer(1,30),P('Carlos Lozano  ·  Desarrollo web  ·  UX/UI  ·  Conversión  ·  Analítica técnica  ·  SEO técnico','Smallx')]

doc=SimpleDocTemplate(OUT,pagesize=A4,rightMargin=21*mm,leftMargin=21*mm,topMargin=23*mm,bottomMargin=21*mm,title='Invierte360 | Diagnóstico y propuesta digital',author='Carlos Lozano')
doc.build(story,onFirstPage=header_footer,onLaterPages=header_footer)
print(OUT)
