const computeNaturalNumber = (num1, num2, num3) => {
  let sum = 0;

  for (let i = 0; i < num3; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      sum = sum + i;
    }
  }

  return sum;
};

console.log(
  "computeNaturalNumber(3, 5, 1000) ====>",
  computeNaturalNumber(3, 5, 1000)
);
console.log(
  "computeNaturalNumber(3, 5, 10) ====>",
  computeNaturalNumber(3, 5, 10)
);
