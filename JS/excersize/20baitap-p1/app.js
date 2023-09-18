// Bài 9: Đếm số nguyên tố trong mảng

// -----------------------------------Tập cách tách hàm để tái sử dụng
/**
let arr = [5, 7, 11, 8, 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    // đi kiểm tra từng phần tử arr[i] xem có phải là số nguyên tố ko, nếu có thì tăng count lên 1
    if (checkPrime(arr[i])) {
        count++;
    }
}

function checkPrime(number) {
    let isPrime = true;
    for (let k = 2; k < number - 1; k++) {
        if (number % k == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

console.log('Tổng số nguyên tố trong mảng ' + count);


**/

// Bài 8: Đếm số dương chia hết cho 7 trong mảng
//------------------------------------ Biến toàn cục, biến cục bộ
/**
 tên hàm: countPositiveNumberDiv7
 đầu vào: mảng các số
 đầu ra: số lượng các số dương chia hết cho 7

// let count = 0;      // toàn cục
function countPositiveNumberDiv7(numbers) {
    let count = 0;  //cục bộ
    for (let i = 0; i < numbers.length; i++) {
        if (arr[i] > 0 && numbers[i] % 7 == 0) {
            count++;
        }
    }
    return count;
}

let arr = [5, 6, 7, 14, 21];

console.log(countPositiveNumberDiv7(arr));      // 3


let number1 = [7, 49, 21, 50];
console.log(countPositiveNumberDiv7(number1)); //3

Nhân đôi mảng 2 chiều
let number2 = [
    [4, 5, 1, 8],
    [5, 7, 8, 9],
    [1, 2, 6, 7]
]

let numberCopyX2 = [];

for (let i = 0; i < number2.length; i++) {
    let row = [];
    for (let j = 0; j < number2[i].length; j++) {
        row.push(number2[i][j] * 2);
    }
    numberCopyX2.push(row);
}
console.log(numberCopyX2);

// numbers[row][col]
// duyệt mảng 2 chiều: for(col) => for(col)
// -------------------------------- Học về mảng 2 chiều, duyệt mảng 2 chiều

// Bài 15: Kiểm tra một cột ma trận có giảm dần hay không
// -------------------------------- Học về kĩ thuật đặt cờ hiệu
let number2 = [
    [4, 5, 1, 8],
    [5, 7, 8, 7],
    [1, 2, 6, 6],
    [1, 2, 6, 5]
];
tên hàm: checkColDesc
đầu vào: chỉ số 1 cột, 1 mảng 2 chiều
đầu ra: true/false


function checkColDesc(col, arr2) {
    let isColDesc = true;
    for (let i = 0; i < arr2.length - 1; i++) {
        if (arr2[i + 1][col] > arr2[i][col]) {
            isColDesc = false;
            break;
        }
    }
    return isColDesc;
}

let col = 1;
let isColDesc = checkColDesc(col, number2);     // undefined

if (isColDesc) {
    console.log('Cột ' + col + " giảm dần ");
} else {
    console.log('Cột ' + col + " không giảm dần ");
}

// Sắp xếp mảng tăng dần
let arr = [4, 7, 2, 9];         // [2,4,7,9]

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);


//-------------------------------------------- Nhớ string litaral
let arr = [5, 7, 11, 8, 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count++;
    }
}
// string literals
console.log(`Đếm được ${count} số chẵn trong mảng ${arr.length} phần tử`);
// console.log("Đếm được " + count + " số chẵn trong mảng " + arr.length + " phần tử");
 */




//-------------------------------------- Học về cách debug: đứng ở file html mà chạy, debug từng dòng, debug vào hàm, debug nhảy tới breakpoint tiếp theo
let arr = [5, 7, 11, 8, 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    // đi kiểm tra từng phần tử arr[i] xem có phải là số nguyên tố ko, nếu có thì tăng count lên 1
    if (checkPrime(arr[i])) {
        count++;
    }
}

function checkPrime(number) {
    let isPrime = true;
    for (let k = 2; k < number - 1; k++) {
        if (number % k == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}