

const countDownDate = new Date("Dec 22, 2024 00:00:00").getTime()

const x = setInterval(function () {
    const nowDate = new Date().getTime()

    const distance = countDownDate - nowDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000)

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;
}, 1000)



// Salin Rekning
document.getElementById('copyButton').addEventListener('click', function() {
    // Pilih elemen paragraf
    var rekeningNumber = document.getElementById('rekeningNumber').textContent;

    // Salin teks ke clipboard
    navigator.clipboard.writeText(rekeningNumber)
        .then(() => {
            // Jika berhasil menyalin
            document.getElementById('statusMSG').textContent = 'Nomor rekening berhasil disalin!';
        })
        .catch((err) => {
            // Jika terjadi kesalahan
            document.getElementById('statusMSG').textContent = 'Gagal menyalin nomor rekening.';
            console.error('Gagal menyalin teks: ', err);
        });
});


// Reservasi Whatssapp

function kirimWhatsApp() {
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var konfirmasi = document.querySelector('input[name="konfirmasi"]:checked').value;

    if (konfirmasi === 'Tidak_hadir') {
        var konfirmasi = "Maaf, saya tidak bisa hadir"
    } else if (konfirmasi === '1') {
        var konfirmasi = "1 Orang"
    } else if (konfirmasi === '2') {
        var konfirmasi = "2 Orang"
    } else if (konfirmasi === 'lebih') {
        var konfirmasi = 'Lebih dari 2 Orang'
    }

    var nomorWA = '6281382820300'; // Ganti dengan nomor WhatsApp tujuan
    var pesan = `Halo, Saya *${nama}*, ingin melakukan konfirmasi kehadiran di acara pernikahan _____________. Alamat: ${alamat}. Konfirmasi kehadiran: ${konfirmasi}.`;    


    var urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // Buka URL WhatsApp di tab baru
    window.open(urlWA, '_blank');
}



