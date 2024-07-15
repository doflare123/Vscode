line = 0;
function clickButton(){
    area.value += event.target.id;
}
        
function clearAll() {
    area.value = "";
}

function lastoperation() {
    let items = area.value.split(/(?=[)(+\-×÷*])/).filter(Boolean);
    area.value = "";
    items.pop();
    for (let j = 0; j < items.length; j++) {
        let char = items[j]; // текущий символ элемента
        if (char != "," || ['+', '-', '/','*'].includes(char)) { // проверяем, что символ не является запятой
            area.value += char;
        }
    }
}

function backspace() {
    area.value = area.value.toString().slice(0, -1);
}

function result() {
    let items = area.value.split(/(?<=[+\-×÷*])(?![+\-×÷*])/).filter(Boolean);
    console.log(items);
    
    let bukcount = 0;
    let result = "";
    
    // Проход по элементам массива
    for (let i = 0; i < items.length; i++) {
        let item = items[i]; // текущий элемент массива
        let newItem = ''; // новая строка для хранения символов без букв
        let hasLetters = false; // флаг для обнаружения букв

        // Проход по символам текущего элемента
        for (let j = 0; j < item.length; j++) {
            let char = item[j]; // текущий символ элемента
            if (!isNaN(char) || ['+', '-', '/', '÷', '*', ')', '('].includes(char) || char === '×') {
                if (char === '÷') {
                    char = '/'; // заменяем символ деления
                }
                if (char === '×') {
                    char = '*'; // заменяем символ умножения
                }
                newItem += char; // добавляем символ, если это число или оператор
            } else {
                hasLetters = true; // указываем, что в элементе есть буквы
                bukcount++;
            }
        }

        if (hasLetters) {
            items[i] = newItem; // заменяем элемент на новую строку без букв
        }
    }

    // Показ сообщения, если были обнаружены буквы
    if (bukcount > 0) {
        messege.style.visibility = 'revert';
        setTimeout(() => messege.style.visibility = 'hidden', 3000);
    }

    // Очистка поля ввода
    area.value = "";
    // Формирование результирующей строки
    for (let j = 0; j < items.length; j++) {
        let char = items[j]; // текущий символ элемента
        if (char != "," || ['+', '-', '/', '*'].includes(char)){
            result += char; 
        }
    }
    console.log(result);
    area.value = eval(result);
}

function ChoiceCalc() {
    let el = document.getElementById('selector');
    let ChoicePanel = document.getElementById('ChoicePanel');

    el.onclick = function() {
        el.classList.add('rotate');
        ChoicePanel.style.visibility = 'visible';
        ChoicePanel.classList.add('visiblePanel');
    };
}

function changeOnSimple() {
    container.style.visibility = 'visible';
    container_ScientificCalck.style.visibility = 'hidden'
} 

function changeOnSient() {
    container_ScientificCalck.style.visibility = 'visible';
    container.style.visibility = 'hidden'
} 
