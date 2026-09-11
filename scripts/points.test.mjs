import test from 'node:test';
import assert from 'node:assert/strict';
import {calculate} from '../scoring.js';
import {readFileSync} from 'node:fs';
test('partial run preserves missing scores and computes proportional observed points',()=>{const r=JSON.parse(readFileSync(new URL('../data/points-runs.json',import.meta.url))).runs.find(r=>r.id==='2026-09-03_2026-09-09-v0.3');const s=calculate(r);assert.equal(s.quality,null);assert.equal(s.complete,false);assert.equal(s.analytics[0].points,null);assert.ok(Math.abs(s.total-288.6411097222223)<1e-8);});
test('quality is item weighted and total is uncapped',()=>{const r={inventoryComplete:true,surfaces:[{items:[{strategy:80,brand:100},{strategy:60,brand:80}]},{items:[{strategy:100,brand:100}]}],kpis:[{value:1.5,multiplier:5,complete:true},{value:10,multiplier:.25,complete:true},{value:8,multiplier:5,complete:true}]};const s=calculate(r);assert.equal(s.quality,260/3);assert.equal(s.complete,true);assert.equal(s.total,260/3+50);});
test('one missing branding assessment prevents a complete score',()=>{const s=calculate({inventoryComplete:true,surfaces:[{items:[{strategy:90,brand:null}]}],kpis:[]});assert.equal(s.complete,false);assert.equal(s.quality,null);});

test('diagnostic scores contribute to the subtotal without clearing publication holds',()=>{const s=calculate({inventoryComplete:true,surfaces:[{items:[{strategy:80,brand:40,publicationHold:'Contrast failure',assessmentStatus:'diagnostic'}]}],kpis:[]});assert.equal(s.quality,60);assert.equal(s.complete,false);});
