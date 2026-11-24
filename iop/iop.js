/* Bilgin · İzle, oyna, ölç motoru.
   Kullanım: IOP.kur(document.getElementById('iop'), {kok:'', sinif:4, ders:'Matematik'})
   Ana sayfa sınıf değişince IOP.sinif(k) çağırır. Ölç sonucu varsa window.veri() ile beceri haritasına düşer. */
(function(){
'use strict';
const DERS_SIRA={1:['Matematik','Türkçe','Hayat Bilgisi'],2:['Matematik','Türkçe','Hayat Bilgisi','İngilizce'],3:['Matematik','Türkçe','Fen Bilimleri','Hayat Bilgisi','İngilizce'],4:['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce'],5:['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce','Din Kültürü'],6:['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce','Din Kültürü'],7:['Matematik','Türkçe','Fen Bilimleri','Sosyal Bilgiler','İngilizce','Din Kültürü'],8:['Matematik','Türkçe','Fen Bilimleri','İnkılap Tarihi','İngilizce','Din Kültürü']};
const IKON={'Matematik':'matematik','Türkçe':'turkce','Hayat Bilgisi':'hayat','Fen Bilimleri':'fen','Sosyal Bilgiler':'sosyal','İngilizce':'ingilizce','Din Kültürü':'din','İnkılap Tarihi':'inkilap'};
const KISA={'Hayat Bilgisi':'Hayat B.','Fen Bilimleri':'Fen','Sosyal Bilgiler':'Sosyal','Din Kültürü':'Din K.','İnkılap Tarihi':'İnkılap'};
const EKSEN={'Matematik':'Matematik','Türkçe':'Türkçe','Fen Bilimleri':'Fen','İngilizce':'İngilizce','Sosyal Bilgiler':'Sosyal','Hayat Bilgisi':'Sosyal','Din Kültürü':'Sosyal','İnkılap Tarihi':'Sosyal'};
const HIZLAR=[0.75,1,1.25,1.5,2];
const R=[-2.5,1.5,-1];
const SVG_PLAY='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
const SVG_PAUSE='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';

const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>[...(r||document).querySelectorAll(s)];
const karistir=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- küçük çizimler ---------- */
function pasta(n,k,boyut){
  const r=46,c=50; let s='';
  for(let i=0;i<n;i++){
    const a0=-Math.PI/2+i*2*Math.PI/n, a1=a0+2*Math.PI/n;
    const x0=c+r*Math.cos(a0),y0=c+r*Math.sin(a0),x1=c+r*Math.cos(a1),y1=c+r*Math.sin(a1);
    const d=n===1?`M${c} ${c-r}A${r} ${r} 0 1 1 ${c-.01} ${c-r}Z`:`M${c} ${c}L${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${2*Math.PI/n>Math.PI?1:0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}Z`;
    s+=`<path d="${d}" fill="${i<k?'#FF8A3D':'#FFF4D8'}" stroke="#0B2E4F" stroke-width="2.5" stroke-linejoin="round"/>`;
  }
  return `<svg class="${boyut||''}" viewBox="0 0 100 100" role="img" aria-label="${n} eş parçadan ${k} tanesi boyalı">${s}</svg>`;
}
function saat(h,m,boyut){
  let s='<circle cx="50" cy="50" r="45" fill="#fff" stroke="#0B2E4F" stroke-width="4"/>';
  for(let i=0;i<12;i++){const a=i*Math.PI/6, x0=50+38*Math.sin(a), y0=50-38*Math.cos(a), x1=50+(i%3?41:34)*Math.sin(a), y1=50-(i%3?41:34)*Math.cos(a); s+=`<line x1="${x0.toFixed(1)}" y1="${y0.toFixed(1)}" x2="${x1.toFixed(1)}" y2="${y1.toFixed(1)}" stroke="#0B2E4F" stroke-width="${i%3?2:3.5}" stroke-linecap="round"/>`;}
  const ah=((h%12)+m/60)*Math.PI/6, am=m*Math.PI/30;
  s+=`<line x1="50" y1="50" x2="${(50+22*Math.sin(ah)).toFixed(1)}" y2="${(50-22*Math.cos(ah)).toFixed(1)}" stroke="#0B2E4F" stroke-width="6" stroke-linecap="round"/>`;
  s+=`<line x1="50" y1="50" x2="${(50+33*Math.sin(am)).toFixed(1)}" y2="${(50-33*Math.cos(am)).toFixed(1)}" stroke="#FF8A3D" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="50" r="4" fill="#0B2E4F"/>`;
  return `<svg class="${boyut||''}" viewBox="0 0 100 100" role="img" aria-label="Saat ${h}:${String(m).padStart(2,'0')}">${s}</svg>`;
}
function pusula(ara){
  const yon=[['K',0],['D',90],['G',180],['B',270]], arayon=[['KD',45],['GD',135],['GB',225],['KB',315]];
  let s='<circle cx="100" cy="100" r="92" fill="#fff" stroke="#0B2E4F" stroke-width="4"/>';
  const ok=(a,uz,renk,g)=>{const r=a*Math.PI/180, x=100+uz*Math.sin(r), y=100-uz*Math.cos(r), xl=100+12*Math.sin(r-Math.PI/2), yl=100-12*Math.cos(r-Math.PI/2), xr=100+12*Math.sin(r+Math.PI/2), yr=100-12*Math.cos(r+Math.PI/2); return `<path class="${g}" d="M${xl.toFixed(1)} ${yl.toFixed(1)}L${x.toFixed(1)} ${y.toFixed(1)}L${xr.toFixed(1)} ${yr.toFixed(1)}Z" fill="${renk}"/>`;};
  if(ara) arayon.forEach(([t,a],i)=>{ s+=ok(a,52,'#0E6E8C',''); const r=a*Math.PI/180; s+=`<text x="${(100+70*Math.sin(r)).toFixed(1)}" y="${(100-70*Math.cos(r)+6).toFixed(1)}" text-anchor="middle" font-family="Shantell Sans,sans-serif" font-weight="800" font-size="17" fill="#0E6E8C">${t}</text>`; });
  yon.forEach(([t,a])=>{ s+=ok(a,62,a===0?'#FF8A3D':'#0B2E4F',''); const r=a*Math.PI/180; s+=`<text x="${(100+78*Math.sin(r)).toFixed(1)}" y="${(100-78*Math.cos(r)+8).toFixed(1)}" text-anchor="middle" font-family="Shantell Sans,sans-serif" font-weight="800" font-size="22" fill="#0B2E4F">${t}</text>`; });
  s+='<circle cx="100" cy="100" r="7" fill="#0B2E4F"/>';
  return `<svg viewBox="0 0 200 200" role="img" aria-label="Pusula: kuzey, doğu, güney, batı${ara?' ve ara yönler':''}">${s}</svg>`;
}
/* [[a/b]] {{pasta:n:k}} {{saat:h:m}} {{renk:#hex:ad}} işaretlerini çevir */
function yaz(s){
  return String(s)
    .replace(/\[\[(\d+)\/(\d+)\]\]/g,'<span class="io-kesir" aria-label="$2’de $1"><span>$1</span><span>$2</span></span>')
    .replace(/\{\{pasta:(\d+):(\d+)\}\}/g,(_,n,k)=>pasta(+n,+k,'io-mini'))
    .replace(/\{\{saat:(\d+):(\d+)\}\}/g,(_,h,m)=>saat(+h,+m,'io-mini'))
    .replace(/\{\{renk:(#[0-9A-Fa-f]{6}):([^}]+)\}\}/g,'<i class="io-sw" style="background:$1" role="img" aria-label="$2"></i>');
}
/* sesli okuma için işaretleri sadeleştir */
function duz(s){ return String(s).replace(/<[^>]+>/g,'').replace(/\[\[(\d+)\/(\d+)\]\]/g,'$2’de $1'); }

/* ---------- sayı okunuşu (Bölük Kesici) ---------- */
const OK=['bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'], ON=['on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'], AD=['','bin','milyon','milyar'];
function uc(n){n=+n;const y=Math.floor(n/100),o=Math.floor(n%100/10),b=n%10;const s=[];if(y)s.push((y>1?OK[y-1]+' ':'')+'yüz');if(o)s.push(ON[o-1]);if(b)s.push(OK[b-1]);return s.join(' ');}
function oku(str){const g=[];for(let i=str.length;i>0;i-=3)g.unshift(str.slice(Math.max(0,i-3),i));const out=[];g.forEach((p,i)=>{const k=g.length-1-i,v=+p;if(!v)return;if(k===1&&v===1)out.push('bin');else out.push(uc(p)+(AD[k]?' '+AD[k]:''));});return out.join(' ');}

/* ---------- ses ---------- */
let ac=null;
function ton(k){ if(typeof window.ton==='function'&&window.ton!==ton&&k!=='bitti'){ try{window.ton(k);return;}catch(e){} }
  try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();({ok:[660,880],no:[300,230],tik:[560],bitti:[392,523,659,784]}[k]||[500]).forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+i*.09;o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.12,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+.24);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+.26)})}catch(e){} }
function salla(el){ try{el.animate([{transform:'translateX(0)'},{transform:'translateX(-7px)'},{transform:'translateX(7px)'},{transform:'translateX(0)'}],{duration:320});}catch(e){} }
function haritaya(oyun,ders,d,hata){ if(typeof window.veri==='function'){ try{ window.veri(oyun,EKSEN[ders]||'Matematik',d,hata); }catch(e){} } }

/* ======================================================= */
function kur(kok,ayar){
  ayar=ayar||{}; const yol=ayar.kok||'';
  const POZ=p=>`${yol}img/poz_${p}.webp`;
  const D=window.IOP_DERS||{};
  let sinif=ayar.sinif||4, ders=ayar.ders||'Matematik', L=null, adim='izle', oynaAcik=false;

  const G=!!ayar.gomulu;
  kok.innerHTML=`${G?'':'<div class="ic io-ic">'}
   ${G?'':`<div class="io-ust">
     <div><h2 class="io-bas" id="io-h">İzle, oyna, <u>ölç</u>.</h2><p class="io-konu" id="io-konu"></p></div>
     <div class="io-siniflar" role="group" aria-label="Sınıf seç">${[1,2,3,4,5,6,7,8].map(k=>`<button class="io-sinif" data-k="${k}" aria-pressed="false" aria-label="${k}. sınıf">${k}</button>`).join('')}</div>
     <div class="io-dersler" id="io-dersler" role="group" aria-label="Ders seç"></div>
     <span class="io-damga"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 10.5l2.6 2.6L14 7.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span id="io-damga">Maarif Modeli</span></span>
   </div>`}
   <div class="io-adimlar" role="tablist" aria-label="İzle, oyna, ölç adımları">
     <button class="io-adim" role="tab" data-p="izle" aria-controls="io-p-izle"><span class="n"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg></span><span><b>İzle</b><small>Bilgin anlatıyor</small></span></button>
     <button class="io-adim" role="tab" data-p="oyna" aria-controls="io-p-oyna"><span class="n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><rect x="3" y="7" width="18" height="11" rx="5"/><path d="M8 11v3M6.5 12.5h3M15 11.5h.01M17.5 13.5h.01"/></svg></span><span><b>Oyna</b><small id="io-oyun-ad">Oyun</small></span></button>
     <button class="io-adim" role="tab" data-p="olc" aria-controls="io-p-olc"><span class="n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></span><span><b>Ölç</b><small>4 soruda beceri</small></span></button>
   </div>
   <div class="io-panel" id="io-p-izle" role="tabpanel" aria-label="İzle">
     <div class="io-video" id="io-video">
       <div class="io-ekran"><div class="io-sahne" id="io-sahne"></div><span class="io-balon" id="io-balon"></span><img class="io-bilgin" id="io-bilgin" src="${POZ('selam')}" alt=""></div>
       <p class="io-altyazi" id="io-altyazi" aria-live="polite"></p>
       <div class="io-kontrol">
         <button class="yuvar" id="io-oynat" aria-label="Oynat">${SVG_PLAY}</button>
         <div class="io-zaman" id="io-zaman" role="slider" aria-label="Anlatımda ilerle" aria-valuemin="0" tabindex="0"><i id="io-dolum"></i></div>
         <time id="io-sure">0:00</time>
         <button class="io-hiz" id="io-hiz" aria-label="Oynatma hızı: 1x">1×</button>
         <label><input type="checkbox" id="io-ses"> Sesli</label>
         <button class="io-gec" data-git="oyna">Oyna →</button>
       </div>
     </div>
   </div>
   <div class="io-panel" id="io-p-oyna" role="tabpanel" aria-label="Oyna" hidden>${G?'':'<div class="io-kart" id="io-oyun"></div>'}</div>
   <div class="io-panel" id="io-p-olc" role="tabpanel" aria-label="Ölç" hidden><div class="io-kart" id="io-test"></div></div>
  ${G?'':'</div>'}`;

  const q=s=>$(s,kok);

  /* ---------- seçimler ---------- */
  function dersleriCiz(){
    if(G) return;
    const liste=DERS_SIRA[sinif].filter(d=>D[`${sinif}|${d}`]);
    if(!liste.includes(ders)) ders=liste[0];
    q('#io-dersler').innerHTML=liste.map(d=>`<button class="io-ders" data-d="${d}" aria-pressed="${d===ders}"><img src="${yol}assets/ders/${IKON[d]}.png" alt=""><span>${KISA[d]||d}</span></button>`).join('');
    $$('.io-sinif',kok).forEach(b=>b.setAttribute('aria-pressed',+b.dataset.k===sinif));
  }
  function yukle(){
    L=D[`${sinif}|${ders}`]; if(!L) return;
    if(!G){
      q('#io-konu').innerHTML=`${sinif}. sınıf · ${ders} · <b>${esc(L.konu)}</b>`;
      q('#io-damga').textContent=L.kod?`Maarif Modeli · ${L.kod}`:`Maarif Modeli · ${sinif}. sınıf`;
      q('#io-oyun-ad').textContent=L.oyun.ad;
    } else q('#io-oyun-ad').textContent=L.konu;
    $$('.io-adim',kok).forEach(a=>a.classList.remove('bitti'));
    oynaAcik=false;
    videoHazirla(); if(!G) oyunKur(); testKur(); git('izle',true);
  }
  function git(p,sessiz){
    adim=p;
    $$('.io-adim',kok).forEach(a=>{a.setAttribute('aria-selected',a.dataset.p===p); a.tabIndex=a.dataset.p===p?0:-1;});
    ['izle','oyna','olc'].forEach(x=>q('#io-p-'+x).hidden=x!==p);
    if(p!=='izle'&&oynuyor) durdur();
    if(p==='izle') sigdir();
    if(p==='oyna'&&G&&!oynaAcik){ oynaAcik=true; if(typeof ayar.oynaAc==='function') ayar.oynaAc(); }
    if(!sessiz) hizala();
  }
  /* bölüm görünür alanda değilse tam oturt (bir kez, yumuşak) */
  function hizala(){
    const hk=ayar.hizalaKok||kok, r=hk.getBoundingClientRect(), ust=parseFloat(getComputedStyle(hk).scrollMarginTop)||0;
    if(Math.abs(r.top-ust)>40 && r.height<=innerHeight){ hk.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); }
  }
  kok.addEventListener('click',e=>{
    const a=e.target.closest('.io-adim'); if(a){ ton('tik'); git(a.dataset.p); return; }
    const d=e.target.closest('.io-ders'); if(d){ ton('tik'); ders=d.dataset.d; dersleriCiz(); yukle(); hizala(); return; }
    const s=e.target.closest('.io-sinif'); if(s){ ton('tik'); disSinif(+s.dataset.k); return; }
    const g=e.target.closest('[data-git]'); if(g){ if(g.dataset.git==='oyna') q('.io-adim[data-p="izle"]').classList.add('bitti'); git(g.dataset.git); }
  });
  q('.io-adimlar').addEventListener('keydown',e=>{ if(!/Arrow(Left|Right)/.test(e.key)) return; const s=['izle','oyna','olc']; let i=s.indexOf(adim)+(e.key==='ArrowRight'?1:-1); i=(i+3)%3; git(s[i]); q(`.io-adim[data-p="${s[i]}"]`).focus(); });
  /* bölüm içindeki sınıf düğmesi ana sayfaya da haber versin */
  function disSinif(k){ if(typeof ayar.sinifDegis==='function') ayar.sinifDegis(k); else setSinif(k); }
  function setSinif(k){ if(k===sinif&&L) return; sinif=k; dersleriCiz(); yukle(); }

  /* ---------- İZLE ---------- */
  let sahneler=[], SURE=0, t=0, oynuyor=false, son=0, sNo=-1, hiz=1;
  function videoHazirla(){
    durdur(); t=0; sNo=-1; let bas=0;
    sahneler=L.v.map(s=>{ const sure=Math.max(5,Math.min(13,duz(s[0]).length/13+2)); const o={bas,sure,a:s[0],b:s[1],p:s[2],g:s[3]}; bas+=sure; return o; });
    SURE=bas; q('#io-zaman').setAttribute('aria-valuemax',Math.round(SURE));
    q('#io-oynat').innerHTML=SVG_PLAY; q('#io-oynat').setAttribute('aria-label','Oynat');
    ciz(true);
  }
  function gorsel(g){
    const G=(icerik,i)=>`<span class="io-g" data-i="${i}">${icerik}</span>`;
    switch(g.tip){
      case 'buyuk': return `<div class="g-buyuk"><b class="io-g" data-i="0">${yaz(g.y)}</b>${g.alt?`<small class="io-g" data-i="1">${yaz(g.alt)}</small>`:''}</div>`;
      case 'parca': return `<div class="g-parca">${g.ogeler.map((o,i)=>`<div class="pc io-g" data-i="${i}"><b>${yaz(o[0])}</b>${o[1]?`<small>${yaz(o[1])}</small>`:''}</div>`).join('')}</div>`;
      case 'liste': return `<div class="g-liste">${g.ogeler.map((o,i)=>G(yaz(o),i)).join('')}</div>`;
      case 'cift': return `<div class="g-cift">${g.ogeler.map((o,i)=>`<div class="io-g" data-i="${i}"><b>${yaz(o[0])}</b><i>→</i><span>${yaz(o[1])}</span></div>`).join('')}</div>`;
      case 'kural': return `<p class="g-kural io-g" data-i="0">${yaz(g.y)}</p>`;
      case 'sira': return `<ol class="g-sira">${g.ogeler.map((o,i)=>`<li class="io-g" data-i="${i}"><i></i><b>${yaz(o[0])}</b>${o[1]?`<small>${yaz(o[1])}</small>`:''}</li>`).join('')}</ol>`;
      case 'kova': return `<div class="g-kova">${g.kovalar.map((k,i)=>`<div class="kv io-g" data-i="${i*4}"><b>${yaz(k[0])}</b>${k[1].map((x,j)=>`<span class="io-g" data-i="${i*4+j+1}">${yaz(x)}</span>`).join('')}</div>`).join('')}</div>`;
      case 'renk': return `<div class="g-renk">${g.ogeler.map((o,i)=>`<div class="io-g" data-i="${i}"><i style="background:${o[1]}"></i><b>${esc(o[0])}</b></div>`).join('')}</div>`;
      case 'pasta': return `<div class="g-pasta">${g.ogeler.map((o,i)=>`<div class="io-g" data-i="${i}">${pasta(o[0],o[1])}<b>${yaz(o[2])}</b></div>`).join('')}</div>`;
      case 'pusula': return `<div class="g-pusula io-g" data-i="0">${pusula(g.ara)}</div>`;
      case 'saat': return `<div class="g-saat io-g" data-i="0">${saat(g.s,g.d)}<b>${yaz(g.y)}</b></div>`;
    }
    return '';
  }
  function ciz(ilk){
    let n=0; sahneler.forEach((s,i)=>{ if(t>=s.bas) n=i; });
    const s=sahneler[n];
    if(n!==sNo){ sNo=n; q('#io-sahne').innerHTML=gorsel(s.g); q('#io-altyazi').innerHTML=yaz(s.a); q('#io-balon').textContent=s.b; q('#io-bilgin').src=POZ(s.p); if(oynuyor) konus(s.a); }
    const yerel=t-s.bas, poster=ilk||(t===0&&!oynuyor);
    $$('.io-g',q('#io-sahne')).forEach(el=>el.classList.toggle('var',poster||yerel>=.25+(+el.dataset.i)*.45));
    q('#io-dolum').style.width=(SURE?t/SURE*100:0)+'%';
    q('#io-zaman').setAttribute('aria-valuenow',Math.round(t));
    q('#io-zaman').setAttribute('aria-valuetext',`${Math.round(t)} saniye`);
    const f=x=>`${Math.floor(x/60)}:${String(Math.floor(x%60)).padStart(2,'0')}`;
    q('#io-sure').textContent=`${f(t)} / ${f(SURE)}`;
  }
  function konus(m){ if(!q('#io-ses').checked||!('speechSynthesis' in window)) return; try{ speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(duz(m)); u.lang='tr-TR'; u.rate=Math.min(2,.95*hiz); const v=speechSynthesis.getVoices().find(v=>/^tr/i.test(v.lang)); if(v) u.voice=v; speechSynthesis.speak(u); }catch(e){} }
  function kare(ts){ if(!oynuyor) return; t=Math.min(SURE,t+(ts-son)/1000*hiz); son=ts; ciz(); if(t>=SURE){ oynuyor=false; q('#io-oynat').innerHTML=SVG_PLAY; q('#io-oynat').setAttribute('aria-label','Yeniden oynat'); q('.io-adim[data-p="izle"]').classList.add('bitti'); ton('bitti'); return; } requestAnimationFrame(kare); }
  function durdur(){ oynuyor=false; const b=q('#io-oynat'); if(b){ b.innerHTML=SVG_PLAY; b.setAttribute('aria-label','Oynat'); } try{speechSynthesis.cancel();}catch(e){} }
  q('#io-oynat').onclick=()=>{ if(oynuyor){ durdur(); return; } if(t>=SURE){ t=0; } oynuyor=true; sNo=-1; q('#io-oynat').innerHTML=SVG_PAUSE; q('#io-oynat').setAttribute('aria-label','Duraklat'); son=performance.now(); hizala(); requestAnimationFrame(kare); };
  q('#io-hiz').onclick=()=>{ hiz=HIZLAR[(HIZLAR.indexOf(hiz)+1)%HIZLAR.length]; const y=String(hiz).replace('.',','); q('#io-hiz').textContent=y+'×'; q('#io-hiz').setAttribute('aria-label',`Oynatma hızı: ${y}x`); if(oynuyor) konus(sahneler[sNo].a); };
  q('#io-ses').onchange=()=>{ if(!q('#io-ses').checked){ try{speechSynthesis.cancel();}catch(e){} } else if(oynuyor) konus(sahneler[sNo].a); };
  const zm=q('#io-zaman');
  const sar=e=>{ const r=zm.getBoundingClientRect(); t=Math.max(0,Math.min(SURE,(e.clientX-r.left)/r.width*SURE)); ciz(); };
  zm.addEventListener('pointerdown',e=>{ sar(e); try{zm.setPointerCapture(e.pointerId);}catch(_){} zm.onpointermove=sar; });
  zm.addEventListener('pointerup',()=>{ zm.onpointermove=null; if(oynuyor){ sNo=-1; } });
  zm.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'){t=Math.min(SURE,t+3);ciz();e.preventDefault();} if(e.key==='ArrowLeft'){t=Math.max(0,t-3);ciz();e.preventDefault();} });
  /* video, panelin yüksekliğine sığacak genişlikte */
  function sigdir(){
    const p=q('#io-p-izle'), v=q('#io-video'); if(p.hidden) return;
    const altH=q('.io-altyazi').offsetHeight+q('.io-kontrol').offsetHeight;
    const ust=parseFloat(getComputedStyle(kok).scrollMarginTop)||0;
    const tek=G&&matchMedia('(min-width:861px)').matches;
    const h=G&&!tek?innerHeight-ust-q('.io-adimlar').offsetHeight-altH-40:p.clientHeight-altH, w=p.clientWidth;
    v.style.width=Math.max(260,Math.min(w,h*16/9))+'px';
  }
  if('ResizeObserver' in window) new ResizeObserver(sigdir).observe(q('#io-p-izle')); addEventListener('resize',sigdir);

  /* ---------- OYNA ---------- */
  let oDogru=0, oHata=0;
  function oyunUst(il,top){ return `<img class="bant" src="${yol}assets/tape.png" alt=""><div class="io-satir"><span class="io-tur">${esc(L.oyun.ad)}</span><div class="io-il" aria-label="${il} / ${top}">${Array.from({length:top},(_,i)=>`<i class="${i<il?'dolu':''}"></i>`).join('')}</div></div><p class="io-soru">${esc(L.oyun.yonerge)}</p>`; }
  function oyunAlt(){ return `<div class="io-alt"><span class="io-yan"><img id="io-opoz" src="${POZ('dusunme')}" alt=""><span class="io-geri" id="io-ogeri" aria-live="polite">Hadi başlayalım!</span></span><button class="io-hap" id="io-oileri" hidden>Ölç’e geç →</button></div>`; }
  function oG(m,c,p){ const g=q('#io-ogeri'); g.className='io-geri '+(c||''); g.textContent=m; if(p) q('#io-opoz').src=POZ(p); }
  function oIl(n,top){ const il=q('#io-oyun .io-il'); il.innerHTML=Array.from({length:top},(_,i)=>`<i class="${i<n?'dolu':''}"></i>`).join(''); il.setAttribute('aria-label',`${n} / ${top}`); }
  function oyunBitti(){
    q('.io-adim[data-p="oyna"]').classList.add('bitti'); ton('bitti');
    oG(oHata===0?'Kusursuz! Hiç hata yok.':`Tamamlandı! ${oHata} kez yeniden denedin.`,'ok','rozet');
    const b=q('#io-oileri'); b.hidden=false; b.onclick=()=>git('olc');
    haritaya(L.oyun.ad,ders,oHata===0?4:2,oHata?'konu':undefined);
  }
  function oyunKur(){
    oDogru=0; oHata=0; const O=L.oyun, el=q('#io-oyun');
    if(O.tip==='kova'){
      const ogeler=karistir(O.ogeler.map((o,i)=>({t:o[0],k:o[1],i})));
      el.innerHTML=oyunUst(0,ogeler.length)+`<div class="io-tepsi" id="io-tepsi">${ogeler.map(o=>`<button class="io-tas" data-i="${o.i}" aria-pressed="false">${yaz(o.t)}</button>`).join('')}</div><div class="io-kovalar" style="--n:${O.kovalar.length}">${O.kovalar.map((k,i)=>`<button class="io-kova" data-k="${i}"><b>${yaz(k)}</b><span class="ic-l"></span></button>`).join('')}</div>`+oyunAlt();
      oG('Önce bir karta dokun.');
      let sec=null;
      el.onclick=e=>{
        const tas=e.target.closest('.io-tas'); if(tas){ ton('tik'); sec=tas; $$('.io-tas',el).forEach(x=>x.setAttribute('aria-pressed',x===tas)); $$('.io-kova',el).forEach(k=>k.classList.add('hazir')); oG('Şimdi doğru kutuyu seç.','', 'dusunme'); return; }
        const kv=e.target.closest('.io-kova'); if(!kv) return;
        if(!sec){ oG('Önce bir karta dokun.','no','ipucu'); salla(q('#io-tepsi')); return; }
        const dogruK=O.ogeler[+sec.dataset.i][1];
        if(+kv.dataset.k===dogruK){ ton('ok'); oDogru++; $('.ic-l',kv).insertAdjacentHTML('beforeend',`<span>${sec.innerHTML}</span>`); sec.remove(); sec=null; $$('.io-kova',el).forEach(k=>k.classList.remove('hazir','yanlis')); oIl(oDogru,O.ogeler.length); oG('Doğru!','ok','sevinc'); if(oDogru===O.ogeler.length) oyunBitti(); }
        else { ton('no'); oHata++; kv.classList.add('yanlis'); salla(kv); setTimeout(()=>kv.classList.remove('yanlis'),600); oG('Bu kutu değil, bir daha düşün.','no','ipucu'); }
      };
    }
    else if(O.tip==='eslestir'){
      const sol=karistir(O.ciftler.map((c,i)=>({t:c[0],i}))), sag=karistir(O.ciftler.map((c,i)=>({t:c[1],i})));
      el.innerHTML=oyunUst(0,O.ciftler.length)+`<div class="io-eslestir"><div class="io-sutun">${sol.map(o=>`<button class="io-es" data-s="sol" data-i="${o.i}" aria-pressed="false">${yaz(o.t)}</button>`).join('')}</div><div class="io-sutun">${sag.map(o=>`<button class="io-es" data-s="sag" data-i="${o.i}" aria-pressed="false">${yaz(o.t)}</button>`).join('')}</div></div>`+oyunAlt();
      oG('Soldan bir karta dokun.');
      let secS=null;
      el.onclick=e=>{
        const b=e.target.closest('.io-es'); if(!b||b.classList.contains('m')) return;
        if(b.dataset.s==='sol'){ ton('tik'); secS=b; $$('.io-es[data-s="sol"]',el).forEach(x=>x.setAttribute('aria-pressed',x===b)); oG('Şimdi sağdan eşini seç.','', 'dusunme'); return; }
        if(!secS){ oG('Önce soldan bir karta dokun.','no','ipucu'); salla(b); return; }
        if(b.dataset.i===secS.dataset.i){ ton('ok'); const r='m'+(oDogru%5); [b,secS].forEach(x=>{x.classList.add('m',r); x.setAttribute('aria-pressed','false'); x.setAttribute('aria-disabled','true');}); secS=null; oDogru++; oIl(oDogru,O.ciftler.length); oG('Eşleşti!','ok','sevinc'); if(oDogru===O.ciftler.length) oyunBitti(); }
        else { ton('no'); oHata++; salla(b); oG('Eşi bu değil, bir daha bak.','no','ipucu'); }
      };
    }
    else if(O.tip==='sirala'){
      const n=O.ogeler.length, havuz=karistir(O.ogeler.map((t,i)=>({t,i})));
      el.innerHTML=oyunUst(0,n)+`<div class="io-yuvalar">${O.ogeler.map((_,i)=>`<span class="io-yuva${i===0?' sirada':''}" data-y="${i}"></span>`).join('')}</div><div class="io-tepsi">${havuz.map(o=>`<button class="io-tas" data-i="${o.i}">${yaz(o.t)}</button>`).join('')}</div>`+oyunAlt();
      oG('Birinci sıraya gelecek kartı bul.');
      el.onclick=e=>{
        const b=e.target.closest('.io-tas'); if(!b) return;
        if(+b.dataset.i===oDogru){ ton('ok'); const y=q(`.io-yuva[data-y="${oDogru}"]`); y.innerHTML=b.innerHTML; y.classList.add('dolu'); y.classList.remove('sirada'); b.remove(); oDogru++; oIl(oDogru,n); const s=q(`.io-yuva[data-y="${oDogru}"]`); if(s) s.classList.add('sirada'); oG(oDogru<n?`Güzel! Şimdi ${oDogru+1}. sıra.`:'Sıralama tamam!','ok','sevinc'); if(oDogru===n) oyunBitti(); }
        else { ton('no'); oHata++; salla(b); oG('Bu kart şimdi değil, sırayı düşün.','no','ipucu'); }
      };
    }
    else if(O.tip==='kesici'){
      let s=0, kesik, asama;
      const ciz=()=>{
        const sayi=O.sayilar[s];
        el.innerHTML=oyunUst(s,O.sayilar.length)+`<div class="io-kesici" id="io-kesici">${sayi.split('').map((d,i)=>`<span class="k-rakam">${d}</span>${i<sayi.length-1?`<button class="k-ara" data-i="${i+1}" aria-label="${i+1}. rakamdan sonra çizgi"></button>`:''}`).join('')}</div><div class="io-adlar" id="io-adlar" hidden></div><div class="io-cevaplar" id="io-kSec" hidden></div>`+oyunAlt();
        q('#io-oyun .io-tur').textContent=`${O.ad} · ${s+1}/${O.sayilar.length}`;
        kesik=new Set(); asama=1; oG('Sağdan üçer say.');
      };
      const bek=n=>{const e=new Set(); for(let i=n-3;i>0;i-=3) e.add(i); return e;};
      el.onclick=e=>{
        const sayi=O.sayilar[s];
        const b=e.target.closest('.k-ara');
        if(b&&asama===1){ ton('tik'); const i=+b.dataset.i; kesik.has(i)?(kesik.delete(i),b.classList.remove('kesik','yanlis')):(kesik.add(i),b.classList.add('kesik'));
          const E=bek(sayi.length); $$('.k-ara',el).forEach(x=>x.classList.toggle('yanlis',x.classList.contains('kesik')&&!E.has(+x.dataset.i)));
          if(kesik.size===E.size&&[...E].every(x=>kesik.has(x))){ asama=2; ton('ok'); oG('Bölükler tamam! Şimdi okunuşu seç.','ok','sevinc');
            const adlar=['birler','binler','milyonlar','milyarlar']; q('#io-adlar').innerHTML=adlar.slice(0,Math.ceil(sayi.length/3)).reverse().map(a=>`<span>${a}</span>`).join(''); q('#io-adlar').hidden=false;
            const sec=karistir([[oku(sayi),1],[oku(sayi.slice(0,-1)),0],[oku(sayi+'0'),0]]);
            q('#io-kSec').innerHTML=sec.map((o,j)=>`<button class="io-cevap" data-d="${o[1]}" style="--r:${R[j]}deg">${o[0]}</button>`).join(''); q('#io-kSec').hidden=false; }
          else if([...kesik].some(x=>!E.has(x))){ oG('Bir çizgi yanlış yerde.','no','ipucu'); }
          return; }
        const c=e.target.closest('.io-cevap'); if(!c||c.disabled||asama!==2) return;
        if(c.dataset.d==='1'){ c.classList.add('ok'); ton('ok'); $$('.io-cevap',el).forEach(x=>x.disabled=true); oIl(s+1,O.sayilar.length);
          if(s<O.sayilar.length-1){ oG('Doğru okudun!','ok','sevinc'); const nx=q('#io-oileri'); nx.hidden=false; nx.textContent='Sonraki sayı →'; nx.onclick=()=>{ s++; ciz(); }; }
          else oyunBitti(); }
        else { c.classList.add('no'); c.disabled=true; ton('no'); oHata++; salla(c); oG('Bölük adlarına bir daha bak.','no','ipucu'); }
      };
      ciz();
    }
  }

  /* ---------- ÖLÇ ---------- */
  let tq=0, tDogru=0, ilk=true, BEC;
  function testKur(){ tq=0; tDogru=0; BEC=L.beceri.map(b=>[b,0,0]); testCiz(); }
  function testCiz(){
    const T=L.test, [s,ops]=T[tq], el=q('#io-test');
    ilk=true;
    el.innerHTML=`<img class="bant" src="${yol}assets/tape.png" alt=""><div class="io-satir"><span class="io-tur">Beceri testi · ${tq+1}/${T.length}</span><div class="io-il">${T.map((_,i)=>`<i class="${i<tq?'dolu':''}"></i>`).join('')}</div></div>
      <p class="io-soru">${yaz(s)}</p>
      <div class="io-cevaplar" id="io-tSec">${karistir(ops.map((o,i)=>[o,i])).map(([o,i],j)=>`<button class="io-cevap" data-i="${i}" style="--r:${R[j]}deg">${yaz(o)}</button>`).join('')}</div>
      <div class="io-alt"><span class="io-yan"><img id="io-tpoz" src="${POZ('dusunme')}" alt=""><span class="io-geri" id="io-tgeri" aria-live="polite">İlk denemen sayılır.</span></span><button class="io-hap" id="io-tileri" hidden>Sonraki →</button></div>`;
    q('#io-tSec').onclick=e=>{ const b=e.target.closest('.io-cevap'); if(!b||b.disabled) return; const k=T[tq][2]; const g=q('#io-tgeri');
      if(b.dataset.i==='0'){ b.classList.add('ok'); ton('ok'); if(ilk){ BEC[k][2]++; BEC[k][1]++; tDogru++; } $$('.io-cevap',el).forEach(x=>x.disabled=true); g.className='io-geri ok'; g.textContent=ilk?'Doğru!':'Şimdi doğru.'; q('#io-tpoz').src=POZ('sevinc'); const nx=q('#io-tileri'); nx.hidden=false; nx.textContent=tq<T.length-1?'Sonraki →':'Sonucu gör ★'; nx.onclick=()=>{ if(tq<T.length-1){ tq++; testCiz(); } else sonuc(); }; }
      else { if(ilk) BEC[k][2]++; ilk=false; b.classList.add('no'); b.disabled=true; ton('no'); salla(b); g.className='io-geri no'; g.textContent='Bir daha dene.'; q('#io-tpoz').src=POZ('ipucu'); } };
  }
  function sonuc(){
    const T=L.test, el=q('#io-test'); ton('bitti'); q('.io-adim[data-p="olc"]').classList.add('bitti');
    const bas=tDogru===T.length?'Tam puan, damga senin!':`${tDogru}/${T.length} ilk denemede doğru`;
    el.innerHTML=`<img class="bant" src="${yol}assets/tape.png" alt=""><div class="io-sonuc"><img src="${POZ('rozet')}" alt="Rozet tutan Bilgin"><div>
      <h3>${bas}</h3><p class="io-konu" style="margin:0">Sonuç beceri haritasına gönderildi.</p>
      <div class="io-bec">${BEC.filter(b=>b[2]).map(b=>{const p=Math.round(b[1]/b[2]*100);return `<div><span>${esc(b[0])}</span><em>%${p}</em><span class="cubuk"><b style="width:0" data-w="${p}"></b></span></div>`;}).join('')}</div>
      <div class="io-alt"><button class="io-hap" id="io-yeniden">Yeniden dene</button>${ayar.haritaLink?`<a class="io-hap cizgi" href="${ayar.haritaLink}">Haritada gör ↓</a>`:''}</div></div></div>`;
    requestAnimationFrame(()=>requestAnimationFrame(()=>$$('.io-bec .cubuk b',el).forEach(x=>x.style.width=x.dataset.w+'%')));
    q('#io-yeniden').onclick=()=>testKur();
    haritaya(`${L.konu} testi`,ders,tDogru*2-(T.length-tDogru));
    if(ayar.testBitti) ayar.testBitti({correct:tDogru, skills:BEC.filter(b=>b[2]).map(([name,correct,total])=>({name,correct,total}))});
  }

  function oyunCiz(hedef){ hedef.innerHTML='<div class="io-kart" id="io-oyun"></div>'; oyunKur(); }
  dersleriCiz(); yukle();
  return { sinif:setSinif, ders:(d)=>{ ders=d; dersleriCiz(); yukle(); }, yukle:(k,d)=>{ sinif=k; ders=d; yukle(); }, git, oyunCiz, ders_:()=>L };
}
window.IOP={kur};
})();
