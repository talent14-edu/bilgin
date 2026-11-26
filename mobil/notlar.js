const params=new URLSearchParams(location.search);
const steps=['izle','oyna','olc'],labels=['İzle','Oyna','Ölç'];
function stored(key){try{return localStorage.getItem(key)}catch{return null}}
function write(key,value){try{localStorage.setItem(key,value);return true}catch{return false}}
// Öğretmen alanı kendi ilerlemesini ayrı anahtarlarda tutar (öğrencininkine karışmaz).
const ONEK=(window.OGRETMEN_ALANI||params.get('rol')==='ogretmen')?'bilgin.ogrt.':'bilgin.';
const last=new URLSearchParams(stored(ONEK+'patikam')||'');
let grade=params.get('k')||last.get('k')||'5';
if(!/^[1-8]$/.test(grade))grade='5';
function subjects(k=grade){return Object.keys(IOP_DERS).filter(key=>key.startsWith(k+'|')).map(key=>key.split('|')[1])}
let subject=params.get('d')||(grade===last.get('k')?last.get('d'):null);
if(!subjects().includes(subject))subject=subjects().includes('Fen Bilimleri')?'Fen Bilimleri':subjects()[0];
let theme=params.has('k')||params.has('d')?params.get('tema'):last.get('tema');
if(theme!=='atolye')theme='temel';
const originals={...IOP_DERS};
function themeList(k=grade,s=subject){
 const key=k+'|'+s,row=themeWorkshop[key],names=TEMALAR[key];
 return [{id:'temel',title:names[row[0]]||originals[key].konu,lesson:originals[key]},
         {id:'atolye',title:names[row[1]],lesson:workshopLesson(row)}];
}
function current(){return themeList().find(t=>t.id===theme)}
function lesson(){return current().lesson}
function key(prefix,k=grade,s=subject,t=theme){return ONEK+'mobil.'+prefix+k+'|'+s+(t==='temel'?'':'|'+t)}
function read(prefix){return stored(key(prefix))||''}
function save(prefix,value){return write(key(prefix),value)}
function result(k=grade,s=subject,t=theme){
 try{const r=JSON.parse(stored(key('',k,s,t)));return Number.isInteger(r?.correct)?r:null}catch{return null}
}
function level(){return result()?3:Math.max(0,Math.min(2,Number(read('adim.'))||0))}
function selection(){return new URLSearchParams({k:grade,d:subject,tema:theme})}
function remember(){write(ONEK+'patikam',selection().toString())}
const webMode=document.documentElement.dataset.app==='web'||params.get('gorunum')==='web';
function url(file,hash=''){
 const q=selection();
 if(webMode){
  const ogretmen=window.OGRETMEN_ALANI||params.get('rol')==='ogretmen';
  if(file==='uygulama.html')file=ogretmen?'../ogretmen/index.html':'../ogrenci/index.html';
  else if(file==='etkinlik.html'){file='../mobil/etkinlik.html';q.set('gorunum','web');if(ogretmen)q.set('rol','ogretmen')}
 }
 return file+'?'+q+hash;
}
function earned(){
 const stamps=[];
 for(const key of Object.keys(originals)){
  const [k,s]=key.split('|');
  for(const t of themeList(k,s)){
   const r=result(k,s,t.id);
   if(r)stamps.push({grade:k,subject:s,theme:t.title,date:r.earnedAt||''});
  }
 }
 return stamps.sort((a,b)=>b.date.localeCompare(a.date));
}
