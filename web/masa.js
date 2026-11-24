function subjectCards(){
 return subjects().map((s,i)=>`<button class="subjectCard hue${i%3}" data-course="${s}"><img src="../assets/ders/${icons[s]}.png" alt=""><span><b>${s}</b><small>${themeList(grade,s).length} tema</small></span><i aria-hidden="true">›</i></button>`).join('');
}
function bindCourses(){
 screen.querySelectorAll('[data-course]').forEach(b=>b.onclick=()=>{
  subject=b.dataset.course;theme='temel';openRoute('dersler');
 });
}
function desk(){
 const l=lesson(),n=level(),stamps=earned();
 const art=grade==='4'?'../assets/bridge2.png':'../assets/sahne/k'+grade+'.webp';
 const next=n===3?'Patikayı tekrar aç':n===0?'Patikaya başla':'Kaldığın yerden devam et';
 screen.innerHTML=`<div class="deskTitle"><h1>Öğrenme masam</h1><a href="#pasaport"><img src="../mobil/ikon/madalya.png" alt=""> ${stamps.length} damga</a></div>
 <div class="deskLayout"><article class="featured"><div class="featureArt"><img src="${art}" alt=""></div><div class="featureCopy"><p class="eyebrow">${subject} · ${grade}. sınıf</p><h2>${current().title}</h2><p>${l.konu}</p><a class="action" id="continue" href="${n===3?'#patika':url('etkinlik.html')+'&adim='+steps[n]}">${next} →</a></div></article>
 <section class="journey"><div class="sectionTitle"><h2>Patikam</h2><a href="#patika">Haritayı aç →</a></div><ol>${labels.map((label,i)=>`<li class="${i<n?'complete':i===n?'next':''}"><span>${i<n?'✓':i+1}</span><div><b>${label}</b><small>${[l.v.length+' anlatım sahnesi',l.oyun.ad,l.test.length+' soru'][i]}</small></div></li>`).join('')}</ol><div class="journeyFoot"><img src="../mobil/ikon/kupa.png" alt=""><span>${n===3?'Damgan pasaportunda':'Tema damgası'}</span><b>${n}/3</b></div></section></div>
 <section class="courses"><div class="sectionTitle"><h2>Derslerim</h2><a href="#dersler">Tema seç →</a></div><div class="courseGrid">${subjectCards()}</div></section>`;
 bindCourses();
}
function games(){
 screen.innerHTML=`<div class="deskTitle"><h1>Oyun dolabı</h1><a href="../?k=${grade}#oyna">Bilgin’in oyun masası ↗</a></div><div class="gameGrid">${subjects().map(s=>{
  const l=originals[grade+'|'+s],q=new URLSearchParams({k:grade,d:s});
  return `<article class="gameCard"><img src="../assets/ders/${icons[s]}.png" alt=""><p class="eyebrow">${s}</p><h2>${l.oyun.ad}</h2><p>${l.oyun.yonerge}</p><a class="action" href="oyun.html?${q}">Oyna →</a></article>`;
 }).join('')}</div>`;
}
// Extra paths per subject are placeholders until the team decides what goes in them.
const extraPaths=[['Tekrar patikası','Temaları karışık sorularla pekiştir.'],['Proje patikası','Öğrendiğini küçük bir ürüne dönüştür.'],['Meydan okuma','Zorlayıcı sorularla kendini dene.']];
function themeLevel(k,s,t){return result(k,s,t)?3:Math.max(0,Math.min(2,Number(stored(key('adim.',k,s,t)))||0))}
function subjectsPage(){
 const list=subjects();
 screen.innerHTML=`<div class="deskTitle"><h1>Dersler</h1><span class="pageNote">${grade}. sınıf · ${list.length} ders</span></div><div class="lessonGrid">${list.map((s,i)=>{
  const ready=themeList(grade,s),all=(TEMALAR[grade+'|'+s]||[]).length||ready.length,done=ready.filter(t=>result(grade,s,t.id)).length;
  return `<button class="lessonCard hue${i%3}" data-lesson="${s}"><img src="../assets/ders/${icons[s]}.png" alt=""><span class="lessonName"><b>${s}</b><small>${all} tema · ${ready.length} patika hazır</small></span><span class="lessonMeter"><progress value="${done}" max="${ready.length}" aria-label="${s} damga ilerlemesi"></progress><small>${done}/${ready.length} damga</small></span><i aria-hidden="true">›</i></button>`;
 }).join('')}</div>`;
 screen.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>{subject=b.dataset.lesson;theme='temel';openRoute('ders')});
}
function subjectPage(){
 const ready=themeList(grade,subject),names=TEMALAR[grade+'|'+subject]||[];
 const titles=[...new Set([...names,...ready.map(t=>t.title)])];
 screen.innerHTML=`<div class="subjectHead"><img src="../assets/ders/${icons[subject]}.png" alt=""><div><p class="eyebrow">${grade}. sınıf</p><h1>${subject}</h1></div><a class="backLink" href="#dersler">← Tüm dersler</a></div>
 <section class="themeSection"><div class="sectionTitle"><h2>Temalar</h2><span class="pageNote">${titles.length} tema · ${ready.length} patika hazır</span></div><ol class="themeGrid">${titles.map((title,i)=>{
  const t=ready.find(x=>x.title===title);
  if(!t)return `<li class="themeCard soon"><span class="themeNo">${i+1}</span><div><b>${title}</b><small>Program teması · yakında</small></div></li>`;
  const n=themeLevel(grade,subject,t.id);
  return `<li class="themeCard ready${n===3?' complete':''}"><span class="themeNo">${n===3?'✓':i+1}</span><div><b>${title}</b><small>${t.lesson.konu} · ${n}/3 adım</small></div><button class="action" data-open="${t.id}">${n===3?'Tekrar aç':n?'Devam et':'Patikayı aç'} →</button></li>`;
 }).join('')}</ol></section>
 <section class="pathSection"><div class="sectionTitle"><h2>Patikalar</h2><span class="pageNote">Yeni patika alanları</span></div><div class="pathGrid">${extraPaths.map(([t,d])=>`<article class="pathSlot"><b>${t}</b><small>${d}</small><span class="soonTag">Yakında</span></article>`).join('')}</div></section>`;
 screen.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{theme=b.dataset.open;openRoute('patika')});
}
const menuToggle=document.querySelector('.menuToggle');
function setMenu(open){
 document.body.classList.toggle('navMini',!open);
 menuToggle.setAttribute('aria-expanded',String(open));
 menuToggle.setAttribute('aria-label',open?'Menüyü daralt':'Menüyü genişlet');
 write('bilgin.menu',open?'acik':'kapali');
}
setMenu(stored('bilgin.menu')!=='kapali');
menuToggle.onclick=()=>setMenu(document.body.classList.contains('navMini'));
