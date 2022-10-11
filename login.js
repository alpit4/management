function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var usertype = document.getElementById("usertype").value;

  if (email == "user1@user.com" && "user2@user.com" && pass == "user1" && usertype == "Employee") {
    window.location.href = "Employee.html";
  } else if (
    email == "admin1@admin.com" &&
    pass == "admin1" &&
    usertype == "Admin"
  ) {
    window.location.href = "Admin.html";
  } else {
    alert("Incorrect Details");
    window.location.href = "login.hmtl";
  }
}
let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  login();
});
