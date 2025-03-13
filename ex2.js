let students = [];  
let choice;  

do {  
    console.log("1. Nhập danh sách sinh viên");  
    console.log("2. Hiển thị danh sách sinh viên");  
    console.log("3. Tìm sinh viên theo tên");  
    console.log("4. Xóa sinh viên khỏi danh sách");  
    console.log("5. Thoát");  

    choice = +prompt("Mời bạn nhập lựa chọn: ");  

    switch (choice) {  
        case 1:  
            let danhsach = +prompt("Nhập số lượng sinh viên: ");  
            for (let i = 0; i < danhsach; i++) {  
                let tensinhvien = prompt(`Nhập tên sinh viên ${i + 1}: `);  
                students.push(tensinhvien);  
            }  
            console.log("Đã nhập danh sách sinh viên.");  
            break;  
        case 2:  
            console.log("Danh sách sinh viên: ");  
            if (students.length === 0) {  
                console.log("Danh sách sinh viên rỗng.");  
            } else {  
                students.forEach((student, index) => {  
                    console.log(`${index + 1}: ${student}`);  
                });  
            }  
            break;  

        case 3:  
            let timkiem = prompt("Nhập tên sinh viên cần tìm: ");  
            let foundStudents = students.filter(student => student.includes(timkiem));  
            if (foundStudents.length > 0) {  
                console.log("Danh sách sinh viên tìm thấy: ");  
                foundStudents.forEach(student => console.log(student));  
            } else {  
                console.log("Sinh viên không có trong danh sách.");  
            }  
            break;  

        case 4:  
            let xoa = prompt("Nhập tên sinh viên cần xóa: ");  
            let deletesv = students.indexOf(xoa);  
            if (deletesv !== -1) {  
                students.splice(deletesv, 1);  
                console.log(`Đã xóa sinh viên: ${xoa}`);  
            } else {  
                console.log("Không tìm thấy sinh viên trong danh sách.");  
            }  
            break;  

        case 5:  
            console.log("Thoát chương trình.");  
            break;  

        default:  
            console.log("Không hợp lệ. Mời bạn nhập lại.");  
    }  
} while (choice !== 5);  