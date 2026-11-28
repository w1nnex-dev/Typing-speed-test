const text = "кириешки кириешки вкусные. Как так ток";
const box = document.getElementById("text");
const chars = [];
//выводд текста побуквенно оберктой <span> что бы можно было присвоить цвет взависимости от правильности нажатия клавиши
for (const letter of text) {
    const span = document.createElement("span");
    span.className = "ch";
    span.textContent = letter;
    box.append(span);
    chars.push(span);
}

// Перехват нажатой клавиши и = нажатой клавиши

let i = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && i > 0) {
        if(i > 0) {
            i--;
            chars[i].classList.remove("ok", "bad");
    }
    return;
}
    if (e.key.length !== 1) return;
    if (e.key === text[i]) {
        chars[i].classList.add("ok");
    } else {
        chars[i].classList.add("bad");
    }
    i++;
});




