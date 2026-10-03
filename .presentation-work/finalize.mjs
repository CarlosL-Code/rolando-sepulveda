import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {FileBlob,PresentationFile} from '@oai/artifact-tool';
const SKILL_DIR='C:/Users/carlo/.codex/plugins/cache/openai-primary-runtime/presentations/26.905.11957/skills/presentations';
const workspaceDir='C:/Users/carlo/Documents/PROYECTOS/CONTADORES/contabilidad-rs';
const candidatePath=workspaceDir+'/.presentation-work/build/roadmap-cards-candidate.pptx';
const FINAL_PPTX=workspaceDir+'/output/pptx/Invierte360_Diagnostico_y_Propuesta_Digital_Final.pptx';
const RUNTIME_PYTHON='C:/Users/carlo/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe';
const {finalizePresentation}=await import(pathToFileURL(path.join(SKILL_DIR,'container_tools/artifact_tool_utils.mjs')).href);
const stagingDir=workspaceDir+'/.presentation-work/finalizer'; await fs.mkdir(stagingDir,{recursive:true});
const requirements={explicitTotalSlideCount:21,};
const result=await finalizePresentation({...requirements,workspaceDir,candidatePath,finalPath:FINAL_PPTX,pythonExecutable:RUNTIME_PYTHON,integrityValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12191695,6858000','--validate-bullet-geometry','--validate-heading-fit'],requiredNativeTableOwnerSlides:[],verifyArtifactToolImport:true,receiptPath:stagingDir+'/Invierte360_FinalRoadmap.validation.json'});
console.log(JSON.stringify(result));









