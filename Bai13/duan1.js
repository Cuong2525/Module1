
// function emaivalidate(mail) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
// }
// // let count = 0;
// // class Taikhoan {
//     constructor(arr) {
//         this.fullname = arr[0];
//         this.pass = arr[1]
//         this.mail = arr[2]
//         this.pass2 = arr[3]
//         this.gender = arr[4]
//     }
//     getfullname(){
//         console.log(1);
//         return this.fullname;
//     }
//     getpass(){
//         return this.pass;
//     }
//     getmail() {
//         return this.mail;
//     }
//     getpass2() {
//         return this.pass2;
//     }
//     getgender() {
//         return this.gender;
//     }
//     setfullname(fullname) {
//         this.fullname = fullname;
//     }
//     setpass(pass) {
//         this.pass = pass;
//     }
//     setmail(mail) {
//         this.mail = mail;
//     }
//     setGender(gender) {
//         this.gender = gender;
//     }
//     setgender(gender) {
//         this.gender = gender;
//     }

// }
// class Management {
//     constructor() {
//         this.taikhoans = 0;
//         this.n = 0;
//     }
//     showList(taikhoans) {
//         this.taikhoans = taikhoans;
//         console.log(this.taikhoans);
//         let table = '<table>';
//         for (let i = 0; i <= this.n; i++) {
//             table += '<tr>';
//             table += '<td>';
//             table += this.taikhoans.getfullname();
//             table += '</td>';

//             table += '<td>';
//             table += this.taikhoans.getpass();
//             table += '</td>';

//             table += '<td>';
//             table += this.taikhoans.getmail();
//             table += '</td>';

//             table += '<td>';
//             table += this.taikhoans.getpass2();
//             table += '</td>';

//             table += '<td>';
//             table += this.taikhoans.getgender();
//             table += '</td>';

//             table += '<td>' +
//                 '<button style="background-color: red; color: white "  type="button" onclick="deletetaikhoan(' + i + ')">Delete</button>' +
//                 '<button style="background-color: orange ; color: white" type="button" onclick="edittaikhoan(' + i + ')">Edit</button>' +
//                 '</td>';

//             table += '</tr>';
//             }
//             table += "</table>"
//             this.n++;
//             document.getElementById('list-taikhoans').innerHTML = table;

//         }
//     }
//     let quanli = new Management();
function emaivalidate(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
}

// class Taikhoan {
//     // thuoc tinh 
//     constructor(fullname, pass, mail, pass2, gender) {
//         this.fullname = fullname;
//         this.pass = pass;
//         this.mail = mail;
//         this.pass2 = pass2;
//         this.gender = gender;
//     }

//     getfullname() {
//         return this.fullname;
//     }

//     getpass() {
//         return this.pass;
//     }

//     getmail() {
//         return this.mail;
//     }

//     getpass2() {
//         return this.pass2;
//     }

//     getgender() {
//         return this.gender;
//     }

//     setfullname(fullname) {
//         this.fullname = fullname;
//     }

//     setpass(pass) {
//         this.pass = pass;
//     }

//     setmail(mail) {
//         this.mail = mail;
//     }

//     setGender(gender) {
//         this.gender = gender;
//     }

//     setgender(gender) {
//         this.gender = gender;
//     }
// }

// class Management {
//     constructor() {
//         this.taikhoans = [];
//     }

//     showList() {
//         let table = '<table>';
//         for (let i = 0; i < this.taikhoans.length; i++) {
//             table += '<tr>';
//             table += '<td>';
//             table += this.taikhoans[i].getfullname();
//             table += '</td>';

//             table += '<td>';
//             table += this.taikhoans;
//         }
//     }}
function dangky() {
    let fullname = document.getElementById('fullname').value;
    let pass = document.getElementById('pass').value;
    let mail = document.getElementById('mail').value;
    let pass2 = document.getElementById('pass2').value;
    let gender = "";
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    if (_.isEmpty(fullname)) {
        fullname = '';
        document.getElementById('saitk').innerHTML = 'Vui lòng nhập tài khoản!'
    } else if (fullname.trim().length <= 3) {
        fullname = '';
        document.getElementById('saitk').innerHTML = 'Không được nhỏ hơn 3 ký tự!';

    } else if (fullname.trim().length > 30) {
        fullname = '';
        document.getElementById('saitk').innerHTML = 'Không được lớn hơn 30 ký tự!'
    }
    else { document.getElementById('saitk').innerHTML = '' }
    if (_.isEmpty(pass)) {
        pass = '';
        document.getElementById('saimk').innerHTML = 'Vui lòng nhập mật khẩu!'
    } else if (pass.trim().length <= 3) {
        pass = ''
        document.getElementById('saimk').innerHTML = 'Mật khẩu không an toàn'
    } else {
        document.getElementById('saimk').innerHTML = ''
    }
    if (_.isEmpty(mail)) {
        mail = '';
        document.getElementById('saimail').innerHTML = 'Vui lòng nhập mail'
    } else if (!emaivalidate(mail)) {
        mail = '';
        document.getElementById('saimail').innerHTML = 'Email không đúng định dạng'
    } else {
        document.getElementById('saimail').innerHTML = ''
    }
    if (_.isEmpty(pass2)) {
        pass2 = '';
        document.getElementById('saimk2').innerHTML = 'Vui lòng nhập mật khẩu cấp 2!'
    } else if (pass2.length <= 3) {
        pass2 = '';
        document.getElementById('saimk2').innerHTML = 'Mật khẩu không an toàn!'
    } else {
        document.getElementById('saimk2').innerHTML = ''
    }
    if (_.isEmpty(gender)) {
        document.getElementById('gioitinh').innerHTML = ' Vui lòng chọn giới tính!'
    } else {
        document.getElementById('gioitinh').innerHTML = ''
    } if (fullname && pass && mail && pass2 && gender) {
        // console.log(fullname, pass, mail, pass2, gender)
        let taikhoans = localStorage.getItem('taikhoans') ? JSON.parse(localStorage.getItem('taikhoans')) : [];
    
    taikhoans.push({
        fullname: fullname,
        pass: pass,
        mail: mail,
        pass2: pass2,
        gender: gender,
    })
    localStorage.setItem('taikhoans',JSON.stringify(taikhoans));
    this.hienthi();
    }

    // document.getElementById('list-taikhoans').innerHTML = tableContent
}
function hienthi() {
    let taikhoans = localStorage.getItem('taikhoans') ? JSON.parse(localStorage.getItem('taikhoans')) : [];
    console.log();
    let tablecontent = `<tr>
    <td>Tài khoản</td>
    <td>Mật khẩu</td>
    <td>Email</td>
    <td>Mật khẩu cấp 2</td>
    <td>Giới tính</td>
    <td>Tùy Chọn</td>
</tr>`;
    taikhoans.forEach((taikhoan, index) => {
        index++;
        tableContent = `<tr>
        <td>${fullname}</td>
        <td>${pass}</td>
        <td>${mail}</td>
        <td>${pass2}</td>
        <td>${gender}</td>
        <td><a href='#'>Edit</a>| <a href='#'>Delete</a></td>
    </tr>`;
    })
}

