function tinhTong() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let tong = 0;
    for(let i=a; i<=b; i++) {
      if(isNguyenTo(i)) {
        tong += i;
      }
    }
    document.getElementById("ketqua").innerHTML = "Tổng các số nguyên tố trong khoảng " + a + " đến " + b + " là " + tong;                                           
}
  
  function isNguyenTo(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
  