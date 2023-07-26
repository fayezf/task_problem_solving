const getTarget = (arr, num) => {
  let l = 0;
  let m = 0;
  let anArray = [];
  let obj = {};

  const fayez = (p, q, x, y) => {
    const check = p+ q;
    if(check == num){
      obj[p, q] = [x, y]
    }
  }
  for(let i = 0; i < arr.length; i++){
    const element = arr[i]
    m = i;
    l = element;
    for(let i =1; i < arr.length; i++){
      const element = arr[i];
      fayez(l, element, m, i)
    }
  }

  const size = Object.keys(obj).length;
  if(size == 1){
    for(let x in obj){
      const element = obj[x];
      anArray.push(...element)
    }
  }
  else{
    for(let x in obj){
      const element = obj[x];
      anArray.push(element)
    }
  }
  return anArray;

}

const result = getTarget([1, 3, 6, 8, 11, 15], 9);
console.log(result)

  