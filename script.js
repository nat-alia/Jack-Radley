$( document ).ready(function() {
    console.log( "ready!" );


    const bioBox = document.querySelector('div.homepage-topleft-info')
    const writingBox = document.querySelector('div.homepage-topright-writing')
    const curatingBox = document.querySelector('div.homepage-bottomleft-curating')
    const studioBox = document.querySelector('div.homepage-bottomright-studio')


    $( document ).mousemove(function(event){
      var coorX = event.pageX;
      var coorY = event.pageY;
      var width = $(window).width();
      var height = $(window).height();

      bioBox.style.width = coorX + "px"
      bioBox.style.height = coorY + "px"

      curatingBox.style.width = coorX + "px"
      curatingBox.style.height = height - coorY + "px"

      writingBox.style.width = width - coorX + "px"
      writingBox.style.height = coorY + "px"

      studioBox.style.width = width - coorX + "px"
      studioBox.style.height = height - coorY + "px"


    });



});
