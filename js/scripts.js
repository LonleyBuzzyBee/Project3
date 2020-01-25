var goalOutput =[];

function myFunction(numberInput) {

  if (numberInput === 1) {
    goalOutput.push("beep");
  }
  else if (numberInput === 2) {
    goalOutput.push("boop");
  }
  else if (numberInput === 3) {
    goalOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
  }
  else  {
    goalOutput.push(numberInput);
  }
}


$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();

    var strInput = $("input.input-number").val();
    for (var index = 0; index <= strInput; index++) {
      myFunction(index);
    }
    var output = goalOutput.join(" ");
    $("#output").empty();
    $("#output").text(output);
    goalOutput = [];

  });
});
