/**
 * Bài 1
 * 
 */
var soThuc = [];
var soNguyen = [];

// Thêm giá trị vào mảng
function themSoNguyen() {
    var number = Number(document.getElementById("number").value);
    soNguyen.push(number);
    document.getElementById("txtResult1").innerHTML = soNguyen;
}
document.getElementById("btnTinh1").onclick = themSoNguyen;

// Tính tổng số dương chẵn
function tongChan() {
    var result = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0 && soNguyen[i] % 2 == 0) {
            result += soNguyen[i];
        }
    }
    document.getElementById("txtResult2").innerHTML = result;
}

document.getElementById("btnTinh2").onclick = tongChan;

// Đếm số dương
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            count++;
        }
    }
    document.getElementById("txtResult3").innerHTML = count;
}

document.getElementById("btnTinh3").onclick = demSoDuong;

// Tìm số nhỏ nhất
function numMin() {
    var min = soNguyen[0];
    for (var i = 1; i < soNguyen.length; i++) {
        if (min > soNguyen[i]) {
            min = soNguyen[i];
        }
    }
    document.getElementById("txtResult4").innerHTML = min;
}

document.getElementById("btnTinh4").onclick = numMin;

// Tìm số dương nhỏ nhất
function smallPosNum() {
    var min = 0;
    var newArr = [];
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            newArr.push(soNguyen[i]);
        }
    }
    if (newArr.length > 0) {
        min = newArr[0];
        for (var i = 1; i < newArr.length; i++) {
            if (min > newArr[i]) {
                min = newArr[i];
            }
        }
    }
    else {
        min = -1;
    }
    document.getElementById("txtResult5").innerHTML = min;
}
document.getElementById("btnTinh5").onclick = smallPosNum;

// Tìm số chẵn cuối cùng
function endEven() {
    var endEven = -1;
    for (var i = 1; i < soNguyen.length; i++) {
        if (soNguyen[i] % 2 == 0) {
            endEven = soNguyen[i];
        }
    }
    document.getElementById("txtResult6").innerHTML = endEven;
}
document.getElementById("btnTinh6").onclick = endEven;

// Đổi chổ hai giá trị
function move() {
    var newArr = [];
    for (var i = 0; i < soNguyen.length; i++) {
        newArr.push(soNguyen[i]);
    }
    var viTri1 = Number(document.getElementById("viTri1").value);
    var viTri2 = Number(document.getElementById("viTri2").value);
    var temp = newArr[viTri2];
    newArr[viTri2] = newArr[viTri1];
    newArr[viTri1] = temp
    document.getElementById("txtResult7").innerHTML = newArr;
}
document.getElementById("btnTinh7").onclick = move;

// Sắp xếp theo thứ tự tăng dần
function increase() {
    var newArr = [];
    for (var i = 0; i < soNguyen.length; i++) {
        newArr.push(soNguyen[i]);
    }
    for (var i = 0; i < newArr.length - 1; i++) {
        for (var j = 0; j < newArr.length; j++) {
            if (newArr[j] > newArr[j + 1]) {
                var temp = newArr[j + 1];
                newArr[j + 1] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    document.getElementById("txtResult8").innerHTML = newArr;
}
document.getElementById("btnTinh8").onclick = increase;

// Tìm số nguyên tố đầu tiên
function firstPrime() {
    var temp = -1;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 1) {
            var check = true;
            for (var j = 2; j <= Math.sqrt(soNguyen[i]); j++) {
                if (soNguyen[i] % j == 0) {
                    check = false;
                    break;
                }
            }
            if (check == true) {
                temp = soNguyen[i];
                break;
            }
        }
    }
    document.getElementById("txtResult9").innerHTML = temp;
}
document.getElementById("btnTinh9").onclick = firstPrime;

// Đếm số nguyên
function themSoThuc() {
    var numfloat = Number(document.getElementById("numfloat").value);
    soThuc.push(numfloat);
    document.getElementById("txtResult10").innerHTML = soThuc;
}
document.getElementById("btnTinh10").onclick = themSoThuc;

function countInt() {
    var count = 0;
    for (var i = 0; i < soThuc.length; i++) {
        if (Number.isInteger(soThuc[i])) {
            count++;
        }
    }
    count = count != 0 ? count : -1;
    document.getElementById("txtResult11").innerHTML = count;
}
document.getElementById("btnTinh11").onclick = countInt;


// So sánh số lượng số âm và dương
function posNeg() {
    var result = "Số dương = Số âm";
    var temp = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            temp++;
        }
        else if (soNguyen[i] < 0) {
            temp--;
        }
    }

    if (temp > 0) {
        result = "Số dương > Số âm";
    }
    else if (temp < 0) {
        result = "Số âm > Số dương";
    }

    document.getElementById("txtResult12").innerHTML = result;
}
document.getElementById("btnTinh12").onclick = posNeg;