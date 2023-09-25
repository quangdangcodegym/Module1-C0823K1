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
                    <i onclick="handleShowEditStudent(${students[i].id})"class="fa-solid fa-pen-to-square"></i>
                    <i onclick="handleTrashStudent(${students[i].id}, '${students[i].name}')" class="fa-solid fa-trash-can"></i>
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
    document.getElementById("mTxtName").value = "";
    document.getElementById("mTxtAge").value = "";
    document.getElementById("mTxtPhone").value = "";
    document.getElementById("mTxtHobbies").value = "";

    document.getElementById("btnModalUpdate").classList.add("hide");
    document.getElementById("btnModalCreate").classList.remove("hide");
}

function handleBtnModalCreate() {
    document.getElementById("btnModalUpdate").classList.add("hide");
    document.getElementById("btnModalCreate").classList.remove("hide");

    let name = document.getElementById("mTxtName").value;
    let age = document.getElementById("mTxtAge").value;
    let phone = document.getElementById("mTxtPhone").value;
    let hobbies = document.getElementById("mTxtHobbies").value;

    let maxID = findMaxId(students) + 1;


    let studentNew = new Student(maxID, name, age, phone);
    studentNew.hobbies = hobbies;

    students.push(studentNew);
    renderStudents();

    modal.style.display = "none";
}
function handleTrashStudent(id, name) {
    let check = confirm("Are you sure to delete " + name + " ?");
    if (check) {
        deleteStudentById(id);
        renderStudents();
    }
}
function deleteStudentById(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students.splice(i, 1);
        }
    }
}
function handleShowEditStudent(id) {
    let s = findStudentByID(id);
    if (s == null) {
        alert("Student not found");
    } else {
        document.getElementById("id-student").value = id;
        document.getElementById("btnModalUpdate").classList.remove("hide");
        document.getElementById("btnModalCreate").classList.add("hide");

        document.getElementById("mTxtName").value = s.name;
        document.getElementById("mTxtAge").value = s.age;
        document.getElementById("mTxtPhone").value = s.phone;
        document.getElementById("mTxtHobbies").value = s.hobbies;

        modal.style.display = "block";
    }
}
function findStudentByID(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            return students[i];
        }
    }
    return null;
}
function handleBtnModalUpdate() {
    let id = document.getElementById("id-student").value;

    let name = document.getElementById("mTxtName").value;
    let age = document.getElementById("mTxtAge").value;
    let phone = document.getElementById("mTxtPhone").value;
    let hobbies = document.getElementById("mTxtHobbies").value;

    let student = new Student(id, name, age, phone);
    student.hobbies = hobbies;


    updateStudentById(id, student);
    modal.style.display = "none";
    renderStudents();



}
function updateStudentById(id, student) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i].name = student.name;
            students[i].age = student.age;
            students[i].phone = student.phone;
            students[i].hobbies = student.hobbies;
        }
    }
}

function findMaxId(students) {
    let s1 = [...students]; // Sao chép mảng students thành s1
    s1.sort((a, b) => b.id - a.id);

    return s1[0].id;
}