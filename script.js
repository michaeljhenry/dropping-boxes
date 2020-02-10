$(document).ready(function() {
  $(document).on('click','.row_of_boxes', function() {
    var source = $(this).attr('id');
    var animation = getAnimation();
    source = '#' + source
    
    $(source).addClass(animation);
    setTimeout(function() {
        $(source).removeClass(animation);
    }, 4000);

  })

  var getAnimation = function() {
      var index = Math.round(Math.random()*5);
      var animations = ['crawl', 'swing', 'spin', 'shrink', 'stretch'];
      return animations[index];
  }
});

