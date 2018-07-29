var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens  
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(name,array) {
  return ["Broom", ...kittens]
} 




