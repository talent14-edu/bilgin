// Fits an IOP activity into #space. On phones it only shrinks a dense game to fit;
// on the web desk it tries a few layout widths and keeps the one that fills the
// screen best, so a lesson reads full page instead of a small card in the middle.
function tamSayfa(root,space,full){
 let pending=0;
 function measure(width){
  root.style.width=width+'px';
  return [Math.max(root.scrollWidth,root.offsetWidth),root.offsetHeight];
 }
 function fit(){
  root.style.zoom='1';
  const sw=space.clientWidth,sh=space.clientHeight-4;
  if(!full){
   const [w,h]=measure(sw);
   root.style.zoom=String(Math.min(1,sh/Math.max(1,h),sw/Math.max(1,w)));
   return;
  }
  let best=null;
  for(const base of [620,740,860,980,1100,1220,1340]){
   const width=Math.min(base,sw),[w,h]=measure(width);
   const factor=Math.min(1.6,sh/Math.max(1,h),sw/Math.max(1,w));
   const area=factor*factor*w*h;
   if(!best||area>best.area*1.04)best={width,factor,area};
   if(width>=sw)break;
  }
  root.style.width=best.width+'px';root.style.zoom=String(best.factor);
 }
 function schedule(){if(!pending)pending=requestAnimationFrame(()=>{pending=0;fit()})}
 new ResizeObserver(schedule).observe(space);
 new MutationObserver(schedule).observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['hidden']});
 root.addEventListener('load',schedule,true);schedule();
}
