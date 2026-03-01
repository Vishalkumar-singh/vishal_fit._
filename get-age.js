const DOB = new Date(2005, 3, 20); // 20 April 2005

function getAge() {
  const today = new Date();
  let age = today.getFullYear() - DOB.getFullYear();

  const m = today.getMonth() - DOB.getMonth();
  const d = today.getDate() - DOB.getDate();

  if (m < 0 || (m === 0 && d < 0)) {
    age--;
  }

  return age;
}

// HTML me result bhejna
document.getElementById("year").innerText = getAge();


const link = document.getElementById("myLink");
const modal = document.getElementById("customConfirm");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

let targetUrl = "";

link.addEventListener("click", function(e) {
  e.preventDefault();
  targetUrl = this.href;
  modal.style.display = "flex";
});

confirmBtn.addEventListener("click", function() {
  window.location.href = targetUrl;
});

cancelBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
