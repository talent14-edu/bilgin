const screen=document.querySelector('#screen'),gradeSelect=document.querySelector('#grade');
gradeSelect.innerHTML=Array.from({length:8},(_,i)=>'<option value="'+(i+1)+'">'+(i+1)+'. sınıf</option>').join('');
gradeSelect.value=grade;
const icons={'Matematik':'matematik','Fen Bilimleri':'fen','Türkçe':'turkce','Hayat Bilgisi':'hayat','Sosyal Bilgiler':'sosyal','Din Kültürü':'din','İngilizce':'ingilizce','İnkılap Tarihi':'inkilap'};
gradeSelect.onchange=()=>{
 grade=gradeSelect.value;
 if(!subjects().includes(subject))subject=subjects()[0];
 theme='temel';const route=location.hash.slice(1);openRoute(webMode?(route||'masa'):(['profil','pasaport','hesap'].includes(route)?route:'dersler'));
};
function openRoute(route){
 remember();history.replaceState(null,'',url('uygulama.html','#'+route));render();
}
function path(){
 const l=lesson(),n=level();
 const points=[[29,16],[67,39],[30,62],[63,85]];
 const titles=[...labels,'Patika damgası'];
 const hints=[l.v.length+' sahne',l.oyun.ad,l.test.length+' soru',n===3?'Kazanıldı':'3 adımı tamamla'];
 const marks=['goz','yapboz','buyutec','kupa'];
 const nodes=points.map(([x,y],i)=>{
   const award=i===3,done=i<n||(award&&n===3),active=i===n&&!award;
   const state=done?'done':active?'active':'locked';
   const action=award?'data-award':'data-step="'+i+'"';
   const label=titles[i]+', '+(done?(award?'pasaportunu aç':'tekrar aç'):active?'başla':'kilitli');
   return `<div class="stop ${x>50?'west':'east'}" style="--x:${x}%;--y:${y}%">
     <button class="node ${state}${award?' award':''}" ${action} aria-label="${label}" ${!done&&!active?'disabled':''}>
     <img class="nodeIcon" src="../mobil/ikon/${marks[i]}.png" alt="">${done&&!award?'<b class="doneTick" aria-hidden="true">✓</b>':''}</button>
     <div class="stopLabel"><strong>${titles[i]}</strong><small>${hints[i]}</small></div>
     ${active?'<span class="startFlag">Başla</span><img class="guideWorm" src="../img/poz_selam.webp" alt="">':''}</div>`;
 }).join('');
 const road='M29 16 C29 26 67 27 67 39 S30 50 30 62 S63 74 63 85';
 screen.innerHTML='<div class="heading"><h1>Patikam</h1><a class="switchLesson" href="#dersler">Tema seç ↗</a></div>'+`<section class="trail"><div class="trailTitle"><div><p class="eyebrow">${subject} · ${grade}. sınıf</p><h2>${current().title}</h2><p class="topicHint">${l.konu}</p></div><span class="score" aria-label="${n} adım tamamlandı">${n}/3</span></div>
 <div class="land"><svg class="track" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${road}"/></svg>${nodes}</div><a class="trailContinue" href="${n===3?'#pasaport':url('etkinlik.html')+'&adim='+steps[n]}"><span>${n===3?'Damgamı gör':n===0?'İlk adımı aç':'Kaldığım yerden devam et'}</span><b aria-hidden="true">→</b></a></section>`;
 screen.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>location.href=url('etkinlik.html')+'&adim='+steps[Number(b.dataset.step)]);
 screen.querySelector('[data-award]').onclick=()=>location.hash='pasaport';
}
function catalog(){
 screen.innerHTML='<h1>Dersler</h1><form id="choices" class="paper choices"><label>Ders<select id="subject"></select></label><label>Tema<select id="theme"></select></label><article id="preview"></article><button class="action">Patikayı aç →</button></form>';
 const course=screen.querySelector('#subject'),picker=screen.querySelector('#theme');
 if(webMode){
  const indexButton=document.createElement('button');
  indexButton.type='button';indexButton.className='themeIndex';indexButton.textContent='Tüm sınıf temalarını incele';
  indexButton.onclick=()=>curriculum(course.value);screen.querySelector('#choices').append(indexButton);
 }
 for(const s of subjects())course.add(new Option(s,s,false,s===subject));
 function populate(preferred){
  picker.replaceChildren();
  for(const t of themeList(grade,course.value))picker.add(new Option(t.title,t.id,false,t.id===preferred));
  preview();
 }
 function preview(){
  const t=themeList(grade,course.value).find(x=>x.id===picker.value);
  const completed=result(grade,course.value,t.id);
  screen.querySelector('#preview').innerHTML=`<img class="bookIcon" src="../assets/ders/${icons[course.value]}.png" alt=""><div><p class="eyebrow">${completed?'✓ Damga kazanıldı':'İzle · Oyna · Ölç'}</p><h2>${t.lesson.konu}</h2><p>${t.lesson.oyun.ad} · ${t.lesson.test.length} soru</p></div>`;
 }
 course.onchange=()=>populate('temel');picker.onchange=preview;populate(theme);
 screen.querySelector('form').onsubmit=e=>{e.preventDefault();subject=course.value;theme=picker.value;openRoute('patika')};
}
let stampPage=0;
function pages(count,index,update){
 const footer=screen.querySelector('.pager');if(!footer||count<2)return;
 footer.innerHTML='<button aria-label="Önceki">←</button><span>'+(index+1)+' / '+count+'</span><button aria-label="Sonraki">→</button>';
 const [prev,next]=footer.querySelectorAll('button');prev.disabled=index===0;next.disabled=index===count-1;
 prev.onclick=()=>update(index-1);next.onclick=()=>update(index+1);
}
const avatars=[['selam','Selam veren'],['sevinc','Sevinçli'],['dusunme','Düşünceli'],['ipucu','İpucu veren'],['rozet','Rozetli']];
const accountDefaults={ad:'Deniz',soyad:'Yıldız',eposta:'deniz.yildiz@okul.bilgin.app',avatar:'selam'};
const escHtml=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const logoutIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M15 8l4 4-4 4M19 12H9"/></svg>';
let accountPane='bilgi';
function account(){
 let saved={};try{saved=JSON.parse(stored('bilgin.hesap')||'{}')}catch{}
 const me={...accountDefaults,...saved};
 if(!avatars.some(([k])=>k===me.avatar))me.avatar=accountDefaults.avatar;
 return me;
}
function askLogout(){
 let box=document.querySelector('.logoutDialog');
 if(!box){
  box=document.createElement('dialog');box.className='logoutDialog';box.setAttribute('aria-labelledby','logoutTitle');
  box.innerHTML='<img src="../img/poz_selam.webp" alt=""><h2 id="logoutTitle">Çıkış yapılsın mı?</h2><p>Patikan, damgaların ve rozetlerin bu cihazda saklı kalır. Döndüğünde kaldığın yerden devam edersin.</p><div class="formActions"><button type="button" class="textButton">Vazgeç</button><button type="button" class="action logout">'+logoutIcon+'Çıkış yap</button></div>';
  document.body.append(box);
  box.querySelector('.textButton').onclick=()=>box.close();
  box.querySelector('.action').onclick=()=>{const home=new URL('../',location.href).href;try{top.location.href=home}catch{location.href=home}};
 }
 box.showModal();
}
document.addEventListener('click',e=>{if(e.target.closest('[data-logout]'))askLogout()});
function accountSettings(card){
 const me=account(),info=accountPane==='bilgi';
 card.className='paper account';
 card.innerHTML=`<div class="paneSwitch" role="tablist" aria-label="Hesap ayarları"><button type="button" role="tab" data-pane="bilgi" aria-selected="${info}">Profil bilgileri</button><button type="button" role="tab" data-pane="sifre" aria-selected="${!info}">Şifre değiştir</button></div><form class="accountForm" novalidate></form><p class="formNote" role="status" aria-live="polite"></p><button type="button" class="logout accountLogout" data-logout>${logoutIcon}Çıkış yap</button>`;
 card.querySelectorAll('[data-pane]').forEach(b=>b.onclick=()=>{accountPane=b.dataset.pane;profile('hesap')});
 const form=card.querySelector('form'),note=card.querySelector('.formNote');
 const say=(text,bad)=>{note.textContent=text;note.classList.toggle('bad',!!bad)};
 if(info){
  form.innerHTML=`<fieldset class="avatarPick"><legend>Avatarım</legend><p>Arkadaşların seni bu resimle tanır.</p><div>${avatars.map(([k,t])=>`<label title="${t}"><input type="radio" name="avatar" value="${k}" ${k===me.avatar?'checked':''}><img src="../img/poz_${k}.webp" alt="${t}"></label>`).join('')}</div></fieldset><div class="fieldRow"><label class="field"><span>Ad</span><input name="ad" value="${escHtml(me.ad)}" autocomplete="given-name" maxlength="40" required></label><label class="field"><span>Soyad</span><input name="soyad" value="${escHtml(me.soyad)}" autocomplete="family-name" maxlength="40" required></label></div><div class="fieldRow"><label class="field locked"><span>E-posta</span><input value="${escHtml(me.eposta)}" readonly></label><label class="field locked"><span>Sınıf seviyesi</span><input value="${grade}. sınıf" readonly></label></div><p class="fieldHint">E-postanı okulun tanımlar. Sınıfını üstteki menüden değiştirebilirsin.</p><div class="formActions"><button type="reset" class="textButton">Sıfırla</button><button class="action">Kaydet</button></div>`;
  const preview=()=>{const pick=form.querySelector('[name=avatar]:checked');if(pick)screen.querySelectorAll('.avatarNow').forEach(i=>i.src='../img/poz_'+pick.value+'.webp')};
  form.onchange=preview;form.onreset=()=>{setTimeout(preview);say('')};
  form.onsubmit=e=>{
   e.preventDefault();
   const ad=form.ad.value.trim(),soyad=form.soyad.value.trim();
   if(!ad||!soyad){say('Ad ve soyad boş kalamaz.',true);(ad?form.soyad:form.ad).focus();return}
   const next={...me,ad,soyad,avatar:form.querySelector('[name=avatar]:checked').value};
   if(!write('bilgin.hesap',JSON.stringify(next))){say('Bu tarayıcı kaydetmeye izin vermedi.',true);return}
   profile('hesap');screen.querySelector('.formNote').textContent='✓ Profilin kaydedildi.';
  };
 }else{
  form.innerHTML=`<label class="field"><span>Mevcut şifre</span><input type="password" name="eski" autocomplete="current-password" required></label><div class="fieldRow"><label class="field"><span>Yeni şifre</span><input type="password" name="yeni" autocomplete="new-password" minlength="6" required></label><label class="field"><span>Yeni şifre (tekrar)</span><input type="password" name="tekrar" autocomplete="new-password" required></label></div><p class="fieldHint">En az 6 karakter. Harf ile rakamı birlikte kullan.</p><div class="formActions"><button type="reset" class="textButton">Temizle</button><button class="action">Şifreyi güncelle</button></div>`;
  form.onreset=()=>say('');
  form.onsubmit=e=>{
   e.preventDefault();
   const {eski,yeni,tekrar}=form;
   if(!eski.value){say('Önce mevcut şifreni yaz.',true);eski.focus();return}
   if(yeni.value.length<6||!/\d/.test(yeni.value)||!/\p{L}/u.test(yeni.value)){say('Yeni şifre en az 6 karakter olmalı, harf ve rakam içermeli.',true);yeni.focus();return}
   if(yeni.value!==tekrar.value){say('İki yeni şifre birbirini tutmuyor.',true);tekrar.focus();return}
   if(yeni.value===eski.value){say('Yeni şifre eskisiyle aynı olamaz.',true);yeni.focus();return}
   form.reset();say('✓ Şifren güncellendi.');
  };
 }
}
function profile(page){
 const stamps=earned(),list=subjects();
 const counts=new Map(list.map(s=>[s,stamps.filter(x=>x.grade===grade&&x.subject===s).length]));
 const badges=[...counts.values()].filter(Boolean).length;
 const passport=page==='pasaport';
 const me=account(),settings=page==='hesap';
 screen.innerHTML=`<div class="heading"><h1>Profilim</h1></div><div class="profileSummary"><img class="avatarNow" src="../img/poz_${me.avatar}.webp" alt=""><div><strong>${escHtml(me.ad+' '+me.soyad)}</strong><small>${stamps.length} damga · ${grade}. sınıf</small></div></div><div class="profileTabs"><a href="#pasaport" ${passport?'aria-current="page"':''}><img src="../mobil/ikon/defter.png" alt="">Pasaportum</a><a href="#profil" ${page==='profil'?'aria-current="page"':''}><img src="../mobil/ikon/madalya.png" alt="">Rozetlerim</a><a href="#hesap" ${settings?'aria-current="page"':''}><img class="avatarNow" src="../img/poz_${me.avatar}.webp" alt="">Hesabım</a></div><article class="paper collection"></article><div class="pager"></div>`;
 const card=screen.querySelector('.collection');
 if(settings){screen.querySelector('.pager').remove();accountSettings(card);return}
 if(passport){
  if(!stamps.length){card.innerHTML='<h2>İlk damganı kazan</h2><p>Bir temanın İzle, Oyna ve Ölç adımlarını bitir. Tema damgan bu pasaporta işlenecek.</p><a class="action" href="#dersler">Tema seç →</a>';return}
  stampPage=Math.min(stampPage,stamps.length-1);const entry=stamps[stampPage];
  card.innerHTML=`<div class="seal"><img src="../assets/ders/${icons[entry.subject]}.png" alt=""></div><p class="eyebrow">${entry.grade}. sınıf · ${entry.subject}</p><h2>${entry.theme}</h2><p>✓ Tema tamamlandı${entry.date?' · '+new Date(entry.date).toLocaleDateString('tr-TR'):''}</p>`;
  pages(stamps.length,stampPage,i=>{stampPage=i;profile(page)});
 }else{
  screen.querySelector('.pager').remove();
  card.className='badgeBoard';
  card.innerHTML=`<div class="boardHeading"><h2>Ders rozetlerim</h2><span>${badges} / ${list.length} kazanıldı</span></div><ul class="badges"></ul>`;
  const grid=card.querySelector('.badges');
  for(const s of list){
   const n=counts.get(s),total=themeList(grade,s).length;
   const tile=document.createElement('li');
   tile.className='badgeTile '+(n===total?'mastered':n?'earned':'waiting');
   tile.innerHTML=`<div class="badgeFace" style="--growth:${.82+.09*n}"><img src="../assets/ders/${icons[s]}.png" alt="">${n?'<b aria-label="Kazanıldı">✓</b>':''}</div><strong>${s}</strong><div class="badgeMeter"><progress value="${n}" max="${total}" aria-label="${s} tema ilerlemesi"></progress><small>${n}/${total}</small></div>`;
   grid.append(tile);
  }
 }
}
function render(){
 let page=location.hash.slice(1)||(webMode?'masa':'patika');
 document.body.dataset.band=Number(grade)<=3?'ilk':Number(grade)>=7?'ust':'orta';
 if(['harita','defter','rozetler'].includes(page))page='profil';
 const tab=['pasaport','hesap'].includes(page)?'profil':page;
 document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+tab)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 if(webMode&&page==='masa')desk();else if(webMode&&page==='oyunlar')games();else if(webMode&&page==='beceri')skillMap();else if(page==='dersler')catalog();else if(['profil','pasaport','hesap'].includes(page))profile(page);else path();
}
window.addEventListener('pageshow',render);window.addEventListener('hashchange',render);render();
