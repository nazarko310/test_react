let a = [2, 5, 1, 10];

function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[j + 1]) {
        let firstNumber = a[j];
        a[j] = a[j + 1];
        a[j + 1] = firstNumber;
      }
    }
  }
  return a;
}

console.log(bubbleSort(a));