$(document).ready(function(){
  
   // Sets a variable for the glow width of each cel
  var glowWidth = 0
      
  // Assigns the glow width to a variable and adjusts the css according to the user input
  function changeGlow(){
    var glowColor = $('#colorPicker').wheelColorPicker('getValue' , 'css');
    var newGlow = '0 0 '+glowWidth+'px '+glowColor;
    $('.light').css('box-shadow', newGlow);
  }
  
  //changes intensity of glow
  $('#glow').slider({
    min: 0,
    max: 50,
    slide: function (event, ui){
      glowWidth = ui.value;
      changeGlow();
    }
  });
  
  // jQuery Color Wheel Picker plugin
  // assigns a variable to the colour which users select and assigns it to the css of the light cells
  // Also changes colour of glow if glow is enabled
  $('#colorPicker').wheelColorPicker({
    layout: 'block',
  }).on('slidermove', function(){
    var color = $(this).wheelColorPicker('getValue' , 'css');
    $('.light').css('background', color);
    changeGlow();
  });
  
  // Additional colour pickers were going to be in place which would change each 3rd cel (1,4,7...; 2,5,8...; 3,6,9...) but I couldn't get them to work properly
  //$('#colorPicker1').wheelColorPicker({
  //  layout: 'block'
  //}).on('slidermove', function(){
  //  var color = $(this).wheelColorPicker('getValue' , 'css');
  //  $('#cel1').css('background', color);
  //});
  
  //$('#colorPicker2').wheelColorPicker({
  //  layout: 'block',
  //}).on('slidermove', function(){
  //  var color = $(this).wheelColorPicker('getValue' , 'css');
  //  $('#cel2').css('background', color);
  //});
  
  //$('#colorPicker3').wheelColorPicker({
  //  layout: 'block'
  //}).on('slidermove', function(){
  //  var color = $(this).wheelColorPicker('getValue' , 'css');
  //  $('#cel3').css('background', color);
  //});

  // Shows and hides the spectrum down the bottom of the page
  // Changes button text according to whether or not the spectrum is hidden or shown
  $('#spectoggle').on('click', function(){
      $('.spectrum').animate({
        opacity: "toggle",
        width: "toggle",
      })
      //animate() the spectrum sliding in and out from the right
      var buttonText = $(this).text();
      if (buttonText == 'HIDE SPECTRUM'){
        $(this).text('SHOW SPECTRUM');
      }else{
        $(this).text('HIDE SPECTRUM');
      }
  })
    
  // Increases the border-radius, turning the squares into circles
  $('#radius').slider({
      min: 25,
      max: 50,
      slide: function (event, ui){
        $('.light').css('border-radius', ui.value);
      }
    });
  
  //Decreases border-radius, sharpening the cel corners
  $('#square').slider({
    min: 0,
    max: 25,
    value: 25,
    slide: function (event, ui){
      $('.light').css('border-radius', ui.value);
    }
  });
  
  // Decreases the border width of each cel
  $('#border').slider({
    min: 0,
    max: 3,
    value: 3,
    slide: function (event, ui){
      $('.light').css('border-width', ui.value);
    }
  });
  
  var angle = 0
  
  function rotate(){
    var newAngle = 'rotate('+angle+'deg)';
    $('.light').css('transform', newAngle);
  }
  
  $('#rotate').slider({
    min: 0,
    max: 90,
    slide: function (event, ui){
      angle = ui.value;
      rotate();
    }
  });
  
  
  
  //Modal lightboxes, using the Modaal plugin
  $('.inline').modaal({
    content_source: '#inline'
  })
  
  $('#slide2').hide();
  $('#slide3').hide();
  $('#slide4').hide();
  $('#slide5').hide();
  
  // Slide transition animations
  $("#s1next").on('click',function(){
    $('#slide1').animate({
      opacity: 'toggle'
    });
    $('#slide2').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s2prev").on('click',function(){
    $('#slide2').animate({
      opacity: 'toggle'
    })
    $('#slide1').delay(400).animate({
      opacity: 'toggle'
    });
  });
  
  $("#s2next").on('click',function(){
    $('#slide2').animate({
      opacity: 'toggle'
    });
    $('#slide3').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s3prev").on('click',function(){
    $('#slide3').animate({
      opacity: 'toggle'
    });
    $('#slide2').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s3next").on('click',function(){
    $('#slide3').animate({
      opacity: 'toggle'
    });
    $('#slide4').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s4prev").on('click',function(){
    $('#slide4').animate({
      opacity: 'toggle'
    });
    $('#slide3').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s4next").on('click',function(){
    $('#slide4').animate({
      opacity: 'toggle'
    });
    $('#slide5').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  $("#s5prev").on('click',function(){
    $('#slide5').animate({
      opacity: 'toggle'
    });
    $('#slide4').delay(400).animate({
      opacity: 'toggle'
    })
  });
  
  // Video modal
  $('.video').modaal({
    type: 'video'
  })
  
});