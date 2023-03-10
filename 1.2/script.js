// Создание таблицы произвольного размера и заполнение данными вручную по кнопке
// Создание массива с 30-ю случайными числами от 0 до 99
let rows = 5;
let columms = 6;

// Поиск div c id=#tablefornum в html-файле
let numtable = document.querySelector('#tablefornum');

// Функция создания пустой таблицы
function createTable(root, columns, rows) {
    let table = document.createElement('table');
    for (let r = 0; r < rows; r++) {
        let tr = document.createElement('tr');
        for (let c = 0; c < columns; c++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    root.appendChild(table);
}

let count = 0;
// Функция заполнения пустой таблицы случайными значениями вручную по кнопке
function numberadd() {
    let number=0;
    let table = document.querySelector('table');
    for (let row of table.rows) { // переберем все ряды таблицы с помощью свойства rows;
        for (let cell of row.cells) { // а в каждом ряду переберем его ячейки с помощью свойства cells;
            if (number==count){
            cell.innerHTML = Math.floor(Math.random() * 100);
                if (cell.innerHTML >= 50) { // красим ячейку в оранжевый, если число в массиве больше или равно 50;
                    cell.style.backgroundColor = 'orange';
                    }
            count+=1;
            return 0;
            }
            number+=1;
        }
    }
}

createTable(numtable, columms, rows);
