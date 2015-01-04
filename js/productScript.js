$(document).ready(function(){
  
$.notify.defaults({ className: "success" });

         $(".btn-add").each(function(){

            $(this).click(function(){
                $(".icon-basket").notify(
                  "Item added to Basket", 
                  { position:"left middle" }
                );
            });

         });

         $(".btndetails2").each(function(){

            $(this).click(function(){

                $(".icon-user").notify(
                  "Item added to Favorites",
                  { position:"left middle" }
                );

            });

         });

         
$('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
           $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
           $("#menu").mmenu({
             classes: "mm-light",
              "labels": true,
              "searchfield": {
                 "placeholder": "Search",
                 "add": true,
                 "search": true
              }
           });
    

      $('.slideshowRecommend').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
        slidesToShow: 56,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
      },
      {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
      },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
      },
      {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
      }
      ]
      });
});