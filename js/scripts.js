var goalOutput =[];

function myFunction(numberInput) {
  var startIn = 0;
  for(var count = 0; count <= 20; count += 1){
    startIn += count;
  }


  var numberFilter = ["1","2","3"];
  var numbers = numberInput.split("");


  if (numbers.includes(numberFilter[0])) {
    goalOutput.push("beep");
}
  else if (numbers.includes(numberFilter[1])){
    goalOutput.push("boop");
}
  else if (numbers.includes(numberFilter[2])){
    goalOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
}

};


$(document).ready(function() {
  $("form.form").submit(function(event) {
    event.preventDefault();
    var strInput = $("input.inputNumber").val();
    var numberArray = (strInput.split(""));
    for (var index = 0; index< numberArray.length; index++) {
      myFunction(numberArray[index]);
}
  var output = goalOutput.join(" ");
  $("#output").text(output);
  });
});
