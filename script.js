line = 0;

function animationChoiceButton() {
    
}
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
        for (let i = 0; i < items.length; i++) {
            let item = items[i]; // текущий элемент массива
            let newItem = ''; // новая строка для хранения символов без букв
            let hasLetters = false; // флаг для обнаружения букв
        
            for (let j = 0; j < item.length; j++) {
                let char = item[j]; // текущий символ элемента
                if (!isNaN(char) || ['+', '-', '/','÷', '*', ')', '('].includes(char) || char === '×') {
                    if (char === '÷') {
                        char = '/'; // заменяем символ деления
                        hasLetters = true;
                    }
                    if (char === '×') {
                        char = '*'; // заменяем символ умножения
                        hasLetters = true;
                    }
                    newItem += char; // добавляем символ, если это число или оператор
                } 
                else {
                    hasLetters = true; // указываем, что в элементе есть буквы
                    bukcount++;
                }
            }
            if (hasLetters) {
                items[i] = newItem; // заменяем элемент на новую строку без букв
            }
        }
        if (bukcount>0) {
            messege.style.visibility = 'revert';
            setTimeout(() => messege.style.visibility = 'hidden', 2000);
        }
        area.value = "";
        for (let j = 0; j < items.length; j++) {
            let char = items[j]; // текущий символ элемента
            if (char != "," || ['+', '-', '/','*'].includes(char)) { // проверяем, что символ не является запятой
                result += char; // переводим строку в число
            }
        }
        area.value = eval(result);
}

function ChoiceCalc() {
    // let el = document.getElementById('selector'),
    // cs = getComputedStyle(el);
    // let leftValue = parseInt(cs.left)|| 0;
    // let moveValue = 50;
    // let newPos = leftValue + moveValue;
    
    // for(let i = 0; i < 50; i++) {
    //     el.style.left = newPos + 'px';
    // }
    // console.log(el.style.left);

}