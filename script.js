
const Questions =  [

{ 
number: 1,
question: " Which NBA player leads the league all time in points?",
answer1: "Michael Jordan",
answer2: "Lebron James",
answer3: "Kareem Abdul-Jabbar",
answer4: "Kobe Bryant",
correctChoice: "Kareem Abdul-Jabbar",
imgUrl: "https://cdn.nba.net/nba-drupal-prod/styles/landscape/http/i2.cdn.turner.com/nba/nba/dam/assets/140404144834-kareem-abdul-jabbar-posting-moses-malone.1280x720.jpg?itok=fEXxBZJ",
alt: "Kareem in a lakers Jersey."
},

{
number: 2,
question: "How many championships does Michael Jordan have?",
answer1: "5",
answer2: "6",
answer3: "3",
answer4: "2",
correctChoice: "6",
imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41p6VwVr9FL.jpg",
alt: "Michael Jordan with his six NBA rings."

},
{
number:3,
question: "What player has the most NBA championships, and how many rings did he have?",
answer1: "Michael Jordan, 6 rings",
answer2: "Lebron James, 7 rings",
answer3: "Bill Russell, 11 rings",
answer4: "Kareem Abdul-Jabbar, 6 rings",
correctChoice: "Bill Russell, 11 rings",
imgUrl: "https://cdn4.sportngin.com/attachments/photo/1086/1744/Bill-Rusell-blocks-shot_large.jpg",

alt: "Bill Russell blocking a shot"

},

{
number: 4,
question: "When a player gets fouled on a three point shot, and also makes the shot, how many free throw attempts do they recieve?",
answer1: "2",
answer2: "3",
answer3: "1",
answer4: "None, because they made the shot",
correctChoice: "1",
imgUrl:"https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F2015%2F04%2F24%2Fstpehen-curry-game-tying-three-foul.jpg%3Fitok%3DP8-cFXst&w=1000&q=70",
alt: "Steph Curry getting fouled on a three point shot"

},

{
number: 5, 
question: "Who is the commisioner of the National Basketball Association", 
answer1: "Adam Silver",
answer2: "David Stern",
answer3: "David Fizdale",
answer4: "Phil Jackson",
correctChoice: "Adam Silver",
imgUrl: "https://amp.businessinsider.com/images/5aec781319ee8625008b489c-750-375.jpg",
alt: "Adam Silver Smiling"

}, 

{
number:6, 
question: "How many championships do the Los Angeles Lakers have?", 
answer1:"15",
answer2:"11",
answer3:"16",
answer4:"21",
correctChoice: "16",
imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jIsUXZIzuofpmyOY45DZmgXpmCt-dhwmFEtQXFTD2woeujC6",
alt: " Los Angeles Lakers pictures"
}, 

{

    number:7, 
    question: "What draft class was Lebron James, Dwayne Wade, and Carmelo Anthony in?",
    answer1: "2005",
    answer2:"2004",
    answer3: "2006",
    answer4:"2003",
    correctChoice: "2003", 
    imgUrl:"http://cdn0.vox-cdn.com/assets/4605325/NBA_Draft_Redraft_-_2003_LeBron_James.png", 
    alt:"A picture of the draftboard from 2003"
},

{
number:8,
question:"The NBA draft has a cateogry known as the 'lottery.' How many draft selectees in the first round are considered a lottery pick?",
answer1:"14",
answer2:"16",
answer3:"15",
answer4:"17",
correctChoice:"14",
imgUrl:"http://thehoopdoctors.com/wp-content/uploads/2012/05/nba-draft-lottery-mock-feature.jpg",
alt:" A picture of the NBA draft lottery from 2012"
},
{
number:9,
question:"The Seattle SuperSonics in 2008 reloacted to a new city and changed their name. What team do they play as today?",
answer1:"The Kings",
answer2:"The Timberwolves",
answer3:"The Thunder",
answer4:"The Hawks",
correctChoice:"The Thunder",
imgUrl:"https://www.oklahomacenterfornonprofits.org/wp-content/uploads/2018/05/oklahoma-city-thunder-logo-transparent-768x704.png",
alt:"The Oklahoma City Thunder Logo",
},
{
number:10,
question:"In what year was the NBA founded?",
answer1:"1953",
answer2:"1943",
answer3:"1942",
answer4:"1946",
correctChoice:"1946",
imgUrl:"https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png?w=1400",
alt: "The NBA Logo"

}
];


questionNumber = 0;
score = 0;

//* This creates the question the user is on.
function makeQuestion(){
    if(questionNumber < Questions.length){
     
     return `<div>
      <h2 class="question"> ${Questions[questionNumber].question}<h2>
      <form class="question-answers">
        <fieldset>
          <label class="answer-choice">
            <input type="radio" value="${Questions[questionNumber].answer1}" name="answer"></input>
            <span>${Questions[questionNumber].answer1}</span>
          </label>
          <label class="answer-choice">
            <input type ="radio" value="${Questions[questionNumber].answer2}"name = "answer"></input>
            <span> ${Questions[questionNumber].answer2}</span>
          </label>
          <label class="answer-choice">
            <input type ="radio" value="${Questions[questionNumber].answer3}"name = "answer"></input>
            <span> ${Questions[questionNumber].answer3}</span>
          </label>
          <label class="answer-choice">
            <input type ="radio"value="${Questions[questionNumber].answer4}" name = "answer"></input>
            <span> ${Questions[questionNumber].answer4}</span>
          </label>
          <button type="submit" class="button-for-submit"> Take my shot</button>
        </fieldset>
      </form>
      </div>`;}

      else{

        renderResults();
        restartQuiz();
      };
      }
      

function changeScore(){

  score++;

}


function updateScore () {
  changeScore();
  $('.score').text(score);
}

function changeQuestionNumber(){

  questionNumber++;
  $('.question-number').text(questionNumber+1);
}




function startQuiz () {
  $('.start-quiz').on('click', '.start-button', function (event) {
    $('.start-quiz').remove();
    $('.question-number').text(1);
    $('.question-retrieve').css('visibility', 'visible');
    
});
}


function renderTheQuestion(){

  $('.question-retrieve').html(makeQuestion());
}



function userAnswer(){

  $('form').on('submit', function(event){

    event.preventDefault();
    let inputAnswer = $('input:checked').val();
    let correctAnswer = `${Questions[questionNumber].correctChoice}`;
    if(inputAnswer === correctAnswer){
       correctFeedback();
       updateScore();
       }
    else{
      incorrectFeedback();
}

});
}






function correctFeedback(){


  
$('.question-retrieve').html(`<div class="correctFeedback"><div class="icon"><img src="${Questions[questionNumber].imgUrl}" alt="${Questions[questionNumber].alt}"/></div><p>You hit your shot</p><button type=button class="nextButton">Next Question</button></div>`)
}


function incorrectFeedback(){
  let correctAnswer = `${Questions[questionNumber].correctChoice}`;
  $('.question-retrieve').html(`<div class="incorrectFeedback"><div class="icon"><img src="${Questions[questionNumber].imgUrl}" alt="${Questions[questionNumber].alt}"/></div><p>You missed your shot<br>The correct answer is "${correctAnswer}"</p><button type=button class="nextButton">Next Question</button></div>`)



}


function renderNext(){

  $('main').on('click','.nextButton',function(event){

  changeQuestionNumber();
  renderTheQuestion();
  userAnswer();

  
  

  

  }

  );
}


function renderResults(){

  if(score >= 7){

  $('.question-retrieve').html(`<div class="results correctFeedback"><h3>You're a Hall of Famer!</h3><img src="http://www.hoophall.com/files/3515/2692/8488/BHOF_3C_800x580.png" alt="Hall of Fame for basketball"/><p>Your score is ${score} / 10</p><p>Espn is taking Applications!</p><button class="restartButton">Restart The Quiz</button></div>`);
}

else if(score > 3 &&	score < 7){

  $('.question-retrieve').html(`<div class="results correctFeedback"><h3>You're almost there. Keep working hard!</h3><img src="https://i.ytimg.com/vi/4Bw0rEtKs-4/hqdefault.jpg" alt="Lebron James working out, and getting stronger"/><p>Your score is ${score} / 10</p><p>You must learn to fail before becoming successful, like any great NBA player.</p><button class="restartButton">Restart The Quiz</button></div>`);

}


else{
$('.question-retrieve').html(`<div class="results correctFeedback"><h3>Maybe basketball isn't your sport.</h3><img src="https://cdn5.vectorstock.com/i/1000x1000/26/19/yellow-sad-face-vector-5292619.jpg" alt="Sad Face"/><p>Your score is ${score} / 10</p><p><a href="espn.com">Link</a> Follow the Link to learn more about basketball. We all start somewhere. </p><button class="restartButton">Restart The Quiz</button></div>`);



}

}

function restartQuiz(){

   $('main').on('click', '.restartButton', function (event) {
    location.reload();
   });
}

function allAbove(){

startQuiz();
renderTheQuestion();
userAnswer();
renderNext();


}

$(allAbove);








