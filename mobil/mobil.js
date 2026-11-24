const screen=document.querySelector('#screen'),gradeSelect=document.querySelector('#grade');
gradeSelect.innerHTML=Array.from({length:8},(_,i)=>'<option value="'+(i+1)+'">'+(i+1)+'. sınıf</option>').join('');
gradeSelect.value=grade;
const icons={'Matematik':'matematik','Fen Bilimleri':'fen','Türkçe':'turkce','Hayat Bilgisi':'hayat','Sosyal Bilgiler':'sosyal','Din Kültürü':'din','İngilizce':'ingilizce','İnkılap Tarihi':'inkilap'};
function choose(s){subject=s;history.replaceState(null,'',url('uygulama.html',location.hash));render()}
gradeSelect.onchange=()=>{grade=gradeSelect.value;choose(subjects().includes(subject)?subject:subjects()[0])};
function picker(){return '<select id="subject" aria-label="Ders">'+subjects().map(s=>'<option '+(s===subject?'selected':'')+'>'+s+'</option>').join('')+'</select>'}
function heading(title){return '<div class="heading"><h1>'+title+'</h1>'+picker()+'</div>'}
function pathLink(){return '<a class="action" href="#patika">Patikayı aç →</a>'}
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
   const label=titles[i]+', '+(done?(award?'becerilerini gör':'tekrar aç'):active?'başla':'kilitli');
   return `<div class="stop ${x>50?'west':'east'}" style="--x:${x}%;--y:${y}%">
     <button class="node ${state}${award?' award':''}" ${action} aria-label="${label}" ${!done&&!active?'disabled':''}>
     <span aria-hidden="true">${done&&!award?'✓':marks[i]}</span></button>
     <div class="stopLabel"><strong>${titles[i]}</strong><small>${hints[i]}</small></div>
     ${active?'<span class="startFlag">Başla</span><img class="guideWorm" src="../img/poz_selam.webp" alt="">':''}</div>`;
 }).join('');
 const road='M29 16 C29 26 67 27 67 39 S30 50 30 62 S63 74 63 85';
 screen.innerHTML=heading('Patikam')+`<section class="trail"><div class="trailTitle"><div><p class="eyebrow">${subject} · ${grade}. sınıf</p><h2>${l.konu}</h2></div><span class="score" aria-label="${n} adım tamamlandı">${n}/3</span></div>
 <div class="land"><svg class="track" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="${road}"/></svg>${nodes}</div></section>`;
 screen.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>location.href=url('etkinlik.html')+'&adim='+steps[Number(b.dataset.step)]);
 screen.querySelector('[data-award]').onclick=()=>location.hash='harita';
}
function catalog(){
 screen.innerHTML='<h1>Ders patikaları</h1><div class="filters"><input type="search" aria-label="Patika ara" placeholder="Ders, oyun veya beceri ara"><select aria-label="İlerleme"><option>Tümü</option><option>Tamamlananlar</option><option>Devam edenler</option></select></div><div id="card"></div>';
 const input=screen.querySelector('input'),filter=screen.querySelector('select'),card=screen.querySelector('#card');
 let pos=0;
 function draw(){
   const matches=subjects().filter(s=>{
    const l=IOP_DERS[grade+'|'+s];
    let done=false;try{done=Number.isInteger(JSON.parse(localStorage.getItem('bilgin.mobil.'+grade+'|'+s))?.correct)}catch{}
    return (!filter.selectedIndex || (filter.selectedIndex===1)===done) && [s,l.konu,l.oyun.ad,...l.beceri].join(' ').toLocaleLowerCase('tr').includes(input.value.trim().toLocaleLowerCase('tr'));
   });
   if(!matches.length){card.innerHTML='<p class="paper">Bu seçimde patika bulunamadı.</p>';return}
   const s=matches[pos],l=IOP_DERS[grade+'|'+s];
   card.innerHTML='<article class="paper"><img class="subjectArt" src="../assets/ders/'+icons[s]+'.png" alt=""><p class="eyebrow">'+s+'</p><h2>'+l.konu+'</h2><p>'+l.oyun.ad+' · '+l.test.length+' soru</p><p>'+l.beceri.join(' · ')+'</p><button class="action" id="open">Patikayı aç →</button></article><div class="pager"><button id="prev" aria-label="Önceki patika">←</button><span>'+ (pos+1)+' / '+matches.length+'</span><button id="next" aria-label="Sonraki patika">→</button></div>';
   card.querySelector('#open').onclick=()=>{choose(s);location.hash='patika'};
   for(const [id,d] of [['prev',-1],['next',1]]){const b=card.querySelector('#'+id);b.disabled=!matches[pos+d];b.onclick=()=>{pos+=d;draw()}}
 }
 input.oninput=filter.onchange=()=>{pos=0;draw()};draw();
}
function render(){
 const page=location.hash.slice(1)||'patika';
 document.querySelectorAll('nav a').forEach(a=>a.toggleAttribute('aria-current',a.hash==='#'+page));
 if(page==='dersler'){catalog();return}
 if(page==='defter'){
  screen.innerHTML=heading('Defterim')+'<form class="paper"><p class="eyebrow">'+subject+'</p><h2>'+lesson().konu+'</h2><label for="note">Bu patikada ne keşfettin?</label><textarea id="note" rows="4" maxlength="1500"></textarea><button class="action">Notumu kaydet</button><p role="status">Notların bu tarayıcıda saklanır.</p></form>';
  const note=screen.querySelector('textarea');note.value=read('not.');
  screen.querySelector('form').onsubmit=e=>{e.preventDefault();screen.querySelector('[role=status]').textContent=save('not.',note.value)?'Notun kaydedildi.':'Not kaydedilemedi.'};
 }else if(page==='harita'){
  const r=result();
  screen.innerHTML=heading('Becerilerim')+'<article class="paper"><img class="subjectArt" src="../img/poz_rozet.webp" alt=""><h2>'+lesson().konu+'</h2><p>'+(r?r.correct+' / '+lesson().test.length+' ilk denemede doğru':'Ölç adımını bitirince beceri sonuçların burada görünür.')+'</p><div id="skills"></div>'+pathLink()+'</article>';
  if(r)for(const b of Array.isArray(r.skills)?r.skills:[]){if(!b||!lesson().beceri.includes(b.name)||!Number.isInteger(b.total)||!Number.isInteger(b.correct))continue;const line=document.createElement('p');line.className='skill';line.textContent=b.name+' · '+b.correct+'/'+b.total;screen.querySelector('#skills').append(line)}
 }else path();
 screen.querySelector('#subject').onchange=e=>choose(e.target.value);
}
window.addEventListener('pageshow',render);window.addEventListener('hashchange',render);render();
