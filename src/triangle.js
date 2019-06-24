export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
      return "not a triangle";

    }  else if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
      return "an equilateral triangle";

    } else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
      return "an isosceles triangle";

    } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
      return "a scalene triangle";
    } else {
      return "unable to compute";
    }
};
// export function checkTriangle (number1, number2, number3) {
//   var numberA = parseInt(number1);
//   var numberB = parseInt(number2);
//   var numberC = parseInt(number3);
//   var output = "empty";
//   if (numberA === numberB && numberB === numberC) {
//     output = "an equilateral";
//   } else if ((numberA + numberB <= numberC) || (numberB + numberC <= numberA) || (numberA + numberC <= numberB)) {
//     output =  "no";
//   } else if (numberA === numberB || numberB === numberC || numberA === numberC) {
//     output =  "an isosceles";
//   } else {
//     output =  "a scalene";
//   }
//   return output;
// }
