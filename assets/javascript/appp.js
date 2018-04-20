var correctanswers = 0;
var incorrectanswers = 0;
var unanswered = 0;
var question = 0;
var time = 15;
var intervalId;
var disneyQuestion = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack"],
    validAnswer: 0
}, {
    question: "In Peter Pan, Captain Hook had a hook on which part of his     body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    validAnswer: 1

}, {
    question: "In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    validAnswer: 3

}, {
    question: "In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    validAnswer: 1

}, {
    question: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    validAnswer: 0

}, {
    question: "After being on earth, where did Hercules first meet his   father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian   Fields"],
    validAnswer: 2

}, {
    question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    validAnswer: 2

}, {
    question: "In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    validAnswer: 3

}

];



$("#btnSelect").hide();


$("#start").on("click", function () {
    $("button").remove("#start");
    $("#btnSelect").show();
    $("#show-number").html("<h2>Time Remaining :" + time + "</h2>");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    console.log(disneyQuestion.length);//length is 8 it means it has 8 questions in it
    //now make code to display each question and their answers
    for(var i=0;i<disneyQuestion.length;i++){
        var newdiv=$("<div>");
        newdiv.empty();
        newdiv.html("<h2>"+disneyQuestion[0].question+"</h2>");
        $

    }

});



function decrement() {
    time--;
    $("#show-number").html("<h2>Time Remaining :" + time + "</h2>");
    if (time === 0) {
        stop();
    }
    $("#btnSelect").on("click", function () {
        stop();
    });
}

function stop() {

    clearInterval(intervalId);
    $("#container").empty();
    $("#result").html("<h1>Correct Answers: " + correctanswers + "<br>IncorrectAnswers: "
        + incorrectanswers + "<br>Unanswered: " + unanswered + "</h1>");
}



///////////////////////////////////////////////////////////////////////
$("#quesans1").html("<h2>" + questionAnswer.q1 + "</h2>");
    for (var i = 0; i < questionAnswer.ans1.length; i++) {
        //var newdiv = $("<div>");
        var newdiv = $("<input>");
        newdiv.empty();
        newdiv.attr({
            "class": 'answer1'
        });
        newdiv.html($('<h2><input type="radio" name="answer1" value="' + i + '">' + questionAnswer.ans1[i] + '</input></h2>'));
        $("#ans1").append(newdiv);

    }
   // $("#ans1").on("click", function () {
        a1 = $('input[name=answer1]:checked').val();
        an1.push(a1);
        console.log(an1);
   // });

    console.log(an1.length);
   


    $("#quesans2").html("<h2>" + questionAnswer.q2 + "</h2>");
    for (var i = 0; i < questionAnswer.ans2.length; i++) {
        var newdiv = $("<div>");
        newdiv.empty();
        newdiv.attr({
            "class": 'answer2'
        });
        newdiv.html($('<h2><input type="radio" name="answer2" value="' + i + '">' + questionAnswer.ans2[i] + '</input></h2>'));
        $("#ans2").append(newdiv);

    }
    $("#ans2").on("click", function () {

        a2 = $('input[name=answer2]:checked').val();

    });

    $("#quesans3").html("<h2>" + questionAnswer.q3 + "</h2>");
    for (var i = 0; i < questionAnswer.ans3.length; i++) {
        var newdiv = $("<div>");
        newdiv.empty();
        newdiv.attr({
            "class": 'answer3'
        });
        newdiv.html($('<h2><input type="radio" name="answer3" value="' + i + '">' + questionAnswer.ans3[i] + '</input></h2>'));
        $("#ans3").append(newdiv);

    }
    $("#ans3").on("click", function () {

        a3 = $('input[name=answer3]:checked').val();

    });

    $("#quesans4").html("<h2>" + questionAnswer.q4 + "</h2>");
    for (var i = 0; i < questionAnswer.ans4.length; i++) {
        var newdiv = $("<div>");
        newdiv.empty();
        newdiv.attr({
            "class": 'answer4'
        });
        newdiv.html($('<h2><input type="radio" name="answer4" value="' + i + '">' + questionAnswer.ans4[i] + '</input></h2>'));
        $("#ans4").append(newdiv);

    }
    $("#ans4").on("click", function () {

        a4 = $('input[name=answer4]:checked').val();

    });

});
