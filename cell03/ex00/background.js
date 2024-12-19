function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // สุ่มค่าแดง (0-255)
  const g = Math.floor(Math.random() * 256); // สุ่มค่าสีเขียว (0-255)
  const b = Math.floor(Math.random() * 256); // สุ่มค่าสีน้ำเงิน (0-255)
  return `rgb(${r}, ${g}, ${b})`; // คืนค่ารูปแบบ RGB
}

const button = document.getElementById("changeColorButton");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});