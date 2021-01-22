const roman = 2902;

// let M  = Math.floor(roman / 1000)
// let remainder = roman % 1000

// let D = Math.floor(remainder / 500)
// remainder = remainder % 500

// let C = Math.floor(remainder / 100)
// remainder = remainder % 100

// let L = Math.floor(remainder / 50)
// remainder = remainder % 50

// let X = Math.floor(remainder / 10)
// remainder = remainder % 10

// let V = Math.floor(remainder / 5)
// remainder = remainder % 5

// let I = Math.floor(remainder / 1)
// remainder = remainder % 1

// console.log("M".repeat(M)+"D".repeat(D)+"C".repeat(C)+"L".repeat(L)+"X".repeat(X)+"V".repeat(V)+"I".repeat(I))



function decToRom(number) {
  const roman = {
    divide: [1000,500,100,50,10,5,1],
    char: ["M","D","C","L","X","V","I"]
  };
  let remainder = number;
  let newArray = []
  for (i = 0; i < 7; i++) {
    newArray.push(roman.char[i].repeat(Math.floor(remainder / roman.divide[i])));
    remainder = remainder % roman.divide[i];
  }
  return newArray.join('');
};

// function edgeCase(string) {
//   const value = string.replace(/CCCC/,'CD')
//   value = value.replace(/LLLL/,'LC')

//   return value
// }

console.log(decToRom(2902))
