let arrWords = ["Hello", "banana", "red"];
let arrMeaning = ["Xin chào", "Chuối", "Màu đỏ"];


function handleBtnTranslate() {
    let txtWord = document.getElementById("txtWord").value;     // RED

    let index = -1;
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].toLowerCase() == txtWord.toLowerCase()) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        document.getElementById("lResult").innerText = "Không tìm thấy";
    } else {
        document.getElementById("lResult").innerText = arrMeaning[index];
    }

}