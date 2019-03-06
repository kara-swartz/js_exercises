//Recorsion

/*
sequenceSum.js
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
Подсказки
Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)
// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
В файле sequenceSum.test.js можно посмотреть все варианты параметров, с которыми будет вызвана ваша функция.
*/

  // Visualize Execution: https://goo.gl/UlTxCs
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);


/* 
Iterative
*/

/*
smallestDivisor.js
Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.

Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17
Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он вычисляет остаток от деления одного операнда на другой. Например, 11%5 это 1, а 10%2 это 0.

Так что если x%y это 0, то y делит x без остатка.
*/

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (num, acc) => {
    if (num % acc === 0) {
      return acc;
    } else {
      return iter(num, acc+1 );
    }
  };


if (num<=0) {
  return NaN;
} else if (num===1) {
  return 1;
} else {
  return iter(num, 2);
  }   
};

export default smallestDivisor;


/*
solution.js
Напишите функцию smallestDivisor. Она должна находить наименьший целый делитель числа. Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. На этот раз реализуйте императивный итеративный процесс, что означает:

не используйте рекурсию
используйте переменные
используйте цикл while
Например, наименьший делитель числа 15 это 3.

smallestDivisor(15); // 3
smallestDivisor(17); // 17

smallestDivisor(0); // NaN
smallestDivisor(-3); // NaN
Замечание: Если переданное в smallestDivisor число меньше единицы, возвращайте NaN.

Идея алгоритма:

Попробуйте разделить число на 2.
Если число делится без остатка, то это наименьший делитель.
Если нет, то попробуйте следующий делитель.
Если ничего не делит число без остатка, то переданное число является простым, так что его наименьший делитель — оно само (не считая 1)
Подсказка
Вспомните про оператор % (modulus or остаток от деления) из урока 4. Он вычисляет остаток от деления одного операнда на другой. Например, 11 % 5 это 1, а 10 % 2 это 0.

Так что если x % y это 0, то y делит x без остатка.*/


const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return num;
  }

  let divisor = 2;

  while (num % divisor !== 0) {
    divisor = divisor + 1;
  }

  return divisor;
};

/*
reverse.js
Реализуйте функцию reverse, которая переворачивает строку. Например:

reverse('hello, world!'); // !dlrow ,olleh
Подсказки
Длина строки str находится так: str.length
Не забудьте: индексы начинаются с 0, но длина — это реальная длина. Так что индекс последнего символа не совпадает с длиной строки
*/

// Visualize Execution: https://goo.gl/8pNRk2
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return result;
};



/*
isPrime.js
Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.

Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.

Используйте цикл for и арифметические шорткаты.

isPrime(1);     // false
isPrime(7);     // true
isPrime(10);    // false
(Число 1 не считаем простым).
*/


const isPrime = (n) => {
  if (n <= 1) {
       return false;
  }
   
  
  for (let counter = 2; counter < n; counter++) {
    if (n%counter===0) {
        return false;
    }
  }
  return true;
};

export default isPrime;

//isPrime(21);

/*

В файле myMathModule.js:

	1. Создайте функцию getTriangleArea, которая принимает два аргумента h и b и вычисляет площадь треугольника по формуле A = 1/2 * h * b, 
где h — высота, а b — основание треугольника.
Пример:
getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
	
	2. Экспортируйте функцию.

В файле solution.js:

	1. Импортируйте getTriangleArea из модуля myMathModule.
	2. Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника высотой n и основанием n2/2. Используйте функцию square.
	3. Экспортируйте созданную функцию по умолчанию.


*/
// BEGIN
export const getTriangleArea = (h, b) => {
  return 1/2 * h * b;
};
// END

// BEGIN
import { getTriangleArea } from './myMathModule';

const solution = n => getTriangleArea(n, square(n) / 2);

export default solution;
// END






/*
Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true
comparers.js
Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

Если в первой строке больше заглавных символов, то возвращается 1.
Если во второй строке больше заглавных символов, то возвращается -1.
Иначе возвращается 0.
Подсказки
Функция bigLettersCount должна принимать на вход строку str и высчитывать количество заглавных символов в ней.
Вычисление длины строки: length(str).
Перевод строки в верхний регистр: toUpperCase(str).
Проверка на то, что символ в верхнем регистре: toUpperCase(char) === char;
*/

import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let counter = 0;

  for (let i=0; i<str.length; i+=1) {	
  	if (toUpperCase(str[i]) === str[i]) {
  		counter += 1;
  	}
  }

  return counter;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
  	return 1;
  } else if (firstCount < secondCount) {
  	return -1;
  } else {
  	return 0;
  }
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);


/*
addDigits.js
Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

3 + 8 = 11
1 + 1 = 2
Результат: 2

Пример:

addDigits(10); // 1
addDigits(19); // 1
addDigits(38); // 2
addDigits(1259); // 8
Подсказка
Выделите процесс суммирования цифр в числе в отдельную функцию
*/

import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)

const addDigits = (str) => {

  const sumDigits = (str) => {

    const strDigit = String(str);
	  let digits = 0;

    for (let i=0; i<length(strDigit); i+=1) {
      digits += Number(strDigit[i]);      
	  }

    return Number(digits);
  }

  let out = String(sumDigits(str));
  if (length(out)==1) {
    return Number(out);
  } else {
    return addDigits(out);
  }

}
	
export default addDigits;
// END

/*
Решение учителя:
// BEGIN
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};

export default addDigits;
// END
*/




/*
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).
*/


import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const wordUpperCase = (str) => {

    let edStr = toUpperCase(str[0]);
    
    for (let i=1; i<length(str); i+=1) {
        if (str[i-1] === ' ') {
            edStr = edStr + " " + toUpperCase(str[i]);
        } else {
            edStr = edStr + str[i];
}
 
}
return edStr;
}


export default wordUpperCase;
//wordUpperCase("hello, world");
// END


/*
Решение учителя:
*/
// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END