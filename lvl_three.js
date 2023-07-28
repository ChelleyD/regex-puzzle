$(document).ready(function () {
  //create array of questions
  let lvlThreeQuestions = [
    { row1: ".*M?O.*", row2: "(AN|FE|BE)", col1: "(A|B|C)\1", col2: "(AB|OE|SK)", r1: /.*M?O.*/, r2: /(AN|FE|BE)/, c1: /(A|B|C)\1/, c2: /(AB|OE|SK)/ }, //BO - BE
    { row1: "HE|LL|O+", row2: "[PLEASE]+", col1: "[^SPEAK]+", col2: "EP|IP|EF", r1: /HE|LL|O+/, r2: /[PLEASE]+/, c1: /[^SPEAK]+/, c2: /EP|IP|EF/ }, //HE - LP
    { row1: "18|19|20", row2: "[6789]\d", col1: "\d[2480]", col2: "56|94|73", r1: /18|19|20/, r2: /[6789]\d/, c1: /\d[2480]/, c2: /56|94|73/ } //19 - 84
  ]

  //pick randomly from array
  let currentQuestionIndex = Math.floor(Math.random() * 3);

  //display respective values
  $("#r1").html(lvlThreeQuestions[currentQuestionIndex].row1);
  $("#r2").html(lvlThreeQuestions[currentQuestionIndex].row2);
  $("#c1").html(lvlThreeQuestions[currentQuestionIndex].col1);
  $("#c2").html(lvlThreeQuestions[currentQuestionIndex].col2);

  //on click of submit btn, if isValid == true turn background green
  $("#smt-lvl-three").click(function () {
    console.log("click function executed");
    let r1ui = [];
    let r2ui = [];
    let col1Input = "";
    let col2Input = "";
    let row1Input = "";
    let row2Input = "";

    //row 1
    r1ui[0] = $("#r1c1-user-answer").val().toUpperCase();
    let r1c1Input = lvlThreeQuestions[currentQuestionIndex].c1.test(r1ui[0]);

    r1ui[1] = $("#r1c2-user-answer").val().toUpperCase();
    let r1c2Input = lvlThreeQuestions[currentQuestionIndex].c2.test(r1ui[1]);

    //combo
    row1Input = r1ui[0] + r1ui[1];
    let rowOne = lvlThreeQuestions[currentQuestionIndex].r1.test(row1Input);

    //row 2
    r2ui[0] = $("#r2c1-user-answer").val().toUpperCase();
    let r2c1Input = lvlThreeQuestions[currentQuestionIndex].c1.test(r2ui[0]);

    r2ui[1] = $("#r2c2-user-answer").val().toUpperCase();
    let r2c2Input = lvlThreeQuestions[currentQuestionIndex].c2.test(r2ui[1]);

    //combo
    row2Input = r2ui[0] + r2ui[1];
    let rowTwo = lvlThreeQuestions[currentQuestionIndex].r2.test(row2Input);

    //col 1
    col1Input = r1ui[0] + r2ui[0];
    let colOne = lvlThreeQuestions[currentQuestionIndex].c1.test(col1Input);

    //col 2
    col2Input = r1ui[1] + r2ui[1];
    let colTwo = lvlThreeQuestions[currentQuestionIndex].c2.test(col2Input);

    //box 1
    if (colOne && rowOne) {
      $("#box1").addClass("correct");
    }

    //box 2
    if (colTwo && rowOne) {
      $("#box2").addClass("correct");
    }

    //box 3
    if (colOne && rowTwo) {
      $("#box3").addClass("correct");
    }

    //box 4
    if (colTwo && rowTwo) {
      $("#box4").addClass("correct");
    }

    //if box#s have correct class, remove disabled class, play correct audio
    let box1IsCorrect = $("#box1").hasClass("correct");
    let box2IsCorrect = $("#box2").hasClass("correct");
    let box3IsCorrect = $("#box3").hasClass("correct");
    let box4IsCorrect = $("#box4").hasClass("correct");

    if (box1IsCorrect && box2IsCorrect && box3IsCorrect && box4IsCorrect) {
      let correctAudio = new Audio('audio/correct.mp3')
      correctAudio.play();

      $("#gt-end-screen").removeClass("disabled");
    }
  });

});