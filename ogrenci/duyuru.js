// Öğrenci alanı: sağ üstte duyurular (öğretmen masasındaki duyuru kutusunun öğrenci sürümü).
// Öğretmenin verdiği patika ödevi, patikada kalan adımlar, damga daveti ve yenilikler.
// Okundu bilgisi bu cihazda (bilgin.duyuru). mobil.js'ten sonra yüklenir.
(() => {
  const ust = document.createElement('div');
  ust.id = 'ogrenciUst';
  ust.innerHTML = `<button type="button" class="duyuruZil" aria-haspopup="dialog" aria-expanded="false" aria-label="Duyurular"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg><i class="duyuruSayi" hidden></i></button><section class="duyuruKutu" role="dialog" aria-label="Duyurular" hidden></section>`;
  document.body.append(ust);
  const zil = ust.querySelector('.duyuruZil'), kutu = ust.querySelector('.duyuruKutu'), sayi = ust.querySelector('.duyuruSayi');
  const kac = s => String(s).replace(/[&<>"']/g, c => '&#' + c.charCodeAt(0) + ';');
  const gun = () => new Date().toDateString();

  // Öğretmen masasında bu sınıf düzeyine verilmiş ödevler (demo: aynı cihazdaki öğretmen verisi).
  function ogretmenOdevleri() {
    try {
      const v = JSON.parse(localStorage.getItem('bilgin.ogrt.veri-v1'));
      if (!v) return [];
      const sinif = id => v.siniflar.find(s => s.id === id);
      return v.odevler.filter(od => String((sinif(od.sinifId) || {}).sinif) === String(grade)).slice(0, 2);
    } catch { return []; }
  }
  function liste() {
    const l = [], n = level(), t = current(), damga = earned().length;
    const odevler = ogretmenOdevleri();
    if (odevler.length) odevler.forEach(od => l.push({id: 'odev-' + od.id, ik: '../mobil/ikon/harita.png', zaman: 'Öğretmeninden', baslik: 'Yeni patika ödevi: ' + od.baslik, metin: od.aciklama, link: '#dersler'}));
    else l.push({id: 'odev-demo-' + grade, ik: '../mobil/ikon/harita.png', zaman: 'Öğretmeninden', baslik: `Patika ödevi: ${t.title}`, metin: `${subject} patikasının İzle, Oyna ve Ölç adımlarını bu hafta bitir.`, link: '#patika'});
    if (n < 3) l.push({id: `adim-${grade}-${subject}-${theme}-${n}`, ik: '../mobil/ikon/' + ['goz', 'yapboz', 'buyutec'][n] + '.png', zaman: 'Patikam', baslik: n ? `${3 - n} adım kaldı` : 'Patikan seni bekliyor', metin: `${t.title}: sıradaki adım ${labels[n]}.`, link: url('etkinlik.html') + '&adim=' + steps[n]});
    else l.push({id: `damga-${grade}-${subject}-${theme}`, ik: '../mobil/ikon/kupa.png', zaman: 'Patikam', baslik: 'Tema damgan pasaportunda!', metin: `${t.title} patikasını bitirdin. Yeni bir tema seçebilirsin.`, link: '#dersler'});
    if (!damga) l.push({id: 'ilk-damga', ik: '../mobil/ikon/defter.png', zaman: 'Pasaportum', baslik: 'İlk damganı kazan', metin: 'Bir tema patikasını bitirince pasaportuna ilk damgan basılır.', link: '#pasaport'});
    l.push({id: 'yeni-unvan', ik: '../mobil/ikon/madalya.png', zaman: 'Yeni', baslik: 'Rozetlerin artık bir unvanı var', metin: 'Temaları bitirdikçe Matematik Canavarı, Deney Kâşifi gibi unvanlar kazanırsın.', link: '#profil'});
    l.push({id: 'yeni-ekpatika', ik: '../mobil/ikon/yapboz.png', zaman: 'Yakında', baslik: 'Ek patikalar geliyor', metin: 'Yapay zekâ okuryazarlığı, finansal okuryazarlık ve daha fazlası.', link: '#ekpatika'});
    return l;
  }
  const okunan = () => { try { return new Set(JSON.parse(localStorage.getItem('bilgin.duyuru') || '[]')); } catch { return new Set(); } };
  const isle = ids => { try { localStorage.setItem('bilgin.duyuru', JSON.stringify([...new Set([...okunan(), ...ids])])); } catch {} say(); };
  function say() { const n = liste().filter(d => !okunan().has(d.id)).length; sayi.hidden = !n; sayi.textContent = n; }
  function ac(acik) {
    if (!acik) { kutu.hidden = true; zil.setAttribute('aria-expanded', 'false'); return; }
    const ok = okunan(), l = liste();
    kutu.innerHTML = `<header><h2>Duyurular</h2><button type="button" class="textButton" data-hepsi>Tümünü okundu say</button></header><ul>${l.map(d => `<li class="${ok.has(d.id) ? '' : 'yeni'}"><a href="${kac(d.link)}" data-did="${kac(d.id)}"><img class="oIk" src="${d.ik}" alt=""><span><b>${kac(d.baslik)}</b><small>${kac(d.metin)}</small><em>${kac(d.zaman)}</em></span></a></li>`).join('')}</ul>`;
    kutu.hidden = false; zil.setAttribute('aria-expanded', 'true');
    kutu.querySelectorAll('[data-did]').forEach(a => a.onclick = () => { isle([a.dataset.did]); ac(false); });
    kutu.querySelector('[data-hepsi]').onclick = () => { isle(l.map(d => d.id)); ac(true); };
  }
  zil.onclick = e => { e.stopPropagation(); ac(kutu.hidden); };
  document.addEventListener('click', e => { if (!e.target.closest('#ogrenciUst')) ac(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') ac(false); });
  window.addEventListener('hashchange', () => { ac(false); say(); });
  say();
})();
