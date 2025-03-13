let a = 0;  
let b = 0;  
let choice;  

do {  
    console.log("1. Cộng hai số");  
    console.log("2. Trừ hai số");  
    console.log("3. Nhân hai số");  
    console.log("4. Chia hai số");  
    console.log("5. Thoát");  

    choice = +prompt("Mời bạn nhập lựa chọn ");   

    if (choice >= 1 && choice <= 4) {  
        a = +prompt("Nhập số thứ nhất: ");  
        b = +prompt("Nhập số thứ hai: ");  
    }  

    switch (choice) {  
        case 1:  
            console.log("Kết quả: " + (a + b));  
            break;  
        case 2:  
            console.log("Kết quả: " + (a - b));  
            break;  
        case 3:  
            console.log("Kết quả: " + (a * b));  
            break;  
        case 4:  
            if (b !== 0) {  
                console.log("Kết quả: " + (a / b));  
            } else {  
                console.log("Không thể chia cho 0.");  
            }  
            break;  
        case 5:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Không hợp lệ. Mời bạn nhập lại.");  
    }  
} while (choice !== 5);  