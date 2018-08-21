/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.
Contoh:
  - height: 3
  - output:
    ***
    ###
    ***
  - height: 1
  - output:
    *
  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****
Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height = 5
//baris
for(var i = 0 ; i < height ; i++){
  //kolom
  var bintang = ''
  var pagar = ''
  for (var j = 0; j < height ; j++){
    bintang+= '*'
    pagar+= '#'
  }
  
  if(i%2===0){
    console.log(bintang)
  } else {
    console.log(pagar)
  }
  
}