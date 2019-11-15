function kaliTerusRekursif(angka) {
    if (angka < 10) {
      return angka
    }
    else {
      var strAngka = angka.toString()
      angka = 1
      for (var i = 0; i < strAngka.length; i++) {
        angka *= strAngka[i]
        // console.log(angka, strAngka[i])
      }
      return kaliTerusRekursif(angka)
    }
  }

  // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6