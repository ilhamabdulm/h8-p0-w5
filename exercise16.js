function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaNew = angka%10
    var hasil = angkaNew

    if(angka<10){
        return angka
    }else{
        console.log('ini hasil: ',hasil)
        var proses = Math.floor(angka/10)
        // console.log('ini proses: ',proses)
        hasil+=totalDigitRekursif(proses)
        return hasil

    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5