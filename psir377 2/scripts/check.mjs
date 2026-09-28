import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import path from 'node:path';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=file=>readFileSync(path.join(root,file),'utf8');
const sandbox={window:{}};
vm.runInNewContext(read('docs/data.js'),sandbox);
const c=sandbox.window.COURSE;
assert.equal(c.weeks.length,13,'All 13 weeks must be present');
assert.equal(c.weeks.reduce((n,w)=>n+w.readings.length,0),24,'Required syllabus entries must remain complete');
assert.equal(c.weeks.reduce((n,w)=>n+(w.recommended?.length||0),0),2);
assert.equal(c.assessments.reduce((n,a)=>n+a.weight,0),100);
assert.equal(c.assessments.find(a=>a.title==='Final examination').date,null);
assert.equal(c.weeks.filter(w=>w.activity).length,5);
assert.equal(c.policies.length,6);
const ids=new Set(c.concepts.map(x=>x.id));
assert.equal(ids.size,c.concepts.length);
for(const [i,w] of c.weeks.entries()){
  assert.equal(w.n,i+1);
  const date=new Date(`${w.date}T12:00:00+03:00`);
  assert.equal(date.getUTCDay(),5,`Week ${w.n} must be a Friday`);
  if(i)assert.equal(date-new Date(`${c.weeks[i-1].date}T12:00:00+03:00`),7*86400000);
  for(const id of w.concepts)assert.ok(ids.has(id),`Unknown concept ${id}`);
  if(w.activity)assert.ok(read('docs/activities.js').includes(w.activity));
}
for(const cpt of c.concepts)for(const id of cpt.related)assert.ok(ids.has(id));
for(const a of c.assessments)if(a.date)assert.equal(c.weeks.find(w=>w.n===a.week).date,a.date);
const media=c.weeks.flatMap(w=>w.media||[]);
assert.equal(media.filter(m=>m.url).length,6);
assert.equal(media.find(m=>m.title==='Made in Dagenham (2010)').url,null);
for(const m of media)if(m.url){const u=new URL(m.url);assert.equal(u.protocol,'https:');}
for(const file of ['docs/app.js','docs/activities.js','docs/data.js'])new vm.Script(read(file),{filename:file});
const html=read('docs/index.html');
for(const [,url] of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g))assert.ok(existsSync(path.join(root,'docs',url)));
assert.ok(!html.includes('https://fonts.'),'The interface should work without external font requests');
// Exercise the actual date-selection functions with controlled dates and minimal render targets.
const app=read('docs/app.js');
const nodes={'#next-milestone':{},'#current-week':{}};
const calendarContext={C:c,$:s=>nodes[s],$$:()=>[],esc:String,dateLabel:String,today:()=> '2026-09-28'};
vm.createContext(calendarContext);
vm.runInContext(app.slice(app.indexOf('function targetWeek('),app.indexOf('function mediaCard(')),calendarContext);
for(const [date,expected] of [['2026-09-28','In-class assignment 1'],['2026-11-06','In-class assignment 1'],['2026-11-07','Midterm'],['2026-11-14','In-class assignment 2'],['2026-12-05','Project presentations'],['2026-12-25','Project presentations'],['2026-12-26','All dated milestones have passed.']]){
  calendarContext.renderMilestone(date);
  assert.ok(nodes['#next-milestone'].innerHTML.includes(`<h3>${expected}</h3>`),`Milestone on ${date}`);
}
assert.equal(calendarContext.targetWeek('2026-09-28').n,1);
assert.equal(calendarContext.targetWeek('2026-11-14').n,8);
assert.equal(calendarContext.targetWeek('2026-12-26'),null);
const istanbul=new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'Europe/Istanbul'});
assert.equal(istanbul.format(new Date('2026-11-05T21:30:00Z')),'2026-11-06');
console.log('PASS: syllabus counts, Friday dates, assessment weights, milestone boundaries, Istanbul dates, cross-links, source URLs, local assets, and JavaScript syntax.');
