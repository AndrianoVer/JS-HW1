// 1.Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert() {
	return 8;
};
console.log( 2 * convert());


// 2. A function which returns reversed string.
let reversStr = 'cba'; // створюємо змінну reversStr;
let reversRes = ''; // в змінну reversRes будемо записувати нашу перевернуту стрічку;

for (i = reversStr.length - 1; i >= 0; i--) { //перебираємо строку циклом починаючи з кінця строки, пишемо умову
	// i = reversStr.length - 1, i >= 0 - true до початкового індексу, йдемо з кроком i--;
	reversRes += reversStr[i];	// наша нова змінна reversRes буде складатись з 2 - 1 - 0 індексу
}
console.log(reversRes);

// 3.A function which prints the stair picture of size n
var rows = 3;
for (i = 1; i <= rows; i++) {
	for (k = 1; k <= (rows - 1); k++) {
		document.write('&nbsp;');         // https://www.youtube.com/watch?v=ItOmYp9AKOA 
												 // передивився раз 5 поки зрозумів		
	}
	for (j = 1; j <= i; j++) {
		document.write('#');
	}
	document.write('<br/>');
}

// 4.A function which returns total sum of a range

function sumNumber(arr) {
	var min = Math.min(arr[0], arr[1]); // повертає найменьше значення зі списку аргументів
	var max = Math.max(arr[0], arr[1]); // повертає найбільше значення зі списку аргументів

	var range = []; //  створюємо новий масив, куди будемо пушити наші значення після того як 
	// переберемо його циклом for

	for (i = min; i <= max; i++) { //  перебираємо масив, доки умова true пушимо наші ітерації в новий масив range;
		range.push(i);
	}
	return range.reduce(function (a, b) { // використовуємо метод reduce для того щоби додати всі наші ітерації;
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
var rowsNew = 3;
for (i = 1; i <= rowsNew; i++) {
	for (k = 1; k <= ( rowsNew - i ); k++) {
		document.write('&nbsp;');
	}
	for (j = 1; j <= i; j++) {
		document.write('#');
	}
	document.write('<br/>');
}

// 7. A function which transforms first and last letter to uppercase.
let str = 'abc'; // створюємо змінну str;
let res = ''; // в змінну res будемо записувати нашу нову стрічку з великими буквами;

for (let i = 0; i < str.length; i++) { // перебираємо строку циклом починаючи з початку строки, поки (i < str.length) = true цикл працює;
	if (str[i] === str[0] || i === str.length - 1) { // шукаємо першу та останню букву в строці;
		res += str[i].toUpperCase(); // результат перший та останній символ з великої літери;
	} else {
		res += str[i]; // добавляемо першту символів в нашу нову строку в якій вже є перша та остання літера велика;
	}	
}
console.log(res);

// 8.A function which returns true if string contains

function cursorCheck(string) {
	if (string.includes('OstaP') || string.includes('ironman') || string.includes('cursor')) { // як це скоротити?
		return true;		
	} else {
		return false;
	}
}
console.log(cursorCheck('Hello I am OstaP')); // true
console.log(cursorCheck('Superman is here')); // false

// 9.A function which returns a string with all letters in uppercase.
let strNew = 'abc'; // створюємо змінну str;
let resNew = ''; // в змінну res будемо записувати нашу нову стрічку з великими буквами;

function allUppercase() {
	for (i = 0; i <= strNew.length; i++) {
		if (i <= strNew.length) {
			resNew += strNew[i].toUpperCase() + strNew[i + 1].toUpperCase() + strNew[i + 2].toUpperCase();	// - як можна скоротити цей запис?		
		} 
		return resNew;		
	}	
}
console.log(allUppercase());


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
console.log(fib(3));
console.log(fib(5));
console.log(fib(7));







