// progress bar
$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});

// Changes between visible and invisible
$(document).on('ready', function() {
	var winHeight = $(window).height(), 
     	docHeight = $(document).height(),
     	position, startChange, endChange;

     	$(document).on('scroll', function (){ 
     		position = $(window).scrollTop(),
     		
     		// Copy this everytime you want a new transition and change the var/id name.
     		startChange = $('#nav_invisible').offset(),
     		endChange = $('#nav_visible').offset();
     		// If you're using sublime text, cmd+d will select other apperances of the highlighted
     		startChange1 = $('#nav_invisible1').offset(),
     		endChange1 = $('#nav_visible1').offset();

     		// This first if statment is if you want to start w/transparent. 
     		// If not, remove it, move the other if statements up and remove the trasnparent class from the html 
     		if (position == 0) { 
     			$('nav').addClass('transparent');

     		} else if ((position > startChange.top && position < endChange.top)){
     			$('nav').addClass('invisible');
                $(".logo").html("<img src='img/w.logo.png'>");
                // $(".dropbtn").html("<img src=''>");
                $(".twitter-logo").html("<img src='img/w.twitter.svg'>");
                $(".fb-logo").html("<img src='img/w.facebook.svg'>");
                $(".comments-logo").html("<img src='img/w.comments.svg'>");

     		// add a new else if for every change you want
     		} else if ((position > startChange1.top && position < endChange1.top)){
     			$('nav').addClass('invisible');
                $(".logo").html("<img src='img/w.logo.png'>");
                // $(".dropbtn").html("<img src=''>");
                $(".twitter-logo").html("<img src='img/w.twitter.svg'>");
                $(".fb-logo").html("<img src='img/w.facebook.svg'>");
                $(".comments-logo").html("<img src='img/w.comments.svg'>");	
     		// This is the only time you'll need to remove the invisible class
     		} else{
     			$('nav').removeClass('invisible');
     			$(".logo").html("<img src='img/b.logo.png'>");
                // $(".dropbtn").html("<img src='img/arrow_down.svg'>");


		        $(".twitter-logo").html("<img src='img/b.twitter.svg'>");
		        $(".fb-logo").html("<img src='img/b.facebook.svg'>");
                $(".comments-logo").html("<img src='img/b.comments.svg'>");
     		} 	
     	});
});

// hamburger logo






