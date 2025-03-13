let text1 = [1, 2, 3, 5];  
let text2 = [1, 2, 4, 5];  
let text3 = "abc";   
function timSoThieu(arr) {  
    if (!Array.isArray(arr)) {  
        console.log("Dữ liệu không hợp lệ");  
        return;  
    }  
    if (arr.length === 0) {  
        console.log("Mảng không chứa phần tử nào");  
        return;  
    }  
    for (let i = 0; i < arr.length; i++) {  
        if (typeof arr[i] !== "number") {  
            console.log("Dữ liệu không hợp lệ");  
            return;  
        }  
    }  
    arr.sort((a, b) => a - b);  
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {  
        if (!arr.includes(i)) {  
            console.log(i); 
            return;  
        }  
    }  

    console.log("Không tìm thấy số thiếu"); 
}  
timSoThieu(text1);
timSoThieu(text2); 
timSoThieu(text3); 