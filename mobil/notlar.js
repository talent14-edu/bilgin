const params=new URLSearchParams(location.search);
let grade=/^[1-8]$/.test(params.get('k'))?params.get('k'):'5';
const steps=['izle','oyna','olc'],labels=['İzle','Oyna','Ölç'];
function subjects(){return Object.keys(IOP_DERS).filter(k=>k.startsWith(grade+'|')).map(k=>k.split('|')[1])}
let subject=subjects().includes(params.get('d'))?params.get('d'):(subjects().includes('Fen Bilimleri')?'Fen Bilimleri':subjects()[0]);
function key(prefix){return 'bilgin.mobil.'+prefix+grade+'|'+subject}
function read(prefix){try{return localStorage.getItem(key(prefix))||''}catch{return ''}}
function save(prefix,value){try{localStorage.setItem(key(prefix),value);return true}catch{return false}}
function result(){try{const r=JSON.parse(read(''));return Number.isInteger(r?.correct)?r:null}catch{return null}}
function level(){return result()?3:Math.max(0,Math.min(2,Number(read('adim.'))||0))}
function url(file,hash=''){const q=new URLSearchParams({k:grade,d:subject});return file+'?'+q+hash}
function lesson(){return IOP_DERS[grade+'|'+subject]}

