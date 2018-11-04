$(document).ready(function(){
    
  
  // ensures that only the first question appears on screen upon the page loading
  $('.question').hide();
  $('.next').hide();
  $('.scorePage').hide();
  $('#q1').show();
  
  //defines a variable for the user's score and sets it to 0
  $('#score').text('0');
  var totalCorrectAnswers = 0;
  
    // defines a variable for the user's input on the provided sliders
    var currentSliderInput = 0;

    // draws a spectrum slider and sets the min and max values to be the minimum and maximum values found on the visible light spectrum.
    // upon sliding the slider, this block of code will assign the numeric value of the position the user has left the slider on to the currentSliderInput variable
    $('.spec-slider').slider({
    min: 380,
    max: 750,
    slide: function(event, ui){
      currentSliderInput = ui.value;
      }
    });
  
    // same as above, but for a number slider instead of a spectrum slider
    $('.num-slider').slider({
    min: 380,
    max: 750,
    slide: function(event, ui){
      currentSliderInput = ui.value;
      }
    });
  
  // checks the user's answer and establishes the boundaries within which an answer must occur in order to be correct
  // refers to HTML code in order to establish parameters
  // lowerLimit is the HTML's correct entry - HTML's tolerance
  // upperLimit is correct entry + tolerance
  function checkAnswer(inputAnswer, correctAnswer, tolerance){
    var lowerLimit = correctAnswer - tolerance;    
    var upperLimit = correctAnswer + tolerance;    
    if(inputAnswer >= lowerLimit && inputAnswer <= upperLimit){
      return true;
    }else{
      return false;
    }    
  }
  
  // attaches a function to the check answer button
  // assigns variables to the question container so HTML attributes may be read
  // converts HTML attributes from strings to floats so they may be parsed as numeric values, then assigns them to variables so they may be run through functions
  // defines different outputs depending on whether the user's answer was correct or incorrect
  // if the result is correct, increases the user's score by 1
  $('.submit-answer').on('click', function(){
    var questionContainer = $(this).parent();
    var correctAnswer = parseFloat(questionContainer.attr('data-correct-ans'));
    var tolerance = parseFloat(questionContainer.attr('data-correct-ans-tolerance'));
    console.log(correctAnswer, tolerance, currentSliderInput);
    $('.submit-answer').hide();
    $('.next').show();
    
    var isCorrect = checkAnswer(currentSliderInput, correctAnswer, tolerance);
    console.log(isCorrect);
    if(isCorrect){
      totalCorrectAnswers++;
      //alert("well done!");
      //questionContainer.addClass('correct');
      $('.result').text('Correct!')
      console.log(totalCorrectAnswers);
    }else{
      //alert("Incorrect! Try again");
      $('.result').text('Incorrect!')
    }
    $('#score').text(totalCorrectAnswers);
  });
  
  // these blocks of code handle the transitions between questions
  // not very streamlined but it works
  $('#q1next').on('click', function(){
    $('#q1').animate({
      opacity: 'toggle'
    });
    $('#q2').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q2next').on('click', function(){
    $('#q2').animate({
      opacity: 'toggle'
    });
    $('#q3').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q3next').on('click', function(){
    $('#q3').animate({
      opacity: 'toggle'
    });
    $('#q4').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q4next').on('click', function(){
    $('#q4').animate({
      opacity: 'toggle'
    });
    $('#q5').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q5next').on('click', function(){
    $('#q5').animate({
      opacity: 'toggle'
    });
    $('#q6').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q6next').on('click', function(){
    $('#q6').animate({
      opacity: 'toggle'
    });
    $('#q7').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q7next').on('click', function(){
    $('#q7').animate({
      opacity: 'toggle'
    });
    $('#q8').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q8next').on('click', function(){
    $('#q8').animate({
      opacity: 'toggle'
    });
    $('#q9').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
  })
  
  $('#q9next').on('click', function(){
    $('#q9').animate({
      opacity: 'toggle'
    });
    $('#q10').delay(400).animate({
      opacity: 'toggle'
    });
    $('.submit-answer').show();
    $('.next').hide();
    $('.result').text('');
    $('.q10submit').show();
    $('.viewScore').hide();
    $('.q10result').hide();
  })
  
  $('.q10submit').on('click', function(){
    $('.q10submit').hide();
    $('.viewScore').show();
    $('.q10result').show();
    $('.q10result').text('Trick question! Colours such as pink, fuchsia, or magenta do not naturally occur on the colour spectrum. Don\'t worry, this won\'t count towards your score.');
  })
  
  $('.viewScore').on('click', function(){
    $('#q10').animate({
      opacity: 'toggle'
    });
    $('.scorePage').delay(400).animate({
      opacity: 'toggle'
    });
    $('#scoreWrapper').hide();
    $('.endScore').text(totalCorrectAnswers);
  })
  
  // takes the user back to question 1 and allows them to re-take the quiz
  $('#redo').on('click', function(){
    $('.scorePage').animate({
      opacity: 'toggle'
    });
    $('#q1').delay(400).animate({
      opacity: 'toggle'
    });
    $('#scoreWrapper').delay(400).animate({
      opacity: 'toggle'
    });
    totalCorrectAnswers = 0;
  })
  
});