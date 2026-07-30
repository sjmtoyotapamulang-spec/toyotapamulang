/* ==========================================================
   TOYOTA PAMULANG PREMIUM V6
   SIMULASI.JS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("simulasiForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const harga = parseFloat(document.getElementById("harga").value);
        const dpPersen = parseFloat(document.getElementById("dp").value);
        const tenor = parseInt(document.getElementById("tenor").value);
        const bunga = parseFloat(document.getElementById("bunga").value);

        if (isNaN(harga) || isNaN(dpPersen) || isNaN(tenor) || isNaN(bunga)) {

            alert("Silakan lengkapi semua data.");

            return;

        }

        // DP
        const dpNominal = harga * (dpPersen / 100);

        // Pinjaman
        const pinjaman = harga - dpNominal;

        // Total bunga
        const totalBunga = pinjaman * (bunga / 100) * tenor;

        // Total pembayaran
        const totalBayar = pinjaman + totalBunga;

        // Cicilan
        const cicilan = totalBayar / (tenor * 12);

        document.getElementById("hasilHarga").textContent =
            "Rp " + harga.toLocaleString("id-ID");

        document.getElementById("hasilDP").textContent =
            "Rp " + dpNominal.toLocaleString("id-ID");

        document.getElementById("hasilPinjaman").textContent =
            "Rp " + pinjaman.toLocaleString("id-ID");

        document.getElementById("hasilCicilan").textContent =
            "Rp " + Math.round(cicilan).toLocaleString("id-ID") + " / Bulan";

        document.getElementById("hasil").style.display = "block";

        document.getElementById("hasil").scrollIntoView({

            behavior: "smooth"

        });

    });

});
