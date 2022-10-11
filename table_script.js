function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var email = document.getElementById("email_row" + no);
  var number = document.getElementById("number_row" + no);
  var department = document.getElementById("department_row" + no);
  var joining_date = document.getElementById("date_row" + no);
  var password = document.getElementById("password_row" + no);

  var name_data = name.innerHTML;
  var email_data = email.innerHTML;
  var number_data = number.innerHTML;
  var department_data = department.innerHTML;
  var date_data = joining_date.innerHTML;
  var password_data = password.innerHTML;

  name.innerHTML =
    "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  email.innerHTML =
    "<input type='email' id='email_text" + no + "' value='" + email_data + "'>";
  number.innerHTML =
    "<input type='number' id='number_text" +
    no +
    "' value='" +
    number_data +
    "'>";
  department.innerHTML =
    "<input type='text' id='dep_text" +
    no +
    "' value='" +
    department_data +
    "'>";
  date.innerHTML =
    "<input type='date' id='date_text" + no + "' value='" + date_data + "'>";
  password.innerHTML =
    "<input type='password' id='password_text" +
    no +
    "' value='" +
    password_data +
    "'>";
}

function save_row(no) {
  var name_val = document.getElementById("name_text" + no).value;
  var email_val = document.getElementById("email_text" + no).value;
  var number_val = document.getElementById("number_text" + no).value;
  var department_val = document.getElementById("department_text" + no).value;
  var date_val = document.getElementById("date_text" + no).value;
  var password_val = document.getElementById("password_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("email_row" + no).innerHTML = email_val;
  document.getElementById("number_row" + no).innerHTML = number_val;
  document.getElementById("dep_row" + no).innerHTML = department_val;
  document.getElementById("date_row" + no).innerHTML = date_val;
  document.getElementById("pass_row" + no).innerHTML = password_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
  var new_name = document.getElementById("new_name").value;
  var new_email = document.getElementById("new_email").value;
  var new_number = document.getElementById("new_number").value;
  var new_dep = document.getElementById("new_dep").value;
  var new_date = document.getElementById("new_date").value;
  var new_pass = document.getElementById("new_pass").value;

  var table = document.getElementById("data_table");
  var table_len = table.rows.length - 1;
  var row = (table.insertRow(table_len).outerHTML =
    "<tr id='row" +
    table_len +
    "'><td id='name_row" +
    table_len +
    "'>" +
    new_name +
    "</td><td id='email_row" +
    table_len +
    "'>" +
    new_email +
    "</td><td id='number_row" +
    table_len +
    "'>" +
    new_number +
    "</td><td id='dep_row" +
    table_len +
    "'>" +
    new_dep +
    "</td><td id='date_row" +
    table_len +
    "'>" +
    new_date +
    "</td><td id='pass_row" +
    table_len +
    "'>" +
    new_pass +
    "</td><td><input type='button' id='edit_button" +
    table_len +
    "' value='Edit' class='edit' onclick='edit_row(" +
    table_len +
    ")'> <input type='button' id='save_button" +
    table_len +
    "' value='Save' class='save' onclick='save_row(" +
    table_len +
    ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
    table_len +
    ")'><input type='button' value='Visual Data' onclick='next_page(" +
    table_len +
    ")'></td></tr>");

  document.getElementById("new_name").value = "";
  document.getElementById("new_email").value = "";
  document.getElementById("new_number").value = "";
  document.getElementById("new_dep").value = "";
  document.getElementById("new_date").value = "";
  document.getElementById("new_pass").value = "";
}
function next_page() {
  window.location.href = "Charts.html";
}
