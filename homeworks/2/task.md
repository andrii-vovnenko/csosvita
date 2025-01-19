Знайдіть всі цілі рішення рівняння (ax^3 + bx^2 + cx + d) / (x - e) = 0 на відрізку [0,1000] та виведіть їх кількість

Input Format

На вхід подаються 5 чисел, кожне з яких з нового рядку.

            function makeIsEqual(a, b, c, d, e) {
                return function (x) {
                    const r = (a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d) / (x - e) 
                    return r === 0;
                };
            };
            function processData(input) {
                let result = 0;
                const [a, b, c, d, e] = input.split('\n').map(n => parseInt(n, 10));
                const isEqual = makeIsEqual(a, b, c, d, e);
                
                for (let i = 0; i <= 1000; i++) {
                    if (isEqual(i)) {
                        result++
                    }
                }
                console.log(result)
                return result;
            }

Нехай A та B – додатні цілі числа. Число A краще ніж число B, якщо сума квадратів цифр числа A більша, ніж сума квадратів цифр числа B. У випадку однакової суми квадратів, кращим вважається число з меншим значенням.

Знайдіть найкраще просте число на відрізку [L, R] включно. Просте число — це натуральне число, яке має рівно два різні натуральні дільники (лише 1 і саме число). У випадку відсутності такого числа виведіть -1.

Input Format

Два цілі числа L та R

            function processData(input) {
                const [l, r] = input.split(' ').map(n => parseInt(n, 10));
                const res = main(l, r);
                console.log(res);
            } 

            function main(l, r) {
            const primeNumbers = findPrimeNumbersFromRange(l, r);

            return findMax(primeNumbers);
            }

            function findPrimeNumbersFromRange(l, r) {
            const primeNumbers = [];

            for (let i = l; i <= r; i++) {
                if (isPrime(i)) {
                primeNumbers.push(i);
                }
            }

            return primeNumbers
            }

            function sumOfDigits(n) {
            let res = 0;

            while (n > 0) {
                res += Math.pow(n % 10, 2);
                n = n / 10;
            }

            return res;
            }

            function findMax(primeNumbers) {
            if (primeNumbers.length === 0) {
                return -1;
            }

            let min = primeNumbers[0];

            for (let i = 1; i < primeNumbers.length; i++) {
                const sumOfDigitsMin = sumOfDigits(min);
                const sumOfDigitsCurrent = sumOfDigits(primeNumbers[i]);
                if (sumOfDigitsCurrent < sumOfDigitsMin) continue;
                if (sumOfDigitsCurrent > sumOfDigitsMin) {
                min = primeNumbers[i];
                continue;
                }
                if (min > primeNumbers[i]) {
                min = primeNumbers[i];
                }
            }

            return min;
            }

            function isPrime(n) {
            if (n <= 1) {
                return false;
            }

            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                return false;
                }
            }

            return true;
            }

На початку війни в нашому морі було безліч руських кораблів. Перед вами карта з їх розташуванням. Допоможіть Валерію Залужному визначити ймовірність влучити в однин з них випадковим пострілом.

Input Format

Перше число в рядку вказує на кількість рядків на карті, а друге число - на кількість стовпців. Після цього слідують рядки, що представляють карту, де кожен символ відображає стан комірки. Цифра 1 позначає наявність корабля у відповідній комірці карти, а цифра 0 - відсутність корабля.

Constraints

1 <= r, c <= 100
0 <= map[r, c] <= 1
Output Format

Виведіть ймовірності влучення в корабель з точністю до 6 знаків після коми.

Sample Input 0

2 3
0 0 1
1 0 1
Sample Output 0

0.500000

            function processData(input) {
                const [firstRow, ...rest] = input.split('\n');

                const [rows, cols] = firstRow.split(' ').map(Number);

                const board = rest.map(row => row.split(' ').map(Number));
                let boatsNumber = 0;

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                    if (board[i][j] === 1) {
                        boatsNumber++;
                    }
                    }
                }
                const totalCells = rows * cols;
                const boatProbability = Math.min((boatsNumber / totalCells), 1);
                console.log(boatProbability.toFixed(6));
                }

Задано натуральне число N. Знайдіть кількість унікальних трьохзначних чисел, що можна утворити шляхом викреслення цифр з десяткового запису числа N. Викреслення цифр може відбуватися з будь-якого місця в числі.

Input Format

Одне натуральне число

Constraints

1 <= N <= 10^100
Output Format

Програма повинна вивести одне число - кількість унікальних трьохзначних чисел, які можна сформувати.

Sample Input 0

12
Sample Output 0

0

            function processData(input) {
                const result = [];
                const numbers = input.split('');

                for(let i = 0; i < numbers.length; i++) {
                    let temp1 = numbers[i];
                    if (temp1 === '0') continue;
                    for (let j = i + 1; j < numbers.length; j++) {
                        if (i === j) continue;
                        let temp2 = numbers[j];
                        for (let k = j + 1; k < numbers.length; k++) {
                        if (j === k || i === k) continue;
                        let temp3 = numbers[k];
                        const temp = `${temp1}${temp2}${temp3}`;
                        if (!result.includes(temp)) {
                            result.push(temp);
                        }
                        }
                    }
                }

                console.log(result.length);
                } 
