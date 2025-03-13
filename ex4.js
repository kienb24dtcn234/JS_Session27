let choice;  

do {  
    console.log("1. Nhập danh sách số nguyên.");  
    console.log("2. Tính trung bình các số.");  
    console.log("3. Tìm số chẵn lớn nhất.");  
    console.log("4. Tìm số lẻ nhỏ nhất.");  
    console.log("5. Thoát.");  
    choice = +prompt("Mời bạn nhập lựa chọn: ");  
    switch (choice) {  
        case 1:  
            let numbers = prompt("Nhập danh sách số nguyên (cách nhau bởi dấu phẩy):").split(",").map(Number);  
            console.log(`Danh sách số nguyên: ${numbers}`);  
            break;  
        case 2:  
            let sum = 0, count = 0;  
            for (let num of numbers) {  
                sum += num;  
                count++;  
            }  
            let average = sum / count;  
            console.log(`Trung bình các số là: ${average.toFixed(2)}`);  
            break;  
        case 3:  
            let maxEven = null;  
            for (let num of numbers) {  
                if (num % 2 === 0) {  
                    if (maxEven === null || num > maxEven) {  
                        maxEven = num;  
                    }  
                }  
            }  
            console.log(`Số chẵn lớn nhất là: ${maxEven !== null ? maxEven : "Không có số chẵn."}`);  
            break;  
        case 4:  
            let minOdd = null;  
            for (let num of numbers) {  
                if (num % 2 !== 0) {  
                    if (minOdd === null || num < minOdd) {  
                        minOdd = num;  
                    }  
                }  
            }  
            console.log(`Số lẻ nhỏ nhất là: ${minOdd !== null ? minOdd : "Không có số lẻ."}`);  
            break;  
        case 5:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Không hợp lệ. Mời bạn nhập lại.");  
    }  
} while (choice !== 5);  