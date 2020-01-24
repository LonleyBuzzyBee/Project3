var goalOutput =[];

// function numberIt(countNumber) {
//   var startIn = 0;
//   for(var count = 1; count <= 1; count += 1){
//     startIn += count;
//   }
//

function myFunction(numberInput) {
  var numberFilter = ["1","2","3"];
  var numbers = numberInput;

  if (numbers.includes(numberFilter[0])) {
    goalOutput.push("beep");
}
  else if (numbers.includes(numberFilter[1])){
    goalOutput.push("boop");
}
  else if (numbers.includes(numberFilter[2])){
    goalOutput.push("I'm sorry, Dave. I'm afraid I can't do that.");
}
  // else

};


$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var strInput = $("input.input-number").val();
    // var numberArray = (strInput.split(""));
    for (var index = 0; index <= strInput; index++) {
      myFunction(index);
      console.log(index);
}
  var output = goalOutput.join(" ");
  $("#output").text(output);
  });
});
