const root=document.querySelector('#iop'),space=document.querySelector('#space');
const fromLibrary=params.get('kaynak')==='dersler';
document.querySelector('#back').href=url('uygulama.html',fromLibrary?'#dersler':'#patika');
document.querySelector('#back').textContent=fromLibrary?'← Dersler':'← Patikam';
document.querySelector('#journal').href=url('uygulama.html','#defter');
document.querySelector('#topic').textContent=lesson().konu;
document.querySelector('#context').textContent=grade+'. sınıf · '+subject;
let reached=level();
function unlock(n){if(n>reached){reached=n;save('adim.',String(n))}}
const engine=IOP.kur(root,{kok:'../',sinif:Number(grade),ders:subject,haritaLink:url('uygulama.html','#harita'),testBitti:r=>{
 if(save('',JSON.stringify(r)))unlock(3);
 else document.querySelector('.io-sonuc .io-konu').textContent='Sonuç bu tarayıcıya kaydedilemedi.';
}});
const tabs=[...root.querySelectorAll('.io-adim')];
const forward=root.querySelector('[data-git="oyna"]');
function gates(){
 if(tabs[0].classList.contains('bitti'))unlock(1);
 if(tabs[1].classList.contains('bitti'))unlock(2);
 tabs.forEach((tab,i)=>tab.disabled=i>reached);
 forward.disabled=reached<1;
 forward.title=reached?'Oyunu aç':'Anlatım tamamlanınca oyun açılır';
}
root.querySelector('.io-adimlar').addEventListener('keydown',e=>{
 if(!['ArrowRight','ArrowLeft'].includes(e.key))return;
 e.stopImmediatePropagation();e.preventDefault();
 const available=tabs.filter(t=>!t.disabled),i=available.indexOf(document.activeElement);
 const target=available[(i+(e.key==='ArrowRight'?1:-1)+available.length)%available.length];
 target.click();target.focus();
},true);
gates();new MutationObserver(gates).observe(root.querySelector('.io-adimlar'),{subtree:true,attributes:true,attributeFilter:['class']});
const step=Math.min(Math.max(0,steps.indexOf(params.get('adim'))),reached);
engine.git(steps[step],true);
function fit(){
 root.style.zoom='1';
 // Measure the active activity at its natural width before fitting a dense game.
 const width=Math.max(root.scrollWidth,root.offsetWidth),height=root.offsetHeight;
 const factor=Math.min(1,(space.clientHeight-4)/Math.max(1,height),space.clientWidth/Math.max(1,width));
 root.style.width=space.clientWidth+'px';root.style.zoom=String(factor);
}
let pending=0;
function schedule(){if(!pending)pending=requestAnimationFrame(()=>{pending=0;root.style.width=space.clientWidth+'px';fit()})}
new ResizeObserver(schedule).observe(space);
new MutationObserver(schedule).observe(root,{subtree:true,childList:true,attributes:true,attributeFilter:['hidden']});
root.addEventListener('load',schedule,true);schedule();
