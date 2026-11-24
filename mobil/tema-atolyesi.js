// Each row identifies the existing activity's theme and a second playable theme.
// The three example–concept pairs power the explanation, matching game and check.
const themeWorkshop={
 '1|Matematik':[0,4,'Şekil avı','Üç köşeli şekil','Üçgen','Dört eşit kenarlı ve dört dik açılı şekil','Kare','Köşesi olmayan yuvarlak çizgi','Çember'],
 '2|Matematik':[2,3,'Geometrik cisimler','Altı kare yüz','Küp','İki dairesel yüz ve bir eğri yüz','Silindir','Yalnız eğri yüz, köşe yok','Küre'],
 '3|Matematik':[2,5,'Veri toplayalım','En sevilen meyveyi sormak','Soru sorma','Her yanıt için bir çizgi çizmek','Çetele tutma','En çok çizgisi olanı bulmak','Karşılaştırma'],
 '4|Matematik':[1,2,'İşlem dedektifi','24 sayısını 3 eş gruba ayır','8','5 kutunun her birinde 6 kalem','30','18 kaleme 9 kalem ekle','27'],
 '5|Matematik':[0,3,'Açıları tanı','45°','Dar açı','90°','Dik açı','120°','Geniş açı'],
 '6|Matematik':[1,4,'Alan atölyesi','Taban 6 cm, yükseklik 4 cm olan üçgen','12 cm²','Kenarları 5 ve 4 cm olan dikdörtgen','20 cm²','Bir kenarı 6 cm olan kare','36 cm²'],
 '7|Matematik':[2,3,'Dönüşüm atölyesi','Şekli aynı yönde kaydır','Öteleme','Aynadaki görüntüyü al','Yansıma','Bir nokta etrafında çevir','Dönme'],
 '8|Matematik':[0,5,'Veriyi özetle','2, 4, 9 dizisinin ortancası','4','2, 4, 9 dizisinin açıklığı','7','2, 4, 9 dizisinin aritmetik ortalaması','5'],
 '1|Türkçe':[3,0,'Nazik sözcükler','Birinden yardım isterken','Lütfen','Yardım gördüğünde','Teşekkür ederim','Birine yanlışlıkla çarptığında','Özür dilerim'],
 '2|Türkçe':[3,2,'Doğadan sesler','Arının sesi','Vız vız','Suyun damlama sesi','Şıp şıp','Kuru yaprakların sesi','Hışır hışır'],
 '3|Türkçe':[3,2,'Doğa betimlemeleri','Mis kokulu çam','Koku','Pütürlü kaya','Dokunma','Parlak mavi göl','Görme'],
 '4|Türkçe':[3,2,'Doğayı anlat','Rüzgâr ıslık çaldı.','Kişileştirme','Göl ayna gibi parladı.','Benzetme','Bugün hava yağışlı.','Gerçek gözlem'],
 '5|Türkçe':[2,4,'Konuşma sırası','Karşındakinin sözünü bitirmesini bekle.','Dinleme','Tam olarak neyi kastettin?','Açıklama isteme','Anladığım kadarıyla böyle hissettin.','Anladığını yansıtma'],
 '6|Türkçe':[0,4,'Bilim haberini oku','Haberde ölçüm sonucunun verilmesi','Veri','Sonucu açıklayan geçici öneri','Hipotez','Bilginin alındığı yayının adı','Kaynak'],
 '7|Türkçe':[0,4,'Metnin izini sür','Kitabın konusunu kısaca anlatma','Özet','Metinden aynen alınan cümle','Alıntı','Kitaba ilişkin gerekçeli kişisel görüş','Değerlendirme'],
 '8|Türkçe':[0,5,'Görüşünü destekle','Savunulan düşünce','İddia','Düşünceyi destekleyen ölçüm','Kanıt','Kanıtla düşünce arasındaki açıklama','Gerekçe'],
 '1|Hayat Bilgisi':[1,0,'Okulu keşfet','Kitap ödünç alırım.','Kütüphane','Ders işlerim.','Sınıf','Teneffüste açık havada oynarım.','Okul bahçesi'],
 '2|Hayat Bilgisi':[4,2,'Birlikte yaşamak','Evde işleri bölüşmek','Görev paylaşımı','Bir arkadaşımı sözünü kesmeden dinlemek','Saygı','Üzülen birinin ne hissettiğini düşünmek','Empati'],
 '3|Hayat Bilgisi':[2,4,'Çevreyi koruyalım','Boş cam şişeyi cam kutusuna atmak','Geri dönüşüm','Beş dakika yerine kısa süre musluğu açmak','Su tasarrufu','Matara kullanmak','Tek kullanımlık atığı azaltma'],
 '3|Fen Bilimleri':[1,4,'Hareket çeşitleri','Dönme dolabın hareketi','Dönme','Salıncağın hareketi','Sallanma','Duran bisikletin hız kazanması','Hızlanma'],
 '4|Fen Bilimleri':[1,4,'Mıknatıs deneyi','İki kuzey kutbu yaklaşır.','İtme','Kuzey ve güney kutupları yaklaşır.','Çekme','Tahta çubuk mıknatısa yaklaşır.','Belirgin çekim yok'],
 '5|Fen Bilimleri':[1,3,'Işığın yolu','Işığın çoğunu geçirir.','Saydam','Işığın bir bölümünü dağınık geçirir.','Yarı saydam','Işığı geçirmez.','Opak'],
 '6|Fen Bilimleri':[2,0,'Tutulmalar','Ay, Dünya ile Güneş arasına girer ve gölgesi Dünya’ya düşer.','Güneş tutulması','Ay, Dünya’nın gölgesine girer.','Ay tutulması','Ay’ın Dünya çevresinde izlediği yol','Yörünge'],
 '7|Fen Bilimleri':[2,0,'Uzay gözlemi','Işık yayan gök cismi','Yıldız','Bir yıldız çevresinde dolanan ve yörüngesini temizlemiş büyük gök cismi','Gezegen','Bir gezegen çevresinde dolanan doğal gök cismi','Doğal uydu'],
 '8|Fen Bilimleri':[2,0,'Hava mı iklim mi?','Yarın öğleden sonra yağmur bekleniyor.','Hava tahmini','Bir bölgedeki uzun yılların sıcaklık ortalaması','İklim verisi','Havanın sıcaklığını ölçen araç','Termometre'],
 '4|Sosyal Bilgiler':[1,4,'Üretimden sofraya','Çiftçi buğday yetiştirir.','Üretim','Kamyon unu fırına götürür.','Dağıtım','Aile ekmeği yer.','Tüketim'],
 '5|Sosyal Bilgiler':[1,2,'Miras izleri','Eski bir uygarlığın yazılı kil belgesi','Tablet','Tarihî bir yapının korunarak onarılması','Restorasyon','Kazıyla geçmişi inceleyen bilim','Arkeoloji'],
 '6|Sosyal Bilgiler':[2,4,'Ekonomik faaliyetler','Tarlada pamuk yetiştirmek','Tarım','Pamuktan kumaş dokumak','Sanayi','Kumaşı mağazada satmak','Ticaret'],
 '7|Sosyal Bilgiler':[0,3,'Katılım yolları','Temsilciyi oyla seçmek','Seçim','Bir isteği yazılı olarak yetkili makama iletmek','Dilekçe','Ortak bir konu üzerine karşılıklı görüş bildirmek','Müzakere'],
 '8|İnkılap Tarihi':[2,3,'Cumhuriyetin ilk yılları','29 Ekim 1923','Cumhuriyetin ilanı','3 Mart 1924’te eğitim kurumlarının birleştirilmesi','Tevhid-i Tedrisat','1 Kasım 1928','Yeni Türk harflerinin kabulü'],
 '5|Din Kültürü':[-1,4,'Mimariyi okuyalım','Camide kıble yönünü gösteren bölüm','Mihrap','Hutbenin okunduğu basamaklı bölüm','Minber','Ezan okunan yüksek yapı','Minare'],
 '6|Din Kültürü':[0,2,'Davranışı tanı','Söz verdiğinde yerine getirmek','Güvenilirlik','İhtiyacı olana karşılık beklemeden destek olmak','Yardımseverlik','Karar verirken herkesin hakkını gözetmek','Adalet'],
 '7|Din Kültürü':[0,1,'Hac kavramları','Kâbe çevresinde ibadet amacıyla dolaşma','Tavaf','Safa ve Merve arasında gidip gelme','Sa’y','Arafat’ta belirli zamanda bulunma','Vakfe'],
 '8|Din Kültürü':[1,4,'Bilim ve kültür','Gök cisimlerinin hareketlerini inceleme','Astronomi','Eski yazılı eserleri koruyan koleksiyon','Yazma eser kütüphanesi','Bir eseri başka dile aktarma','Tercüme'],
 '2|İngilizce':[1,3,'My family','Anne','Mother','Baba','Father','Kız kardeş','Sister'],
 '3|İngilizce':[4,1,'In class','Kalem','Pencil','Silgi','Eraser','Cetvel','Ruler'],
 '4|İngilizce':[2,0,'School subjects','Sayılar ve işlemler','Maths','Deneyler ve gözlemler','Science','Resim ve renkler','Art'],
 '5|İngilizce':[6,4,'Around town','You borrow books here.','Library','You buy bread here.','Bakery','You send letters here.','Post office'],
 '6|İngilizce':[2,6,'Protect nature','Use a bottle again.','Reuse','Turn waste paper into new paper.','Recycle','Use less water.','Reduce'],
 '7|İngilizce':[2,0,'Learning habits','Check your work again.','Review','Find the meaning of a word.','Look it up','Write down key ideas.','Take notes'],
 '8|İngilizce':[4,7,'Space mission','A person trained to travel in space','Astronaut','A vehicle that carries people into space','Spacecraft','The path of a planet around a star','Orbit']
};
function workshopLesson(row){
 const [, ,topic,...items]=row;
 const pairs=[0,2,4].map(i=>[items[i],items[i+1]]);
 return {konu:topic,beceri:['Kavramları eşleştirme'],v:pairs.map(([clue,answer])=>[clue+' → '+answer,answer,'ipucu',{tip:'buyuk',y:answer,alt:clue}]),
 oyun:{tip:'eslestir',ad:topic,yonerge:'Soldaki örneği sağdaki karşılığıyla eşleştir.',ciftler:pairs},
 test:pairs.map(([clue,answer],i)=>[clue+' — Hangisi?', [answer,pairs[(i+1)%3][1],pairs[(i+2)%3][1]],0])};
}
