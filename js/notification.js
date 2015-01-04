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

        $(".btnAddQuickView").each(function(){

            $(this).click(function(){
                $(".modal-body").notify(
                  "Item added to Basket", 
                  { position:"bottom center" }
                );
            });

         });


        $(".btnFavotireQuickView").each(function(){

            $(this).click(function(){
                $(".modal-body").notify(
                  "Item added to Favorites", 
                  { position:"bottom center" }
                );
            });

         });

         

});