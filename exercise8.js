function cariPelaku(str) {
    // you can only write your code here!
    var regex = /abc/g
    var arrHasil = str.match(regex)
    if(arrHasil===null){
        return 0
    }else{
        return arrHasil.length
    }
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2