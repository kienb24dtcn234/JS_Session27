let text1 = [2, 4, 6, 8];  
let text2 = [3, 6, 9, 12, 14];  
let text3 = "abc";   
function kiemTraCapSoCong(arr) {  
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
    if (arr.length < 2) {  
        console.log("TRUE");  
        return;  
    }  
    let khoangCach = arr[1] - arr[0];  
    for (let i = 1; i < arr.length - 1; i++) {  
        if (arr[i + 1] - arr[i] !== khoangCach) {  
            console.log("FALSE");  
            return;  
        }  
    }  
    console.log("TRUE");  
}  
kiemTraCapSoCong(text1);  
kiemTraCapSoCong(text2);  
kiemTraCapSoCong(text3); 