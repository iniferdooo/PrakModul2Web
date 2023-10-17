document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || password === "") {
      alert("Anda Harus Mengisi Data Dengan Lengkap");
      event.preventDefault(); // Mencegah form disubmit jika ada data yang kosong
    }
  });