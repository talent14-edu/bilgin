const data = window.IOP_DERS;
const subjects = {Matematik:'matematik','Türkçe':'turkce','Fen Bilimleri':'fen','Hayat Bilgisi':'hayat','Sosyal Bilgiler':'sosyal','İngilizce':'ingilizce','Din Kültürü':'din','İnkılap Tarihi':'inkilap'};
const pages = {defter:'Defterim',dersler:'Derslerim',harita:'Beceri haritam'};
const paths = {
  defter:'M3 5q4-2 9 1 5-3 9-1v14q-5-2-9 1-5-3-9-1z M12 6v14',
  dersler:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  harita:'M4 20V11h4v9z M10 20V7h4v13z M16 20V3h4v17z'
};
const select = document.querySelector('#grade');
select.innerHTML = Array.from({length:8},(_,i)=>'<option value="'+(i+1)+'">'+(i+1)+'. sınıf</option>').join('');
const gradeParam = new URLSearchParams(location.search).get('k');
select.value = /^[1-8]$/.test(gradeParam) ? gradeParam : '5';
select.onchange = () => {const url=new URL(location.href);url.searchParams.set('k',select.value);history.replaceState(null,'',url);render()};
function lessonUrl(subject){return 'durak.html?k='+select.value+'&d='+encodeURIComponent(subject)}
function lessonRow(subject){
  const lesson=data[select.value+'|'+subject];
  return `<a class="row" href="${lessonUrl(subject)}"><img alt="" src="../assets/ders/${subjects[subject]}.png"><span><small>${subject}</small><strong>${lesson.konu}</strong></span><span class="arrow" aria-hidden="true">›</span></a>`;
}
function result(subject){
  try{
    const key=select.value+'|'+subject;
    const entry=JSON.parse(localStorage.getItem('bilgin.mobil.'+key));
    if(!entry || !Number.isInteger(entry.correct))return null;
    const skills=(Array.isArray(entry.skills)?entry.skills:[]).filter(b=>b && data[key].beceri.includes(b.name) && Number.isInteger(b.correct) && Number.isInteger(b.total));
    return {correct:entry.correct,skills};
  }catch{return null}
}
function catalog(){
  return `<form id="filters" role="search"><label>Ders kitaplığında ara<input type="search" id="query" placeholder="Ders, konu, oyun veya beceri"></label><label>Durum<select id="status"><option value="all">Tüm duraklar</option><option value="new">Tamamlanacaklar</option><option value="done">Tamamlananlar</option></select></label></form><p class="meta count" aria-live="polite" id="count"></p><div class="rows catalog" id="matches"></div>`;
}
function bindCatalog(list){
  const form=document.querySelector('#filters');
  form.onsubmit=e=>e.preventDefault();
  function update(){
    const query=form.querySelector('#query').value.trim().toLocaleLowerCase('tr');
    const status=form.querySelector('#status').value;
    const matches=list.filter(s=>{
      const l=data[select.value+'|'+s];
      const text=[s,l.konu,l.oyun.ad,...l.beceri].join(' ').toLocaleLowerCase('tr');
      return text.includes(query) && (status==='all' || Boolean(result(s))===(status==='done'));
    });
    document.querySelector('#count').textContent=matches.length+' durak';
    document.querySelector('#matches').innerHTML=matches.length?matches.map(s=>{
      const l=data[select.value+'|'+s];
      return `<article class="sheet">${lessonRow(s)}<div class="cardDetail"><p><b>Oyun</b> · ${l.oyun.ad}</p><p>${l.beceri.join(' · ')}</p><small>${result(s)?'✓ Tamamlandı':'Ölç · '+l.test.length+' soru'}</small></div></article>`;
    }).join(''):'<p>Bu seçimde durak bulunamadı. Aramayı veya durum filtresini değiştir.</p>';
  }
  form.oninput=update;
  update();
}
function skillCard(subject){
  const l=data[select.value+'|'+subject];
  const r=result(subject);
  const practice=r.skills.filter(b=>b.correct<b.total).map(b=>b.name);
  const bars=r.skills.map(b=>`<li><span>${b.name}</span><meter min="0" max="${b.total}" value="${b.correct}" aria-label="${b.name}"></meter><strong>${b.correct}/${b.total}</strong></li>`).join('');
  return `<article class="sheet skillCard"><p class="meta">${subject}</p><h2>${l.konu}</h2><p>${r.correct} / ${l.test.length} ilk denemede doğru</p><ul class="bars">${bars}</ul>${practice.length?`<p class="feedback"><b>Tekrar çalış</b> · ${practice.join(', ')}</p>`:''}<a class="more" href="${lessonUrl(subject)}&adim=${practice.length?'izle':'oyna'}">${practice.length?'Anlatımı tekrar aç':'Oyunu yeniden oyna'} →</a></article>`;
}
function render(){
  const page=Object.hasOwn(pages,location.hash.slice(1))?location.hash.slice(1):'defter';
  const list=Object.keys(subjects).filter(s=>data[select.value+'|'+s]);
  const completed=list.filter(s=>result(s));
  const first=list.includes('Fen Bilimleri')?'Fen Bilimleri':list[0];
  const focus=[first,...list].find(s=>!completed.includes(s))||first;
  const lesson=data[select.value+'|'+focus];
  const scene=select.value==='5' && focus==='Fen Bilimleri'?'../assets/sahne/k5.webp':'../img/poz_selam.webp';
  const summary=`<div class="note"><h2>Durak damgalarım</h2><progress value="${completed.length}" max="${list.length}" aria-label="Tamamlanan duraklar"></progress><p>${list.length} duraktan ${completed.length} tanesini tamamladın.</p></div>`;
  const nav=document.querySelector('nav');
  nav.innerHTML=Object.entries(pages).map(([id,label])=>`<a href="#${id}" ${page===id?'aria-current="page"':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="${paths[id]}"/></svg>${label}</a>`).join('');
  let body;
  if(page==='defter'){
    body=`<div class="spread"><article class="hero"><span class="tag">${completed.length===list.length?"Tekrar durağı":"Sıradaki durak"} · ${focus}</span><img class="art" src="${scene}" alt=""><h2>${lesson.konu}</h2><p class="gameLine"><b>${lesson.oyun.ad}</b> · ${lesson.oyun.yonerge}</p><a class="primary" href="${lessonUrl(focus)}">Durağa gir <span>→</span></a></article><aside class="secondary"><section class="group"><div class="heading"><h2>Diğer duraklar</h2><a class="more" href="#dersler">Tümü →</a></div><div class="rows">${list.filter(s=>s!==focus).slice(0,3).map(lessonRow).join('')}</div></section><section class="group">${summary}</section></aside></div>`;
  }else if(page==='dersler'){
    body=catalog();
  }else{
    body=summary+(completed.length?'<section class="group"><div class="heading"><h2>Son ölçümlerim</h2></div><div class="catalog rows">'+completed.map(skillCard).join('')+'</div></section>':'<div class="sheet empty"><img src="../img/poz_rozet.webp" alt=""><div><h2>İlk damganı kazan</h2><p>Bir durağın Ölç adımını bitir. Hangi becerileri kazandığını ve hangilerini tekrar çalışabileceğini burada göreceksin.</p><a class="more" href="#dersler">Bir durak seç →</a></div></div>');
  }
  document.querySelector('main').innerHTML='<h1>'+(page==='defter'?'Keşif defterim':pages[page])+'</h1>'+body;
  if(page==='dersler')bindCatalog(list);
  if(page==='defter'){
    const notes=list.map(subject=>({subject,text:readLessonNote(select.value,subject)})).filter(note=>note.text);
    if(notes.length){
      const section=document.createElement('section');
      section.className='group';
      section.innerHTML='<div class="heading"><h2>Ders notlarım</h2></div><div class="rows catalog"></div>';
      for(const note of notes){
        const item=document.createElement('a');
        item.className='sheet noteLink';
        item.href=lessonUrl(note.subject)+'#notum';
        const title=document.createElement('strong');
        title.textContent=data[select.value+'|'+note.subject].konu;
        const body=document.createElement('p');
        body.textContent=note.text;
        item.append(title,body);
        section.lastElementChild.append(item);
      }
      document.querySelector('main').append(section);
    }
  }
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);
window.addEventListener('pageshow',render);
render();
