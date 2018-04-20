var time = 30;
var intervalId;
var correctanswers = 0;
var incorrectanswers = 0;
var unanswered = 0;
var userPick;
var questionAnswer = [
    {
        q: "What was the first full length CGI movie?",
        ch: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Lion King"],
        ans: 0
    },
    {
        q: "Which of these is not a name of spice girls?",
        ch: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        ans: 1
    },
    {
        q: "Which NBA team won the most titles in 90s?",
        ch: ["New York Snicks", "Portland TrailBlazers", "Los Angeles Lakers", "Chicago Bulls"],
        ans: 2
    },
    {
        q: "Which group released the hit song ,'smells like teen spirit'?",
        ch: ["Nirvana", "The backstreet boys", "The Offspring", "No Doubt"],
        ans: 3
    },
    {
        q: "Which popular disney movie featured the song,'Circle Of Life'?",
        ch: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
        ans: 2
    },
    {
        q: "What was Doug's best friend's name?",
        ch: ["Skeeter", "Mark", "Zach", "Cody"],
        ans: 0
    }
];

var a1=[];



console.log(questionAnswer);
console.log(questionAnswer.length);
$("#btnSelect").hide();

$("#start").on("click", function () {
    $("button").remove("#start");
    $("#btnSelect").show();
    $("#show-number").html("<h2>Time Remaining :" + time + "</h2>");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    startgame();
});

function startgame() {
    console.log(questionAnswer.length);
    console.log(questionAnswer[0].q);
    console.log(questionAnswer[0].ch[0]);
    currentquestion = 0;
    $("#question1").html($('<h2>' + questionAnswer[0].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer1" value="' + j + '">' + questionAnswer[0].ch[j] + '</input></h2>'));
        $("#question1").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(1) + " " + questionAnswer[0].ans);

    $("#question1").on("click", function () {
        userPick = $('input[name=answer1]:checked').val();
        console.log("userpick", userPick);
        if(userPick != ""){
            a1.push(userPick);
            console.log(userPick);           
        }
        if (userPick == questionAnswer[2].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
       
    });

    //for 2nd question
    $("#question2").html($('<h2>' + questionAnswer[1].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer2" value="' + j + '">' + questionAnswer[1].ch[j] + '</input></h2>'));
        $("#question2").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(2) + " " + questionAnswer[1].ans);

    $("#question2").on("click", function () {

        if (userPick = $('input[name=answer2]:checked').val())
            console.log(userPick);
        console.log(questionAnswer[1].ans);

        if (userPick == questionAnswer[1].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
    });
    ///for question3

    $("#question3").html($('<h2>' + questionAnswer[2].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer2" value="' + j + '">' + questionAnswer[2].ch[j] + '</input></h2>'));
        $("#question3").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(3) + " " + questionAnswer[2].ans);

    $("#question3").on("click", function () {

        if (userPick = $('input[name=answer3]:checked').val())
            console.log(userPick);
        console.log(questionAnswer[1].ans);

        if (userPick == questionAnswer[2].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
    });
    //for question4

    $("#question4").html($('<h2>' + questionAnswer[3].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer2" value="' + j + '">' + questionAnswer[3].ch[j] + '</input></h2>'));
        $("#question4").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(4) + " " + questionAnswer[3].ans);

    $("#question4").on("click", function () {

        if (userPick = $('input[name=answer4]:checked').val())
            console.log(userPick);
        console.log(questionAnswer[3].ans);

        if (userPick == questionAnswer[3].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
    });
    //for question 5
    $("#question5").html($('<h2>' + questionAnswer[4].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer5" value="' + j + '">' + questionAnswer[4].ch[j] + '</input></h2>'));
        $("#question5").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(5) + " " + questionAnswer[4].ans);

    $("#question5").on("click", function () {
        //reset 
        //userPick1=undefined;

        if (userPick = $('input[name=answer5]:checked').val())
            console.log(userPick);
        console.log(questionAnswer[4].ans);
        if (userPick == questionAnswer[4].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
    });
    //for question 6
    $("#question6").html($('<h2>' + questionAnswer[5].q + '</h2>'));
    for (var j = 0; j < 4; j++) {
        var ansdiv = $("<div>");
        ansdiv.empty();
        ansdiv.html($('<h2><input type="radio" name="answer6" value="' + j + '">' + questionAnswer[5].ch[j] + '</input></h2>'));
        $("#question6").append(ansdiv)
    }
    console.log("answer of question: " + parseInt(6) + " " + questionAnswer[5].ans);

    $("#question6").on("click", function () {
        //reset 
        //userPick1=undefined;

        if (userPick = $('input[name=answer6]:checked').val())
            console.log(userPick);
        console.log(questionAnswer[5].ans);
        if (userPick == questionAnswer[5].ans) {
            correctanswers++;
        } else {
            incorrectanswers++;
        }
    });
}




//this will happen if timw hts 0
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

var counter = 0;

function stop() {

    clearInterval(intervalId);
    $("#container").empty();
    unanswered = questionAnswer.length - correctanswers - incorrectanswers;
    $("#result").html("<h1>Trivia Trivia !!<br><br>Correct Answers: " + correctanswers + "<br>IncorrectAnswers: "
        + incorrectanswers + "<br>Unanswered: " + unanswered + "</h1>");
}
