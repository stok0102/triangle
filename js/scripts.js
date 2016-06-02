$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var firstSide = parseInt($("#side1").val());
    var secondSide = parseInt($("#side2").val());
    var thirdSide = parseInt($("#side3").val());

    if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
      $("#result").text("Missing input");
    }

    else if (firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide <= firstSide){
      alert("This is not a triangle!");
      }

    else {
      if (firstSide === secondSide && firstSide === thirdSide){
        $("#result").text("This is an equilateral triangle");
      }

      else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide){
        $("#result").text("This is an isosceles triangle");
      }

      else if (firstSide != secondSide && firstSide != thirdSide && secondSide != thirdSide){
        $("#result").text("This is a scalene triangle");
      }
    }
  });
});
