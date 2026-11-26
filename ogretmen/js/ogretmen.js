// BİLGİN öğretmen masası. Öğrenci alanının (../ogrenci/) aynı kodu: Dersler, Patikam, Oyun dolabı ve
// Profil öğretmende de çalışır; öğretmenin ilerlemesi ayrı anahtarlarda (bilgin.ogrt.*) tutulur.
// Bu dosya öğretmene özel ekranları ekler: öğretmen anasayfası, Sınıflarım (patika ödevi akışı,
// ödevler, sınıf raporu), TeachTech. Okumino öğretmen odasının (okumino.app/ogretmen) BİLGİN'e uyarlaması.
// Veriler şimdilik bu cihazda (demo); öğrenci ilerlemeleri örnek değerdir.
// notlar.js'ten SONRA, masa.js ve mobil.js'ten ÖNCE yüklenir.

window.HESAP_ANAHTARI = 'bilgin.ogrt.hesap';
window.HESAP_VARSAYILAN = {ad: 'Ayşe', soyad: 'Demir', eposta: 'ayse.demir@okul.bilgin.app', avatar: 'sevinc'};

/* ---------- küçük yardımcılar (mobil.js'ten önce yüklendiği için kendi kopyaları) ---------- */
const $o = (s, r = document) => r.querySelector(s), $$o = (s, r = document) => [...r.querySelectorAll(s)];
const kacis = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
const IKON = {damla: '../img/poz_rozet.webp'};
const ik = (src, cls = 'oIk') => `<img class="${cls}" src="${src}" alt="">`;
const DERS_IK = d => `../assets/ders/${({'Matematik': 'matematik', 'Fen Bilimleri': 'fen', 'Türkçe': 'turkce', 'Hayat Bilgisi': 'hayat', 'Sosyal Bilgiler': 'sosyal', 'Din Kültürü': 'din', 'İngilizce': 'ingilizce', 'İnkılap Tarihi': 'inkilap'})[d] || 'matematik'}.png`;

/* ---------- kayıt ---------- */
const OD_ANAHTAR = 'bilgin.ogrt.veri-v1';
const AD = ['Ela', 'Kerem', 'Zeynep', 'Mert', 'Defne', 'Yusuf', 'Elif', 'Ömer', 'Asya', 'Emir', 'Nehir', 'Alp', 'Duru', 'Can', 'Lina', 'Aras', 'Ada', 'Eymen', 'Mira', 'Kuzey'];
const SOYAD = ['Kaya', 'Demir', 'Yıldız', 'Şahin', 'Çelik', 'Aydın', 'Öztürk', 'Arslan', 'Doğan', 'Koç', 'Kurt', 'Polat'];
const latin = s => s.toLocaleLowerCase('tr').replace(/ı/g, 'i').replace(/[çğöşü]/g, c => ({ç: 'c', ğ: 'g', ö: 'o', ş: 's', ü: 'u'})[c]);
function ogrUret(sinifId, n, tohum) {
  return Array.from({length: n}, (_, i) => { const a = AD[(i * 7 + tohum) % AD.length], s = SOYAD[(i * 5 + tohum * 3) % SOYAD.length];
    return {id: `${sinifId}-o${i + 1}`, sinifId, ad: a, soyad: s, eposta: latin(`${a}.${s}`) + '@okul.bilgin.app'}; });
}
function tohumVeri() {
  const siniflar = [{id: 's3b', sinif: 3, sube: 'B'}, {id: 's5a', sinif: 5, sube: 'A'}, {id: 's6c', sinif: 6, sube: 'C'}, {id: 's8b', sinif: 8, sube: 'B'}];
  const ogrenciler = siniflar.flatMap((s, k) => ogrUret(s.id, [7, 8, 6, 6][k], k + 2));
  const gun = d => new Date(Date.now() - d * 864e5).toISOString();
  const odevler = [
    {id: 'od1', sinifId: 's5a', atama: 'tum', ogrenciler: [], ders: 'Fen Bilimleri', tema: 'temel', baslik: 'Kuvveti Tanıyalım patikası', aciklama: 'İzle, Oyna ve Ölç adımlarını sırayla bitir; Ölç sorularında ilk denemen sayılır.', tarih: gun(3)},
    {id: 'od2', sinifId: 's3b', atama: 'tum', ogrenciler: [], ders: 'Matematik', tema: 'temel', baslik: 'Matematik: ilk tema patikası', aciklama: 'Anlatımı izle, oyunu oyna, testi çöz. Damganı pasaportuna ekle!', tarih: gun(1)},
    {id: 'od3', sinifId: 's8b', atama: 'tum', ogrenciler: [], ders: 'Türkçe', tema: 'temel', baslik: 'Türkçe tema patikası', aciklama: 'Patikanın üç adımını bitir. Ölç adımındaki beceri sonucuna birlikte bakacağız.', tarih: gun(5)}];
  return {siniflar, ogrenciler, odevler, secili: 's5a'};
}
function veri() {
  try { const v = JSON.parse(localStorage.getItem(OD_ANAHTAR)); if (v && v.siniflar) return v; } catch {}
  const v = tohumVeri(); kaydet(v); return v;
}
function kaydet(v) { try { localStorage.setItem(OD_ANAHTAR, JSON.stringify(v)); } catch {} }
const sinifAdi = s => `${s.sinif}-${s.sube}`;
const sinifBul = id => veri().siniflar.find(s => s.id === id);
const sinifOgrencileri = id => veri().ogrenciler.filter(o => o.sinifId === id);
const seciliSinif = () => { const v = veri(); return v.siniflar.find(s => s.id === v.secili) || v.siniflar[0]; };
const temaAdi = od => { try { return (themeList(String(sinifBul(od.sinifId).sinif), od.ders).find(t => t.id === od.tema) || {}).title || od.ders; } catch { return od.ders; } };

// Öğretmenin seçili sınıfı içerik düzeyini belirler (Dersler, Patikam, Oyun dolabı bu sınıfa göre açılır).
(function sinifUygula() {
  const s = seciliSinif(); grade = String(s.sinif);
  if (!subjects().includes(subject)) subject = subjects().includes('Fen Bilimleri') ? 'Fen Bilimleri' : subjects()[0];
})();

/* ---------- öğrenci ilerlemesi (demo: öğrenci + ödev kimliğinden sabit değer) ---------- */
function karma(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16; return (h >>> 0) / 4294967295; }
function odevIlerleme(o, od) {
  const yas = (Date.now() - new Date(od.tarih)) / 864e5, r = karma(o.id + od.id);
  const p = yas < .02 ? 0 : Math.min(1, r * (0.55 + yas / 4)), biten = Math.round(p * 3);
  return {adim: biten, yuzde: Math.round(biten / 3 * 100), durum: biten >= 3 ? 'Tamamladı' : biten ? 'Başladı' : 'Başlamadı'};
}
function ogrOzet(o) {
  const r = karma(o.id);
  return {tema: Math.round(1 + r * 9), damga: Math.round(1 + r * 9), beceri: Math.round(52 + karma(o.id + 'b') * 44), seri: Math.round(karma(o.id + 's') * 6),
    son: ['Bugün', 'Dün', '2 gün önce', 'Bu hafta'][Math.floor(karma(o.id + 'g') * 4)]};
}
const odevAlicilar = od => od.atama === 'tum' ? sinifOgrencileri(od.sinifId) : sinifOgrencileri(od.sinifId).filter(o => od.ogrenciler.includes(o.id));
const durumSinif = d => d === 'Tamamladı' ? 3 : d === 'Başladı' ? 2 : 1;

/* ---------- TeachTech ---------- */
const TT = [
  {id: 'yz', ad: 'Yapay zekâ okuryazarlığı', alt: 'Derslerde YZ ile eleştirel düşünme', sure: '12 dk', resim: '../assets/sahne/kar_yarisma.webp',
    madde: ['Yapay zekâ nedir, ne değildir? Sınıfta çocuk diliyle anlatmak', 'YZ’nin verdiği bilgiyi kaynağıyla karşılaştırmak', 'Öğrenciye “Bunu kim söyledi, nasıl doğrularım?” diye sordurmak', 'BİLGİN anlatımlarını bir tartışma başlangıcına çevirmek']},
  {id: 'bilgin', ad: 'BİLGİN nasıl etkili kullanılır?', alt: 'İzle, Oyna, Ölç patikası ve damga pasaportu', sure: '10 dk', resim: '../assets/sahne/kar_oyun.webp',
    madde: ['Sınıfa uygun dersi ve tema patikasını seçmek', 'Patika yapısı: İzle (anlatım), Oyna (oyun), Ölç (beceri testi)', 'Damga pasaportu ve rozet unvanlarıyla motivasyon', 'Sınıf raporundan kimin nerede kaldığını okumak']},
  {id: 'maarif', ad: 'Maarif Modeli ve beceriler', alt: 'Türkiye Yüzyılı Maarif Modeli’nde beceri temelli öğrenme', sure: '15 dk', resim: '../assets/sahne/kar_soz.webp',
    madde: ['Öğretim programlarında tema, kazanım ve beceri ilişkisi', 'Alan becerileri ile kavramsal becerileri ayırt etmek', 'Derse öncesi, sırası ve sonrası etkinlik yerleştirmek', 'BİLGİN patikalarını ders planına bağlamak']},
  {id: 'beceri', ad: 'Beceri sonuçlarını okumak', alt: 'Ölç adımı ve AI-LA beceri haritası', sure: '8 dk', resim: '../assets/sahne/kar_yeni.webp',
    madde: ['Ölç adımındaki “ilk denemede doğru” mantığı', 'Beceri yüzdesini öğrenciyle birlikte yorumlamak', 'Düşük çıkan beceri için yeniden patika ödevi vermek', 'Velilerle beceri gelişimini paylaşmak']}];
const ttBitti = id => { try { return !!localStorage.getItem('bilgin.ogrt.tt.' + id); } catch { return false; } };
function teachtechEkrani() {
  const biten = TT.filter(d => ttBitti(d.id)).length;
  screen.innerHTML = `<div class="deskTitle"><div><h1>TeachTech</h1><p class="oAlt">BİLGİN ve AI-LA ekosisteminden kısa öğretmen dersleri.</p></div><span class="oRozet">${ik('../mobil/ikon/madalya.png')}<b>${biten}/${TT.length}</b> ders tamamlandı</span></div>
  <div class="ttIzgara">${TT.map(d => `<a class="ttKart" href="#ders-tt/${d.id}"><span class="ttResim"><img src="${d.resim}" alt="">${ttBitti(d.id) ? '<em class="ttTamam">✓ İzlendi</em>' : `<em>${d.sure}</em>`}</span><b>${kacis(d.ad)}</b><small>${kacis(d.alt)}</small></a>`).join('')}</div>`;
}
function ttDersEkrani(id) {
  const d = TT.find(x => x.id === id) || TT[0], bitti = ttBitti(d.id);
  screen.innerHTML = `<div class="deskTitle"><a class="oGeri" href="#teachtech">← TeachTech</a></div>
  <article class="ttDers"><div class="ttGorsel"><img src="${d.resim}" alt=""></div><div class="ttMetin"><p class="eyebrow">TeachTech · ${d.sure}</p><h1>${kacis(d.ad)}</h1><p class="oAlt">${kacis(d.alt)}</p>
   <h2>Bu derste</h2><ol class="ttMaddeler">${d.madde.map(m => `<li>${kacis(m)}</li>`).join('')}</ol>
   <p class="ttVideo">${ik('../mobil/ikon/goz.png')}<span><b>Ders videosu yakında</b><small>Şimdilik maddeleri okuyup “Tamamladım” diyebilirsin.</small></span></p>
   <div class="oDugmeler"><button type="button" class="action" data-tamam ${bitti ? 'disabled' : ''}>${bitti ? '✓ Tamamlandı' : 'Tamamladım'}</button><a class="oDugme" href="#teachtech">Diğer dersler</a></div></div></article>`;
  $o('[data-tamam]').onclick = () => { try { localStorage.setItem('bilgin.ogrt.tt.' + d.id, '1'); } catch {} ttDersEkrani(d.id); };
}

/* ---------- Sınıflarım ---------- */
let acikSinif = null;
function siniflarEkrani() {
  const v = veri(); acikSinif = acikSinif || v.secili;
  screen.innerHTML = `<div class="deskTitle"><div><h1>Sınıflarım</h1><p class="oAlt">Öğrencilerini gör, patika ödevi ver, kimin nerede kaldığını izle.</p></div><button type="button" class="oDugme" data-yeni>+ Yeni sınıf</button></div>
  <div class="sinifListe">${v.siniflar.map(s => { const og = sinifOgrencileri(s.id), od = v.odevler.filter(x => x.sinifId === s.id), acik = s.id === acikSinif;
    return `<section class="sinifKart${acik ? ' acik' : ''}"><button type="button" class="sinifBas" data-ac="${s.id}" aria-expanded="${acik}"><span class="sinifNo">${s.sinif}<small>${s.sube}</small></span><span><b>${sinifAdi(s)} sınıfı</b><small>${og.length ? og.length + ' öğrenci' : 'Öğrenci yok'} · ${od.length} patika ödevi</small></span><i aria-hidden="true">▾</i></button>
     ${acik ? `<div class="sinifIc"><div class="sinifAraclar"><div class="oDugmeler"><a class="action" href="#odev-ver/${s.id}">Patika ödevi ver</a><a class="oDugme" href="#odevler/${s.id}">Ödevler (${od.length})</a><a class="oDugme" href="#rapor/${s.id}">Sınıf raporu</a></div>
       <label class="ogrAra"><span class="gizli">Öğrenci ara</span><input type="search" placeholder="Öğrenci ara…" data-ara></label></div>
      <ul class="ogrListe">${og.map(o => { const z = ogrOzet(o); return `<li data-ad="${kacis((o.ad + ' ' + o.soyad + ' ' + o.eposta).toLocaleLowerCase('tr'))}"><span class="ogrAd"><b>${kacis(o.ad + ' ' + o.soyad)}</b><small>${kacis(o.eposta)}</small></span>
        <span class="ogrDamga" title="Damga">${ik('../mobil/ikon/madalya.png')}${z.damga}</span><span class="ogrIslem"><button type="button" data-ogr-odev="${o.id}" title="Ödevleri" aria-label="${kacis(o.ad)}: ödevleri">${ik('../mobil/ikon/defter.png')}</button><button type="button" data-ogr-rapor="${o.id}" title="Rapor" aria-label="${kacis(o.ad)}: rapor">${ik('../mobil/ikon/buyutec.png')}</button><button type="button" data-ogr-sifre="${o.id}" title="Şifre oluştur" aria-label="${kacis(o.ad)}: şifre oluştur"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></button></span></li>`; }).join('') || '<li class="bos">Bu sınıfa henüz öğrenci eklenmedi.</li>'}</ul><p class="bos" data-bulunamadi hidden>Aramaya uyan öğrenci yok.</p></div>` : ''}</section>`; }).join('')}</div>`;
  $$o('[data-ac]').forEach(b => b.onclick = () => { acikSinif = acikSinif === b.dataset.ac ? '-' : b.dataset.ac; siniflarEkrani(); });
  $o('[data-yeni]').onclick = yeniSinif;
  const ara = $o('[data-ara]');
  if (ara) ara.oninput = () => { const q = ara.value.trim().toLocaleLowerCase('tr'); let n = 0;
    $$o('.ogrListe li[data-ad]').forEach(li => { const g = !q || li.dataset.ad.includes(q); li.hidden = !g; n += g; }); $o('[data-bulunamadi]').hidden = n > 0; };
  const ogr = id => veri().ogrenciler.find(o => o.id === id);
  $$o('[data-ogr-odev]').forEach(b => b.onclick = () => { const o = ogr(b.dataset.ogrOdev), list = veri().odevler.filter(od => odevAlicilar(od).some(x => x.id === o.id));
    kutu(`<h2>${kacis(o.ad + ' ' + o.soyad)}</h2><p class="oAlt">Patika ödevleri</p><ul class="ilerlemeListe">${list.map(od => { const p = odevIlerleme(o, od); return `<li><b>${kacis(od.baslik)}<small>${kacis(od.ders)} · ${kacis(temaAdi(od))}</small></b><em class="durum d${durumSinif(p.durum)}">${p.durum}</em><span class="oMini"><i style="width:${p.yuzde}%"></i></span><small>${p.adim}/3 adım</small></li>`; }).join('') || '<li class="bos">Bu öğrenciye henüz ödev verilmedi.</li>'}</ul><div class="oFormAlt"><button type="button" class="oDugme" data-kapat>Kapat</button></div>`); });
  $$o('[data-ogr-rapor]').forEach(b => b.onclick = () => { const o = ogr(b.dataset.ogrRapor), z = ogrOzet(o);
    kutu(`<h2>${kacis(o.ad + ' ' + o.soyad)}</h2><p class="oAlt">${kacis(o.eposta)} · son giriş: ${z.son}</p><div class="raporSayi">${[['../mobil/ikon/harita.png', z.tema, 'tema'], ['../mobil/ikon/madalya.png', z.damga, 'damga'], ['../mobil/ikon/buyutec.png', '%' + z.beceri, 'beceri'], ['../mobil/ikon/kupa.png', z.seri, 'gün seri']].map(([i, n, a]) => `<span>${ik(i)}<b>${n}</b><small>${a}</small></span>`).join('')}</div><div class="oFormAlt"><button type="button" class="oDugme" data-kapat>Kapat</button></div>`); });
  $$o('[data-ogr-sifre]').forEach(b => b.onclick = () => { const o = ogr(b.dataset.ogrSifre);
    kutu(`<form method="dialog" novalidate><div class="kutuBas"><h2>Yeni şifre oluştur</h2><button type="button" class="kutuKapat" data-kapat aria-label="Kapat">✕</button></div>
      <p class="oAlt">${kacis(o.ad + ' ' + o.soyad)} · ${kacis(o.eposta)}</p>
      <div class="fieldRow"><label class="field"><span>Şifre</span><input type="password" name="yeni" autocomplete="new-password"></label><label class="field"><span>Şifre (tekrar)</span><input type="password" name="tekrar" autocomplete="new-password"></label></div>
      <p class="formNote bad" role="status" aria-live="polite"></p><div class="oFormAlt sag"><button class="action" value="ok">✓ Kaydet</button></div></form>`, d => {
      const f = d.querySelector('form'), not = d.querySelector('.formNote'); f.yeni.focus();
      f.onsubmit = e => { const y = f.yeni.value, t = f.tekrar.value;
        if (y.length < 6) { e.preventDefault(); not.textContent = 'Şifre en az 6 karakter olmalı.'; return; }
        if (y !== t) { e.preventDefault(); not.textContent = 'İki şifre birbirini tutmuyor.'; return; }
        bildir(`${kacis(o.ad)} yeni şifresiyle girebilir (demo)`); }; }); });
}
function kutu(icerik, kur) {
  const d = document.createElement('dialog'); d.className = 'ogrKutu'; d.innerHTML = icerik; document.body.append(d);
  d.addEventListener('close', () => d.remove()); d.querySelectorAll('[data-kapat]').forEach(x => x.onclick = () => d.close());
  if (kur) kur(d); d.showModal(); return d;
}
function bildir(metin) {
  let t = $o('.oTost'); if (!t) { t = document.createElement('div'); t.className = 'oTost'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = metin; t.classList.remove('goster'); void t.offsetWidth; t.classList.add('goster');
}
function yeniSinif() {
  kutu(`<form method="dialog"><h2>Yeni sınıf</h2><div class="fieldRow"><label class="field"><span>Sınıf düzeyi</span><select name="sinif">${[1, 2, 3, 4, 5, 6, 7, 8].map(n => `<option value="${n}">${n}. sınıf</option>`).join('')}</select></label>
    <label class="field"><span>Şube</span><select name="sube">${'ABCDEFGH'.split('').map(x => `<option>${x}</option>`).join('')}</select></label></div>
    <div class="oFormAlt"><button type="button" class="textButton" data-kapat>Vazgeç</button><button class="action" value="ok">Sınıfı oluştur</button></div></form>`, d => {
    d.querySelector('form').onsubmit = e => { const f = e.target, v = veri(), id = 's' + Date.now().toString(36);
      v.siniflar.push({id, sinif: Number(f.sinif.value), sube: f.sube.value}); v.secili = id; kaydet(v); acikSinif = id; sinifSecimiDoldur(); setTimeout(siniflarEkrani); };
  });
}

/* ---------- patika ödevi ver: kime → ders → tema patikası → başlık ---------- */
let sihir = null;
function odevVerEkrani(sinifId) {
  const s = sinifBul(sinifId) || seciliSinif(), k = String(s.sinif);
  if (!sihir || sihir.sinifId !== s.id) sihir = {sinifId: s.id, adim: 1, atama: 'tum', ogrenciler: [], ders: null, tema: null, baslik: '', aciklama: ''};
  const A = ['Kime', 'Ders', 'Tema patikası', 'Başlık ve açıklama'], og = sinifOgrencileri(s.id), x = sihir;
  let govde = '';
  if (x.adim === 1) govde = `<h2>Ödev kime?</h2><div class="secimIkili">${[['tum', 'Tüm sınıf', `${og.length} öğrencinin hepsi`], ['belirli', 'Belirli öğrenciler', 'Listeden seç']].map(([kk, a, alt]) => `<label class="secimKart"><input type="radio" name="atama" value="${kk}" ${x.atama === kk ? 'checked' : ''}><span><b>${a}</b><small>${alt}</small></span></label>`).join('')}</div>
    ${x.atama === 'belirli' ? `<ul class="ogrSec">${og.map(o => `<li><label><input type="checkbox" value="${o.id}" ${x.ogrenciler.includes(o.id) ? 'checked' : ''}>${kacis(o.ad + ' ' + o.soyad)}</label></li>`).join('')}</ul>` : ''}
    <p class="oIpucu">BİLGİN’de <b>patika ödevi</b> verilir: öğrenci seçtiğin temanın patikasında İzle, Oyna ve Ölç adımlarını bitirir, damgasını kazanır.</p>`;
  else if (x.adim === 2) govde = `<h2>Hangi ders?</h2><p class="oIpucu">${k}. sınıf düzeyindeki dersler.</p><ul class="dersSec">${subjects(k).map(d => `<li><button type="button" class="dersSecKart${x.ders === d ? ' secili' : ''}" data-ders="${kacis(d)}"><img src="${DERS_IK(d)}" alt=""><b>${kacis(d)}</b><small>${(TEMALAR[k + '|' + d] || []).length} tema · ${themeList(k, d).length} patika hazır</small>${x.ders === d ? '<em>✓ Seçildi</em>' : ''}</button></li>`).join('')}</ul>`;
  else if (x.adim === 3) { const hazir = themeList(k, x.ders), adlar = [...new Set([...(TEMALAR[k + '|' + x.ders] || []), ...hazir.map(t => t.title)])];
    govde = `<h2>Hangi tema patikası?</h2><p class="oIpucu">Patikası hazır temalar seçilebilir; diğerleri yakında.</p><ol class="temaSec">${adlar.map((ad, i) => { const t = hazir.find(h => h.title === ad);
      return t ? `<li><button type="button" class="temaSecKart${x.tema === t.id ? ' secili' : ''}" data-tema="${t.id}"><span class="tNo">${x.tema === t.id ? '✓' : i + 1}</span><span><b>${kacis(ad)}</b><small>${kacis(t.lesson.konu)} · İzle, Oyna, Ölç</small></span></button></li>`
        : `<li><div class="temaSecKart yakinda"><span class="tNo">${i + 1}</span><span><b>${kacis(ad)}</b><small>Program teması · yakında</small></span></div></li>`; }).join('')}</ol>`; }
  else { const t = themeList(k, x.ders).find(h => h.id === x.tema), tarih = new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long'});
    x.baslik = x.baslik || `${t.title} patikası`; x.aciklama = x.aciklama || `${tarih} · ${x.ders}: İzle, Oyna ve Ölç adımlarını bitir, damganı kazan.`;
    govde = `<h2>Ödev bilgileri</h2><div class="fieldRow tek"><label class="field"><span>Başlık *</span><input name="baslik" maxlength="80" value="${kacis(x.baslik)}"></label><label class="field"><span>Açıklama *</span><textarea name="aciklama" rows="3" maxlength="400">${kacis(x.aciklama)}</textarea></label></div>
    <div class="ozetSerit"><span>${ik('img/sinif.png')}${x.atama === 'tum' ? 'Tüm sınıf' : x.ogrenciler.length + ' öğrenci'}</span><span>${ik(DERS_IK(x.ders))}${kacis(x.ders)}</span><span>${ik('../mobil/ikon/harita.png')}${kacis(t.title)}</span></div>`; }
  screen.innerHTML = `<div class="deskTitle"><div><a class="oGeri" href="#siniflar">← Sınıflarım</a><h1>Patika ödevi · ${sinifAdi(s)}</h1></div></div>
  <section class="sihirbaz"><ol class="adimCizgi">${A.map((a, i) => `<li class="${i + 1 < x.adim ? 'bitti' : i + 1 === x.adim ? 'su' : ''}"><i>${i + 1 < x.adim ? '✓' : i + 1}</i>${a}</li>`).join('')}</ol>
   <div class="sihirGovde">${govde}<p class="formNote bad" role="status" aria-live="polite"></p></div>
   <div class="oFormAlt"><a class="textButton" href="#siniflar" data-iptal>İptal</a>${x.adim > 1 ? '<button type="button" class="oDugme" data-geri>← Geri</button>' : ''}<button type="button" class="action" data-ileri>${x.adim === 4 ? 'Ödevi gönder' : 'İleri →'}</button></div></section>`;
  const not = $o('.sihirGovde .formNote'), yeniden = () => odevVerEkrani(s.id);
  $o('[data-iptal]').onclick = () => { sihir = null; };
  $$o('[name=atama]').forEach(r => r.onchange = () => { x.atama = r.value; yeniden(); });
  $$o('.ogrSec input').forEach(c => c.onchange = () => { x.ogrenciler = $$o('.ogrSec input:checked').map(i => i.value); });
  $$o('[data-ders]').forEach(b => b.onclick = () => { if (x.ders !== b.dataset.ders) { x.ders = b.dataset.ders; x.tema = null; x.baslik = x.aciklama = ''; } yeniden(); });
  $$o('[data-tema]').forEach(b => b.onclick = () => { x.tema = b.dataset.tema; x.baslik = x.aciklama = ''; yeniden(); });
  const geri = $o('[data-geri]'); if (geri) geri.onclick = () => { x.adim--; yeniden(); };
  $o('[data-ileri]').onclick = () => {
    if (x.adim === 1 && !og.length) return (not.textContent = 'Bu sınıfta henüz öğrenci yok. Öğrenciler okul yönetimi tarafından sınıfa eklenir.');
    if (x.adim === 1 && x.atama === 'belirli' && !x.ogrenciler.length) return (not.textContent = 'En az bir öğrenci seç.');
    if (x.adim === 2 && !x.ders) return (not.textContent = 'Bir ders seç.');
    if (x.adim === 3 && !x.tema) return (not.textContent = 'Patikası hazır bir tema seç.');
    if (x.adim === 4) { x.baslik = $o('[name=baslik]').value.trim(); x.aciklama = $o('[name=aciklama]').value.trim();
      if (!x.baslik || !x.aciklama) return (not.textContent = 'Başlık ve açıklama boş kalamaz.');
      const v = veri(); v.odevler.unshift({id: 'od' + Date.now().toString(36), sinifId: s.id, atama: x.atama, ogrenciler: x.ogrenciler, ders: x.ders, tema: x.tema, baslik: x.baslik, aciklama: x.aciklama, tarih: new Date().toISOString()}); kaydet(v);
      sihir = null; location.hash = `odevler/${s.id}`; setTimeout(() => bildir(`Ödev gönderildi · ${sinifAdi(s)} sınıfının patikasına eklendi`), 50); return; }
    x.adim++; yeniden(); };
}

/* ---------- ödevler ---------- */
function odevlerEkrani(sinifId) {
  const s = sinifBul(sinifId) || seciliSinif(), v = veri(), list = v.odevler.filter(x => x.sinifId === s.id);
  screen.innerHTML = `<div class="deskTitle"><div><a class="oGeri" href="#siniflar">← Sınıflarım</a><h1>${sinifAdi(s)} · Ödevler</h1></div><a class="action" href="#odev-ver/${s.id}">+ Patika ödevi ver</a></div>
  <section class="tablo"><div class="tSatir tBas"><span>Başlık</span><span>Ders · tema patikası</span><span>Verildi</span><span>Tamamlama</span><span></span></div>
  ${list.map(od => { const al = odevAlicilar(od), ok = al.filter(o => odevIlerleme(o, od).durum === 'Tamamladı').length;
    return `<div class="tSatir"><span><b>${kacis(od.baslik)}</b><small>${od.atama === 'tum' ? 'Tüm sınıf' : al.length + ' öğrenci'}</small></span><span class="tDers">${ik(DERS_IK(od.ders))}<span>${kacis(od.ders)}<small>${kacis(temaAdi(od))}</small></span></span><span>${new Date(od.tarih).toLocaleDateString('tr-TR', {day: 'numeric', month: 'short'})}</span>
     <span><span class="oMini"><i style="width:${al.length ? ok / al.length * 100 : 0}%"></i></span><small>${ok}/${al.length} tamamladı</small></span><span class="tIslem"><button type="button" class="kucukDugme" data-ilerleme="${od.id}">İlerleme</button><button type="button" class="kucukDugme sil" data-sil="${od.id}" aria-label="Ödevi sil">Sil</button></span></div>`; }).join('') || `<p class="bos">${sinifAdi(s)} sınıfına henüz patika ödevi verilmedi.</p>`}</section>`;
  $$o('[data-ilerleme]').forEach(b => b.onclick = () => { const od = v.odevler.find(x => x.id === b.dataset.ilerleme);
    kutu(`<h2>${kacis(od.baslik)}</h2><p class="oAlt">Öğrenci ilerlemesi · ${kacis(od.ders)} · ${kacis(temaAdi(od))}</p><ul class="ilerlemeListe">${odevAlicilar(od).map(o => { const p = odevIlerleme(o, od); return `<li><b>${kacis(o.ad + ' ' + o.soyad)}</b><em class="durum d${durumSinif(p.durum)}">${p.durum}</em><span class="oMini"><i style="width:${p.yuzde}%"></i></span><small>${p.adim}/3 adım</small></li>`; }).join('')}</ul><div class="oFormAlt"><button type="button" class="oDugme" data-kapat>Kapat</button></div>`); });
  $$o('[data-sil]').forEach(b => b.onclick = () => kutu(`<h2>Ödev silinsin mi?</h2><p>Öğrencilerin patikasından da kalkar.</p><div class="oFormAlt"><button type="button" class="textButton" data-kapat>Vazgeç</button><button type="button" class="action kirmizi" data-evet>Sil</button></div>`, d => {
    d.querySelector('[data-evet]').onclick = () => { const w = veri(); w.odevler = w.odevler.filter(x => x.id !== b.dataset.sil); kaydet(w); d.close(); odevlerEkrani(s.id); }; }));
}

/* ---------- sınıf raporu ---------- */
function raporEkrani(sinifId) {
  const v = veri(), s = sinifBul(sinifId) || seciliSinif(), og = sinifOgrencileri(s.id), od = v.odevler.filter(x => x.sinifId === s.id)[0];
  screen.innerHTML = `<div class="deskTitle"><div><a class="oGeri" href="#siniflar">← Sınıflarım</a><h1>${sinifAdi(s)} · Sınıf raporu</h1><p class="oAlt">${og.length} öğrenci${od ? ` · son ödev: ${kacis(od.baslik)}` : ''}</p></div></div>
  <section class="tablo ogrTablo"><div class="tSatir tBas"><span>Öğrenci</span><span>Biten tema</span><span>Damga</span><span>Beceri</span><span>${od ? 'Son ödev' : 'Ödev'}</span><span>Son giriş</span></div>
  ${og.map(o => { const z = ogrOzet(o), p = od && odevIlerleme(o, od); return `<div class="tSatir"><span><b>${kacis(o.ad + ' ' + o.soyad)}</b><small>${kacis(o.eposta)}</small></span><span>${z.tema}</span><span class="ogrDamga">${ik('../mobil/ikon/madalya.png')}${z.damga}</span><span><span class="oMini beceri"><i style="width:${z.beceri}%"></i></span><small>%${z.beceri}</small></span><span>${p ? `<em class="durum d${durumSinif(p.durum)}">${p.durum}</em> ${p.adim}/3` : '—'}</span><span>${z.son}</span></div>`; }).join('') || '<p class="bos">Bu sınıfta henüz öğrenci yok.</p>'}</section>`;
}

/* ---------- öğretmen anasayfası: vitrin + bu hafta + sınıflarımın durumu ---------- */
function sinifDurumu(s) {
  const og = sinifOgrencileri(s.id), od = veri().odevler.filter(x => x.sinifId === s.id);
  let biten = 0, toplam = 0;
  od.forEach(x => { const al = odevAlicilar(x); biten += al.filter(o => odevIlerleme(o, x).durum === 'Tamamladı').length; toplam += al.length; });
  return {og, od, biten, toplam, oran: toplam ? biten / toplam : 0, damga: og.reduce((t, o) => t + ogrOzet(o).damga, 0)};
}
function ogretmenAna() {
  const v = veri(), h = account(), durum = v.siniflar.map(x => ({x, d: sinifDurumu(x)}));
  const top = durum.reduce((t, {d}) => ({og: t.og + d.og.length, od: t.od + d.od.length, biten: t.biten + d.biten, damga: t.damga + d.damga}), {og: 0, od: 0, biten: 0, damga: 0});
  const enIyi = durum.filter(y => y.d.toplam).sort((a, b) => b.d.oran - a.d.oran)[0], tt = TT.find(d => !ttBitti(d.id)) || TT[0];
  const [soz, kim] = quotes[Math.floor(Date.now() / 864e5) % quotes.length];
  const slayt = (ton, img, metin) => ({ton, img, metin});
  const slaytlar = [
    slayt('nane', '../assets/sahne/kar_oyun.webp', `<p class="eyebrow">Duyuru · Öğretmen masası</p><h2>Sınıfına patika ödevi ver</h2><p>Ders ve tema seç; öğrencilerin İzle, Oyna ve Ölç adımlarını bitirip damgasını kazansın.</p><a class="action" href="#siniflar">Sınıflarıma git →</a>`),
    slayt('petrol', tt.resim, `<p class="eyebrow">TeachTech · ${tt.sure}</p><h2>${kacis(tt.ad)}</h2><p>${kacis(tt.alt)}.</p><a class="action" href="#ders-tt/${tt.id}">Derse başla →</a>`),
    slayt('lavanta', '../assets/sahne/kar_soz.webp', `<p class="eyebrow">Günün sözü</p><blockquote><p>“${kacis(soz)}”</p><footer>${kacis(kim)}</footer></blockquote>`),
    ...(enIyi ? [slayt('altin', '../assets/sahne/kar_yarisma.webp', `<p class="eyebrow">Haftanın sınıfı</p><h2>${sinifAdi(enIyi.x)} sınıfı önde!</h2><p>Ödevlerde ${enIyi.d.biten}/${enIyi.d.toplam} patika tamamlandı (%${Math.round(enIyi.d.oran * 100)}).</p><a class="action" href="#odevler/${enIyi.x.id}">Ödevlere bak →</a>`)] : []),
    slayt('mandalina', '../assets/sahne/kar_yeni.webp', `<p class="eyebrow">Yeni eklendi</p><h2>Rozetlerin artık bir unvanı var</h2><p>Öğrencilerin temaları bitirdikçe Matematik Canavarı, Deney Kâşifi gibi unvanlar kazanıyor.</p><a class="action" href="#siniflar">Öğrencilere bak →</a>`)];
  screen.innerHTML = `<div class="deskTitle"><div><h1>Merhaba, ${kacis(h.ad)} Öğretmen!</h1><p class="oAlt">${top.og} öğrencin bu hafta ${top.damga} damga topladı.</p></div></div>
  <div class="deskLayout"><section class="featured heroCarousel" aria-roledescription="karusel" aria-label="Öğretmen vitrini"><div class="heroSlides">${slaytlar.map((sl, i) => `<article class="heroSlide tone-${sl.ton}" id="hs-${i}" role="tabpanel" aria-roledescription="slayt"><div class="featureArt"><img src="${sl.img}" alt=""></div><div class="featureCopy">${sl.metin}</div></article>`).join('')}</div><div class="heroNav"><div class="heroDots" role="tablist" aria-label="Vitrin slaytları">${slaytlar.map((_, i) => `<button type="button" role="tab" aria-controls="hs-${i}" aria-label="${i + 1}. slayt"><i></i></button>`).join('')}</div><button type="button" class="heroArrow" data-step="-1" aria-label="Önceki slayt">‹</button><button type="button" class="heroArrow" data-step="1" aria-label="Sonraki slayt">›</button></div></section>
   <section class="journey haftaKart"><div class="sectionTitle"><h2>Bu hafta</h2><a href="#siniflar">Sınıflarım →</a></div><ol>${[['img/sinif.png', top.og, 'öğrenci'], ['../mobil/ikon/harita.png', top.od, 'patika ödevi'], ['../mobil/ikon/kupa.png', top.biten, 'biten patika'], ['../mobil/ikon/madalya.png', top.damga, 'damga']].map(([i, n, a]) => `<li>${ik(i)}<div><b>${n}</b><small>${a}</small></div></li>`).join('')}</ol></section></div>
  <section class="sinifDurum"><div class="sectionTitle"><h2>Sınıflarımın durumu</h2><a href="#siniflar">Tümü →</a></div><div class="sdIzgara">${durum.map(({x, d}) => `<a class="sdKart" href="#odevler/${x.id}"><span class="sinifNo">${x.sinif}<small>${x.sube}</small></span><span class="sdMetin"><b>${sinifAdi(x)} sınıfı</b><small>${d.og.length} öğrenci · ${d.od.length} ödev</small><span class="oMini"><i style="width:${d.oran * 100}%"></i></span><em>${d.toplam ? `${d.biten}/${d.toplam} patika bitti` : 'Henüz ödev yok'}</em></span></a>`).join('')}</div></section>`;
  mountHero($o('.heroCarousel'));
}

/* ---------- menüdeki sınıf seçimi ---------- */
function sinifSecimiDoldur() {
  const v = veri(), sel = document.getElementById('ogrtSinif'), s = seciliSinif();
  sel.innerHTML = v.siniflar.map(x => `<option value="${x.id}">${sinifAdi(x)} · ${x.sinif}. sınıf</option>`).join('');
  sel.value = s.id;
}
sinifSecimiDoldur();
document.getElementById('ogrtSinif').onchange = e => {
  const v = veri(); v.secili = e.target.value; kaydet(v); acikSinif = v.secili; sinifSecimiDoldur();
  grade = String(seciliSinif().sinif); if (!subjects().includes(subject)) subject = subjects()[0]; theme = 'temel';
  const [s0] = location.hash.slice(1).split('/');
  const hedef = ['odevler', 'odev-ver', 'rapor'].includes(s0) ? 'siniflar' : ['ders', 'ekpatika'].includes(s0) ? 'dersler' : (s0 || 'masa');
  if (location.hash.slice(1) === hedef) render(); else location.hash = hedef;
};

/* ---------- sağ üst: duyurular ---------- */
function duyurular() {
  const v = veri(), list = [];
  v.odevler.slice(0, 3).forEach(od => { const al = odevAlicilar(od), ok = al.filter(o => odevIlerleme(o, od).durum === 'Tamamladı').length, sn = sinifBul(od.sinifId);
    if (sn) list.push({id: `odev-${od.id}-${ok}`, ik: '../mobil/ikon/harita.png', zaman: sinifAdi(sn) + ' sınıfı', baslik: `${ok}/${al.length} öğrenci ödevi bitirdi`, metin: od.baslik, link: `#odevler/${od.sinifId}`}); });
  const yeni = TT.find(d => !ttBitti(d.id)); if (yeni) list.push({id: 'tt-' + yeni.id, ik: 'img/teachtech.png', zaman: 'TeachTech', baslik: 'Yeni ders: ' + yeni.ad, metin: yeni.alt, link: '#ders-tt/' + yeni.id});
  list.push({id: 'duyuru-rozet', ik: '../mobil/ikon/madalya.png', zaman: 'Yeni', baslik: 'Rozetlere unvan geldi', metin: 'Öğrencilerin temaları bitirdikçe Matematik Canavarı, Deney Kâşifi gibi unvanlar kazanıyor.', link: '#profil'});
  list.push({id: 'duyuru-odev', ik: 'img/sinif.png', zaman: 'Öğretmen masası', baslik: 'Patika ödevi verebilirsin', metin: 'Sınıflarım’dan ders ve tema seçip ödevi tek adımda gönder.', link: '#siniflar'});
  return list;
}
const okunan = () => { try { return new Set(JSON.parse(localStorage.getItem('bilgin.ogrt.duyuru') || '[]')); } catch { return new Set(); } };
function duyuruSay() { const n = duyurular().filter(d => !okunan().has(d.id)).length, i = document.getElementById('duyuruSayi'); i.hidden = !n; i.textContent = n; }
function duyuruAc(ac) {
  const kutuEl = $o('.duyuruKutu'), zil = $o('.duyuruZil');
  if (!ac) { kutuEl.hidden = true; zil.setAttribute('aria-expanded', 'false'); return; }
  const ok = okunan(), list = duyurular();
  kutuEl.innerHTML = `<header><h2>Duyurular</h2><button type="button" class="textButton" data-hepsi>Tümünü okundu say</button></header><ul>${list.map(d => `<li class="${ok.has(d.id) ? '' : 'yeni'}"><a href="${d.link}" data-did="${d.id}">${ik(d.ik)}<span><b>${kacis(d.baslik)}</b><small>${kacis(d.metin)}</small><em>${kacis(d.zaman)}</em></span></a></li>`).join('')}</ul>`;
  kutuEl.hidden = false; zil.setAttribute('aria-expanded', 'true');
  const isle = ids => { try { localStorage.setItem('bilgin.ogrt.duyuru', JSON.stringify([...new Set([...okunan(), ...ids])])); } catch {} duyuruSay(); };
  $$o('[data-did]', kutuEl).forEach(a => a.onclick = () => { isle([a.dataset.did]); duyuruAc(false); });
  $o('[data-hepsi]', kutuEl).onclick = () => { isle(list.map(d => d.id)); duyuruAc(true); };
}
$o('.duyuruZil').onclick = e => { e.stopPropagation(); duyuruAc($o('.duyuruKutu').hidden); };
document.addEventListener('click', e => { if (!e.target.closest('#ogrtUst')) duyuruAc(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') duyuruAc(false); });
window.addEventListener('hashchange', () => { duyuruAc(false); duyuruSay(); });
duyuruSay();

/* ---------- yönlendirme kancaları (mobil.js render) ---------- */
window.EK_ANA = ogretmenAna;
window.EK_SEKME = {teachtech: 'teachtech', 'ders-tt': 'teachtech', siniflar: 'siniflar', 'odev-ver': 'siniflar', odevler: 'siniflar', rapor: 'siniflar'};
window.EK_EKRAN = {teachtech: teachtechEkrani, 'ders-tt': ttDersEkrani, siniflar: siniflarEkrani, 'odev-ver': odevVerEkrani, odevler: odevlerEkrani, rapor: raporEkrani};
