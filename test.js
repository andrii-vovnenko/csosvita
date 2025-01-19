function main(input) {
  const result = [];
    const numbers = input.split('');

    for(let i = 0; i < numbers.length; i++) {
        let temp1 = numbers[i];
        if (temp1 === '0') continue;
        for (let j = 0; j < numbers.length; j++) {
          if (i === j) continue;
          let temp2 = numbers[j];
          for (let k = 0; k < numbers.length; k++) {
            if (j === k || i === k) continue;
            let temp3 = numbers[k];
            const temp = `${temp1}${temp2}${temp3}`;
            if (!result.includes(temp)) {
              result.push(temp);
            }
          }
        }
    }

    console.log(result);
};

main('111111');