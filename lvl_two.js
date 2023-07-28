$(document).ready(function () {
  //create array of questions
  let lvlTwoQuestions = [
    { row1: "A*", col1: "A", col2: "AB*", r1: /A*/, c1: /A/, c2: /AB*/ }, //AA
    { row1: "A?B?", col1: "A|C", col2: "B", r1: /A?B?/, c1: /A|C/, c2: /B/ }, //AB
    { row1: "A+", col1: "A|B", col2: "A|Z", r1: /A+/, c1: /A|B/, c2: /A|Z/ } //AA
  ]

  //pick randomly from array
  let currentQuestionIndex = Math.floor(Math.random() * 3);

  //display respective values
  $("#r1").html(lvlTwoQuestions[currentQuestionIndex].row1);
  $("#c1").html(lvlTwoQuestions[currentQuestionIndex].col1);
  $("#c2").html(lvlTwoQuestions[currentQuestionIndex].col2);

  //on click of submit btn, if isValid == true turn background green
  $("#smt-lvl-two").click(function () {
    console.log("click function executed");
    let ui = [];

    //ui[0] >> satisfies col1
    //ui[1] >> satisfies col2
    //ui[0] + ui[1] >> satisfies row1

    //put user input into array and compare values
    ui[0] = $("#r1c1-user-answer").val().toUpperCase();
    let c1IsValid = lvlTwoQuestions[currentQuestionIndex].c1.test(ui[0]);

    ui[1] = $("#r1c2-user-answer").val().toUpperCase();
    let c2IsValid = lvlTwoQuestions[currentQuestionIndex].c2.test(ui[1]);

    //turn array into string and get rid of commas
    let rowVal = ui.join("");
    let r1IsValid = lvlTwoQuestions[currentQuestionIndex].r1.test(rowVal);

    if (r1IsValid && c1IsValid) {
      $("#box1").addClass("correct");
    }

    if (r1IsValid && c2IsValid) {
      $("#box2").addClass("correct");
    }

    //if box#s have correct class, remove disabled class, play correct audio
    let box1IsCorrect = $("#box1").hasClass("correct");
    let box2IsCorrect = $("#box2").hasClass("correct");

    if (box1IsCorrect && box2IsCorrect) {
      let correctAudio = new Audio('audio/correct.mp3')
      correctAudio.play();

      $("#gt-lvl-three").removeClass("disabled");
    }
  });

});