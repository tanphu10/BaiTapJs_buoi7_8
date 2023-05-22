// thêm số vào mảng
var arr = [];
function addNumber() {
  var nhapSoN = document.getElementById("soN").value * 1;
  arr.push(nhapSoN);
  //  console.log(nhapSoN);
  document.getElementById("hienThiArray").innerHTML =
    "numbers are: " + arr;
}

// xóa khỏi mảng

// function deleteNumber(){
// // var xoaSoN=addNumber();
// arr.splice(0;arr.length-1);
// }
// bài tập 1
/*
// tổng các số dương trong mảng
input : lấy các số trong mảng chạy vòng lặp 
nếu số nào dương thì + vào
output: xuất ra số tổng các số dương
*/
document.getElementById("tongCacSoDuong").onclick = function () {
  var totalPositive = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      totalPositive += arr[i];
    }
  }
  console.log(totalPositive);
  document.getElementById("tinhTongCacSoDuong").innerHTML =
    "Total number positive " + totalPositive;
};
// bài tập 2
/*input : lấy dữ liệu từ mảng

bước xử lí :
cho chạy vòng lặp for
nếu số nào tại vị trí i thì + vào 1 biến ++

output: tính có bao nhiêu số dương có trong mảng arr
*/
function demCacSoDuong() {
  var totalManyPositive = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      totalManyPositive++;
    }
  }
  console.log(totalManyPositive);
  document.getElementById("tongBnSoDuong").innerHTML =
    "there are total :" + totalManyPositive + " number positive";
}

// bài tập 3 tìm số nhỏ nhất có trong mảng arr
/* input: tìm số nhỏ nhất trong mảng arr

bước xử lí: cho chạy vòng lặp for 
if(sô[0]>sô[i]){
    sô[o]=sô[i]
}

ouput xuất ra số nhỏ nhất nằm bên trong mảng
*/

function timSoNhoNhat() {
  {
    var soKNhoNhat = arr[0];
    for (i = 0; i < arr.length; i++) {
      if (soKNhoNhat > arr[i]) {
        soKNhoNhat = arr[i];
      }
    }
    // console.log( soKNhoNhat)
    document.getElementById("soNhoNhat").innerHTML =
      "Number minimum is: " + soKNhoNhat;
    return soKNhoNhat;
  }
}

// bài tập 4 tìm số dương nhỏ nhất trong mảng
/*
chạy vòng lặp for
nếu so[i]>0 & so[0]>so[i]
*/

function timSoDuongNhoNhat() {
  // var soNNhoNhatDuong = arr[0];
  for (j = 0; j < arr.length; j++) {
    if (arr[0] > arr[i] && arr[0] > 0) {
      arr[0] = arr[i];
    }
  }
  // console.log(arr[0]);
  document.getElementById("soDuongNhoNhat").innerHTML =
    "Positve number minimum is " + arr[0];
}

// bài tập 5 tìm số chẵn cuối cùng của mảng in ra nếu không có số chẵn in ra -1
// find out even number final of array expert user, if not is expert -1

/*
input : xác định mảng

các bước xử lí: (steps solve:)
chạy vòng lặp 
function 
số đó là số chẵn && 
function số đó là cuối cùng 
output: export for user value is even number final if not export -1
(xuất ra cho người dùng giá trị là số chẵn cuối cùng nếu không thì xuất ra -1)
arr[1,2,3,4,5,-5,6,-6,7]
*/

document.getElementById("resultNumberEvenFinal").onclick = function () {
  var bienA = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      bienA = arr[i];
      break;
    } else {
      bienA = -1;
    }
  }
  console.log(bienA);
  document.getElementById("numberEvenFinal").innerHTML =
    "Even number final :" + bienA;
};


// câu 6 đổi 2 chổ giá trị trong mảng 
/*
input: là mảng

các bước xử lí :
tạo 1 biến trung gian = var index1
chạy vòng lặp 


output: xuất ra mảng đã đổi 2 vị trí index

*/

// function changeLocal(){
//   var giaTriMot=arr[index];
//   var giaTriHai=arr[index];
//   var bienTam=giaTriMot;
//   for(i=0;i<arr.length;i++){

//   }
// }



















// câu 7  sort number Array.

function sortArray() {
  // var sortNumber=arr[];
  var arrTangDan= arr.sort(function(a,b){return a-b;});
  // console.log(arr);
  document.getElementById("sortNumberAB").innerHTML = "Sort : " +  arrTangDan;
}

// câu 8 tìm số nguyên tố đầu tiên trong mảng

/*
input: input  array

steps solve: 
kiểm tra số nguyên tố 
rung loop for ()
if số đầu tiên là số nguyên tố thì xuất ra
output: export the firt prime number of array.

*/
// kiểm tra số nguyên tố
function checkSNT(number) {
  var check = true;
  for (z = 2; z < arr.length; z++) {
    if (arr[z] % z == 0) {
      check = false;
    }
  }
  return check;
}

function primeNumber() {
  var soNguyenTo = " ";
  for (i = 0; i < arr.length; i++) {
    if (checkSNT(i) == true) {
      soNguyenTo = checkSNT(i);
      break;
    } else {
      soNguyenTo = -1;
    }
  }
  console.log(soNguyenTo);
  document.getElementById("soNguyenTo").innerHTML =
    "số Nguyên tố đầu tiên trong mảng là :" + soNguyenTo;
}

// câu 9 đếm số nguyên

function soNguyen(){
    var tongSoNguyen=0;
  for(i=0;i<arr.length;i++){
    var bienTamA=Number.isInteger(arr[i]);
    if(bienTamA==true){
    tongSoNguyen++;
    }
  }
  // console.log(tongSoNguyen);
  document.getElementById("soNguyen").innerHTML=tongSoNguyen;
  
}


/*
// câu 10 so sánh số chẵn lẻ xem số nào nhiều hơn.
input có số chẵn và số lẻ từ mảng input

các bước xử lí:
chạy 2 vòng lặp tìm số chẵn tìm số lẻ 
tính tổng số chẵn là bn số
tính tổng số lẻ là bn số
so sánh 2 số

output: xuất ra cho người dùng số chẵn hay lẻ nào nhiều hơn

*/
// so sánh
document.getElementById("numberCompare").onclick = function () {
  var numberEven = 0;
  var numberOdd = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      numberEven++;
    } else if (arr[i] % 2 == 1) {
      numberOdd++;
    }
  }
  // compareVariable=
  if (numberEven > numberOdd) {
    result = "số chẵn > số lẻ";
  } else if (numberEven < numberOdd) {
    result = "số chẵn < số lẻ ";
  } else {
    result = "số chẵn = số lẻ";
  }
  // console.log(compresultreVariable);
  document.getElementById("soSanhSoChanLe").innerHTML =
    "compare Result : " + result;
};
