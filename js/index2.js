function numberOneTriangle(n) {
    if (n < 1 || n > 10) {
      console.log("Vui lòng truyền vào một số nguyên trong khoảng từ 1 đến 10.");
      return;
    }
       
    let output = "";
    for (let i = 1; i <= n; i++) {
      output += "*".repeat(i) + "\n";
    }
    console.log(output);
  }
  