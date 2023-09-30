function checkboxTamamlamak(checkbox, tamamlananNotlar) {

    const satir = checkbox.parentElement.parentElement;//onay kutusunun üstündeki notun bulunduğu satırı satir adlı bir değişkene atar
    if (checkbox.checked) {  //Eğer bir onay kutusu işaretlenmişse  bu kutunun üstündeki notun satırı tamamlananNotlar dizisine eklenir.
        tamamlananNotlar.push(satir);
    }

}



function kaydedilenNot() {    // Kaydet butonuna tıklama işlemi
    const notBaslik = notBaslikInput.value;
    const notIcerik = notIcerikInput.value;
    const tarih = new Date().toLocaleString();

    if (notBaslik && notIcerik) {
        popup.style.display = 'block';
    } else {
        uyariKaydetPopup.style.display = 'block';
    }
    overlay.style.display = 'block';
}

function notEkleButon() {  // Not ekleme işlemi
    notForm.style.display = 'block';
    kaydetButton.innerText = 'Kaydet';
    notBaslikInput.value = '';
    notIcerikInput.value = '';
    duzenlenenSatir = null;
}


// Tüm notları göster
function tumNotlariGosterButon() {
    document.querySelectorAll('.notlar tbody tr').forEach((satir) => {
        satir.style.display = '';
    });
}

function tumunuSilButon() {
    tumunuSilPopup.style.display = 'block';
    overlay.style.display = 'block';
}






function notEkle() {
    const notBaslik = notBaslikInput.value;
    const notIcerik = notIcerikInput.value;
    const tarih = new Date().toLocaleDateString();
  
    if (notBaslik && notIcerik) {
      if (duzenlenenSatir !== null) {
        const satir = notlarGovdesi.rows[duzenlenenSatir];
        satir.cells[0].textContent = notBaslik;
        satir.cells[1].textContent = notIcerik;
        satir.cells[2].textContent = tarih;
        kaydetButton.innerText = 'Kaydet';
        duzenlenenSatir = null;
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
        tumunuSilButton.style.display = 'block';
        notlarGovdesi.innerHTML += notSatiri;
      }
  
      notBaslikInput.value = '';
      notIcerikInput.value = '';
      notForm.style.display = 'none';
      popup.style.display = 'none';
    }
  }
  
  // Kullanım:
  kaydetButton.addEventListener('click', notEkle);
  
