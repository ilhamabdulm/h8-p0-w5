function changeVocals (str) {
    //code di sini
    var huruf = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
    var vocals = 'AIUEOaiueo'
    var change = 'BJVFPbjvfp'
    var temp = ''
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vocals.length; j++){
            if(str[i]===vocals[j]){
                temp+=change[j]
            }
        }
        for(let k=0; k<huruf.length; k++){
            if(str[i]===huruf[k]){
                temp+=huruf[k]
            }
        }
    }
    return temp
  }
  
  function reverseWord (str) {
    //code di sini
    var temp = ''
    for(let i=str.length-1; i>=0; i--){
        temp+=str[i]
    }
    return temp
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    var temp = ''
    for(let i=0; i<str.length; i++){
        for(let j=0; j<upper.length; j++){
            if(str[i]===upper[j]){
                temp+=str[i].toLowerCase()
            }else if(str[i]===lower[j]){
                temp+=str[i].toUpperCase()
            }
        }
    }
    return temp
  }
  
  function removeSpaces (str) {
    //code di sini
    var temp = ''
    for(let i=0; i<str.length; i++){
        if(str[i]!==' '){
            temp+=str[i]
        }
    }
    return temp
  }
  
  function passwordGenerator (name) {
    //code di sini
    var vocal = changeVocals(name)
    var reverse = reverseWord(vocal)
    var lowUp = setLowerUpperCase(reverse)
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        return removeSpaces(lowUp)
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'