let a = prompt("Digite o valor de A: ")
let b = prompt("Digite o valor de B: ")
let c = prompt("Digite o valor de C: ")
const A = parseFloat(a)
const B = parseFloat(b)
const C = parseFloat(c)

let delta = B*B - 4 * A * C
let x1 = -B + Math.sqrt(delta) / (2 * A)
let x2 = B - Math.sqrt(delta) / (2 * A)
console.log(`X': ${x1}\nX'': ${x2}`)