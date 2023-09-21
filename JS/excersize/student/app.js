class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.hobbies = [];
    }
    getPhone() {
        return this.phone.substring(0, 8) + 'xxx';
    }
    setAge(age) {
        if (age < 0 || age > 120) {
            throw new Error('Tuoi ko hop le');
        } else {
            this.age = age;
        }

    }
}
let s1 = new Student(1, 'Quang', 31, '0399578134');
let s2 = new Student(2, 'Nhan', 13, '0399578134');
let s3 = new Student(3, 'Anh', 14, '0399578134');

let students = [s1, s2, s3];

function renderStudents() {
    let studentsHtml = "";
    for (let i = 0; i < students.length; i++) {
        let item = `
            <tr>
                <td>${students[i].id}</td>
                <td>${students[i].name}</td>
                <td>${students[i].age}</td>
                <td>${students[i].phone}</td>
                <td>
                </td>
                <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </td>
            </tr>
        `;
        studentsHtml += item;
    }

    document.getElementById("stb").innerHTML = studentsHtml;
}

renderStudents();

var modal = document.getElementById("modal");
function handleBtnModalClose() {
    modal.style.display = "none";
}

window.onclick = function (evt) {
    if (evt.target == modal) {
        modal.style.display = "none";
    }
}
function handleShowModalCreate() {
    modal.style.display = "flex";
}

function handleBtnModalCreate() {
    let name = document.getElementById("mTxtName").value;
    let age = document.getElementById("mTxtAge").value;
    let phone = document.getElementById("mTxtPhone").value;
    let hobbies = document.getElementById("mTxtHobbies").value;

    let maxID = students.length + 1;
    let studentNew = new Student(maxID, name, age, phone);
    studentNew.hobbies = hobbies;

    students.push(studentNew);
    renderStudents();

    modal.style.display = "none";
}