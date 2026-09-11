export function calculate(run) {
 const items=run.surfaces.flatMap(s=>s.items);
 const valid=x=>Number.isFinite(x)&&x>=0&&x<=100;
 const scored=items.filter(i=>valid(i.strategy)&&valid(i.brand));
 const quality=scored.length?scored.reduce((n,i)=>n+(i.strategy+i.brand)/2,0)/scored.length:null;
 const analytics=run.kpis.map(k=>({...k,points:Number.isFinite(k.value)&&k.value>=0?k.value*k.multiplier:null}));
 const observed=analytics.reduce((s,k)=>s+(k.points??0),0);
 const complete=run.inventoryComplete&&items.length>0&&scored.length===items.length&&analytics.every(k=>k.complete&&k.points!==null);
 return {quality,scored:scored.length,expected:items.length,analytics,total:(quality??0)+observed,complete};
}
