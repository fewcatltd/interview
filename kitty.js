// Задача избавится от ошибки при вызове sayName
// Эту переменную менять нельзя
const cat = {
  name: 'kitty',
  sayName() {
    console.log(this.name)
  }
}

let tt = cat.sayName

function test () {
  tt()
}
