// ===========================================
// TOYOTA PAMULANG
// SIMULASI KREDIT
// ===========================================

// Harga OTR

const hargaMobil = {

    "Agya": 201700000,

    "Calya": 197300000,

    "Avanza": 244200000,

    "Veloz": 303000000,

    "Raize": 277800000,

    "Rush": 316300000,

    "Yaris Cross": 440600000,

    "Innova Reborn": 391300000,

    "Innova Zenix": 475400000,

    "Fortuner": 794600000,

    "Hilux Rangga": 193700000,

    "Hiace": 560000000,

    "Hilux Double Cabin": 470000000,

    "Hilux Single Cabin": 305000000,

    "Hilux Travo": 420000000,

    "Land Cruiser": 2617000000,

    "Alphard": 1737400000,

    "Vellfire": 1850000000,

    "Voxy": 629000000

};

// Format Rupiah

function rupiah(angka){

    return "Rp " + angka.toLocaleString("id-ID");

}

document
.getElementById("simulasiForm")
.addEventListener("submit",function(e){

e.preventDefault();

const mobil=document.getElementById("mobil").value;

const dpPersen=parseFloat(document.getElementById("dp").value);

const tenor=parseInt(document.getElementById("tenor").value);

const bunga=parseFloat(document.getElementById("bunga").value);

const harga=hargaMobil[mobil];

if(!harga){

alert("Harga mobil belum tersedia.");

return;

}

const dp=harga*(dpPersen/100);

const pinjaman=harga-dp;

const bungaTotal=pinjaman*(bunga/100)*tenor;

const totalBayar=pinjaman+bungaTotal;

const cicilan=totalBayar/(tenor*12);

const hasil=`

<h2>Hasil Simulasi</h2>

<table>

<tr>

<td>Mobil</td>

<td><strong>${mobil}</strong></td>

</tr>

<tr>

<td>Harga OTR</td>

<td>${rupiah(harga)}</td>

</tr>

<tr>

<td>DP (${dpPersen}%)</td>

<td>${rupiah(dp)}</td>

</tr>

<tr>

<td>Pinjaman</td>

<td>${rupiah(pinjaman)}</td>

</tr>

<tr>

<td>Tenor</td>

<td>${tenor} Tahun</td>

</tr>

<tr>

<td>Bunga Flat</td>

<td>${bunga}% / Tahun</td>

</tr>

<tr>

<td>Total Bayar</td>

<td>${rupiah(totalBayar)}</td>

</tr>

<tr>

<td><strong>Cicilan / Bulan</strong></td>

<td>

<strong style="color:#EB0A1E;font-size:22px;">

${rupiah(Math.round(cicilan))}

</strong>

</td>

</tr>

</table>

<br>

<a

class="btn btn-primary"

target="_blank"

href="https://wa.me/6285105004485?text=${encodeURIComponent(

`Halo Toyota Pamulang,

Saya ingin konsultasi kredit.

Mobil : ${mobil}

Harga : ${rupiah(harga)}

DP : ${rupiah(dp)}

Tenor : ${tenor} Tahun

Estimasi Cicilan : ${rupiah(Math.round(cicilan))}/bulan`

)}">

Konsultasi via WhatsApp

</a>

`;

const hasilBox = document.getElementById("hasil");

hasilBox.innerHTML = hasil;

hasilBox.classList.add("show");

hasilBox.scrollIntoView({
    behavior: "smooth"
});

});
const mobilSelect = document.getElementById("mobil");
const hargaInput = document.getElementById("harga");

function updateHarga(){
    const harga = hargaMobil[mobilSelect.value];
    hargaInput.value = rupiah(harga);
}

mobilSelect.addEventListener("change", updateHarga);
updateHarga();
