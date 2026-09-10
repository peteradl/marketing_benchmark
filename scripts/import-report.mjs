import {readFileSync,writeFileSync,renameSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
export function validateReport(r){
 const fail=m=>{throw new Error(m)};
 const str=(v,k)=>{if(typeof v!=='string'||!v.trim())fail(`Missing ${k}`)};
 const url=v=>{try{if(new URL(v).protocol!=='https:')fail('HTTPS sources required')}catch{fail('Invalid source URL')}};
 if(!/^\d{4}-\d{2}-\d{2}$/.test(r.id)||new Date(r.id).toISOString().slice(0,10)!==r.id)fail('Invalid report date');
 if(!['test','baseline','weekly'].includes(r.kind))fail('Invalid run kind');
 for(const k of ['label','sourceUrl','window','headline','summary','hold','coverage','coverageNote','analytics','analyticsNote','strategy','brand'])str(r[k],k);
 url(r.sourceUrl);
 if(!Array.isArray(r.scores)||!Array.isArray(r.recommendations))fail('Scores and recommendations must be arrays');
 if(r.kind==='test'&&r.scores.length)fail('Test runs must not publish numeric scores');
 const seen=new Set();
 for(const s of r.scores){
  for(const k of ['name','rating','url','family','date'])str(s[k],k);
  url(s.url);
  if(!['Brand consistency','Strategy alignment'].includes(s.family))fail('Unsupported benchmark family; do not blend unlike metrics');
  if(!Number.isFinite(s.score)||s.score<0||s.score>100)fail('Score must be a number from 0 to 100');
  if(s.date!==r.id)fail('Historical scores must remain in their original report');
  const key=s.family+':'+s.name;if(seen.has(key))fail('Duplicate artifact');seen.add(key);
 }
 for(const x of r.recommendations){for(const k of ['title','impact','effort','why','action','verify','surface'])str(x[k],k);if(!['Critical','High','Medium','Low'].includes(x.impact))fail('Invalid impact');}
 return r;
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const file=new URL('../dist/data/reports.json',import.meta.url);
 const data=JSON.parse(readFileSync(file,'utf8'));
 for(const run of data.runs)validateReport(run);
 if(process.argv[2]==='--validate'){console.log(`Validated ${data.runs.length} reports.`)}
 else{if(!process.argv[2])throw new Error('Usage: node scripts/import-report.mjs /path/to/report.json');
 const report=validateReport(JSON.parse(readFileSync(process.argv[2],'utf8')));
 if(data.runs.some(r=>r.id===report.id))throw new Error('Report date already exists. Preserve history; review corrections explicitly.');
 data.runs.push(report);data.runs.sort((a,b)=>b.id.localeCompare(a.id));data.importedAt=new Date().toISOString().slice(0,10);
 const tmp=fileURLToPath(file)+'.tmp';writeFileSync(tmp,JSON.stringify(data,null,2)+'\n');renameSync(tmp,file);
 console.log(`Imported ${report.id}. Review, commit, and publish the updated dashboard.`);}
}
