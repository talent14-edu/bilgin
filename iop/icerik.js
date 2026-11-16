/* Bilgin · İzle, oyna, ölç — ders içerikleri (1–8. sınıf, 41 ders)
   Sahne: [altyazı, balon, poz, görsel]
   Görsel tipleri: buyuk, parca, liste, cift, kural, sira, kova, renk, pasta, pusula, saat
   Oyun tipleri: kova, eslestir, sirala, kesici
   Test: [soru, [doğru, yanlış, yanlış], beceri sırası]
   Yazım işaretleri: [[1/4]] kesir · {{pasta:4:1}} · {{saat:4:30}} · {{renk:#hex:ad}} */
window.IOP_DERS = {

/* ===================== 1. SINIF ===================== */
'1|Matematik': { konu:'1’den 20’ye sayılar', beceri:['Sayma','Karşılaştırma','Basamak'],
 v:[
  ['Sayılar sırayla dizilir. Her sayı, kendinden önceki sayıdan bir fazladır.','Sayalım!','selam',{tip:'sira',ogeler:[['1'],['2'],['3'],['4'],['5']]}],
  ['10’dan sonra 11 gelir. 11, bir onluk ve bir birlikten oluşur.','1 onluk + 1 birlik','dusunme',{tip:'parca',ogeler:[['1','onluk'],['1','birlik']]}],
  ['Bir sayıdan hemen önce gelen sayı bir eksiği, hemen sonra gelen sayı bir fazlasıdır.','Önce mi, sonra mı?','ipucu',{tip:'cift',ogeler:[['14’ten hemen önce','13'],['14’ten hemen sonra','15']]}],
  ['Sayı doğrusunda sağa doğru gittikçe sayılar büyür.','Sağa doğru büyür.','sevinc',{tip:'sira',ogeler:[['16'],['17'],['18'],['19'],['20']]}],
  ['Sayarken her adımda bir ekleriz. Şimdi sayı trenini sen diz!','Sıra sende!','rozet',{tip:'kural',y:'Sayarken her adımda <b>bir</b> ekleriz: 1, 2, 3 … 20.'}]
 ],
 oyun:{tip:'sirala',ad:'Vagon Sırası',yonerge:'Vagonları küçükten büyüğe diz.',ogeler:['3','7','9','12','15','18']},
 test:[
  ['9’dan hemen sonra hangi sayı gelir?',['10','8','19'],0],
  ['Hangisi en büyüktür?',['17','13','11'],1],
  ['12 ile 14 arasındaki sayı hangisidir?',['13','11','15'],0],
  ['1 onluk ve 6 birlik kaç eder?',['16','61','7'],2]
 ]},

'1|Türkçe': { konu:'Heceler', beceri:['Heceleme','Hece sayma','Kural bulma'],
 v:[
  ['Kelimeleri söylerken küçük parçalara ayırırız. Bu parçalara hece denir.','Ka-lem!','selam',{tip:'buyuk',y:'ka · lem',alt:'2 hece'}],
  ['Araba kelimesini yavaşça söyleyelim: a, ra, ba. Üç hece!','A-ra-ba','dusunme',{tip:'parca',ogeler:[['a'],['ra'],['ba']]}],
  ['Bazı kelimeler tek hecelidir: top, el, süt.','Tek hece','ipucu',{tip:'liste',ogeler:['top','el','süt']}],
  ['Elini çenenin altına koy. Çenen her açıldığında bir hece söylersin.','Çeneni dinle!','sevinc',{tip:'cift',ogeler:[['kelebek','ke · le · bek'],['çiçek','çi · çek']]}],
  ['Her hecede bir ünlü harf vardır. Şimdi kelimeleri balonlara sen yerleştir!','Sıra sende!','rozet',{tip:'kural',y:'Her hecede bir <b>ünlü harf</b> vardır: a, e, ı, i, o, ö, u, ü.'}]
 ],
 oyun:{tip:'kova',ad:'Hece Sepetleri',yonerge:'Kelimeye dokun, sonra hece sayısının balonunu seç.',kovalar:['1 hece','2 hece','3 hece'],ogeler:[['top',0],['süt',0],['kalem',1],['elma',1],['okul',1],['araba',2],['kelebek',2]]},
 test:[
  ['“kitap” kelimesi kaç hecedir?',['2','1','3'],1],
  ['Hangisi doğru hecelenmiştir?',['ar-ka-daş','a-rka-daş','ark-a-daş'],0],
  ['Hangi kelime tek hecelidir?',['göz','kapı','elma'],1],
  ['Her hecede en az bir tane ne bulunur?',['Ünlü harf','Ünsüz harf','Nokta'],2]
 ]},

'1|Hayat Bilgisi': { konu:'Sağlıklı ve güvenli bir gün', beceri:['Öz bakım','Beslenme','Güvenlik'],
 v:[
  ['Sağlıklı bir gün sabahtan başlar. Bilgin’in gününe birlikte bakalım.','Günaydın!','selam',{tip:'sira',ogeler:[['Sabah','yüzünü yıka'],['Kahvaltı','güne enerjiyle başla'],['Okul yolu','yaya geçidini kullan'],['Akşam','dişlerini fırçala']]}],
  ['Ellerimizi yemekten önce ve sonra sabunla yıkarız. Dişlerimizi sabah ve akşam fırçalarız.','Köpük köpük!','ipucu',{tip:'cift',ogeler:[['Yemekten önce ve sonra','elleri yıkarız'],['Sabah ve akşam','dişleri fırçalarız']]}],
  ['Ara öğünde meyve, süt ya da yoğurt seçeriz.','Afiyet olsun!','sevinc',{tip:'liste',ogeler:['meyve','süt','yoğurt','ceviz']}],
  ['Karşıdan karşıya yaya geçidinden, yayalar için yeşil ışık yanınca geçeriz.','Önce bak!','dusunme',{tip:'kural',y:'Karşıdan karşıya <b>yaya geçidinden</b>, yeşil ışıkta geçeriz.'}],
  ['Akşam erken yatarız; uyku büyümemize ve dinlenmemize yardım eder.','İyi geceler!','rozet',{tip:'buyuk',y:'Erken yat',alt:'Uyku büyümene yardım eder.'}]
 ],
 oyun:{tip:'kova',ad:'İyi Alışkanlıklar',yonerge:'Davranışa dokun, sonra doğru kutuyu seç.',kovalar:['Sağlıklı','Sağlıksız'],ogeler:[['Elini sabunla yıkamak',0],['Meyve yemek',0],['Erken yatmak',0],['Dişini fırçalamak',0],['Gece geç yatmak',1],['Çok şeker yemek',1],['Elini yıkamadan yemek',1]]},
 test:[
  ['Ellerimizi ne zaman yıkarız?',['Yemekten önce ve sonra','Yalnızca akşam','Hiç yıkamayız'],0],
  ['Hangisi sağlıklı bir ara öğündür?',['Meyve','Cips','Gazlı içecek'],1],
  ['Karşıdan karşıya nereden geçeriz?',['Yaya geçidinden','Arabaların arasından','Köşeden koşarak'],2],
  ['Dişlerimizi günde en az kaç kez fırçalarız?',['İki','Bir','Hiç'],0]
 ]},

/* ===================== 2. SINIF ===================== */
'2|Matematik': { konu:'Eldeli toplama', beceri:['İşlem','Basamak','Akıl yürütme'],
 v:[
  ['28 ile 33’ü toplayalım. Önce birlikleri toplarız: 8 artı 3, 11 eder.','Birliklerden başla!','selam',{tip:'buyuk',y:'28 + 33',alt:'birlikler: 8 + 3 = 11'}],
  ['11 birlik, 1 onluk ve 1 birlik demektir. Onluğu onlar basamağına taşırız.','1 onluk taşı!','dusunme',{tip:'parca',ogeler:[['1','onluk → onlara'],['1','birlik → birlere']]}],
  ['Onlar basamağında 2 artı 3, bir de taşıdığımız 1 onluk: toplam 6 onluk.','2 + 3 + 1','ipucu',{tip:'cift',ogeler:[['Onlar','2 + 3 + 1 = 6'],['Birler','1']]}],
  ['Sonuç 6 onluk ve 1 birlik, yani 61.','61!','sevinc',{tip:'buyuk',y:'28 + 33 = 61'}],
  ['Birlikler 10 ya da daha fazla olursa 10 birlik 1 onluk olur ve onlara eklenir.','Sıra sende!','rozet',{tip:'kural',y:'<b>10 birlik = 1 onluk.</b> Onluğu onlar basamağına taşı.'}]
 ],
 oyun:{tip:'eslestir',ad:'Toplama Eşleştir',yonerge:'İşleme dokun, sonra sonucunu seç.',ciftler:[['28 + 33','61'],['45 + 27','72'],['19 + 16','35'],['36 + 48','84']]},
 test:[
  ['27 + 15 kaçtır?',['42','32','312'],0],
  ['38 + 46 kaçtır?',['84','74','714'],0],
  ['Birlikler toplamı 10 olursa ne yaparız?',['1 onluk olarak onlara ekleriz','Sileriz','Birlerde bırakırız'],1],
  ['Hangisinde onluk taşınır?',['26 + 17','21 + 14','32 + 15'],2]
 ]},

'2|Türkçe': { konu:'Nokta, soru işareti, ünlem', beceri:['Noktalama','Cümle tanıma','Yazım kuralı'],
 v:[
  ['Cümlelerin sonunda üç arkadaş bekler: nokta, soru işareti ve ünlem.','Üç arkadaş!','selam',{tip:'cift',ogeler:[['.','nokta'],['?','soru işareti'],['!','ünlem']]}],
  ['Bilgi veren cümlenin sonuna nokta koyarız: Kedim süt içti.','Nokta!','dusunme',{tip:'buyuk',y:'Kedim süt içti.',alt:'bilgi veren cümle → nokta'}],
  ['Soru soran cümlenin sonuna soru işareti koyarız: Adın ne?','Soru işareti!','ipucu',{tip:'buyuk',y:'Adın ne?',alt:'soru soran cümle → soru işareti'}],
  ['Sevinç, korku ya da şaşkınlık anlatan cümlenin sonuna ünlem koyarız: Eyvah, top kaçtı!','Ünlem!','sevinc',{tip:'buyuk',y:'Eyvah, top kaçtı!',alt:'sevinç, korku, şaşkınlık → ünlem'}],
  ['Cümleye büyük harfle başlarız, sonuna uygun işareti koyarız.','Sıra sende!','rozet',{tip:'kural',y:'Cümleye <b>büyük harfle</b> başla, sonuna uygun işareti koy.'}]
 ],
 oyun:{tip:'kova',ad:'İşaret Kutuları',yonerge:'Cümleye dokun, sonra sonuna gelecek işareti seç.',kovalar:['.','?','!'],ogeler:[['Bugün hava güzel',0],['Kedim süt içti',0],['Okula kaçta gidiyorsun',1],['Adın ne',1],['Eyvah, top camı kırdı',2],['Yaşasın, kazandık',2]]},
 test:[
  ['“Bu kalem senin mi” cümlesinin sonuna ne gelir?',['?','.','!'],0],
  ['“Aman, düşeceksin” cümlesinin sonuna ne gelir?',['!','?','.'],0],
  ['Hangi cümlenin sonuna nokta gelir?',['Annem çay demledi','Kaç yaşındasın','Yaşasın, tatil başladı'],1],
  ['Cümleye nasıl başlarız?',['Büyük harfle','Küçük harfle','Noktayla'],2]
 ]},

'2|Hayat Bilgisi': { konu:'Mevsimler', beceri:['Sıralama','Ay ve mevsim','Gözlem'],
 v:[
  ['Bir yılda dört mevsim vardır: ilkbahar, yaz, sonbahar ve kış.','Dört mevsim!','selam',{tip:'liste',ogeler:['İlkbahar','Yaz','Sonbahar','Kış']}],
  ['Her mevsim üç ay sürer. İlkbahar: mart, nisan, mayıs. Yaz: haziran, temmuz, ağustos.','Üçer ay','dusunme',{tip:'kova',kovalar:[['İlkbahar',['Mart','Nisan','Mayıs']],['Yaz',['Haziran','Temmuz','Ağustos']]]}],
  ['Sonbahar: eylül, ekim, kasım. Kış: aralık, ocak, şubat.','Üçer ay','ipucu',{tip:'kova',kovalar:[['Sonbahar',['Eylül','Ekim','Kasım']],['Kış',['Aralık','Ocak','Şubat']]]}],
  ['İlkbaharda ağaçlar çiçek açar, sonbaharda yapraklar sararıp düşer, kışın kar yağabilir.','Gözlemle!','sevinc',{tip:'cift',ogeler:[['İlkbahar','ağaçlar çiçek açar'],['Sonbahar','yapraklar sararıp düşer'],['Kış','kar yağabilir']]}],
  ['Mevsimler hep aynı sırayla gelir. Şimdi ayları mevsimlerine sen yerleştir!','Sıra sende!','rozet',{tip:'kural',y:'Sıra hiç değişmez: <b>ilkbahar → yaz → sonbahar → kış</b>.'}]
 ],
 oyun:{tip:'kova',ad:'Ay Sepetleri',yonerge:'Aya dokun, sonra mevsimini seç.',kovalar:['İlkbahar','Yaz','Sonbahar','Kış'],ogeler:[['Nisan',0],['Mayıs',0],['Temmuz',1],['Ağustos',1],['Ekim',2],['Kasım',2],['Ocak',3],['Şubat',3]]},
 test:[
  ['Yazdan sonra hangi mevsim gelir?',['Sonbahar','İlkbahar','Kış'],0],
  ['Ocak ayı hangi mevsimdedir?',['Kış','Yaz','Sonbahar'],1],
  ['Bir yılda kaç mevsim vardır?',['4','3','12'],1],
  ['Ağaçlar hangi mevsimde yapraklarını döker?',['Sonbahar','İlkbahar','Yaz'],2]
 ]},

'2|İngilizce': { konu:'Colors · Renkler', beceri:['Kelime bilgisi','Anlama','Konuşma kalıbı'],
 v:[
  ['Renkleri İngilizce öğrenelim: red kırmızı, blue mavi, yellow sarı, green yeşil.','Colors!','selam',{tip:'renk',ogeler:[['red','#E5484D'],['blue','#2F6FD6'],['yellow','#F5C518'],['green','#3E9B4F']]}],
  ['Orange turuncu, purple mor, pink pembe, brown kahverengi.','More colors!','sevinc',{tip:'renk',ogeler:[['orange','#FF8A3D'],['purple','#7B4FB8'],['pink','#F49AC1'],['brown','#8B5A2B']]}],
  ['Güneş sarı, çimen yeşil, gökyüzü mavidir.','Look around!','dusunme',{tip:'cift',ogeler:[['The sun is','yellow.'],['The grass is','green.'],['The sky is','blue.']]}],
  ['Rengi sormak için “What color is it?” deriz. Cevap: “It’s red.”','What color?','ipucu',{tip:'buyuk',y:'What color is it?',alt:'It’s red.'}],
  ['Şimdi renk kelimelerini boyalarıyla sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'Soru: <b>What color is it?</b> · Cevap: <b>It’s …</b>'}]
 ],
 oyun:{tip:'eslestir',ad:'Renk Kurdu',yonerge:'Kelimeye dokun, sonra boyasını seç.',ciftler:[['red','{{renk:#E5484D:kırmızı}}'],['blue','{{renk:#2F6FD6:mavi}}'],['yellow','{{renk:#F5C518:sarı}}'],['green','{{renk:#3E9B4F:yeşil}}'],['purple','{{renk:#7B4FB8:mor}}']]},
 test:[
  ['Muz hangi renktir?',['yellow','red','blue'],0],
  ['“green” hangi renktir?',['yeşil','mavi','mor'],1],
  ['“What color is it?” sorusuna hangisi cevap olur?',['It’s blue.','I’m fine.','It’s a cat.'],2],
  ['Gökyüzü hangi renktir?',['blue','brown','pink'],0]
 ]},

/* ===================== 3. SINIF ===================== */
'3|Matematik': { konu:'Çarpma: tekrarlı toplama', beceri:['İşlem','Modelleme','Özellik bulma'],
 v:[
  ['Bahçede 3 sıra var, her sırada 4 fide. Hepsini sayalım: 4 artı 4 artı 4.','Kaç fide?','selam',{tip:'buyuk',y:'4 + 4 + 4',alt:'aynı sayıyı tekrar topluyoruz'}],
  ['Aynı sayıyı tekrar tekrar toplamanın kısa yolu çarpmadır: 3 kere 4, 12 eder.','Kısa yol!','sevinc',{tip:'buyuk',y:'3 × 4 = 12',alt:'3 tane 4'}],
  ['5 artı 5, 2 kere 5 demektir. 6 artı 6 artı 6, 3 kere 6 demektir.','Kaç tane?','dusunme',{tip:'cift',ogeler:[['5 + 5','2 × 5 = 10'],['6 + 6 + 6','3 × 6 = 18']]}],
  ['Çarpanların yerini değiştirsek de sonuç değişmez: 3 kere 4 de, 4 kere 3 de 12 eder.','Yer değiştir!','ipucu',{tip:'cift',ogeler:[['3 × 4','12'],['4 × 3','12']]}],
  ['Çarpma, aynı sayıyı tekrar tekrar toplamanın kısa yoludur. Şimdi sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'Çarpma = aynı sayıyı <b>tekrar tekrar toplamanın</b> kısa yolu.'}]
 ],
 oyun:{tip:'eslestir',ad:'Kısa Yol Eşleştir',yonerge:'Toplamaya dokun, sonra aynı işi yapan çarpmayı seç.',ciftler:[['4 + 4 + 4','3 × 4'],['5 + 5','2 × 5'],['6 + 6 + 6','3 × 6'],['2 + 2 + 2 + 2 + 2','5 × 2']]},
 test:[
  ['4 × 6 kaçtır?',['24','10','20'],0],
  ['7 + 7 + 7 hangi çarpmaya eşittir?',['3 × 7','7 × 7','3 + 7'],1],
  ['5 × 6 kaçtır?',['30','11','25'],0],
  ['3 × 8 = 24 ise 8 × 3 kaçtır?',['24','11','38'],2]
 ]},

'3|Türkçe': { konu:'Eş anlamlı kelimeler', beceri:['Kelime bilgisi','Ayırt etme','Tanımlama'],
 v:[
  ['Yazılışları farklı, anlamları aynı olan kelimelere eş anlamlı kelimeler denir.','Aynı anlam!','selam',{tip:'buyuk',y:'okul = mektep'}],
  ['Cevap ile yanıt, kırmızı ile al, siyah ile kara eş anlamlıdır.','İkiz kelimeler','dusunme',{tip:'cift',ogeler:[['cevap','yanıt'],['kırmızı','al'],['siyah','kara']]}],
  ['Öğrenci ile talebe, hediye ile armağan, yaşlı ile ihtiyar da eş anlamlıdır.','Bir çift daha!','sevinc',{tip:'cift',ogeler:[['öğrenci','talebe'],['hediye','armağan'],['yaşlı','ihtiyar']]}],
  ['Cümlede bir kelimenin yerine eş anlamlısını koyunca anlam değişmez. Sınav yerine imtihan diyebiliriz.','Anlam aynı kalır.','ipucu',{tip:'buyuk',y:'Sınavım iyi geçti.',alt:'sınav → imtihan'}],
  ['Şimdi eş anlamlı kelimeleri sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'Eş anlamlı: yazılışı <b>farklı</b>, anlamı <b>aynı</b>.'}]
 ],
 oyun:{tip:'eslestir',ad:'Kelime İkizleri',yonerge:'Kelimeye dokun, sonra eş anlamlısını seç.',ciftler:[['cevap','yanıt'],['hediye','armağan'],['öğrenci','talebe'],['siyah','kara'],['hızlı','çabuk']]},
 test:[
  ['“yaşlı” kelimesinin eş anlamlısı hangisidir?',['ihtiyar','genç','hasta'],0],
  ['“sınav” kelimesinin eş anlamlısı hangisidir?',['imtihan','ödev','ders'],0],
  ['Hangisi eş anlamlı bir çifttir?',['al – kırmızı','uzun – kısa','sıcak – soğuk'],1],
  ['Eş anlamlı kelimeler için hangisi doğrudur?',['Yazılışı farklı, anlamı aynıdır.','Anlamları birbirinin zıttıdır.','Yazılışı da anlamı da farklıdır.'],2]
 ]},

'3|Fen Bilimleri': { konu:'Duyu organlarımız', beceri:['Eşleştirme','Sağlık','Uygulama'],
 v:[
  ['Çevremizi beş duyu organımızla tanırız: göz, kulak, burun, dil ve deri.','Beş duyu!','selam',{tip:'liste',ogeler:['göz','kulak','burun','dil','deri']}],
  ['Göz görmemizi, kulak işitmemizi, burun koklamamızı sağlar.','Gör, duy, kokla!','dusunme',{tip:'cift',ogeler:[['göz','görme'],['kulak','işitme'],['burun','koklama']]}],
  ['Dil tatları algılar. Deri dokunduğumuz yüzeyi, sıcağı ve soğuğu hisseder.','Tat ve dokun!','sevinc',{tip:'cift',ogeler:[['dil','tatma'],['deri','dokunma']]}],
  ['Duyu organlarımızı koruruz: güneşe çıplak gözle bakmayız, kulağımıza sivri cisim sokmayız.','Koru!','ipucu',{tip:'cift',ogeler:[['Güneşe','çıplak gözle bakmayız'],['Kulağa','sivri cisim sokmayız']]}],
  ['Her duyu organı farklı bir bilgiyi algılar ve hepsi birlikte çalışır. Dedektif olma sırası sende!','Sıra sende!','rozet',{tip:'kural',y:'Her duyu organı <b>farklı bir bilgiyi</b> algılar.'}]
 ],
 oyun:{tip:'eslestir',ad:'Hangi Duyu?',yonerge:'Olaya dokun, sonra hangi organın çalıştığını seç.',ciftler:[['Limonun ekşi olduğunu anlamak','dil'],['Zilin çaldığını duymak','kulak'],['Gökkuşağını görmek','göz'],['Çiçeğin kokusunu almak','burun'],['Sobanın sıcak olduğunu hissetmek','deri']]},
 test:[
  ['Tatları hangi organımızla algılarız?',['dil','kulak','burun'],0],
  ['Hangisi duyu organlarımızı korumak için doğru bir davranıştır?',['Güneşe çıplak gözle bakmamak','Çok yüksek sesle müzik dinlemek','Kulağa kalem sokmak'],1],
  ['Kokuyu hangi organımız algılar?',['burun','göz','deri'],0],
  ['Yolda bir arabanın kornasını duyarız. Hangi duyumuz çalışır?',['işitme','tatma','koklama'],2]
 ]},

'3|Hayat Bilgisi': { konu:'Meslekler', beceri:['Meslek bilgisi','Toplum','İlgi keşfi'],
 v:[
  ['Çevremizde pek çok meslek var. Her meslek topluma farklı bir yardım sunar.','Kim ne yapar?','selam',{tip:'liste',ogeler:['doktor','öğretmen','çiftçi','itfaiyeci','eczacı']}],
  ['Doktor hastaları tedavi eder. Öğretmen öğrencilere yeni şeyler öğretir.','Emek var!','dusunme',{tip:'cift',ogeler:[['doktor','hastaları tedavi eder'],['öğretmen','öğrencilere öğretir']]}],
  ['Çiftçi ürün yetiştirir. İtfaiyeci yangını söndürür.','Kahramanlar!','sevinc',{tip:'cift',ogeler:[['çiftçi','ürün yetiştirir'],['itfaiyeci','yangını söndürür']]}],
  ['Bütün meslekler değerlidir. Birbirimizin emeğine ihtiyaç duyarız.','Hepsi değerli','ipucu',{tip:'kural',y:'Bütün meslekler <b>değerlidir</b>; birbirimize ihtiyaç duyarız.'}],
  ['Neyi yapmaktan hoşlandığın, sana uygun meslekler için ipucu verir. Şimdi meslekleri işleriyle eşleştir!','Sıra sende!','rozet',{tip:'buyuk',y:'Sen ne olmak istersin?',alt:'İlgi alanların sana ipucu verir.'}]
 ],
 oyun:{tip:'eslestir',ad:'Kim Ne Yapar?',yonerge:'Mesleğe dokun, sonra yaptığı işi seç.',ciftler:[['doktor','hastaları tedavi eder'],['itfaiyeci','yangını söndürür'],['çiftçi','ürün yetiştirir'],['eczacı','ilaçları verir'],['pilot','uçağı uçurur']]},
 test:[
  ['Yangını söndüren meslek hangisidir?',['itfaiyeci','aşçı','terzi'],0],
  ['Ekmek için buğdayı kim yetiştirir?',['çiftçi','pilot','öğretmen'],0],
  ['Hangisi doğrudur?',['Bütün meslekler değerlidir.','Yalnızca bazı meslekler değerlidir.','Meslekler birbirine ihtiyaç duymaz.'],1],
  ['Resim yapmayı çok seven biri hangi mesleği düşünebilir?',['ressam','dalgıç','pilot'],2]
 ]},

'3|İngilizce': { konu:'My house · Evim', beceri:['Anlama','Kelime bilgisi','Soru-cevap'],
 v:[
  ['Evimizdeki odaları İngilizce öğrenelim: kitchen mutfak, bedroom yatak odası, bathroom banyo, living room oturma odası.','My house!','selam',{tip:'liste',ogeler:['kitchen','bedroom','bathroom','living room']}],
  ['Mutfakta yemek yaparız: I cook. Yatak odasında uyuruz: I sleep.','Where?','dusunme',{tip:'cift',ogeler:[['kitchen','I cook.'],['bedroom','I sleep.']]}],
  ['Banyoda duş alırız: I have a shower. Oturma odasında televizyon izleriz: I watch TV.','In the room!','sevinc',{tip:'cift',ogeler:[['bathroom','I have a shower.'],['living room','I watch TV.']]}],
  ['Birinin nerede olduğunu sormak için “Where is…?” deriz. Cevap: “She is in the kitchen.”','Where is Mom?','ipucu',{tip:'buyuk',y:'Where is Mom?',alt:'She is in the kitchen.'}],
  ['Yeri söylerken “in the” kullanırız. Şimdi ev turuna sen çık!','Sıra sende!','rozet',{tip:'kural',y:'Yer söylerken: <b>in the</b> kitchen, <b>in the</b> bedroom …'}]
 ],
 oyun:{tip:'eslestir',ad:'Ev Turu',yonerge:'İngilizce kelimeye dokun, sonra Türkçesini seç.',ciftler:[['kitchen','mutfak'],['bedroom','yatak odası'],['bathroom','banyo'],['living room','oturma odası'],['garden','bahçe']]},
 test:[
  ['Where do you sleep?',['In the bedroom.','In the kitchen.','In the garden.'],0],
  ['“mutfak” İngilizcede hangisidir?',['kitchen','bathroom','bedroom'],1],
  ['“Where is Dad?” sorusuna hangisi cevap olur?',['He is in the living room.','He is ten.','He is happy.'],2],
  ['I have a shower in the …',['bathroom','kitchen','garden'],0]
 ]},

/* ===================== 4. SINIF ===================== */
'4|Matematik': { konu:'Birim kesirler', beceri:['Kesir okuma','Karşılaştırma','Bütün ve parça'],
 v:[
  ['Pizzayı 4 eş parçaya böldük. Bir parçası bütünün dörtte biridir.','Dörtte bir!','selam',{tip:'pasta',ogeler:[[4,1,'[[1/4]]']]}],
  ['Kesir çizgisinin altındaki sayı payda: bütünün kaç eş parçaya bölündüğünü gösterir. Üstteki sayı pay: kaç parça aldığımızı gösterir.','Pay ve payda','dusunme',{tip:'cift',ogeler:[['pay','kaç parça aldığımız'],['payda','bütünün kaç eş parçaya bölündüğü']]}],
  ['Payı 1 olan kesirlere birim kesir denir: yarım, üçte bir, dörtte bir.','Birim kesir','ipucu',{tip:'pasta',ogeler:[[2,1,'[[1/2]]'],[3,1,'[[1/3]]'],[4,1,'[[1/4]]']]}],
  ['Payda büyüdükçe parçalar küçülür. Bu yüzden üçte bir, altıda birden büyüktür.','Hangisi büyük?','sevinc',{tip:'pasta',ogeler:[[3,1,'[[1/3]]'],[6,1,'[[1/6]]']]}],
  ['Birim kesirlerde paydası küçük olan kesir daha büyüktür. Şimdi dilimleri sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'Birim kesirlerde <b>paydası küçük</b> olan daha büyüktür.'}]
 ],
 oyun:{tip:'eslestir',ad:'Pasta Dilimleri',yonerge:'Pastaya dokun, sonra boyalı kısmın kesrini seç.',ciftler:[['{{pasta:4:1}}','[[1/4]]'],['{{pasta:2:1}}','[[1/2]]'],['{{pasta:3:1}}','[[1/3]]'],['{{pasta:8:1}}','[[1/8]]']]},
 test:[
  ['[[1/6]] kesrinin paydası kaçtır?',['6','1','7'],0],
  ['Hangisi en büyüktür?',['[[1/3]]','[[1/5]]','[[1/8]]'],1],
  ['Bir bütün kaç tane yarımdan oluşur?',['2','1','4'],2],
  ['{{pasta:4:1}} Boyalı kısım hangi kesirdir?',['[[1/4]]','[[1/3]]','[[3/4]]'],0]
 ]},

'4|Türkçe': { konu:'Zıt anlamlı kelimeler', beceri:['Kelime bilgisi','Ayırt etme','Cümlede kullanma'],
 v:[
  ['Anlamca birbirinin karşıtı olan kelimelere zıt anlamlı kelimeler denir.','Tam tersi!','selam',{tip:'buyuk',y:'sıcak ↔ soğuk'}],
  ['Uzun ile kısa, erken ile geç, kolay ile zor zıt anlamlıdır.','Karşıtlar','dusunme',{tip:'cift',ogeler:[['uzun','kısa'],['erken','geç'],['kolay','zor']]}],
  ['Ağır ile hafif, açık ile kapalı, cesur ile korkak da zıt anlamlıdır.','Bir çift daha!','sevinc',{tip:'cift',ogeler:[['ağır','hafif'],['açık','kapalı'],['cesur','korkak']]}],
  ['Zıt anlamlı kelimeler cümlede karşılaştırma yapmamızı sağlar.','Karşılaştır!','ipucu',{tip:'buyuk',y:'Çanta ağır değil, hafif.'}],
  ['Eş anlam aynı anlamı, zıt anlam karşıt anlamı verir. Şimdi avlanma sırası sende!','Sıra sende!','rozet',{tip:'kural',y:'Eş anlam: <b>aynı</b> anlam · Zıt anlam: <b>karşıt</b> anlam.'}]
 ],
 oyun:{tip:'eslestir',ad:'Tam Tersi',yonerge:'Kelimeye dokun, sonra zıt anlamlısını seç.',ciftler:[['uzun','kısa'],['erken','geç'],['ağır','hafif'],['cesur','korkak'],['kolay','zor']]},
 test:[
  ['“geniş” kelimesinin zıt anlamlısı hangisidir?',['dar','büyük','uzun'],0],
  ['Hangisi zıt anlamlı bir çift değildir?',['kara – siyah','ak – kara','iyi – kötü'],1],
  ['“Bu soru çok kolaydı.” cümlesinde “kolay” yerine zıt anlamlısı gelirse hangisi olur?',['zor','basit','kısa'],2],
  ['“yakın” kelimesinin zıt anlamlısı hangisidir?',['uzak','yanında','bitişik'],0]
 ]},

'4|Fen Bilimleri': { konu:'Besinlerin içeriği', beceri:['Sınıflama','Kavram','Sağlıklı seçim'],
 v:[
  ['Besinler vücudumuza farklı maddeler sağlar: karbonhidrat, protein, yağ, vitamin, mineral ve su.','Altı madde!','selam',{tip:'liste',ogeler:['karbonhidrat','protein','yağ','vitamin','mineral','su']}],
  ['Ekmek, makarna ve patates karbonhidrattan zengindir, enerji verir. Yumurta, et ve mercimek proteinden zengindir, büyümemizi sağlar.','Enerji ve büyüme','dusunme',{tip:'kova',kovalar:[['Karbonhidrat',['ekmek','makarna','patates']],['Protein',['yumurta','et','mercimek']]]}],
  ['Yağlar vücutta enerji deposu olur. Meyve ve sebzeler vitamin ve mineral verir, hastalıklardan korunmamıza yardım eder.','Renkli tabak!','ipucu',{tip:'kova',kovalar:[['Yağ',['tereyağı','zeytinyağı','fındık']],['Vitamin ve mineral',['meyve','sebze']]]}],
  ['Su da çok önemlidir; vücudumuzun büyük kısmı sudur.','Su iç!','sevinc',{tip:'buyuk',y:'Su',alt:'Vücudumuzun büyük kısmı sudur.'}],
  ['Dengeli beslenmek için her besin grubundan yeterince yeriz. Şimdi tabağı sen hazırla!','Sıra sende!','rozet',{tip:'kural',y:'Dengeli beslenme: <b>her besin grubundan</b> yeterince.'}]
 ],
 oyun:{tip:'kova',ad:'Besin Kutuları',yonerge:'Besine dokun, sonra en çok içerdiği maddeyi seç.',kovalar:['Karbonhidrat','Protein','Yağ'],ogeler:[['ekmek',0],['pirinç',0],['patates',0],['yumurta',1],['balık',1],['nohut',1],['tereyağı',2],['zeytinyağı',2]]},
 test:[
  ['Hangisi proteince zengindir?',['yumurta','şeker','tereyağı'],0],
  ['Vücuda temel enerjiyi veren besin grubu hangisidir?',['karbonhidrat','vitamin','mineral'],1],
  ['Dengeli beslenme için hangisi doğrudur?',['Her besin grubundan yeterince yemek','Yalnızca sevdiğimiz besini yemek','Öğün atlamak'],2],
  ['Hangisi vitamin ve mineral bakımından zengindir?',['ıspanak','tereyağı','şeker'],0]
 ]},

'4|Sosyal Bilgiler': { konu:'Yön bulma', beceri:['Yön bilgisi','Uygulama','Ara yönler'],
 v:[
  ['Dört ana yön vardır: kuzey, güney, doğu ve batı.','Dört yön!','selam',{tip:'pusula'}],
  ['Güneş her sabah doğu yönünden doğar, akşam batı yönünden batar.','Güneşe bak!','sevinc',{tip:'buyuk',y:'Güneş doğudan doğar',alt:'batıdan batar'}],
  ['Ana yönlerin arasında ara yönler vardır: kuzeydoğu, kuzeybatı, güneydoğu, güneybatı.','Ara yönler','dusunme',{tip:'pusula',ara:true}],
  ['Pusulanın ibresi kuzeyi gösterir. Haritalarda üst kısım genellikle kuzeydir.','Kuzey nerede?','ipucu',{tip:'cift',ogeler:[['Pusulanın ibresi','kuzeyi gösterir'],['Haritanın üstü','genellikle kuzeydir']]}],
  ['Kuzeye dönersen sağın doğu, solun batı, arkan güney olur. Şimdi kâşif sensin!','Sıra sende!','rozet',{tip:'kural',y:'Kuzeye dön: <b>sağın doğu</b>, solun batı, arkan güney.'}]
 ],
 oyun:{tip:'kova',ad:'Yön Kutuları',yonerge:'Yöne dokun, sonra ana yön mü ara yön mü seç.',kovalar:['Ana yön','Ara yön'],ogeler:[['kuzey',0],['güney',0],['doğu',0],['batı',0],['kuzeydoğu',1],['güneybatı',1],['kuzeybatı',1],['güneydoğu',1]]},
 test:[
  ['Güneş hangi yönden doğar?',['doğu','batı','kuzey'],0],
  ['Kuzeye dönen birinin sağ tarafı hangi yöndür?',['doğu','batı','güney'],1],
  ['Kuzey ile batı arasındaki ara yön hangisidir?',['kuzeybatı','güneybatı','kuzeydoğu'],2],
  ['Pusulanın ibresi hangi yönü gösterir?',['kuzey','güney','doğu'],0]
 ]},

'4|İngilizce': { konu:'Telling time · Saatler', beceri:['Saat okuma','Anlama','Soru kalıbı'],
 v:[
  ['Saati sormak için “What time is it?” deriz.','What time?','selam',{tip:'buyuk',y:'What time is it?',alt:'Saat kaç?'}],
  ['Yelkovan 12’yi, akrep 3’ü gösteriyorsa: It’s three o’clock. Saat üç.','O’clock!','dusunme',{tip:'saat',s:3,d:0,y:'It’s three o’clock.'}],
  ['Yelkovan 6’yı gösteriyorsa yarım saat geçmiştir: It’s half past four. Saat dört buçuk.','Half past!','ipucu',{tip:'saat',s:4,d:30,y:'It’s half past four.'}],
  ['Yedi: It’s seven o’clock. Dokuz buçuk: It’s half past nine.','Tick tock!','sevinc',{tip:'cift',ogeler:[['7:00','It’s seven o’clock.'],['9:30','It’s half past nine.']]}],
  ['Tam saatlerde o’clock, buçuklarda half past deriz. Saat kulesi seni bekliyor!','Sıra sende!','rozet',{tip:'kural',y:'Tam saat: <b>o’clock</b> · Buçuk: <b>half past</b>'}]
 ],
 oyun:{tip:'eslestir',ad:'Saat Eşleştir',yonerge:'Saate dokun, sonra İngilizce söylenişini seç.',ciftler:[['{{saat:3:0}}','It’s three o’clock.'],['{{saat:4:30}}','It’s half past four.'],['{{saat:8:0}}','It’s eight o’clock.'],['{{saat:11:30}}','It’s half past eleven.']]},
 test:[
  ['8:30 için hangisi doğrudur?',['It’s half past eight.','It’s eight o’clock.','It’s half past nine.'],0],
  ['“It’s two o’clock.” saat kaçtır?',['2:00','2:30','12:00'],1],
  ['Saati sormak için ne deriz?',['What time is it?','How old are you?','What color is it?'],2],
  ['{{saat:6:0}} Saat kaç?',['It’s six o’clock.','It’s half past six.','It’s twelve o’clock.'],0]
 ]},

/* ===================== 5. SINIF ===================== */
'5|Matematik': { konu:'Çok basamaklı sayılar', kod:'MAT.5.1.1', beceri:['Okuma ve yazma','Bölükleme','Genelleme'],
 v:[
  ['Dünya ile Güneş arasındaki uzaklık yaklaşık 149 600 000 kilometre. Bu kocaman sayıyı nasıl okuruz?','Kocaman bir sayı!','selam',{tip:'buyuk',y:'149 600 000',alt:'km · Dünya ile Güneş arası (yaklaşık)'}],
  ['Sağdan başlayıp rakamları üçerli gruplara ayıralım. Her gruba bölük denir.','Sağdan üçer üçer…','dusunme',{tip:'parca',ogeler:[['149','milyonlar bölüğü'],['600','binler bölüğü'],['000','birler bölüğü']]}],
  ['Her bölüğün içinde aynı üçlü var: yüzler, onlar, birler.','Hep aynı üçlü!','ipucu',{tip:'liste',ogeler:['yüzler','onlar','birler']}],
  ['Her bölüğü üç basamaklı bir sayı gibi okur, sonuna bölüğün adını ekleriz: yüz kırk dokuz milyon altı yüz bin.','Yüz kırk dokuz milyon…','sevinc',{tip:'cift',ogeler:[['149 milyon','yüz kırk dokuz milyon'],['600 bin','altı yüz bin']]}],
  ['Üç milyon seksen beş, üç milyon iki yüz kırk bir bin yüz yirmi üç. Hepsi aynı kuralla okunur.','Hangisi nasıl okunur?','dusunme',{tip:'cift',ogeler:[['3 000 085','üç milyon seksen beş'],['3 241 123','üç milyon iki yüz kırk bir bin yüz yirmi üç']]}],
  ['Her bölük aynı üçlüyü tekrar eder; yalnızca bölüğün adı değişir. Şimdi sıra sende!','Sıra sende!','rozet',{tip:'kural',y:'Her bölük aynı üçlüyü tekrar eder: <b>yüzler · onlar · birler</b>. Yalnızca bölüğün adı değişir.'}]
 ],
 oyun:{tip:'kesici',ad:'Bölük Kesici',yonerge:'Rakamların arasına dokun, sayıyı bölüklere ayır.',sayilar:['85450000','2405318760','30000085']},
 test:[
  ['<b>4 205 000</b> sayısı nasıl okunur?',['dört milyon iki yüz beş bin','dört milyon iki yüz elli bin','dört yüz yirmi milyon beş bin'],0],
  ['<b>Yetmiş milyon on iki bin</b> sayısı hangisidir?',['70 012 000','70 120 000','7 012 000'],0],
  ['<b>38 951 604</b> sayısındaki <b>9</b> hangi bölüktedir?',['binler bölüğü','milyonlar bölüğü','birler bölüğü'],1],
  ['“Sağdan sola her üç basamakta yeni bir bölük adı gelir.” Bu önerme…',['Doğru','Yanlış','Yalnızca altı basamakta doğru'],2]
 ]},

'5|Türkçe': { konu:'Gerçek ve mecaz anlam', beceri:['Anlam ayırt etme','Bağlam','Kavram'],
 v:[
  ['Bir kelimenin akla gelen ilk anlamı gerçek anlamdır: Kapıyı kırdı.','Gerçek anlam','selam',{tip:'buyuk',y:'Kapıyı kırdı.',alt:'gerçek anlam'}],
  ['Kelime gerçek anlamından uzaklaşıp yeni bir anlam kazanırsa mecaz anlam olur: Kalbimi kırdı, yani beni üzdü.','Mecaz anlam','dusunme',{tip:'buyuk',y:'Kalbimi kırdı.',alt:'mecaz anlam: üzdü'}],
  ['Soğuk su gerçek anlamdır; soğuk insan ise mecazdır, sevecen olmayan biri demektir.','Aynı kelime!','ipucu',{tip:'cift',ogeler:[['soğuk su','gerçek'],['soğuk insan','mecaz']]}],
  ['Tatlı pasta gerçek anlamdır; tatlı söz ise mecazdır, insanın hoşuna giden söz demektir.','Tatlı mı?','sevinc',{tip:'cift',ogeler:[['tatlı pasta','gerçek'],['tatlı söz','mecaz']]}],
  ['Kelimenin anlamını cümle belirler. Şimdi anlam dedektifi sensin!','Sıra sende!','rozet',{tip:'kural',y:'Kelimenin anlamını <b>cümle</b> belirler.'}]
 ],
 oyun:{tip:'kova',ad:'Anlam Dedektifi',yonerge:'İfadeye dokun, sonra anlamını seç.',kovalar:['Gerçek anlam','Mecaz anlam'],ogeler:[['ağır çanta',0],['sıcak çorba',0],['keskin bıçak',0],['ağır söz',1],['sıcak karşılama',1],['keskin zekâ',1]]},
 test:[
  ['Hangisinde “tatlı” mecaz anlamdadır?',['Tatlı bir gülüşü var.','Tatlı bir kek yaptı.','Çay çok tatlı olmuş.'],0],
  ['“Bu haber beni çok sarstı.” cümlesinde “sarstı” hangi anlamdadır?',['mecaz','gerçek','terim'],1],
  ['Hangisinde “kırmak” gerçek anlamdadır?',['Bardağı kırdı.','Kalbini kırdı.','Hevesimi kırdı.'],0],
  ['Mecaz anlam için hangisi doğrudur?',['Kelime ilk anlamından uzaklaşır.','Kelimenin akla gelen ilk anlamıdır.','Yalnızca bilim metinlerinde kullanılır.'],2]
 ]},

'5|Fen Bilimleri': { konu:'Kuvvet ve sürtünme', beceri:['Kavram','Karşılaştırma','Akıl yürütme'],
 v:[
  ['Bir cismi itmek ya da çekmek için kuvvet uygularız.','İt ya da çek!','selam',{tip:'buyuk',y:'Kuvvet',alt:'itme ya da çekme'}],
  ['Kuvveti dinamometreyle ölçeriz. Kuvvetin birimi newtondur.','Ölçelim!','dusunme',{tip:'cift',ogeler:[['Kuvveti ölçen araç','dinamometre'],['Kuvvetin birimi','newton (N)']]}],
  ['Hareket eden cisme yüzey ters yönde bir kuvvet uygular: sürtünme. Pürüzlü yüzeyde sürtünme fazla, kaygan yüzeyde azdır.','Halı mı, buz mu?','ipucu',{tip:'cift',ogeler:[['halı','sürtünme fazla'],['buz','sürtünme az']]}],
  ['Sürtünme bazen işimize yarar: ayakkabılarımızın kaymaması, frenlerin aracı durdurması sürtünme sayesindedir.','İşe yarar!','sevinc',{tip:'liste',ogeler:['kaymayan ayakkabı','fren','kar zinciri']}],
  ['Sürtünme kuvveti harekete zıt yönde etki eder. Rampayı sen dene!','Sıra sende!','rozet',{tip:'kural',y:'Sürtünme kuvveti <b>harekete zıt yönde</b> etki eder.'}]
 ],
 oyun:{tip:'kova',ad:'Yüzey Testi',yonerge:'Yüzeye dokun, sonra sürtünmesini seç.',kovalar:['Sürtünme fazla','Sürtünme az'],ogeler:[['halı',0],['zımpara',0],['çakıllı yol',0],['buz',1],['cam',1],['yağlı zemin',1]]},
 test:[
  ['Kuvvetin birimi nedir?',['newton','metre','kilogram'],0],
  ['Kızak hangi yüzeyde en kolay kayar?',['buz','halı','çakıl'],1],
  ['Sürtünme kuvveti hangi yönde etki eder?',['Harekete zıt yönde','Hareketle aynı yönde','Her zaman yukarı doğru'],2],
  ['Kuvveti ölçmek için hangi araç kullanılır?',['dinamometre','termometre','cetvel'],0]
 ]},

'5|Sosyal Bilgiler': { konu:'Türkiye’nin coğrafi bölgeleri', beceri:['Bilgi','Konum','Kavram'],
 v:[
  ['Türkiye yedi coğrafi bölgeye ayrılır.','Yedi bölge!','selam',{tip:'buyuk',y:'7',alt:'coğrafi bölge'}],
  ['Denize kıyısı olan bölgeler: Marmara, Ege, Akdeniz ve Karadeniz.','Kıyıdakiler','dusunme',{tip:'liste',ogeler:['Marmara','Ege','Akdeniz','Karadeniz']}],
  ['Denize kıyısı olmayan bölgeler: İç Anadolu, Doğu Anadolu ve Güneydoğu Anadolu.','İçeridekiler','ipucu',{tip:'liste',ogeler:['İç Anadolu','Doğu Anadolu','Güneydoğu Anadolu']}],
  ['Trabzon Karadeniz’de, İzmir Ege’de, Antalya Akdeniz Bölgesi’ndedir.','Neredeyiz?','sevinc',{tip:'cift',ogeler:[['Trabzon','Karadeniz'],['İzmir','Ege'],['Antalya','Akdeniz']]}],
  ['Bölgeler; iklim, yer şekilleri ve ürünler gibi benzer özelliklere göre ayrılmıştır. Yolculuk başlasın!','Sıra sende!','rozet',{tip:'kural',y:'Bölgeler <b>benzer coğrafi özelliklere</b> göre ayrılmıştır.'}]
 ],
 oyun:{tip:'eslestir',ad:'Hangi Bölge?',yonerge:'Şehre dokun, sonra bölgesini seç.',ciftler:[['Bursa','Marmara'],['Ankara','İç Anadolu'],['Erzurum','Doğu Anadolu'],['Gaziantep','Güneydoğu Anadolu'],['Trabzon','Karadeniz']]},
 test:[
  ['Türkiye kaç coğrafi bölgeye ayrılır?',['7','5','9'],0],
  ['İzmir hangi bölgededir?',['Ege','Akdeniz','Marmara'],1],
  ['Hangi bölgenin denize kıyısı yoktur?',['İç Anadolu','Karadeniz','Ege'],1],
  ['Bölgeler hangi ölçüte göre ayrılmıştır?',['Benzer coğrafi özelliklere','Şehirlerin alfabetik sırasına','Şehirlerin kuruluş yılına'],2]
 ]},

'5|İngilizce': { konu:'Weather · Hava durumu', beceri:['Kelime bilgisi','Anlama','Soru-cevap'],
 v:[
  ['Hava durumunu anlatan kelimeler: sunny güneşli, rainy yağmurlu, snowy karlı, windy rüzgârlı, cloudy bulutlu.','Weather!','selam',{tip:'liste',ogeler:['sunny','rainy','snowy','windy','cloudy']}],
  ['Havayı sormak için “What’s the weather like?” deriz.','How is it?','dusunme',{tip:'buyuk',y:'What’s the weather like?',alt:'Hava nasıl?'}],
  ['Yağmurluysa şemsiye alırız, güneşliyse şapka takarız.','Hazırlan!','ipucu',{tip:'cift',ogeler:[['It’s rainy.','Take an umbrella.'],['It’s sunny.','Wear a hat.']]}],
  ['Sıcak için hot, soğuk için cold deriz.','Hot or cold?','sevinc',{tip:'cift',ogeler:[['hot','sıcak'],['cold','soğuk']]}],
  ['Cevap verirken “It’s” ile başlarız. Hava spikeri sensin!','Sıra sende!','rozet',{tip:'kural',y:'Cevap: <b>It’s</b> sunny / rainy / cold …'}]
 ],
 oyun:{tip:'eslestir',ad:'Weather Words',yonerge:'Kelimeye dokun, sonra Türkçesini seç.',ciftler:[['sunny','güneşli'],['rainy','yağmurlu'],['snowy','karlı'],['windy','rüzgârlı'],['cloudy','bulutlu']]},
 test:[
  ['“It’s snowy.” ne demektir?',['Hava karlı.','Hava güneşli.','Hava rüzgârlı.'],1],
  ['Hava yağmurluysa hangisini alırız?',['an umbrella','sunglasses','a kite'],1],
  ['“What’s the weather like?” sorusuna hangisi cevaptır?',['It’s cloudy.','I’m eleven.','It’s a pencil.'],2],
  ['“cold” ne demektir?',['soğuk','sıcak','bulutlu'],0]
 ]},

'5|Din Kültürü': { konu:'Ramazan ve oruç', beceri:['Kavram','Bilgi','Değer'],
 v:[
  ['Ramazan, Müslümanların oruç tuttuğu aydır.','Ramazan','selam',{tip:'buyuk',y:'Ramazan',alt:'oruç ayı'}],
  ['Sahur, imsaktan önce yenen yemektir. İftar, orucun açıldığı vakit ve yemektir.','Sahur ve iftar','dusunme',{tip:'cift',ogeler:[['sahur','imsaktan önce yenen yemek'],['iftar','orucun açıldığı vakit ve yemek']]}],
  ['Teravih, Ramazan gecelerinde kılınan namazdır. Fitre, Ramazan’da ihtiyaç sahiplerine verilen sadakadır.','Teravih ve fitre','ipucu',{tip:'cift',ogeler:[['teravih','Ramazan gecelerinde kılınan namaz'],['fitre','Ramazan’da verilen sadaka']]}],
  ['Ramazan; paylaşma, yardımlaşma ve sabır gibi değerleri güçlendirir.','Paylaşalım','sevinc',{tip:'liste',ogeler:['paylaşma','yardımlaşma','sabır']}],
  ['Ramazan ayının ardından Ramazan Bayramı kutlanır. Şimdi kavramları sen eşleştir!','Sıra sende!','rozet',{tip:'buyuk',y:'Ramazan Bayramı',alt:'Ramazan’ın ardından kutlanır'}]
 ],
 oyun:{tip:'eslestir',ad:'Ramazan Kavramları',yonerge:'Kavrama dokun, sonra anlamını seç.',ciftler:[['sahur','imsaktan önce yenen yemek'],['iftar','orucun açıldığı vakit'],['teravih','Ramazan gecelerinde kılınan namaz'],['fitre','Ramazan’da verilen sadaka']]},
 test:[
  ['İmsaktan önce yenen yemeğe ne denir?',['sahur','iftar','fitre'],0],
  ['Ramazan’da ihtiyaç sahiplerine verilen sadakaya ne denir?',['fitre','teravih','sahur'],0],
  ['Ramazan ayının ardından hangi bayram kutlanır?',['Ramazan Bayramı','Kurban Bayramı','Cumhuriyet Bayramı'],1],
  ['Ramazan hangi değeri güçlendirir?',['yardımlaşma','bencillik','israf'],2]
 ]},

/* ===================== 6. SINIF ===================== */
'6|Matematik': { konu:'Oran', beceri:['Oran yazma','Eşit oran','Problem çözme'],
 v:[
  ['Tarifte 2 kişi için 3 yumurta var. İki çokluğun bölme yoluyla karşılaştırılmasına oran denir.','Karşılaştır!','selam',{tip:'buyuk',y:'2 kişi : 3 yumurta',alt:'oran'}],
  ['Bu oranı 2’nin 3’e oranı diye okuruz; kesir olarak da yazabiliriz.','İki yazılış','dusunme',{tip:'cift',ogeler:[['2 : 3','ikinin üçe oranı'],['[[2/3]]','kesir gösterimi']]}],
  ['Kişi sayısı iki katına çıkarsa yumurta da iki katına çıkar. Oran değişmez.','Ölçekle!','ipucu',{tip:'cift',ogeler:[['4 kişi','6 yumurta'],['6 kişi','9 yumurta']]}],
  ['Bu yüzden 2’nin 3’e oranı, 4’ün 6’ya oranına eşittir.','Eşit oranlar','sevinc',{tip:'buyuk',y:'2 : 3 = 4 : 6',alt:'eşit oranlar'}],
  ['Oranın iki terimini sıfırdan farklı aynı sayıyla çarparsak ya da bölersek oran değişmez. Mutfak senin!','Sıra sende!','rozet',{tip:'kural',y:'İki terimi <b>sıfırdan farklı aynı sayıyla</b> çarp ya da böl: oran değişmez.'}]
 ],
 oyun:{tip:'eslestir',ad:'Eşit Oranlar',yonerge:'Orana dokun, sonra ona eşit oranı seç.',ciftler:[['1 : 2','3 : 6'],['2 : 3','4 : 6'],['3 : 4','9 : 12'],['1 : 5','2 : 10']]},
 test:[
  ['Sınıfta 12 kız, 18 erkek öğrenci var. Kızların sayısının erkeklerin sayısına oranı nedir?',['[[2/3]]','[[3/2]]','[[2/5]]'],0],
  ['Hangisi 2 : 5 oranına eşittir?',['6 : 15','4 : 8','5 : 2'],1],
  ['3 bardak una 1 bardak süt konuyor. 9 bardak un için kaç bardak süt gerekir?',['3','9','4'],2],
  ['Hangi işlem bir oranı değiştirmez?',['İki terimi de aynı sayıyla çarpmak','İki terime farklı sayılar eklemek','Yalnızca bir terimi ikiyle çarpmak'],1]
 ]},

'6|Türkçe': { konu:'İsim tamlamaları', beceri:['Öge bulma','Tür ayırt etme','Kural'],
 v:[
  ['İki isim bir araya gelip yeni bir kavram oluşturursa isim tamlaması olur. Okulun bahçesi: okulun tamlayan, bahçesi tamlanan.','Tamlayan + tamlanan','selam',{tip:'buyuk',y:'okulun bahçesi',alt:'tamlayan + tamlanan'}],
  ['Tamlayan ilgi eki, tamlanan iyelik eki alır.','Ekleri bul!','dusunme',{tip:'cift',ogeler:[['okulun','tamlayan · ilgi eki -un'],['bahçesi','tamlanan · iyelik eki -si']]}],
  ['Tamlayan ek alıyorsa belirtili, ek almıyorsa belirtisiz isim tamlamasıdır.','Belirtili mi?','ipucu',{tip:'cift',ogeler:[['Belirtili','okulun bahçesi'],['Belirtisiz','okul bahçesi']]}],
  ['Evin kapısı belirtili, ev kapısı belirtisizdir. Kalemin ucu belirtili, kalem ucu belirtisizdir.','Bir çift daha!','sevinc',{tip:'cift',ogeler:[['evin kapısı','ev kapısı'],['kalemin ucu','kalem ucu']]}],
  ['Belirtisiz tamlamada tamlayan ek almaz, tamlanan yine iyelik eki alır. Yapbozu sen tamamla!','Sıra sende!','rozet',{tip:'kural',y:'Belirtisiz tamlamada <b>tamlayan ek almaz</b>, tamlanan iyelik eki alır.'}]
 ],
 oyun:{tip:'kova',ad:'Tamlama Kutuları',yonerge:'Tamlamaya dokun, sonra türünü seç.',kovalar:['Belirtili','Belirtisiz'],ogeler:[['evin kapısı',0],['kalemin ucu',0],['ağacın dalı',0],['okul bahçesi',1],['kapı kolu',1],['deniz kenarı',1]]},
 test:[
  ['“Kitabın kapağı yırtılmış.” cümlesindeki tamlamada tamlayan hangisidir?',['kitabın','kapağı','yırtılmış'],0],
  ['Hangisi belirtisiz isim tamlamasıdır?',['deniz kenarı','denizin kenarı','mavi deniz'],1],
  ['Belirtili isim tamlamasında tamlayan hangi eki alır?',['ilgi eki (-ın, -in)','çoğul eki (-lar, -ler)','iyelik eki (-ı, -i)'],2],
  ['“bahçenin kapısı” belirtisiz yapılırsa hangisi olur?',['bahçe kapısı','bahçeler kapısı','bahçenin kapı'],1]
 ]},

'6|Fen Bilimleri': { konu:'Sindirim sistemi', beceri:['Organ görevi','Yardımcı organ','Sıralama'],
 v:[
  ['Besinler sindirim kanalında şu sırayla ilerler: ağız, yemek borusu, mide, ince bağırsak, kalın bağırsak.','Lokmanın yolu','selam',{tip:'sira',ogeler:[['ağız'],['yemek borusu'],['mide'],['ince bağırsak'],['kalın bağırsak']]}],
  ['Ağızda dişler besinleri parçalar, tükürük karışır. Midede besinler mide özsuyuyla karışır.','Parçala, karıştır!','dusunme',{tip:'cift',ogeler:[['ağız','dişler parçalar, tükürük karışır'],['mide','mide özsuyuyla karışır']]}],
  ['İnce bağırsakta sindirim tamamlanır ve besinler kana geçer. Kalın bağırsakta su ve mineraller emilir.','Kana geçiş','ipucu',{tip:'cift',ogeler:[['ince bağırsak','sindirim tamamlanır, besinler kana geçer'],['kalın bağırsak','su ve mineraller emilir']]}],
  ['Karaciğer ve pankreas sindirime yardım eder; besinler bu organların içinden geçmez.','Yardımcılar','sevinc',{tip:'liste',ogeler:['karaciğer','pankreas']}],
  ['Sindirim, büyük besin parçalarının kana geçebilecek küçük parçalara ayrılmasıdır. Vücut turu başlasın!','Sıra sende!','rozet',{tip:'kural',y:'Sindirim: büyük besinleri <b>kana geçebilecek</b> küçük parçalara ayırmak.'}]
 ],
 oyun:{tip:'sirala',ad:'Lokmanın Yolu',yonerge:'Bir lokmanın yolculuğunu sırala.',ogeler:['ağız','yemek borusu','mide','ince bağırsak','kalın bağırsak']},
 test:[
  ['Sindirimin tamamlandığı ve besinlerin kana geçtiği organ hangisidir?',['ince bağırsak','mide','yemek borusu'],0],
  ['Hangisi besinlerin içinden geçmediği yardımcı bir organdır?',['karaciğer','mide','yemek borusu'],1],
  ['Mideden sonra besinler hangi organa geçer?',['ince bağırsak','kalın bağırsak','yemek borusu'],2],
  ['Kalın bağırsakta hangileri emilir?',['su ve mineraller','proteinler','yağlar'],0]
 ]},

'6|Sosyal Bilgiler': { konu:'İpek Yolu', beceri:['Bilgi','Kavram','Neden-sonuç'],
 v:[
  ['İpek Yolu, Çin’den başlayıp Orta Asya ve Anadolu üzerinden Avrupa’ya uzanan büyük bir ticaret yoluydu.','Uzun bir yol!','selam',{tip:'buyuk',y:'İpek Yolu',alt:'Çin’den Avrupa’ya ticaret yolu'}],
  ['Kervanlar doğudan batıya Çin, Orta Asya, İran ve Anadolu üzerinden Avrupa’ya ulaşırdı.','Doğudan batıya','dusunme',{tip:'sira',ogeler:[['Çin'],['Orta Asya'],['İran'],['Anadolu'],['Avrupa']]}],
  ['Bu yolda ipek, porselen ve baharat gibi değerli ürünler taşındı.','Değerli yük','ipucu',{tip:'liste',ogeler:['ipek','porselen','baharat']}],
  ['Birlikte yolculuk eden tüccarlara kervan, kervanların konakladığı yapılara kervansaray denir.','Mola!','sevinc',{tip:'cift',ogeler:[['kervan','birlikte yolculuk eden tüccarlar'],['kervansaray','kervanların konakladığı yapı']]}],
  ['Ticaret yolları yalnızca mal değil; bilgi, kültür ve icatların da yayılmasını sağladı. Kervanı sen yürüt!','Sıra sende!','rozet',{tip:'kural',y:'Ticaret yolları <b>bilgi ve kültürü</b> de taşır.'}]
 ],
 oyun:{tip:'sirala',ad:'Kervan Rotası',yonerge:'Kervanı doğudan batıya yürüt.',ogeler:['Çin','Orta Asya','İran','Anadolu','Avrupa']},
 test:[
  ['İpek Yolu hangi ülkeden başlar?',['Çin','İtalya','Mısır'],0],
  ['Kervanların konakladığı yapılara ne denir?',['kervansaray','saray','köşk'],1],
  ['İpek Yolu ile hangisi taşınmıştır?',['baharat','petrol','elektrik'],0],
  ['Ticaret yolları kültürleri nasıl etkiler?',['Bilgi ve kültürün yayılmasını sağlar','Kültürleri birbirinden koparır','Hiç etkilemez'],2]
 ]},

'6|İngilizce': { konu:'Breakfast · Kahvaltı', beceri:['Kelime bilgisi','Anlama','Kalıp'],
 v:[
  ['Kahvaltı sofrası: bread ekmek, cheese peynir, olives zeytin, eggs yumurta, honey bal, tea çay.','Breakfast!','selam',{tip:'liste',ogeler:['bread','cheese','olives','eggs','honey','tea']}],
  ['Kahvaltıda ne yediğini sormak için: What do you have for breakfast?','What do you have?','dusunme',{tip:'buyuk',y:'What do you have for breakfast?',alt:'Kahvaltıda ne yersin?'}],
  ['Cevap verirken: I have eggs and cheese. I drink milk.','I have…','ipucu',{tip:'cift',ogeler:[['I have','eggs and cheese.'],['I drink','milk.']]}],
  ['Sevip sevmediğini sorarlarsa: Do you like olives? Yes, I do. Ya da: No, I don’t.','Yes or no?','sevinc',{tip:'cift',ogeler:[['Do you like olives?','Yes, I do.'],['Do you like honey?','No, I don’t.']]}],
  ['Sevdiğini “I like”, sevmediğini “I don’t like” ile söyleriz. Menüyü sen hazırla!','Sıra sende!','rozet',{tip:'kural',y:'<b>I like</b> … · <b>I don’t like</b> …'}]
 ],
 oyun:{tip:'eslestir',ad:'Kahvaltı Menüsü',yonerge:'Kelimeye dokun, sonra Türkçesini seç.',ciftler:[['bread','ekmek'],['cheese','peynir'],['olives','zeytin'],['honey','bal'],['eggs','yumurta']]},
 test:[
  ['“honey” ne demektir?',['bal','peynir','reçel'],0],
  ['“Do you like tea?” sorusuna hangisi uygun cevaptır?',['Yes, I do.','Yes, I am.','Yes, it is.'],2],
  ['“I don’t like milk.” ne demektir?',['Sütü sevmem.','Sütü severim.','Süt içiyorum.'],1],
  ['Hangisi bir kahvaltı yiyeceğidir?',['cheese','pencil','bus'],0]
 ]},

'6|Din Kültürü': { konu:'İlahi kitaplar', beceri:['Bilgi','Kavram','Eşleştirme'],
 v:[
  ['İslam inancına göre Allah, peygamberlerine kitaplar göndermiştir. Dört büyük ilahi kitap vardır.','Dört kitap','selam',{tip:'buyuk',y:'İlahi kitaplar',alt:'dört büyük kitap'}],
  ['Tevrat Hz. Musa’ya, Zebur Hz. Davut’a indirilmiştir.','Tevrat ve Zebur','dusunme',{tip:'cift',ogeler:[['Tevrat','Hz. Musa'],['Zebur','Hz. Davut']]}],
  ['İncil Hz. İsa’ya, Kur’an-ı Kerim Hz. Muhammed’e indirilmiştir.','İncil ve Kur’an','ipucu',{tip:'cift',ogeler:[['İncil','Hz. İsa'],['Kur’an-ı Kerim','Hz. Muhammed']]}],
  ['Bazı peygamberlere ise sahife denen küçük kitapçıklar indirilmiştir; bunların hepsine suhuf denir.','Suhuf','sevinc',{tip:'buyuk',y:'Suhuf',alt:'bazı peygamberlere indirilen sahifeler'}],
  ['Kur’an-ı Kerim son ilahi kitaptır. Şimdi kitapları peygamberlerle sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'<b>Kur’an-ı Kerim</b> son ilahi kitaptır.'}]
 ],
 oyun:{tip:'eslestir',ad:'Kitaplar ve Peygamberler',yonerge:'Kitaba dokun, sonra indirildiği peygamberi seç.',ciftler:[['Tevrat','Hz. Musa'],['Zebur','Hz. Davut'],['İncil','Hz. İsa'],['Kur’an-ı Kerim','Hz. Muhammed']]},
 test:[
  ['Zebur hangi peygambere indirilmiştir?',['Hz. Davut','Hz. Musa','Hz. İsa'],2],
  ['Son ilahi kitap hangisidir?',['Kur’an-ı Kerim','Tevrat','İncil'],0],
  ['Bazı peygamberlere indirilen sahifelerin genel adı nedir?',['suhuf','sure','ayet'],1],
  ['Hz. İsa’ya indirilen kitap hangisidir?',['İncil','Zebur','Tevrat'],2]
 ]},

/* ===================== 7. SINIF ===================== */
'7|Matematik': { konu:'Denklemler', beceri:['Çözüm','Modelleme','Eşitlik kuralı'],
 v:[
  ['Terazinin bir kefesinde x ve 3 kilo, öbür kefesinde 7 kilo var. Terazi dengede: x artı 3 eşittir 7.','Denge!','selam',{tip:'buyuk',y:'x + 3 = 7',alt:'terazi dengede'}],
  ['Dengeyi bozmadan iki kefeden de 3 çıkarırız. Geriye x eşittir 4 kalır.','İki taraftan da!','dusunme',{tip:'cift',ogeler:[['x + 3 − 3','7 − 3'],['x','4']]}],
  ['2x eşittir 10 ise iki tarafı da 2’ye böleriz: x eşittir 5.','Böl!','ipucu',{tip:'buyuk',y:'2x = 10 → x = 5',alt:'iki tarafı da 2’ye böl'}],
  ['3x artı 1 eşittir 10: önce iki taraftan 1 çıkarırız, sonra 3’e böleriz. x eşittir 3.','Adım adım','sevinc',{tip:'cift',ogeler:[['3x + 1 = 10','3x = 9'],['3x = 9','x = 3']]}],
  ['Eşitliğin iki tarafına aynı işlemi yaparsak eşitlik bozulmaz. Teraziyi sen dengele!','Sıra sende!','rozet',{tip:'kural',y:'Eşitliğin <b>iki tarafına aynı işlemi</b> yaparsan eşitlik bozulmaz.'}]
 ],
 oyun:{tip:'eslestir',ad:'Çözüm Eşleştir',yonerge:'Denkleme dokun, sonra çözümünü seç.',ciftler:[['x + 5 = 12','x = 7'],['2x = 10','x = 5'],['x − 4 = 9','x = 13'],['3x + 1 = 10','x = 3']]},
 test:[
  ['x + 8 = 15 ise x kaçtır?',['7','23','8'],0],
  ['2x = 18 ise x kaçtır?',['9','16','36'],0],
  ['Eşitliğin korunumu için hangisi doğrudur?',['İki tarafa aynı işlem yapılır.','Yalnızca sol tarafa işlem yapılır.','İki tarafa farklı sayılar eklenir.'],2],
  ['Bir sayının 3 katının 2 fazlası 14’tür. Bu sayı kaçtır?',['4','5','6'],1]
 ]},

'7|Türkçe': { konu:'Fiillerde haber kipleri', beceri:['Kip tanıma','Anlam','Kullanım'],
 v:[
  ['Fiiller işin ne zaman yapıldığını haber verir. Bunlara haber kipleri denir.','Ne zaman?','selam',{tip:'buyuk',y:'okudu · okuyor · okuyacak',alt:'zaman bildiren kipler'}],
  ['Görülen geçmiş zaman -di, duyulan geçmiş zaman -miş ekiyle yapılır: geldi, gelmiş.','Gördün mü, duydun mu?','dusunme',{tip:'cift',ogeler:[['-di','görülen geçmiş: geldi'],['-miş','duyulan geçmiş: gelmiş']]}],
  ['Şimdiki zaman -yor, gelecek zaman -ecek ya da -acak ekiyle yapılır: geliyor, gelecek.','Şimdi ve sonra','ipucu',{tip:'cift',ogeler:[['-yor','şimdiki zaman: geliyor'],['-ecek, -acak','gelecek zaman: gelecek']]}],
  ['Her zaman yapılan işler geniş zamanla anlatılır: Her sabah kitap okur.','Her zaman!','sevinc',{tip:'cift',ogeler:[['-r, -ar, -er','geniş zaman: okur, gelir']]}],
  ['Beş haber kipi var: görülen geçmiş, duyulan geçmiş, şimdiki, gelecek ve geniş zaman. Fabrika senin!','Sıra sende!','rozet',{tip:'kural',y:'Beş haber kipi: <b>görülen geçmiş, duyulan geçmiş, şimdiki, gelecek, geniş</b>.'}]
 ],
 oyun:{tip:'kova',ad:'Kip Fabrikası',yonerge:'Fiile dokun, sonra zamanını seç.',kovalar:['Geçmiş','Şimdiki','Gelecek','Geniş'],ogeler:[['okudu',0],['gelmiş',0],['yazıyor',1],['koşuyor',1],['gidecek',2],['okuyacak',2],['okur',3],['gelir',3]]},
 test:[
  ['“koşacak” fiili hangi zamandadır?',['gelecek zaman','şimdiki zaman','geniş zaman'],0],
  ['Hangisi şimdiki zaman kipindedir?',['uçuyor','uçtu','uçar'],0],
  ['“Dün akşam yağmur yağmış.” cümlesindeki kip hangisidir?',['duyulan geçmiş zaman','görülen geçmiş zaman','geniş zaman'],1],
  ['“Her sabah erken kalkar.” cümlesindeki kip hangisidir?',['geniş zaman','şimdiki zaman','gelecek zaman'],2]
 ]},

'7|Fen Bilimleri': { konu:'Hücre', beceri:['Görev bilgisi','Karşılaştırma','Yapı bilgisi'],
 v:[
  ['Hücre, canlıların en küçük yapı birimidir.','Hücre!','selam',{tip:'buyuk',y:'Hücre',alt:'canlının en küçük yapı birimi'}],
  ['Hayvan ve bitki hücresinde üç temel kısım bulunur: hücre zarı, sitoplazma ve çekirdek.','Üç kısım','dusunme',{tip:'liste',ogeler:['hücre zarı','sitoplazma','çekirdek']}],
  ['Çekirdek hücreyi yönetir, mitokondri enerji üretir, ribozom protein üretir.','Kim ne yapar?','ipucu',{tip:'cift',ogeler:[['çekirdek','yönetim merkezi'],['mitokondri','enerji üretir'],['ribozom','protein üretir']]}],
  ['Hücre duvarı ve kloroplast bitki hücresinde bulunur. Sentrozom hayvan hücresinde bulunur.','Farkı bul!','sevinc',{tip:'kova',kovalar:[['Yalnız bitki',['hücre duvarı','kloroplast']],['Yalnız hayvan',['sentrozom']]]}],
  ['İki hücrenin ortak kısımları var; bazı yapılar yalnızca birinde bulunur. Dedektif sensin!','Sıra sende!','rozet',{tip:'kural',y:'Ortak kısımlar çok; ama bazı yapılar <b>yalnızca birinde</b> bulunur.'}]
 ],
 oyun:{tip:'kova',ad:'Organel Kutuları',yonerge:'Yapıya dokun, sonra hangi hücrede bulunduğunu seç.',kovalar:['Yalnız bitki','Yalnız hayvan','İkisinde de'],ogeler:[['hücre duvarı',0],['kloroplast',0],['sentrozom',1],['çekirdek',2],['mitokondri',2],['hücre zarı',2],['ribozom',2]]},
 test:[
  ['Fotosentezin gerçekleştiği organel hangisidir?',['kloroplast','mitokondri','ribozom'],0],
  ['Hangisi yalnızca bitki hücresinde bulunur?',['hücre duvarı','çekirdek','hücre zarı'],1],
  ['Hücrenin yönetim merkezi hangisidir?',['çekirdek','koful','sitoplazma'],2],
  ['Hayvan hücresinde bulunup bitki hücresinde bulunmayan yapı hangisidir?',['sentrozom','mitokondri','ribozom'],1]
 ]},

'7|Sosyal Bilgiler': { konu:'İletişim ve medya', beceri:['Empati','Medya okuryazarlığı','İletişim'],
 v:[
  ['İletişim; duygu, düşünce ve bilgilerimizi başkalarıyla paylaşmaktır.','Paylaş!','selam',{tip:'buyuk',y:'İletişim',alt:'duygu, düşünce ve bilgiyi paylaşmak'}],
  ['Etkili iletişimde karşımızdakini dikkatle dinler, göz teması kurar, sözünü kesmeyiz.','Dinle!','dusunme',{tip:'liste',ogeler:['göz teması','dikkatle dinlemek','sözü kesmemek']}],
  ['Ben dili duygumuzu suçlamadan anlatır. Sen dili ise karşımızdakini suçlar.','Ben dili','ipucu',{tip:'cift',ogeler:[['Ben dili','“Sözüm kesilince üzülüyorum.”'],['Sen dili','“Hep sözümü kesiyorsun!”']]}],
  ['Bir haberi paylaşmadan önce sorarız: kaynağı kim, ne zaman yayımlandı, başka güvenilir kaynaklar da yazıyor mu?','Kontrol et!','sevinc',{tip:'liste',ogeler:['Kaynağı kim?','Ne zaman yayımlandı?','Başka kaynaklar ne diyor?']}],
  ['Kişisel bilgilerimizi internette paylaşmayız. Medya dedektifi sensin!','Sıra sende!','rozet',{tip:'kural',y:'Adres, telefon, şifre gibi <b>kişisel bilgiler</b> paylaşılmaz.'}]
 ],
 oyun:{tip:'kova',ad:'Medya Dedektifi',yonerge:'Davranışa dokun, sonra doğru kutuyu seç.',kovalar:['Doğru davranış','Riskli davranış'],ogeler:[['Haberi farklı kaynaklardan kontrol etmek',0],['Ben diliyle konuşmak',0],['Sözü kesmeden dinlemek',0],['Ev adresini paylaşmak',1],['Yalnızca başlığı okuyup paylaşmak',1],['Şifresini arkadaşına söylemek',1]]},
 test:[
  ['Hangisi “ben dili” ile kurulmuş bir cümledir?',['Bağırınca kendimi kötü hissediyorum.','Sen hep bağırıyorsun!','Bağırma artık!'],0],
  ['Bir haberin doğruluğunu anlamak için önce ne yaparız?',['Kaynağını kontrol ederiz.','Hemen paylaşırız.','Yalnızca başlığa bakarız.'],1],
  ['Hangisi internette paylaşılmamalıdır?',['ev adresi','sevdiğin kitap','okuduğun bir şiir'],1],
  ['Hangisi etkili dinleme davranışıdır?',['göz teması kurmak','telefona bakmak','sözü kesmek'],2]
 ]},

'7|İngilizce': { konu:'Describing people · İnsanları tanıtma', beceri:['Kelime bilgisi','Anlama','Dil bilgisi'],
 v:[
  ['Boyu anlatırken: tall uzun boylu, short kısa boylu, slim ince.','Appearance','selam',{tip:'cift',ogeler:[['tall','uzun boylu'],['short','kısa boylu'],['slim','ince']]}],
  ['Saç ve gözler için: curly hair kıvırcık saç, straight hair düz saç, blue eyes mavi gözler.','Hair and eyes','dusunme',{tip:'cift',ogeler:[['curly hair','kıvırcık saç'],['straight hair','düz saç'],['blue eyes','mavi gözler']]}],
  ['Dış görünüşü anlatırken “has got” kullanırız: She has got long, curly hair.','has got','ipucu',{tip:'buyuk',y:'She has got long, curly hair.',alt:'has got = sahip'}],
  ['Kişiliği anlatırken “is” kullanırız: He is friendly, funny and generous.','Personality','sevinc',{tip:'cift',ogeler:[['friendly','arkadaş canlısı'],['funny','komik'],['generous','cömert']]}],
  ['Görünüş için has got, kişilik için is. Karakter kartları seni bekliyor!','Sıra sende!','rozet',{tip:'kural',y:'Görünüş: He <b>has got</b> … · Kişilik: He <b>is</b> …'}]
 ],
 oyun:{tip:'eslestir',ad:'Karakter Kartları',yonerge:'Kelimeye dokun, sonra Türkçesini seç.',ciftler:[['tall','uzun boylu'],['curly','kıvırcık'],['straight','düz'],['friendly','arkadaş canlısı'],['beard','sakal']]},
 test:[
  ['He ___ got blue eyes.',['has','have','is'],2],
  ['Ayşe isn’t tall. She is ___.',['short','curly','funny'],1],
  ['“kıvırcık saç” İngilizcede hangisidir?',['curly hair','straight hair','long hair'],0],
  ['Hangisi kişiliği anlatır?',['friendly','tall','blonde'],1]
 ]},

'7|Din Kültürü': { konu:'Melek inancı', beceri:['Görev bilgisi','Kavram','İnanç esası'],
 v:[
  ['İslam inancına göre melekler, Allah’ın nurdan yarattığı, gözle görülmeyen varlıklardır.','Melekler','selam',{tip:'buyuk',y:'Melekler',alt:'nurdan yaratılmış varlıklar'}],
  ['Cebrail vahiy getirmekle, Mikail doğa olaylarıyla görevlidir.','Görevler','dusunme',{tip:'cift',ogeler:[['Cebrail','vahiy getirir'],['Mikail','doğa olaylarıyla görevlidir']]}],
  ['İsrafil sura üfleyecek, Azrail ise can almakla görevlidir.','Dört büyük melek','ipucu',{tip:'cift',ogeler:[['İsrafil','sura üfler'],['Azrail','can alır']]}],
  ['Kirâmen Kâtibîn, insanların iyi ve kötü işlerini yazan meleklerdir.','Yazıcı melekler','sevinc',{tip:'cift',ogeler:[['Kirâmen Kâtibîn','iyi ve kötü işleri yazar']]}],
  ['Meleklere inanmak, İslam’ın iman esaslarından biridir. Şimdi görevleri sen eşleştir!','Sıra sende!','rozet',{tip:'kural',y:'Meleklere inanmak <b>iman esaslarından</b> biridir.'}]
 ],
 oyun:{tip:'eslestir',ad:'Melekler ve Görevleri',yonerge:'Meleğe dokun, sonra görevini seç.',ciftler:[['Cebrail','vahiy getirir'],['Mikail','doğa olaylarıyla görevlidir'],['İsrafil','sura üfler'],['Azrail','can alır']]},
 test:[
  ['Vahiy getirmekle görevli melek hangisidir?',['Cebrail','Mikail','İsrafil'],0],
  ['Melekler neden yaratılmıştır?',['nurdan','topraktan','sudan'],1],
  ['İnsanların iyi ve kötü işlerini yazan meleklere ne denir?',['Kirâmen Kâtibîn','İsrafil','Mikail'],0],
  ['Meleklere inanmak neyin parçasıdır?',['iman esaslarının','bayram geleneklerinin','Ramazan âdetlerinin'],2]
 ]},

/* ===================== 8. SINIF ===================== */
'8|Matematik': { konu:'Üslü ifadeler', beceri:['Hesaplama','Kural','Negatif üs'],
 v:[
  ['Aynı sayıyı tekrar tekrar çarpmayı kısaca üslü ifadeyle yazarız: 2 üzeri 5.','Kısa yazım!','selam',{tip:'buyuk',y:'2 × 2 × 2 × 2 × 2 = 2<sup>5</sup>',alt:'taban 2, üs 5'}],
  ['2 üzeri 5, 32 eder.','32!','sevinc',{tip:'buyuk',y:'2<sup>5</sup> = 32'}],
  ['Sıfırdan farklı her sayının sıfırıncı kuvveti 1’dir; birinci kuvveti kendisidir.','İki kural','dusunme',{tip:'cift',ogeler:[['a<sup>0</sup>','1 (a ≠ 0)'],['a<sup>1</sup>','a']]}],
  ['Negatif bir sayının çift kuvveti pozitif, tek kuvveti negatiftir.','Çift mi, tek mi?','ipucu',{tip:'cift',ogeler:[['(−2)<sup>4</sup>','16 · çift üs, pozitif'],['(−2)<sup>3</sup>','−8 · tek üs, negatif']]}],
  ['Negatif üs, sayının çarpmaya göre tersini verir: 2 üzeri eksi 3, sekizde birdir. Roket hazır!','Sıra sende!','rozet',{tip:'kural',y:'Negatif üs = çarpmaya göre ters: 2<sup>−3</sup> = [[1/8]]'}]
 ],
 oyun:{tip:'eslestir',ad:'Üs Eşleştir',yonerge:'Üslü ifadeye dokun, sonra değerini seç.',ciftler:[['2<sup>5</sup>','32'],['3<sup>4</sup>','81'],['10<sup>3</sup>','1000'],['5<sup>0</sup>','1'],['4<sup>3</sup>','64']]},
 test:[
  ['3<sup>3</sup> kaçtır?',['27','9','33'],0],
  ['(−2)<sup>4</sup> kaçtır?',['16','−16','−8'],1],
  ['7<sup>0</sup> kaçtır?',['1','0','7'],1],
  ['10<sup>−2</sup> hangisine eşittir?',['[[1/100]]','−100','−20'],2]
 ]},

'8|Türkçe': { konu:'Fiilimsiler', beceri:['Tür ayırt etme','Ek bilgisi','Kural'],
 v:[
  ['Fiillerden türeyip cümlede isim, sıfat ya da zarf görevinde kullanılan kelimelere fiilimsi denir.','Fiilimsi!','selam',{tip:'buyuk',y:'koşan çocuk',alt:'fiilden türer; isim, sıfat ya da zarf olur'}],
  ['İsim-fiiller -ma, -ış, -mak ekleriyle yapılır: okuma, yürüyüş, gelmek.','İsim-fiil','dusunme',{tip:'cift',ogeler:[['İsim-fiil','-ma, -ış, -mak · yürüyüş, gelmek']]}],
  ['Sıfat-fiiller -an, -ası, -mez, -ar, -dik, -ecek, -miş ekleriyle yapılır: koşan çocuk, okunacak kitap.','Sıfat-fiil','ipucu',{tip:'cift',ogeler:[['Sıfat-fiil','-an, -ası, -mez, -ar, -dik, -ecek, -miş · koşan çocuk']]}],
  ['Zarf-fiiller -ıp, -arak, -ınca, -madan, -ken gibi eklerle yapılır: gülerek, gelince, koşup.','Zarf-fiil','sevinc',{tip:'cift',ogeler:[['Zarf-fiil','-ıp, -arak, -ınca, -madan, -ken · gülerek']]}],
  ['Fiilimsiler kip ve kişi eki almaz, bu yüzden tek başına yargı bildirmez. Fabrika senin!','Sıra sende!','rozet',{tip:'kural',y:'Fiilimsiler <b>kip ve kişi eki almaz</b>.'}]
 ],
 oyun:{tip:'kova',ad:'Fiilimsi Fabrikası',yonerge:'Fiilimsiye dokun, sonra türünü seç.',kovalar:['İsim-fiil','Sıfat-fiil','Zarf-fiil'],ogeler:[['yürüyüş',0],['okumak',0],['bakış',0],['koşan çocuk',1],['okunacak kitap',1],['gülerek',2],['eve gelince',2],['koşup',2]]},
 test:[
  ['“Sınıfa girince herkes ayağa kalktı.” cümlesindeki fiilimsi hangi türdedir?',['zarf-fiil','isim-fiil','sıfat-fiil'],0],
  ['Hangisi isim-fiildir?',['yüzmek','yüzen','yüzerek'],0],
  ['“Okunan kitap masada.” cümlesindeki “okunan” hangisidir?',['sıfat-fiil','isim-fiil','zarf-fiil'],1],
  ['Fiilimsiler için hangisi doğrudur?',['Kip ve kişi eki almaz.','Her zaman cümlenin yüklemidir.','Yalnızca isimlerden türer.'],2]
 ]},

'8|Fen Bilimleri': { konu:'DNA ve genetik kod', beceri:['Baz eşleşmesi','Uygulama','Yapı bilgisi'],
 v:[
  ['DNA, canlının kalıtsal özelliklerini taşıyan moleküldür ve hücrenin çekirdeğinde bulunur.','DNA!','selam',{tip:'buyuk',y:'DNA',alt:'kalıtsal bilgiyi taşıyan molekül'}],
  ['DNA’nın yapı birimi nükleotittir. Bir nükleotit fosfat, deoksiriboz şekeri ve bir organik bazdan oluşur.','Nükleotit','dusunme',{tip:'liste',ogeler:['fosfat','deoksiriboz şekeri','organik baz']}],
  ['Dört organik baz vardır. Adenin timinle, guanin sitozinle eşleşir.','A–T, G–C','ipucu',{tip:'cift',ogeler:[['A · adenin','T · timin ile eşleşir'],['G · guanin','C · sitozin ile eşleşir']]}],
  ['DNA’nın bir özelliği belirleyen bölümüne gen denir. DNA, proteinlerle birlikte kromozomları oluşturur.','Gen ve kromozom','sevinc',{tip:'cift',ogeler:[['gen','bir özelliği belirleyen DNA bölümü'],['kromozom','DNA ve proteinden oluşan yapı']]}],
  ['DNA iki iplikten oluşur; bazlar karşılıklı eşleşir. Fermuarı sen kapat!','Sıra sende!','rozet',{tip:'kural',y:'DNA iki ipliklidir; bazlar <b>A–T</b> ve <b>G–C</b> eşleşir.'}]
 ],
 oyun:{tip:'eslestir',ad:'Genetik Kartlar',yonerge:'Sol karta dokun, sonra eşini seç.',ciftler:[['A','T'],['G','C'],['nükleotit','DNA’nın yapı birimi'],['gen','bir özelliği belirleyen DNA bölümü'],['kromozom','DNA ve proteinden oluşan yapı']]},
 test:[
  ['DNA’da adenin hangi bazla eşleşir?',['timin','guanin','sitozin'],0],
  ['Bir DNA ipliğindeki dizi ATGC ise karşı iplikteki dizi hangisidir?',['TACG','ATGC','GCAT'],1],
  ['DNA’nın yapı birimi hangisidir?',['nükleotit','amino asit','glikoz'],2],
  ['Hangisi bir nükleotidin yapısında yer almaz?',['amino asit','fosfat','organik baz'],2]
 ]},

'8|İnkılap Tarihi': { konu:'Millî Mücadele’nin hazırlık dönemi', beceri:['Tarih bilgisi','Kavram','Kronoloji'],
 v:[
  ['19 Mayıs 1919’da Mustafa Kemal Samsun’a çıktı. Bu tarih, Millî Mücadele’nin başlangıcı kabul edilir.','Yolculuk başlıyor','selam',{tip:'buyuk',y:'19 Mayıs 1919',alt:'Mustafa Kemal Samsun’a çıktı'}],
  ['Ardından Amasya Genelgesi yayımlandı, Erzurum ve Sivas kongreleri toplandı ve 23 Nisan 1920’de TBMM açıldı.','Adım adım','dusunme',{tip:'sira',ogeler:[['22 Haziran 1919','Amasya Genelgesi'],['23 Temmuz 1919','Erzurum Kongresi'],['4 Eylül 1919','Sivas Kongresi'],['23 Nisan 1920','TBMM açıldı']]}],
  ['Amasya Genelgesi’nde şu karar yer aldı: Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.','Millî egemenlik','ipucu',{tip:'buyuk',y:'“Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.”',alt:'Amasya Genelgesi'}],
  ['Erzurum Kongresi toplanış şekli bakımından bölgesel, Sivas Kongresi ise ulusaldır. Manda ve himaye ilk kez Erzurum’da reddedildi.','Bölgesel mi, ulusal mı?','sevinc',{tip:'cift',ogeler:[['Erzurum Kongresi','toplanış şekli bölgesel'],['Sivas Kongresi','toplanış şekli ulusal']]}],
  ['Bu adımlar, millî egemenliğe dayalı yeni bir devletin yolunu açtı. Zaman çizelgesini sen kur!','Sıra sende!','rozet',{tip:'kural',y:'Kongreler <b>millî egemenliğe</b> dayalı yeni devletin yolunu açtı.'}]
 ],
 oyun:{tip:'sirala',ad:'Kurtuluş Zaman Çizelgesi',yonerge:'Olayları tarih sırasına koy.',ogeler:['Samsun’a çıkış','Amasya Genelgesi','Erzurum Kongresi','Sivas Kongresi','TBMM’nin açılışı']},
 test:[
  ['Millî Mücadele’nin başlangıcı kabul edilen tarih hangisidir?',['19 Mayıs 1919','23 Nisan 1920','29 Ekim 1923'],0],
  ['“Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.” kararı hangi belgededir?',['Amasya Genelgesi','Erzurum Kongresi','Sivas Kongresi'],0],
  ['Hangi kongre toplanış şekli bakımından ulusaldır?',['Sivas Kongresi','Erzurum Kongresi','Balıkesir Kongresi'],1],
  ['Hangisi en son gerçekleşmiştir?',['TBMM’nin açılışı','Sivas Kongresi','Amasya Genelgesi'],2]
 ]},

'8|İngilizce': { konu:'Friendship · Davetler', beceri:['Kalıp','Anlama','Kibar dil'],
 v:[
  ['Bir arkadaşımızı davet ederken “Would you like to come to my party?” diyebiliriz.','Invitation!','selam',{tip:'buyuk',y:'Would you like to come to my party?',alt:'davet etmek'}],
  ['Daveti kabul etmek için: Sure, why not? That sounds great! I’d love to.','Yes!','sevinc',{tip:'liste',ogeler:['Sure, why not?','That sounds great!','I’d love to.']}],
  ['Kibarca reddetmek için: Sorry, I can’t. I’m afraid I can’t. Maybe another time.','Sorry…','dusunme',{tip:'liste',ogeler:['Sorry, I can’t.','I’m afraid I can’t.','Maybe another time.']}],
  ['Reddederken bir sebep de söyleriz: Sorry, I can’t. I have to study.','Sebep söyle','ipucu',{tip:'buyuk',y:'Sorry, I can’t. I have to study.',alt:'ret + sebep'}],
  ['Kibar ret, özür ve sebepten oluşur. Mektupları sen ayır!','Sıra sende!','rozet',{tip:'kural',y:'Kibar ret = <b>özür + sebep</b>: Sorry, I can’t. I have to …'}]
 ],
 oyun:{tip:'kova',ad:'Arkadaşlık Mektubu',yonerge:'Cevaba dokun, sonra kabul mü ret mi seç.',kovalar:['Kabul','Ret'],ogeler:[['Sure, why not?',0],['That sounds great!',0],['I’d love to.',0],['Sorry, I can’t.',1],['I’m afraid I can’t.',1],['Maybe another time.',1]]},
 test:[
  ['Hangisi daveti kabul eder?',['I’d love to.','Sorry, I can’t.','I’m afraid not.'],0],
  ['“I have to study.” ne demektir?',['Ders çalışmam gerekiyor.','Ders çalışmayı severim.','Ders çalıştım.'],1],
  ['Hangisi kibar bir rettir?',['Sorry, I can’t. I have to visit my grandma.','No!','I don’t care.'],2],
  ['“Would you like to…?” ne için kullanılır?',['davet etmek','saat sormak','yaş sormak'],0]
 ]},

'8|Din Kültürü': { konu:'Zekât ve sadaka', beceri:['Kavram','Örnek','Toplum'],
 v:[
  ['Zekât, İslam’ın beş şartından biridir. Zengin sayılan Müslüman, malının belirli bir kısmını her yıl ihtiyaç sahiplerine verir.','Zekât','selam',{tip:'buyuk',y:'Zekât',alt:'İslam’ın beş şartından biri'}],
  ['Zekât için gereken zenginlik ölçüsüne nisap denir. Para ve ticaret malının zekâtı kırkta birdir.','Nisap','dusunme',{tip:'cift',ogeler:[['nisap','zekât için gereken zenginlik ölçüsü'],['oran','para ve ticaret malında kırkta bir']]}],
  ['Sadaka ise Allah rızası için gönülden yapılan her türlü iyiliktir. Bir gülümseme bile sadakadır.','Sadaka','sevinc',{tip:'buyuk',y:'Sadaka',alt:'gönülden yapılan her iyilik'}],
  ['Zekât; yoksullara, borçlulara ve yolda kalmışlara verilebilir.','Kimlere?','ipucu',{tip:'liste',ogeler:['yoksullar','borçlular','yolda kalmışlar']}],
  ['Zekât ve sadaka toplumda dayanışmayı güçlendirir. Şimdi örnekleri sen ayır!','Sıra sende!','rozet',{tip:'kural',y:'Zekât ve sadaka <b>dayanışmayı</b> güçlendirir.'}]
 ],
 oyun:{tip:'kova',ad:'Zekât mı, Sadaka mı?',yonerge:'Örneğe dokun, sonra doğru kutuyu seç.',kovalar:['Zekât','Sadaka'],ogeler:[['Nisaba ulaşan paranın kırkta birini vermek',0],['Yılda bir kez, belirli oranda verilir',0],['Yaşlı komşuya alışveriş yapmak',1],['Güler yüz göstermek',1],['Yoldaki taşı kenara çekmek',1]]},
 test:[
  ['Zekât için gereken zenginlik ölçüsüne ne denir?',['nisap','fitre','sadaka'],0],
  ['Hangisi sadakaya örnektir?',['güler yüz göstermek','borcunu ödememek','israf etmek'],1],
  ['Ticaret malının zekâtı hangi orandadır?',['kırkta bir','onda bir','yarısı'],0],
  ['Zekât ve sadakanın topluma etkisi nedir?',['Dayanışmayı güçlendirir.','Yalnızlığı artırır.','Kıskançlığa yol açar.'],2]
 ]}
};
