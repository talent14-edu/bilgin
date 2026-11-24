const screen=document.querySelector('#screen'),gradeSelect=document.querySelector('#grade');
gradeSelect.innerHTML=Array.from({length:8},(_,i)=>'<option value="'+(i+1)+'">'+(i+1)+'. sınıf</option>').join('');
gradeSelect.value=grade;
const icons={'Matematik':'matematik','Fen Bilimleri':'fen','Türkçe':'turkce','Hayat Bilgisi':'hayat','Sosyal Bilgiler':'sosyal','Din Kültürü':'din','İngilizce':'ingilizce','İnkılap Tarihi':'inkilap'};
gradeSelect.onchange=()=>{
 grade=gradeSelect.value;
 if(!subjects().includes(subject))subject=subjects()[0];
 theme='temel';badgePage=subjects().indexOf(subject);openRoute(['#profil','#pasaport'].includes(location.hash)?location.hash.slice(1):'dersler');
};
function openRoute(route){
 remember();history.replaceState(null,'',url('uygulama.html','#'+route));render();
}
function path(){
 const l=lesson(),n=level();
 const points=[[29,16],[67,39],[30,62],[63,85]];
 const titles=[...labels,'Patika damgası'];
 const hints=[l.v.length+' sahne',l.oyun.ad,l.test.length+' soru',n===3?'Kazanıldı':'3 adımı tamamla'];
 const marks=['▶','✦','★','🏆'];
 const nodes=points.map(([x,y],i)=>{
   const award=i===3,done=i<n||(award&&n===3),active=i===n&&!award;
   const state=done?'done':active?'active':'locked';
   const action=award?'data-award':'data-step="'+i+'"';
   const label=titles[i]+', '+(done?(award?'pasaportunu aç':'tekrar aç'):active?'başla':'kilitli');
   return `<div class="stop ${x>50?'west':'east'}" style="--x:${x}%;--y:${y}%">
     <button class="node ${state}${award?' award':''}" ${action} aria-label="${label}" ${!done&&!active?'disabled':''}>
     <span aria-hidden="true">${done&&!award?'✓':marks[i]}</span></button>
     <div class="stopLabel"><strong>${titles[i]}</strong><small>${hints[i]}</small></div>
     ${active?'<span class="startFlag">Başla</span><img class="guideWorm" src="../img/poz_selam.webp" alt="">':''}</div>`;
 }).join('');
 const road='M29 16 C29 26 67 27 67 39 S30 50 30 62 S63 74 63 85';
 screen.innerHTML='<div class="heading"><h1>Patikam</h1><a class="switchLesson" href="#dersler">Tema seç ↗</a></div>'+`<section class="trail"><div class="trailTitle"><div><p class="eyebrow">${subject} · ${grade}. sınıf</p><h2>${current().title}</h2><p class="topicHint">${l.konu}</p></div><span class="score" aria-label="${n} adım tamamlandı">${n}/3</span></div>
 <div class="land"><svg class="track" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${road}"/></svg>${nodes}</div></section>`;
 screen.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>location.href=url('etkinlik.html')+'&adim='+steps[Number(b.dataset.step)]);
 screen.querySelector('[data-award]').onclick=()=>location.hash='pasaport';
}
function catalog(){
 screen.innerHTML='<h1>Dersler</h1><form id="choices" class="paper choices"><label>Ders<select id="subject"></select></label><label>Tema<select id="theme"></select></label><article id="preview"></article><button class="action">Patikayı aç →</button></form>';
 const course=screen.querySelector('#subject'),picker=screen.querySelector('#theme');
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
 screen.querySelector('form').onsubmit=e=>{e.preventDefault();subject=course.value;theme=picker.value;badgePage=subjects().indexOf(subject);openRoute('patika')};
}
let stampPage=0,badgePage=subjects().indexOf(subject);
function pages(count,index,update){
 const footer=screen.querySelector('.pager');if(!footer||count<2)return;
 footer.innerHTML='<button aria-label="Önceki">←</button><span>'+(index+1)+' / '+count+'</span><button aria-label="Sonraki">→</button>';
 const [prev,next]=footer.querySelectorAll('button');prev.disabled=index===0;next.disabled=index===count-1;
 prev.onclick=()=>update(index-1);next.onclick=()=>update(index+1);
}
function profile(page){
 const stamps=earned(),list=subjects();
 const counts=new Map(list.map(s=>[s,stamps.filter(x=>x.grade===grade&&x.subject===s).length]));
 const badges=[...counts.values()].filter(Boolean).length;
 const passport=page==='pasaport';
 screen.innerHTML=`<div class="heading"><h1>Profilim</h1></div><div class="profileSummary"><img src="../img/poz_rozet.webp" alt=""><div><strong>${stamps.length} damga</strong><small>Tüm sınıflardaki pasaportum</small></div></div><div class="profileTabs"><a href="#pasaport" ${passport?'aria-current="page"':''}>Pasaportum</a><a href="#profil" ${!passport?'aria-current="page"':''}>Ders rozetlerim</a></div><article class="paper collection"></article><div class="pager"></div>`;
 const card=screen.querySelector('.collection');
 if(passport){
  if(!stamps.length){card.innerHTML='<h2>İlk damganı kazan</h2><p>Bir temanın İzle, Oyna ve Ölç adımlarını bitir. Tema damgan bu pasaporta işlenecek.</p><a class="action" href="#dersler">Tema seç →</a>';return}
  stampPage=Math.min(stampPage,stamps.length-1);const entry=stamps[stampPage];
  card.innerHTML=`<div class="seal"><img src="../assets/ders/${icons[entry.subject]}.png" alt=""></div><p class="eyebrow">${entry.grade}. sınıf · ${entry.subject}</p><h2>${entry.theme}</h2><p>✓ Tema tamamlandı${entry.date?' · '+new Date(entry.date).toLocaleDateString('tr-TR'):''}</p>`;
  pages(stamps.length,stampPage,i=>{stampPage=i;profile(page)});
 }else{
  badgePage=Math.min(badgePage,list.length-1);
  const s=list[badgePage],n=counts.get(s),total=themeList(grade,s).length;
  card.innerHTML=`<div class="medal ${n?'won':''}" style="--size:${56+14*n}px"><img src="../assets/ders/${icons[s]}.png" alt=""></div><p class="eyebrow">${grade}. sınıf · ${badges} kazanılmış ders rozeti</p><h2>${s} rozeti</h2><progress aria-label="${s} rozeti" value="${n}" max="${total}"></progress><p>${n} / ${total} tema tamamlandı</p><small>${n===0?'İlk tema bitince bu rozeti kazanırsın.':n===total?'Ders rozeti en yüksek seviyede.':'Bir sonraki tema bu rozeti büyütür.'}</small>`;
  pages(list.length,badgePage,i=>{badgePage=i;profile(page)});
 }
}
function render(){
 let page=location.hash.slice(1)||'patika';
 if(['harita','defter','rozetler'].includes(page))page='profil';
 const tab=page==='pasaport'?'profil':page;
 document.querySelectorAll('nav a').forEach(a=>{if(a.hash==='#'+tab)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 if(page==='dersler')catalog();else if(page==='profil'||page==='pasaport')profile(page);else path();
}
window.addEventListener('pageshow',render);window.addEventListener('hashchange',render);render();
