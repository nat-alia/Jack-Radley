// var cursorMoves = true;
//
// $( document ).ready(function() {
//     console.log( "ready!" );
//
//
//     const bioBox = document.querySelector('div.homepage-topleft-info')
//     const writingBox = document.querySelector('div.homepage-topright-writing')
//     const curatingBox = document.querySelector('div.homepage-bottomleft-curating')
//     const studioBox = document.querySelector('div.homepage-bottomright-studio')
//
//
//
//     var width = $(window).width();
//     var height = $(window).height();
//     var coorX;
//     var coorY;
//     var storedCoorX;
//     var storedCoorY;
//
//
//    $(document).mousemove(function(event){
//
//         if (cursorMoves) {
//
//           coorX = event.pageX;
//           coorY = event.pageY;
//
//           bioBox.style.width = coorX + "px";
//           bioBox.style.height = coorY + "px";
//
//           curatingBox.style.width = coorX + "px";
//           curatingBox.style.height = height - coorY + "px";
//
//           writingBox.style.width = width - coorX + "px";
//           writingBox.style.height = coorY + "px";
//
//           studioBox.style.width = width - coorX + "px";
//           studioBox.style.height = height - coorY + "px";
//
//           $("*").css("cursor", "pointer");
//
//           $(document).click(function(){
//             cursorMoves = false;
//           });
//         };
//
//
//         if(!cursorMoves){
//           storedCoorX = coorX;
//           storedCoorY = coorY;
//
//           if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
//               $("*").css("cursor", "pointer");
//           }else{
//               $("*").css("cursor", "default");
//           };
//
//
//         if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
//               $(document).click(function(){
//                 if(storedCoorX - 25 < event.pageX && storedCoorX + 25 > event.pageX && storedCoorY - 25 < event.pageY && storedCoorY + 25 > event.pageY){
//                   cursorMoves = true;
//                 }else{
//                   cursorMoves = false;
//                 };
//             });
//           };
//
//
//         };
//       });
//
//       $('.heading').hover(function(){
//          $("*").css("cursor", "pointer");
//        });
//
// });

// $( document ).ready(function() {
//
//
// var showcount = 0;
//
// $(".showmore-reviews").click(function(){
//   if (showcount == 0) {
//   $(".hide-review1").show();
//     showcount++;
//   } else if (showcount==1){
//     $(".hide-review2").show();
//     showcount++;
//   } else if (showcount==2){
//     $(".hide-review3").show();
//     showcount++;
//     $("a.showmore-reviews").html(`<a class="showmore showmore-reviews">Less</a>`);
// } else if (showcount==3){
// $(".hide").hide();
//   showcount=0;
//   $("a.showmore-reviews").html(`<a class="showmore showmore-reviews">More</a>`);
// }
// });
//
//
// var showcounti = 0;
//
// $(".showmore-interviews").click(function(){
//   if (showcounti == 0) {
//   $(".hide-interview1").show();
//     showcounti++;
//   } else if (showcounti==1){
//     $(".hide-interview2").show();
//     showcounti++;
//   } else if (showcounti==2){
//     $(".hide-interview3").show();
//     showcounti++;
//     $("a.showmore-interviews").html(`<a class="showmore showmore-interviews">Less</a>`);
// } else if (showcounti==3){
// $(".hide-interview").hide();
//   showcounti=0;
//   $("a.showmore-interviews").html(`<a class="showmore showmore-interviews">More</a>`);
// }
// });
//
//
//
// var showcountv = 0;
//
// $(".showmore-visits").click(function(){
//   if (showcountv == 0) {
//   $(".hide-visit1").show();
//     showcountv++;
//     $("a.showmore-visits").html(`<a class="showmore showmore-visits">Less</a>`);
//   } else if (showcountv==1){
//     $(".hide-visit1").hide();
//
//     showcountv=0;
//     $("a.showmore-visits").html(`<a class="showmore showmore-visits">More</a>`);
//   }
// });
//
// });
$( document ).ready(function() {
 console.log( "ready!" );




 $("div.bio-img-mark").hover(function(){
     $("div.bio-img-text").toggleClass("visible-img");
 });

 //CURATING SECTION
 //Adding a new currating project?
 //Copy the three lines below, ending in the brackets.
 //replace the two instances of curating-number with the next number of the project

$("h3.curating-1").hover(function(){
    $("img.curating-1").toggleClass("visible-img");
    });

$("h3.curating-2").hover(function(){
        $("img.curating-2").toggleClass("visible-img");
});

$("h3.curating-3").hover(function(){
        $("img.curating-3").toggleClass("visible-img");
});

$("h3.curating-4").hover(function(){
        $("img.curating-4").toggleClass("visible-img");
});


$(function() {

   $("div.image-gallery").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 2);

      event.preventDefault();

   });

});

//STUDIO SECTION
//Adding a new currating project?
//Copy the three lines below, ending in the brackets.
//replace the two instances of curating-number with the next number of the project

$("h3.studio-1").hover(function(){
    $("img.studio-1").toggleClass("visible-img");
});

$("h3.studio-2").hover(function(){
    $("img.studio-2").toggleClass("visible-img");
});

$("h3.studio-3").hover(function(){
    $("img.studio-3").toggleClass("visible-img");
});

$("h3.studio-4").hover(function(){
    $("img.studio-4").toggleClass("visible-img");
});

$("h3.studio-5").hover(function(){
    $("img.studio-5").toggleClass("visible-img");
});

$("h3.studio-6").hover(function(){
    $("img.studio-6").toggleClass("visible-img");
});

$("h3.studio-7").hover(function(){
    $("img.studio-7").toggleClass("visible-img");
});

$("h3.studio-8").hover(function(){
    $("img.studio-8").toggleClass("visible-img");
});

$("h3.studio-9").hover(function(){
    $("img.studio-9").toggleClass("visible-img");
});

$("a").hover(function(){
    $(this).css("transform", "rotate(" + (Math.random() * (6) - 3) + "deg)");
});

$("a h3").hover(function(){
    $(this).css("transform", "rotate(" + (Math.random() * (6) - 3) + "deg)");
});


///once u scroll ast 100vh, becomes absolute and at that sot

$(function() {
    var controller = new ScrollMagic.Controller();
    var containerScene = new ScrollMagic.Scene({
        // triggerElement: '.hero-piece',
        duration: 500
    })
    .setPin('.hero-piece')
    .addTo(controller);



    // var blockTween = new TweenMax.to('.image-gallery', 4, {
    // x: -200
    // });
    //
    //
    // var containerScene = new ScrollMagic.Scene({
    // triggerElement: '.image-gallery'
    // })
    // .setTween(blockTween)
    // .addIndicators()
    // .addTo(controller);
});

  });
