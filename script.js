function submitForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "Name: " + name + "<br>Age: " + age;
}
