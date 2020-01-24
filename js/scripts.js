
$(document).ready(function() {
  $("form.form").submit(function(event) {
    event.preventDefault();
    var strInput = $("input.inputNumber").val();
    var numberArray = strInput.split("");
    for (var index = 0; index< numberArray.length; index++) {
      total = numberArray[index];
}
  alert(total);
  });
});
