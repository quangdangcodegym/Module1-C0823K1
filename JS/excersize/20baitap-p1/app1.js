/**
// --- Truyền giá trị (bên trong hàm thay đổi BÊN NGOÀI vẫn ko đổi): kiếu dữ liệu nguyên thủy: number, string, boolean
let a1 = 5;
let a2 = 10;

function swap(a1, a2) { // tham số
    let temp = a1;

    a1 = a2;
    a2 = temp;
}

swap(a1, a2);   // đối số
console.log(a1);
console.log(a2);

//---- Truyền tham chiếu
let arr = [3, 10];
function swapArray(numbers) {   // tham số: [3, 10]
    let temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;      // [10, 3]
}

swapArray(arr); // đối số: truyền mảng, đối tượng ()
console.log(arr);

// let: không cho khai báo lại
let a = 5;
let a;
let b = 5;
b = 10;

// var: cho khai báo lại và đè lên biến cũ
var b = 5;
var b = 10;


// var có khả năng hoisting: trồi lên

if (10 > 0) {
    if (5 > 0) {
        if (1 > 0) {
            var b = 5;          // hoisting: trồi lên
        }

    }
}
console.log(b);

if (10 > 0) {
    if (5 > 0) {
        if (1 > 0) {
            let b = 5;          // let không trồi lên
        }

    }
}
console.log(b);

function print() {
    var b = 10;
    if (10 > 0) {
        var c = 10;
    }
    console.log("c", c);
}
print();

console.log(b);
// NHỚ HÀM split

let a = "1.20;3;4;5";

let total = 0;
let arr = a.split(".;");    // ['1','20','3','4', '5]
for (let i = 0; i < arr.length; i++) {
    total += parseInt(arr[i]);
}
console.log(total);

// Bài 12: Xóa tất cả các số âm trong mảng
let arr = [6, -1, -2, -3, 6, -2];

function removeNagative(numbers) {
    for (let i = 0; i < numbers.length;) {
        if (numbers[i] < 0) {
            numbers.splice(i, 1);
        } else {
            i++
        }
    }
}

removeNagative(arr);
console.log(arr);


// ---------------
let arr = [6, -1, 6, -2];
function removeNagative1(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            results.push(numbers[i]);
        }
    }
    return results;
}

arr = removeNagative1(arr);

console.log(arr); // [6,6]


let arr = [6, -1, 6, -2];
function removeNagative1(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            results.push(numbers[i]);
        }
    }
    return results;
}

arr = removeNagative1(arr);

console.log(arr); // [6,6]


// Bài 3: Đếm số lượng giá trị tận cùng bằng 5 trong mảng
let arr = [15, 255, 233, 755, 53];

function countElementEndIn5(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 == 0 && numbers[i] % 2 == 1) {
            count++;
        }
    }
    return count;
}
let arr1 = [5, 15, 7, 5551];

console.log(countElementEndIn5(arr));

console.log(countElementEndIn5(arr1));


//Bài 7: Sắp xếp số dương tăng dần, các số âm giữ nguyên vị trí

let arr = [3, 9, -6, 1];        // [1, 3, -6, 9]

function sortPosAscNavNotChange(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > 0 && arr[j] > 0 && arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

}

console.log(sortPosAscNavNotChange(arr));
 */




