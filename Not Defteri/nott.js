function checkboxTamamlamak(checkbox, tamamlananNotlar) {

    const satir = checkbox.parentElement.parentElement;//onay kutusunun üstündeki notun bulunduğu satırı satir adlı bir değişkene atar
    if (checkbox.checked) {  //Eğer bir onay kutusu işaretlenmişse  bu kutunun üstündeki notun satırı tamamlananNotlar dizisine eklenir.
        tamamlananNotlar.push(satir);
    }

}

function kaydedilenNot(notBaslikInput, notIcerikInput, popup, uyariKaydetPopup, document) {
    const notBaslik = notBaslikInput.value;
    const notIcerik = notIcerikInput.value;
    const tarih = new Date().toLocaleString();

    if (notBaslik && notIcerik) {
        popup.style.display = 'block';
    } else {
        uyariKaydetPopup.style.display = 'block'; // Not başlık ve not girilmediyse uyarı kaydet pop up çıkar.
    }
    document.getElementById("overlay").style.display = "block";
}

function tumNotlariGosterButon() {
    document.querySelectorAll('.notlar tbody tr').forEach((satir) => {
        satir.style.display = '';
    });
}

function tumunuSilButon(tumunuSilPopup, overlay) {
    tumunuSilPopup.style.display = 'block';
    overlay.style.display = 'block';
}
function tumunuSill(notlarGovdesi, tumunuSilPopup, tumunuSilButton) {
    notlarGovdesi.innerHTML = '';
    tumunuSilPopup.style.display = 'none';
    tumunuSilButton.style.display = 'none';
}
function tumuİptal(tumunuSilPopup, document) {
    tumunuSilPopup.style.display = 'none';
    document.getElementById("overlay").style.display = "none";
}
function notEkleButonn(notForm, kaydetButton, notBaslikInput, notIcerikInput, duzenlenenSatir) {
    notForm.style.display = 'block';
    kaydetButton.innerText = 'Kaydet';
    notBaslikInput.value = '';
    notIcerikInput.value = '';
    duzenlenenSatir = null;
}
function tamamButon(uyariKaydetPopup, document) {
    uyariKaydetPopup.style.display = 'none';   //tamam butonuna tıklandığın da pop-up ı kapatır.
    document.getElementById("overlay").style.display = "none";
}
function duzenlePopupButon(popup, document) {
    popup.style.display = 'none'; // Popup mesajını kapat
    document.getElementById("overlay").style.display = "none";
}

function iptalPopupButon(silPopup, document) {
    silPopup.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}



const notEkleButton = document.getElementById('notEkleButton');
const notForm = document.querySelector('.not-form');
const notBaslikInput = document.getElementById('notBaslik');
const notIcerikInput = document.getElementById('notIcerik');
const kaydetButton = document.getElementById('kaydetButton');

const popup = document.getElementById('popup');
const kaydetPopupButton = popup.querySelector('.kaydet');
const duzenlePopupButton = popup.querySelector('.duzenle');

const uyariKaydetPopup = document.getElementById('uyariKaydet');  // Kaydet Uyarı
const tamamButton = document.querySelector('.tamam');

const tumunuSilPopup = document.getElementById('tumunuSilPopup');  // Tüm notları sil popup
const tumuSilPopupButton = document.querySelector('tumunuSilPopupButton');
const tumuİptalButton = document.querySelector('tumunuİptalPopupButton')

const silPopup = document.getElementById('silPopup');   // Sil pop-up verileri çekildi
const silPopupButton = silPopup.querySelector('.sil');
const iptalPopupButton = silPopup.querySelector(".iptal");

const notlarTablosu = document.getElementById('notlarTablosu');
const notlarGovdesi = document.getElementById('notlarGovdesi');

const tumunuSilButton = document.getElementById('tumunuSilButton');

const tamamlananlariGosterButton = document.getElementById('tamamlananlariGosterButton');  // Tamamlanan not verisi

const tumNotlariGosterButton = document.getElementById('tumNotlariGosterButton'); //Tüm notları göster



tumNotlariGosterButton.addEventListener('click', () => { //  Tüm notları göster
    tumNotlariGosterButon();
});




tamamlananlariGosterButton.addEventListener('click', () => {
    const tamamlandiCheckbox = document.querySelectorAll('.tamamlandiCheckbox'); // Tüm tamamlanan checkbox'ları seçtik
    const tamamlananNotlar = [];  //tamamlananNotlar adında boş bir dizi oluşturdum. Bu dizi, işaretlenmiş  notların satırlarını içerecek.


    tamamlandiCheckbox.forEach((checkbox, index) => { //her bir onay kutusunun durumu kontrol edilir
        checkboxTamamlamak(checkbox, tamamlananNotlar);
    });

    // Tüm notları gizleyin
    document.querySelectorAll('.notlar tbody tr').forEach((satir) => {
        satir.style.display = 'none'; //Sadece işaretlenmiş olanlar gösterileceği için satırları gizledik.
    });


    tamamlananNotlar.forEach((satir) => {
        satir.style.display = '';  //tamamlanan notların satırları, tamamlananNotlar dizisi içinde toplandığı için, bu satırların görünürlüğü satir.style.display = '' ile geri getirdik. Bu adım, yalnızca kullanıcının işaretlediği tamamlanan notları gösterir.

    });
});




tumunuSilButton.addEventListener('click', () => {    // Tümünü sil e tıklama
    tumunuSilButon(tumunuSilPopup, overlay);
});

tumunuSil.addEventListener('click', () => {  // sil popup butona tıklandığında ne olur
    tumunuSill(notlarGovdesi, tumunuSilPopup, tumunuSilButton);

    document.getElementById("overlay").style.display = "none";
    document.getElementById('notlarTablosu').style.display = 'none'; // Tablo görünmez
});

tumunuİptal.addEventListener('click', () => {  // iptal popup butona tıklandığında ne olur
    tumuİptal(tumunuSilPopup, document);
});

tumunuSilButton.style.display = "none"; // Açılış ekranında görünmemesi için kapattık



var duzenlenenSatir = null;
silPopup.style.display = 'none'; // Ekran ilk açıldığında karşımıza çıkmaması için kapattık


notEkleButton.addEventListener('click', () => {
    notEkleButonn(notForm, kaydetButton, notBaslikInput, notIcerikInput, duzenlenenSatir);
});


kaydetButton.addEventListener('click', () => {    // Not ve başlık girilmediği için uyarı mesajı yazdık

    kaydedilenNot(notBaslikInput, notIcerikInput, popup, uyariKaydetPopup, document);

    tamamButton.addEventListener('click', () => {  // Uyarı kaydet bölümü
        tamamButon(uyariKaydetPopup, document);
    });

});



kaydetPopupButton.addEventListener('click', () => {
    const notBaslik = notBaslikInput.value;
    const notIcerik = notIcerikInput.value;
    const tarih = new Date().toLocaleString();

    document.getElementById("overlay").style.display = "none";

    document.getElementById('notlarTablosu').style.display = 'table'; // Tabloyu görünür hale getir



    if (notBaslik && notIcerik) {
        if (duzenlenenSatir !== null) {  // düzenleme modunun etkin olduğunu ve mevcut bir notun düzenlendiğini gösterir

            const satir = notlarGovdesi.rows[duzenlenenSatir]; //düzenlenen notun bulunduğu satırı alır.
            satir.cells[0].textContent = notBaslik; //seçilen satırın hücrelerinden ilkini yani sütununu alır ve bu hücreye notBaslik değişkenindeki başlık metnini yerleştirir.
            satir.cells[1].textContent = notIcerik;
            satir.cells[2].textContent = tarih;

            kaydetButton.innerText = 'Kaydet'; // HTML içindeki "kaydetButton" adlı bir düğmenin metnini "Kaydet" olarak değiştirir. Bu, düzenlenen notun güncellendiğini ve kaydedildiğini kullanıcıya görsel olarak bildirir.
            duzenlenenSatir = null; // Bu satır, duzenlenenSatir değişkenini tekrar null olarak ayarlar. Bu, düzenleme modunun artık devre dışı olduğunu ve mevcut bir düzenlemenin olmadığını gösterir.
        } else {
            const notSatiri = `
                        <tr>
                            <td>${notBaslik}</td>
                            <td>${notIcerik}</td>
                            <td>${tarih}</td>
                            <td><button class="silButon">Sil</button></td>
                            <td><button class="duzenleButton">Düzenle</button></td>
                            <td><input type="checkbox" class="tamamlandiCheckbox"></td> 

                        </tr>
                    `;
            tumunuSilButton.style.display = "block";


            notlarGovdesi.innerHTML += notSatiri;
        }

        notBaslikInput.value = '';
        notIcerikInput.value = '';
        notForm.style.display = 'none';
        popup.style.display = 'none'; // pop-up mesajını kapatırız
    }
});



duzenlePopupButton.addEventListener('click', () => {
    // Düzenleme işlemleri burada yapılır
    duzenlePopupButon(popup, document);
});

notlarGovdesi.addEventListener('click', (event) => {   //"notlarGovdesi" adlı HTML tablosuna tıklama olayı dinleyicisi ekler. Yani, tabloya tıklandığında bu kod bloğu çalışır.
    const clickedElement = event.target;  //Tıklanan öğeyi (event.target) yakalar ve clickedElement adlı bir değişkene atar.


    if (clickedElement.classList.contains('silButon')) { //tıklanan öğenin sınıf listesinde silButon" sınıfı bulunuyorsa, bu kod bloğunun çalışacağını belirtir. Yani, "Sil" düğmesine tıklanıldığında bu kısım çalışır.

        const satir = clickedElement.parentElement.parentElement;   // tıklanan düğmenin bulunduğu satırı belirlemeye yardımcı olur.
        silPopup.style.display = 'block';//popup gösterildi

        document.getElementById("overlay").style.display = "block"; // silme işlemi sırasında overlay görünür.

        silPopupButton.addEventListener('click', () => {

            notlarGovdesi.deleteRow(satir.rowIndex - 1); //tıklanan düğmenin bulunduğu satırı siler.
            silPopup.style.display = 'none';

            document.getElementById("overlay").style.display = "none"; // silme işleminden sonra overlay kapanır.
        });

        iptalPopupButton.addEventListener('click', () => {
            iptalPopupButon(silPopup, document);
        })


    } else if (clickedElement.classList.contains('tamamlandiCheckbox')) { // bir onay kutusu (checkbox) öğesine tıklanıldığında bu kısım çalışır.
        const satir = clickedElement.parentElement.parentElement;
        satir.classList.toggle('tamamlandi');   //kullanıcının bir onay kutusu (checkbox) öğesine tıkladığında, bu tıklama olayını işler. Satırın tamamlanmış olarak işaretlenip işaretlenmediğini kontrol ederek "tamamlandi" sınıfını ekler veya çıkarır.
    } else if (clickedElement.classList.contains('duzenleButton')) { //Düzenle" düğmesine tıklanıldığında bu kısım çalışır.
        const satir = clickedElement.parentElement.parentElement; //Bu işlem, tıklanan "Düzenle" düğmesinin bulunduğu satırı belirlemeye yardımcı olur.
        const hucreler = satir.cells; //Belirtilen satırdaki hücreleri (cells) alarak bir diziye (hucreler) atar. Bu dizi, satırdaki hücreleri indeksleme yoluyla elde etmeyi kolaylaştırır.


        notBaslikInput.value = hucreler[0].textContent;  //düzenleme moduna geçildiğinde, satırın ilk hücresindeki değeri (notBaslik) "notBaslikInput" adlı HTML giriş alanına (input) atanır. Bu, mevcut not başlığını düzenleme modunda görüntüler.
        notIcerikInput.value = hucreler[1].textContent;
        duzenlenenSatir = satir.rowIndex - 1;  //düzenleme modunun etkin olduğunu ve mevcut bir notun düzenlendiğini belirtir. "duzenlenenSatir", düzenleme modundaki satırın indeksini tutar.
        kaydetButton.innerText = 'Güncelle';  //düzenleme moduna geçildiğinde, "kaydetButton" adlı düğmenin metnini "Güncelle" olarak değiştirir. 
        notForm.style.display = 'block';
    }
});


// Kaydedilen notları gösteren tablonun tıklanabilir hale gelmesi için event listener ekleyin
notlarTablosu.addEventListener('click', (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'TD') { // Eğer tıklanan öğe bir <td> (hücre) ise
        const satir = clickedElement.parentElement;
        const notBaslik = satir.cells[0].textContent;
        const notIcerik = satir.cells[1].textContent;
        const tarih = satir.cells[2].textContent;

        // Detay sayfasını oluştur
        const detaySayfasi = `
            <div class="detay-sayfasi">
                <h2>${notBaslik}</h2>
                <p>${notIcerik}</p>
                <p>${tarih}</p>
                <button id="geriDonButton">Geri Dön</button>

            </div>
        `;

        // Detay sayfasını ekranda göster
        document.body.innerHTML = detaySayfasi;

        // "Geri Dön" düğmesine tıklama işlevi
        const geriDonButton = document.getElementById('geriDonButton');
        geriDonButton.addEventListener('click', () => {
            // Notları tekrar göster sayfasına dön
            window.location.reload();
        });
    }
    
});
