
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return []
  let array = []
  matrix.forEach((arr, index) => {
    if(index % 2 === 1) arr = arr.reverse()
    arr.forEach(el => {
      array.push(el)
    })
  });
  return array
}