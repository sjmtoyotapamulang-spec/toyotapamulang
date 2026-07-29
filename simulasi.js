// =========================================
// TOYOTA PAMULANG
// simulasi.js
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("simulasiForm");

    if (!form) return;

    const harga = document.getElementById("harga");
    const dp = document.getElementById("dp");
    const tenor = document.getElementById("tenor");
    const bunga = document.getElementById("bunga");

    const hasilHarga = document.getElementById("hasilHarga");
    const hasilDP = document.getElementById("hasilDP");
    const hasilPinjaman = document.getElementById("hasilPinjaman");
    const hasilBunga = document.getElementById("hasilBunga");
    const hasilCicilan = document.getElementById("hasilCicilan");

    function rupiah(angka) {

        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);

    }

    function hitungSimulasi() {

        const hargaMobil = Number(harga.value);
        const dpPersen = Number(dp.value);
        const tenorTahun = Number(tenor.value);
        const bungaTahunan = Number(bunga.value);

        if (
            hargaMobil <= 0 ||
            dpPersen < 0 ||
            tenorTahun <= 0
        ) {
            return;
        }

        const uangMuka = hargaMobil * (dpPersen / 100);

        const pinjaman = hargaMobil - uangMuka;

        const totalBunga =
            pinjaman * (bungaTahunan / 100) * tenorTahun;

        const totalBayar =
            pinjaman + totalBunga;

        const cicilan =
            totalBayar / (tenorTahun * 12);

        hasilHarga.textContent = rupiah(hargaMobil);
        hasilDP.textContent = rupiah(uangMuka);
        hasilPinjaman.textContent = rupiah(pinjaman);
        hasilBunga.textContent = rupiah(totalBunga);
        hasilCicilan.textContent = rupiah(cicilan);

    }

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        hitungSimulasi();

    });

    harga.addEventListener("input", hitungSimulasi);
    dp.addEventListener("input", hitungSimulasi);
    tenor.addEventListener("change", hitungSimulasi);
    bunga.addEventListener("input", hitungSimulasi);

    hitungSimulasi();

});
