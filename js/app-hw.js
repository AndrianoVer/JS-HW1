// 1.Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert(UAH) {
	return console.log(8 * UAH);
};
convert(2);


// 2. A function which returns reversed string.
function reverseString(reversStr) {	
	let reversRes = '';
	for (i = reversStr.length - 1; i >= 0; i--) {
		reversRes += reversStr[i];
	}
	return console.log(reversRes);
}
reverseString('cba');

// 3.A function which prints the stair picture of size n
function stairs(stairsNum) {
	var rows = 3;
	for (i = 1; i <= rows; i++) {
		for (k = 1; k <= (rows - 1); k++) {
			document.write('&nbsp;');
		}
		for (j = 1; j <= i; j++) {
			document.write('#');
		}
		document.write('<br/>');
	}
	return stairsNum;
}
stairs();


// 4.A function which returns total sum of a range

function sumNumber(arr) {
	let min = Math.min(arr[0], arr[1]);
	let max = Math.max(arr[0], arr[1]);
	const range = []; 
	for (i = min; i <= max; i++) { 
		range.push(i);
	}
	return range.reduce(function (a, b) { 
		return a + b;
	});
};
console.log(sumNumber([2, 4, 5]));
console.log(sumNumber([-1, 3, 6]));

// 5.Write a function which returns the smallest of three numbers.
function smallestNumber(arr) {
	var min = Math.min(arr[0], arr[1], arr[2]); // повертає найменьше значення зы списку аргументів
	return min; //повертаємо значення min
};
console.log(smallestNumber([10, 5, 11]));
console.log(smallestNumber([3, 8, 4]));

// 6.A function which prints the stair picture of size n

function stairs2(stairsNumMiddle) {
	let rowsNew = 3;
	for (i = 1; i <= rowsNew; i++) {
		for (k = 1; k <= (rowsNew - i); k++) {
			document.write('&nbsp;');
		}
		for (j = 1; j <= i; j++) {
			document.write('#');
		}
		document.write('<br/>');
	}
}
stairs2();

// 7. A function which transforms first and last letter to uppercase.

function transormToUppercase(str){	
	let res = '';
	for (let i = 0; i < str.length; i++) { 
		if (str[i] === str[0] || i === str.length - 1) { 
			res += str[i].toUpperCase(); 
		} else {
			res += str[i]; 
		}
	}
	return console.log(res);
}
transormToUppercase('abc');

// 8.A function which returns true if string contains

function cursorCheck(string) {
	const lowerStr = string.toLowerCase();
	return lowerStr.includes('ostap') || lowerStr.includes('ironman') || lowerStr.includes('cursor')
}
console.log(cursorCheck('Hello I am OstaP')); // true
console.log(cursorCheck('Superman is here')); // false

// 9.A function which returns a string with all letters in uppercase.

function convertToUpperCase(strNew) { 
	let stringToUppercase = '';	

	for (i = 0; i < strNew.length; i++) {
		const charcode = strNew.charCodeAt(i);		
		if (charcode >= 97 && charcode <= 122) {
			stringToUppercase += String.fromCharCode(charcode - 32)
		} else {
			stringToUppercase += strNew.charAt(i);
		}			
	}
	return console.log(stringToUppercase);	
};
convertToUpperCase('abcdfasdfasdf');

// 10.A function which removes duplication of letters in string
function removeDuplicationLetters(strdouble) { 
	let result = ''; // в змінну result будемо записувати нашу нову обрізану стрічку;

	for (i = 0; i < strdouble.length; i++) { // доки тут - i < strdouble.length = true, цикл for буде працювати
		let temp = result.toLowerCase(); // змінна temp дорівнює наша нова строка всі букви з нижнім регістром 
		let char = strdouble[i].toLowerCase(); // змінна char - кожен індекс строки strdouble ('Hello I am Iron Man'), з нижнім регістром
		// це ми зробили case-insensitive;
		if (strdouble[i] === ' ' || !temp.includes(char)) { // перевіряємо чи кожен індекс стрінги strdouble строго дорівнює '' (пробілу?) чи
		 					// змінна temp НЕ містить значення зі змінної char
			result += strdouble[i];			
		}
		
	}
	return result; // повертаємо результат
 }

console.log(removeDuplicationLetters('Hello I am Iron Man')); // Helo I am rn 


// 11.function fibonacci(n)

function fib(n) {
	if (n < 2) {
		return n;
	}
	else {
		return (fib (n - 1) + fib (n - 2))
	}	
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
