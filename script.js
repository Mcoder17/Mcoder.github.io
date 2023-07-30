function checkPassword() {
  var password = document.getElementById("passwordBox");
  var passwordText = password.value;
  if (passwordText !== "Meow1234567890") {
    alert("You must be a Military leader or a President to subscribe AND you are NOT MILITARY LEADER or a PRESIDENT");
    return false;
  }
  alert("Congrats on finding the Secret Password🎉🎉(〃￣︶￣)人(￣︶￣〃)");
  return false;
}
