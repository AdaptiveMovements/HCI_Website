
$(document).ready(function(){/* copy loaded thumbnails into carousel */
$('.thumbnail').on('load', function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parents('div');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('.carousel-inner'); 
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.thumbnail').click(function(){
    var idx = $(this).parents('div').index();
  	var id = parseInt(idx);
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	
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
    

         $('.slideshow').slick({
             dots: true,
             infinite: true,
             speed: 500,
             fade: true,
             slide: 'div',
             cssEase: 'linear'
           });


});