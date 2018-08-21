/**
---------------------
First Letter Grouping
---------------------
Buatlah sebuah fungsi yang menerima input nama dan akan mereturn atau mengembalikan
nilai group manakah nama tersebut, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka akan mengembalikan nilai 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka akan mengembalikan nilai 'Masuk group kedua'
- Selain itu akan mengembalikan nilai 'Masuk group terakhir'
Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group terakhir'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'
- `name` = 'foobar', output: 'Masuk group kedua'
*/


// Code disini
function firstLetterGrouping (name) {
    //console.log(name[0])
    if(name[0] === 'a' || name[0] === 'b' || name[0] === 'c' || name[0] === 'd'){
      return 'Masuk group pertama'
    } else if(name[0] === 'e' || name[0] === 'f' || name[0] === 'g' || name[0] === 'h'){
      return 'Masuk group kedua'
    } else {
      return 'Masuk group terakhir'
    }
  }
  
  console.log(firstLetterGrouping('rama')) // Masuk group terakhir
  console.log(firstLetterGrouping('awtian')) // Masuk group pertama
  console.log(firstLetterGrouping('foobar')) // Masuk group kedua