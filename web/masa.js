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
 screen.innerHTML=`<div class="deskTitle"><h1>Merhaba, ${escHtml(account().ad)}!</h1><a href="#pasaport"><img src="../mobil/ikon/madalya.png" alt=""> ${stamps.length} damga</a></div>
 <div class="deskLayout">${heroCarousel(l,n,art,next)}
 <section class="journey"><div class="sectionTitle"><h2>Patikam</h2><a href="#patika">Haritayı aç →</a></div><ol>${labels.map((label,i)=>`<li class="${i<n?'complete':i===n?'next':''}"><span>${i<n?'✓':i+1}</span><div><b>${label}</b><small>${[l.v.length+' anlatım sahnesi',l.oyun.ad,l.test.length+' soru'][i]}</small></div></li>`).join('')}</ol><div class="journeyFoot"><img src="../mobil/ikon/kupa.png" alt=""><span>${n===3?'Damgan pasaportunda':'Tema damgası'}</span><b>${n}/3</b></div></section></div>
 <section class="courses"><div class="sectionTitle"><h2>Derslerim</h2><a href="#dersler">Tema seç →</a></div><div class="courseGrid">${subjectCards()}</div></section>`;
 bindCourses();mountHero(screen.querySelector('.heroCarousel'));
}
function games(){
 screen.innerHTML=`<div class="deskTitle"><h1>Oyun dolabı</h1><a href="../?k=${grade}#oyna">Bilgin’in oyun masası ↗</a></div><div class="gameGrid">${subjects().map(s=>{
  const l=originals[grade+'|'+s],q=new URLSearchParams({k:grade,d:s});
  return `<article class="gameCard"><img src="../assets/ders/${icons[s]}.png" alt=""><p class="eyebrow">${s}</p><h2>${l.oyun.ad}</h2><p>${l.oyun.yonerge}</p><a class="action" href="oyun.html?${q}">Oyna →</a></article>`;
 }).join('')}</div>`;
}
function themeLevel(k,s,t){return result(k,s,t)?3:Math.max(0,Math.min(2,Number(stored(key('adim.',k,s,t)))||0))}
function subjectsPage(){
 const list=subjects();
 screen.innerHTML=`<div class="deskTitle"><h1>Dersler</h1><span class="pageNote">${grade}. sınıf · ${list.length} ders</span></div><div class="lessonGrid">${list.map((s,i)=>{
  const ready=themeList(grade,s),all=(TEMALAR[grade+'|'+s]||[]).length||ready.length,done=ready.filter(t=>result(grade,s,t.id)).length;
  return `<button class="lessonCard hue${i%3}" data-lesson="${s}"><img src="../assets/ders/${icons[s]}.png" alt=""><span class="lessonName"><b>${s}</b><small>${all} tema · ${ready.length} patika hazır</small></span><span class="lessonMeter"><progress value="${done}" max="${ready.length}" aria-label="${s} damga ilerlemesi"></progress><small>${done}/${ready.length} damga</small></span><i aria-hidden="true">›</i></button>`;
 }).join('')}${extraCard()}</div>`;
 screen.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>{subject=b.dataset.lesson;theme='temel';openRoute('ders')});
 screen.querySelector('[data-extra]').onclick=()=>openRoute('ekpatika');
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
 }).join('')}</ol></section>`;
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
// Ek patikalar: skills outside the Maarif subjects, drawn from the paths the
// AI-LA ecosystem already runs (Talent14, AI-GALAXY, Okumino).
const discoverIcons={
 spark:'<path d="M12 2.5c.5 4.6 2.9 7 9.5 9.5-6.6 2.5-9 4.9-9.5 9.5-.5-4.6-2.9-7-9.5-9.5 6.6-2.5 9-4.9 9.5-9.5z" fill="currentColor" stroke="none"/>',
 coin:'<circle cx="12" cy="12" r="8.5"/><path d="M14.8 9.2c-.5-1-1.5-1.5-2.8-1.5-1.7 0-2.8.9-2.8 2.1 0 2.9 5.9 1.5 5.9 4.4 0 1.2-1.2 2.1-3 2.1-1.4 0-2.5-.6-3-1.6M12 6v1.7M12 16.3V18"/>',
 shield:'<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
 alert:'<path d="M10.3 4.2 2.8 17.5A2 2 0 0 0 4.5 20.5h15a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0z"/><path d="M12 9.5v4.5M12 17h.01"/>',
 book:'<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>',
 cube:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>'
};
const discoverPaths=[
 {ad:'Yapay Zekâ Okuryazarlığı',not:'Yapay zekâ nasıl öğrenir, ne zaman yanılır? Doğru soruyu sormayı öğren.',ikon:'spark',renk:'mor',kaynak:'AI-GALAXY',bant:[1,8]},
 {ad:'Finansal Okuryazarlık',not:'Harçlık, birikim, ihtiyaç ve istek: paranın yolunu sen çiz.',ikon:'coin',renk:'altin',kaynak:'Talent14',bant:[1,8]},
 {ad:'Dijital Güvenlik',not:'Güçlü şifre, kişisel bilgini koruma ve çevrimiçi nezaket.',ikon:'shield',renk:'petrol',kaynak:'Talent14',bant:[3,8]},
 {ad:'Afet Bilinci',not:'Deprem çantası, güvenli alan ve aile afet planı.',ikon:'alert',renk:'kiremit',kaynak:'Talent14 · AFAD',bant:[1,8]},
 {ad:'Anlayarak Hızlı Okuma',not:'Okuma hızını ve anlamayı birlikte büyüt.',ikon:'book',renk:'turuncu',kaynak:'Okumino',bant:[1,8]},
 {ad:'Tasarla ve Üret',not:'Robotik ve maker atölyesinde fikrini ürüne dönüştür.',ikon:'cube',renk:'lacivert',kaynak:'Talent14',bant:[1,8]}
];
function fitsGrade(p){const g=Number(grade);return g>=p.bant[0]&&g<=p.bant[1]}
function extraCard(){
 const open=discoverPaths.filter(fitsGrade).length;
 return `<button class="lessonCard extraLesson" data-extra><span class="extraArt" aria-hidden="true"><img src="../mobil/ikon/harita.png" alt=""></span><span class="lessonName"><b>Ek patikalar</b><small>${open} patika · derslerin dışında</small></span><span class="lessonMeter"><span class="soonTag">Yakında</span></span><i aria-hidden="true">›</i></button>`;
}
function extraPage(){
 screen.innerHTML=`<div class="subjectHead"><span class="extraArt"><img src="../mobil/ikon/harita.png" alt=""></span><div><p class="eyebrow">${grade}. sınıf · derslerin dışında</p><h1>Ek patikalar</h1></div><a class="backLink" href="#dersler">← Tüm dersler</a></div><ul class="extraGrid">${discoverPaths.map(p=>{
  const fits=fitsGrade(p);
  return `<li class="extraItem tone-${p.renk}${fits?'':' later'}"><span class="discoverIcon" aria-hidden="true"><svg viewBox="0 0 24 24">${discoverIcons[p.ikon]}</svg></span><div><h2>${p.ad}</h2><p>${p.not}</p></div><div class="extraFoot"><span class="source">${p.kaynak}</span><span>${fits?p.bant[0]+'–'+p.bant[1]+'. sınıf':p.bant[0]+'. sınıftan itibaren'}</span><span class="soonTag">Yakında</span></div></li>`;
 }).join('')}</ul>`;
}
// Anasayfa vitrini: AI-LA öğretmen panelindeki haftalık karuselin öğrenci sürümü.
const quotes=[
 ['Hayatta en hakiki mürşit ilimdir.','Mustafa Kemal Atatürk'],
 ['Hayal gücü bilgiden daha önemlidir.','Albert Einstein'],
 ['İlim ilim bilmektir, ilim kendin bilmektir.','Yunus Emre'],
 ['Öğrenmenin en iyi yolu, merak etmektir.','BİLGİN'],
 ['Bir çocuk, bir öğretmen, bir kalem ve bir kitap dünyayı değiştirebilir.','Malala Yousafzai']
];
let heroTimer=0;
function heroCarousel(l,n,art,next){
 const day=Math.floor(Date.now()/864e5),[quote,who]=quotes[day%quotes.length];
 const games=subjects().slice(0,3).map(s=>`<li><img src="../assets/ders/${icons[s]}.png" alt=""><span><b>${originals[grade+'|'+s].oyun.ad}</b><small>${s}</small></span></li>`).join('');
 const names=subjects().slice(0,3).map(s=>badgeNames[s]).filter(Boolean).join(', ');
 const slides=[
  {label:'Haftanın önerisi',tone:'nane',img:art,copy:`<p class="eyebrow">Haftanın önerisi · ${subject} · ${grade}. sınıf</p><h2>${current().title}</h2><p>${l.konu}</p><a class="action" id="continue" href="${n===3?'#patika':url('etkinlik.html')+'&adim='+steps[n]}">${next} →</a>`},
  {label:'Yarışma',tone:'altin',img:'../assets/sahne/kar_yarisma.webp',copy:`<p class="eyebrow">Yarışma</p><h2>Talent Cup</h2><p>Yapay zekâ projeni takımınla kur, öğretmeninle birlikte yarışmaya katıl.</p><a class="action" href="https://talentcup.org" target="_blank" rel="noopener">Yarışmayı incele ↗</a>`},
  {label:'Günün sözü',tone:'lavanta',img:'../assets/sahne/kar_soz.webp',copy:`<p class="eyebrow">Günün sözü</p><blockquote><p>“${quote}”</p><footer>${who}</footer></blockquote>`},
  {label:'En çok oynanan oyunlar',tone:'petrol',img:'../assets/sahne/kar_oyun.webp',copy:`<p class="eyebrow">En çok oynanan oyunlar · ${grade}. sınıf</p><ul class="heroGames">${games}</ul><a class="action" href="#oyunlar">Oyun dolabını aç →</a>`},
  {label:'Yeni eklendi',tone:'mandalina',img:'../assets/sahne/kar_yeni.webp',copy:`<p class="eyebrow">Yeni eklendi</p><h2>Rozetlerin artık bir unvanı var</h2><p>${names}… Temaları bitir, unvanını kazan.</p><a class="action" href="#profil">Rozetlerime bak →</a>`}
 ];
 return `<section class="featured heroCarousel" aria-roledescription="karusel" aria-label="Haftanın vitrini"><div class="heroSlides">${slides.map((sl,i)=>`<article class="heroSlide tone-${sl.tone}" id="hs-${i}" role="tabpanel" aria-roledescription="slayt" aria-label="${i+1} / ${slides.length}: ${sl.label}"><div class="featureArt"><img src="${sl.img}" alt="" ${i?'loading="lazy"':''}></div><div class="featureCopy">${sl.copy}</div></article>`).join('')}</div><div class="heroNav"><div class="heroDots" role="tablist" aria-label="Vitrin slaytları">${slides.map((sl,i)=>`<button type="button" role="tab" aria-controls="hs-${i}" aria-label="${sl.label}" title="${sl.label}"><i></i></button>`).join('')}</div><button type="button" class="heroArrow" data-step="-1" aria-label="Önceki slayt">‹</button><button type="button" class="heroArrow" data-step="1" aria-label="Sonraki slayt">›</button></div></section>`;
}
function mountHero(root){
 clearTimeout(heroTimer);
 if(!root)return;
 const slides=[...root.querySelectorAll('.heroSlide')],dots=[...root.querySelectorAll('.heroDots button')];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let cur=0,hold=false;
 function show(i,focus){
  const prev=cur;cur=(i+slides.length)%slides.length;
  slides.forEach((sl,k)=>{sl.classList.toggle('is-on',k===cur);sl.classList.toggle('is-left',k!==cur&&(k<cur));sl.inert=k!==cur});
  dots.forEach((d,k)=>{d.setAttribute('aria-selected',String(k===cur));d.tabIndex=k===cur?0:-1});
  if(focus)dots[cur].focus();
  tick();
 }
 function tick(){
  clearTimeout(heroTimer);
  dots.forEach(d=>d.classList.remove('is-fill'));
  const run=root.isConnected&&!hold&&!reduce&&!document.hidden;
  root.classList.toggle('is-running',run);
  if(!run)return;
  void dots[cur].offsetWidth;dots[cur].classList.add('is-fill');
  heroTimer=setTimeout(()=>{if(root.isConnected)show(cur+1)},7000);
 }
 dots.forEach((d,i)=>d.onclick=()=>show(i));
 root.querySelector('.heroDots').onkeydown=e=>{const k={ArrowRight:1,ArrowLeft:-1}[e.key];if(k){e.preventDefault();show(cur+k,true)}};
 root.querySelectorAll('.heroArrow').forEach(b=>b.onclick=()=>show(cur+Number(b.dataset.step)));
 root.onmouseenter=root.onfocusin=()=>{hold=true;tick()};
 root.onmouseleave=()=>{hold=root.contains(document.activeElement);tick()};
 root.onfocusout=e=>{if(!root.contains(e.relatedTarget)){hold=root.matches(':hover');tick()}};
 document.addEventListener('visibilitychange',tick);
 show(0);
}
