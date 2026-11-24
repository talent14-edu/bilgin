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
function skillMap(){
 screen.innerHTML='<div class="deskTitle"><h1>Beceri haritam</h1></div><label class="skillPicker">Ders <select id="mapCourse" aria-label="Rapor dersi"></select></label><section class="resultsGrid"></section><a class="moreMap" href="../#harita">AI-LA’nın altı platformdan oluşan örnek beceri haritasını incele ↗</a>';
 const picker=screen.querySelector('#mapCourse');
 subjects().forEach(s=>picker.add(new Option(s,s,false,s===subject)));
 function show(){
  const course=picker.value;
  screen.querySelector('.resultsGrid').innerHTML=themeList(grade,course).map(t=>{
   const score=result(grade,course,t.id);
   const rows=t.lesson.beceri.map(name=>{
    const record=Array.isArray(score?.skills)?score.skills.find(b=>b?.name===name&&Number.isInteger(b.correct)&&Number.isInteger(b.total)&&b.total>0):null;
    return `<li><strong>${name}</strong><span>${record?record.correct+' / '+record.total+' ilk denemede doğru':'Henüz ölçülmedi'}</span>${record?'<meter aria-label="'+name+'" value="'+record.correct+'" max="'+record.total+'"></meter>':''}</li>`;
   }).join('');
   return `<article class="gameCard"><p class="eyebrow">${course}</p><h2>${t.title}</h2><ul class="skillRows">${rows}</ul><button class="action" data-theme="${t.id}">Patikaya git →</button></article>`;
  }).join('');
  screen.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{subject=course;theme=b.dataset.theme;openRoute('patika')});
 }
 picker.onchange=show;show();
}
function curriculum(course){
 const list=themeList(grade,course),names=TEMALAR[grade+'|'+course]||[];
 const titles=[...new Set([...names,...list.map(t=>t.title)])];
 const dialog=document.createElement('dialog');dialog.className='themeDialog';
 dialog.setAttribute('aria-labelledby','themeIndexTitle');
 dialog.innerHTML=`<div class="sectionTitle"><div><p class="eyebrow">${grade}. sınıf · ${course}</p><h2 id="themeIndexTitle">Tema dizini</h2></div><button class="closeDialog" aria-label="Kapat">×</button></div><ul>${titles.map(title=>{
  const playable=list.find(t=>t.title===title);
  return '<li><strong>'+title+'</strong>'+(playable?'<button class="action" data-open="'+playable.id+'">Patikayı aç →</button>':'<small>Program teması</small>')+'</li>';
 }).join('')}</ul>`;
 document.body.append(dialog);
 dialog.querySelector('.closeDialog').onclick=()=>dialog.close();
 dialog.onclose=()=>dialog.remove();
 dialog.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{dialog.close();subject=course;theme=b.dataset.open;openRoute('patika')});
 dialog.showModal();
}
