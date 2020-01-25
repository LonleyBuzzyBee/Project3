var goalOutput =[];

function myFunction(numberInput) {
var filter = ["1","2","3"];
var numbers = numberInput.toString().split("");

    if (numbers.includes(filter[2])) {
  goalOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
  }
    else if (numbers.includes(filter[1])) {
    goalOutput.push("boop!");
  }
    else if (numbers.includes(filter[0])) {
    goalOutput.push("beep!");
  }
    else {
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
