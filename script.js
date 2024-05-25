function clickButton() {
    if(event.target.id == "C")
        area.value = "";
    else if(event.target.id == "⌫"){
        area.value = area.value.toString().slice(0, -1);
    }
    // else if(event.target.id == "%"){
    // }
    else if(event.target.id == "="){
        let items = area.value.split(/(?=[)(+\-×÷*])/).filter(Boolean);
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
        console.log(bukcount);
        if (bukcount>0) 
            alert("Буквы нельзя использовать! А если бы я не заметил и сломался? Но не волнуйся, я их удалил!");
        area.value = "";
        for (let j = 0; j < items.length; j++) {
            let char = items[j]; // текущий символ элемента
            if (char != "," || ['+', '-', '/','*'].includes(char)) { // проверяем, что символ не является запятой
                result += char; // переводим строку в число
            }
        }
        console.log(result);
        area.value = eval(result);
    }
    else
        area.value += event.target.id;
    }