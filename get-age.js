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