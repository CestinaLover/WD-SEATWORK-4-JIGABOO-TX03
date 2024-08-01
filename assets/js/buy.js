$(document).ready(function() {
  var canDownload = true;
  var money = 100;
  
  $('.satisfactory-balance span').text(money);
  
  $('.satisfactory-buy').on('click', function() {
    if(canDownload === true) {
      $(this).addClass('satisfactory-loading').find('span, small').hide();
      setTimeout(function() {
        $('.satisfactory-loading').addClass('satisfactory-processing');
        canDownload = false;
        setTimeout(function() {
          $('.satisfactory-buy').removeClass('satisfactory-processing');
          setTimeout(function() {
            $('.satisfactory-buy').removeClass('satisfactory-loading').addClass('satisfactory-success').find('.satisfactory-fa-check').fadeIn(100);
            setTimeout(function() {
              money -= 39.99;
              $('.satisfactory-balance span').text(money);
              $('.satisfactory-download').addClass('satisfactory-active').children().fadeIn(100, function() {
                $('meta[name="theme-color"]').attr('content','#21d49a');
                $('.satisfactory-buy').css('background-color','#21d49a');
              });
            }, 1000);
          }, 400);
        }, 2800);
      }, 300);
    }
  });
});
