
// import $ from 'jquery';
// import './styles.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { pingPong } from './ping-pong';
//
// $(document).ready(function() {
//   $('#ping-pong-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element) {
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkTriangle } from './triangle';


$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();
    var result = checkTriangle(side1, side2, side3);
    $(".triangle-type").empty().append(result);
    $(".result").show();
  });
});
