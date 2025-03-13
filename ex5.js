let text1 = [1, 2, 3, 4, 5, 6, 7, 8];  
let text2 = [1, 2, 3, 4, 5, 6, 7, 8];  
let text3 = "abc";   
function tachMang(arr, n) {  
    if (!Array.isArray(arr)) {  
        console.log("Dữ liệu không hợp lệ");  
        return;  
    }  
    if (arr.length === 0) {  
        console.log("Mảng không chứa phần tử nào");  
        return;  
    }    
    if (typeof n !== 'number' || n <= 0) {  
        console.log("Kích thước mảng con không hợp lệ");  
        return;  
    }   
    for (let i = 0; i < arr.length; i++) {  
        if (typeof arr[i] !== "number") {  
            console.log("Dữ liệu không hợp lệ");  
            return;  
        }  
    }  
    let mangCon = [];  
    for (let i = 0; i < arr.length; i += n) {  
        mangCon.push(arr.slice(i, i + n)); 
    }  
    console.log(mangCon);  
}  
tachMang(text1, 3); 
tachMang(text2, 2); 
tachMang(text3, 3); 