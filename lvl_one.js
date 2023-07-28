$(document).ready(function () {
  //create array of questions
  let lvlOneQuestions = [
    {row1: "[ABC]", col1: "[^AB]", r1: /[ABC]/, c1: /[^AB]/}, //C
    {row1: "[BDF]", col1: "[ABC]", r1: /[BDF]/, c1: /[ABC]/}, //B
    {row1: "[A|Z]", col1: "[A|B]", r1: /[A|Z]/, c1: /[A|B]/} //A
    ]
 
  //pick randomly from array
  let currentQuestionIndex = Math.floor(Math.random() * 3);

  //display respective values
  $("#r1").html(lvlOneQuestions[currentQuestionIndex].row1);
  $("#c1").html(lvlOneQuestions[currentQuestionIndex].col1);
  
  //on click of submit btn, if isValid == true turn background green
  $("#smt-lvl-one").click(function(){
    console.log("click function executed");
    let ui = [];

    //put user input into array
    ui[0] = $("#user-answer").val().toUpperCase();

    //compare values
    //if both values are true, add correct class, remove disabled class, play correct audio
    let r1IsValid = lvlOneQuestions[currentQuestionIndex].r1.test(ui[0]);
    let c1IsValid = lvlOneQuestions[currentQuestionIndex].c1.test(ui[0]);

    if (r1IsValid && c1IsValid)
    {
      let correctAudio = new Audio('audio/correct.mp3')
      correctAudio.play();

      $("#box1").addClass("correct");
      $("#gt-lvl-two").removeClass("disabled");
    }
  });

});
