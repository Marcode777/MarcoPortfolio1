   // $('.carousel').carousel({
   //      interval: 2200
   //  });
  
  //new carousel
 $('.carousel').carousel({
  interval: 3000 //changes the speed
  })

//this is for the api function
console.log("outside of .ready");
  $(document).ready(function(){
    console.log("inside of .ready");
  $.ajax({
    type:"GET",
    url:"https://api.github.com/users/marcode777/repos",
    success: function(repos) {
      for(var i = 0; i <repos.length; i++){
        var newRepoUrl = buildRepoUrl(repos[i])
        $(".list-group").append(newRepoUrl);
      
      }
    
    },
    error: function(jqXHR, textStatus, errorThrown){
     console.log(jqXHR);
     console.log(textStatus);
     console.log(errorThrown);
    }
  });

  function buildRepoUrl(repoData){
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.full_name);
    return newLink;
  }
  });

  //parallax section//
  $(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function
}); // close out script

TweenMax.to(".pic", 2, {x:375});
TweenMax.from("#jumbo", 2, {x:675});
TweenMax.from(".about", 2, {y:300});
TweenMax.from(".skills-technologies", 2, {y:300});
TweenMax.from(".interests-hobbies", 2, {y:300});
TweenMax.from(".apps", 2, {y:300});
// TweenMax.to(".globe", 6, {left:600});


