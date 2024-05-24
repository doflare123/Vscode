function clickButton() {
    if(event.target.id == "C")
        area.value = "";
    else if(event.target.id == "⌫"){
        area.value = area.value.toString().slice(0, -1);
    }
    // else if(event.target.id == "%"){
    // }
    else if(event.target.id == "="){
        let items = area.value.split(/([+\-×÷*])/);
        console.log(items);
        let bukcount = 0;
        for (let i = 0; i < items.length; i++) {
            let item = items[i]; // текущий элемент массива
            let newItem = ''; // новая строка для хранения символов без букв
            let hasLetters = false; // флаг для обнаружения букв
        
            for (let j = 0; j < item.length; j++) {
                let char = item[j]; // текущий символ элемента
                if (!isNaN(char) || ['+', '-', '/', '×', '÷', '*'].includes(char)) {
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
        console.log(bukcount);
        if (bukcount>0) 
            alert("Буквы нельзя использовать! А если бы я не заметил и сломался? Но не волнуйся, я их удалил!");
        area.value = "";
        for (let j = 0; j < items.length; j++) {
            let char = items[j]; // текущий символ элемента
            if (char !== ",") { // проверяем, что символ не является запятой
                area.value += char; // добавляем символ в input, если это не запятая
            }
        }
        
    }
    else
        area.value += event.target.id;
    }