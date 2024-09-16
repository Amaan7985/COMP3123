var array = [1, 2, 3, 4];

function calculateSum(arr) {
  return arr.reduce(function(collect, Val) {
    return collect + Val;
  }, 0); 
}

function calculateProduct(arr) {
  return arr.reduce(function(collect, Val) {
    return collect * Val;
  }, 1); 
}

console.log(calculateSum(array));      
console.log(calculateProduct(array));  