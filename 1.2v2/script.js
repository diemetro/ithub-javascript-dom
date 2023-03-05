// Создание таблицы произвольного размера и заполнение данными из массива
// Создание массива с 30-ю случайными числами от 0 до 99
let numarray = [];
let rows = 5;
let columms = 6;
let sizearray = rows*columms;
for (let n = 0; n < sizearray; n++) {
  numarray.push(Math.floor(Math.random() * 100));
}

// Поиск div c id=#tablefornum в html-файле
let numtable = document.querySelector('#tablefornum');

// Функция создания таблицы и заполнение ее значениями из массива numarray
function createTable(root, columns, rows) {
	let table = document.createElement('table');
	
	for (let r = 0; r < rows; r++) {
		let tr = document.createElement('tr');
	
		for (let c = 0; c < columns; c++) {
			let td = document.createElement('td');
			const indexarray = r * columns + c; // список элементов массива от 0 до sizearray-1;
    		td.textContent = numarray[indexarray]; // заполнение значениями из массива элементов таблицы;
			if (numarray[indexarray] >= 50) { // красим ячейку в оранжевый, если число в массиве больше или равно 50;
				td.style.backgroundColor = 'orange';
			  }
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	root.appendChild(table);
}
// Функция заполнения случайной ячейки таблицы случайными значениями вручную по кнопке
function numberadd() {
	let rows = 5;
	let columms = 6;
	let table = document.querySelector('table');
	let randomcell = table.rows[Math.floor(Math.random() * rows)].cells[Math.floor(Math.random() * columms)];
	randomcell.innerHTML = Math.floor(Math.random() * 100);
	if (randomcell.innerHTML >= 50) { // красим ячейку в оранжевый, если число в массиве больше или равно 50;
		randomcell.style.backgroundColor = 'orange';
		} 
		else{randomcell.style.backgroundColor = 'rgb(234, 206, 206)';}
	}

createTable(numtable, columms, rows);