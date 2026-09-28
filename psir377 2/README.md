# PSIR 377 — Social and Political Movements

TED University, Fall 2026 için İngilizce etkileşimli ders sitesi. GitHub Pages üzerinde çalışır. Sunucu, veritabanı, API anahtarı, Node.js kurulumu veya ücretli hizmet gerekmez.

## GitHub Pages ile yayınlama

1. GitHub hesabınızda `psir377` adında yeni, **public** bir repository oluşturun. Başka bir ad da kullanabilirsiniz.
2. Bu paketi açın. İçindeki **`docs` klasörünü** ve `README.md`, `SOURCE-NOTES.md`, `package.json`, `scripts` dosya/klasörlerini repository'nin köküne yükleyin. GitHub sayfasında **Add file → Upload files** ile sürükleyip bırakabilirsiniz. `psir377` üst klasörünü bir alt klasör olarak yüklemeyin; repository kökünde `docs/index.html` görünmeli.
3. Yüklemeyi **Commit changes** ile kaydedin.
4. Repository'de **Settings → Pages** bölümüne gidin.
5. **Build and deployment → Source: Deploy from a branch** seçin.
6. **Branch: main**, klasör olarak **`/docs`** seçin ve **Save** düğmesine basın.
7. Yayınlama tamamlandığında aynı sayfada sitenin bağlantısı görünür. Genellikle biçimi `https://KULLANICI-ADINIZ.github.io/psir377/` olur. İlk yayın birkaç dakika sürebilir. Durumu **Actions** sekmesinden kontrol edebilirsiniz.

GitHub belgeleri: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

`docs` içindeki değişiklikleri `main` dalına kaydettiğinizde GitHub Pages yeniden yayınlar. Özel alan adı zorunlu değildir. Tüm site dosyaları göreli yollar kullandığı için repository adının değişmesi ek yapılandırma gerektirmez.

## Bilgisayarda açma

`docs/index.html` dosyasını tarayıcıda açabilirsiniz. Site bir derleme adımı veya modül sunucusu gerektirmez. Video oynatıcılar internet bağlantısı ister.

Alternatif olarak Python 3 kuruluysa proje klasöründe:

```sh
python3 -m http.server 4173 --directory docs
```

Ardından `http://localhost:4173` adresini açın. Sunucuyu durdurmak için terminalde Ctrl+C kullanın.

## İçeriği düzenleme

| Dosya | İçerik |
| --- | --- |
| `docs/data.js` | 13 hafta, tüm zorunlu/önerilen okumalar, video bağlantıları, sınav tarihleri, kavramlar, politikalar |
| `docs/index.html` | Sayfa iskeleti, ders bilgileri, proje yol haritası |
| `docs/styles.css` | Renkler, tipografi ve mobil düzen |
| `docs/app.js` | Haftalık paneller, tarih bileşeni, kavram bağlantıları, açılış etkinliği |
| `docs/activities.js` | Beş okumaya özgü etkinlik ve yorumlayıcı geri bildirim |

Tarihleri `YYYY-MM-DD` biçiminde girin. Final tarihi belirlenene kadar `date: null` kalmalıdır. Tarih hesapları **Europe/Istanbul** saat dilimini kullanır. Tarihi henüz geçmemiş ilk değerlendirme gösterilir; aynı gün boyunca "Today" görünür. Tüm tarihli değerlendirmelerden sonra final için TBC mesajı kalır.

Dersin saat/öğretim elemanı bilgilerinde değişiklik yaparsanız `index.html` içindeki karşılıklarını da düzenleyin. Resmî haftalık başlıkları ve okuma bilgilerini syllabus ile kontrol edin.

## Etkinlikler ve gizlilik

- Dört hipotetik vaka içeren açılış etkinliği ve 3, 6, 8, 9, 11. haftalarda okumaya özgü beş etkinlik vardır.
- Etkinlikler isteğe bağlı ve notsuzdur. Öğrenci yanıtları hiçbir sunucuya gönderilmez ve sayfa yenilenince silinir. Hesap, çerez, analitik veya ilerleme takibi yoktur.
- Video oynatıcılar yalnızca **Load video** seçildiğinde harici sağlayıcıyla bağlantı kurar. YouTube için `youtube-nocookie.com` kullanılır. Oynatma engellendiğinde orijinal kaynak bağlantısı her zaman kullanılabilir.
- Kaynak PDF/DOCX dosyaları, ders okumalarının tam metinleri ve geçmiş ödev dosyaları bu pakette yayınlanmaz.
- Sayfa metni İngilizcedir; bu kurulum kılavuzu Türkçedir.

## Kontrol

İsteğe bağlı: Node.js kuruluysa dış paket indirmeden `npm test` veya `node scripts/check.mjs` çalıştırın. Bu kontrol tüm hafta, tarih, değerlendirme, kaynak bağlantısı, etkinlik ve kavram referanslarının bütünlüğünü denetler.

Tarayıcıda son kontrol: mobil menü; klavye ile haftalar/politikalar; etkinliklerde seçim, geri bildirim ve sıfırlama; kavramdan haftaya geçiş; video kaynak bağlantıları. Üçüncü taraf videoların veya üniversite bağlantılarının erişilebilirliği sağlayıcılara bağlıdır.

## Yayın durumu

Bu paket yayına hazır kaynak dosyalarıdır. GitHub hesabınızda repository oluşturulmuş veya site yayınlanmış olduğu anlamına gelmez. Yukarıdaki adımlar hesabınızda tamamlandıktan sonra canlı bağlantı oluşur.
