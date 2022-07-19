function numberOfSteps(num: number): number {
  let result: number = 0;

  while (num > 0) {
    if(num % 2 === 0) {
      num = num / 2
    } else {
      num = num - 1
    }
    result += 1;
  }
  return result;
};

export default numberOfSteps
