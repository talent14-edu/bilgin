const root=document.querySelector('#iop'),space=document.querySelector('#space');
document.querySelector('#back').href=url('uygulama.html','#patika');
document.querySelector('#profile').href=url('uygulama.html','#profil');
document.querySelector('#topic').textContent=lesson().konu;
document.querySelector('#context').textContent=subject+' · '+current().title;
let reached=level();
function unlock(n){if(n>reached){reached=n;save('adim.',String(n))}}
const activeLesson=lesson();
IOP_DERS[grade+'|'+subject]=activeLesson;
const engine=IOP.kur(root,{kok:'../',sinif:Number(grade),ders:subject,haritaLink:url('uygulama.html','#pasaport'),testBitti:r=>{
 const previous=result();
 const message=document.querySelector('.io-sonuc .io-konu');
 if(save('',JSON.stringify({...r,earnedAt:previous?previous.earnedAt||'':new Date().toISOString()}))){
  unlock(3);
  message.textContent=previous?'Bu temanın damgası pasaportunda.':'Tema tamamlandı! Damgan pasaportuna eklendi.';
  document.querySelector('.io-sonuc a').textContent='Pasaportumu aç →';
 }else message.textContent='Sonuç bu tarayıcıya kaydedilemedi.';
}});
root.querySelector('[data-p="olc"] small').textContent=activeLesson.test.length+' soruda beceri';
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
if(webMode)document.body.classList.add('webFull');
tamSayfa(root,space,webMode);
