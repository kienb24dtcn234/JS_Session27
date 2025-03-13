let choice;  

do {  
    console.log("Xây dựng menu tính toán hình học, gồm các chức năng:");  
    console.log("1. Tính diện tích hình tròn.");  
    console.log("2. Tính chu vi hình tròn.");  
    console.log("3. Tính diện tích hình chữ nhật.");  
    console.log("4. Tính chu vi hình chữ nhật.");  
    console.log("5. Thoát.");  

    choice = +prompt("Mời bạn nhập lựa chọn: ");  

    switch (choice) {  
        case 1:  
            let r1 = +prompt("Nhập bán kính hình tròn: ");  
            let shinhtron = Math.PI * r1 * r1;  
            console.log(`Diện tích hình tròn là: ${shinhtron.toFixed(2)}`);  
            break;  
        case 2:  
            let r2 = +prompt("Nhập bán kính hình tròn: ");  
            let chuvihinhtron = 2 * Math.PI * r2;  
            console.log(`Chu vi hình tròn là: ${chuvihinhtron.toFixed(2)}`);  
            break;  
        case 3:  
            let length = +prompt("Nhập chiều dài hình chữ nhật: ");  
            let width = +prompt("Nhập chiều rộng hình chữ nhật: ");  
            let shinhchunhat = length * width;  
            console.log(`Diện tích hình chữ nhật là: ${shinhchunhat.toFixed(2)}`);  
            break;  
        case 4:  
            let lengthRect = +prompt("Nhập chiều dài hình chữ nhật: ");  
            let widthRect = +prompt("Nhập chiều rộng hình chữ nhật: ");  
            let chuvihinhchunhat = 2 * (lengthRect + widthRect);  
            console.log(`Chu vi hình chữ nhật là: ${chuvihinhchunhat.toFixed(2)}`);  
            break;  
        case 5:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Không hợp lệ. Mời bạn nhập lại.");  
    }  
} while (choice !== 5);  