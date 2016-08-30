$( document ).ready(function() {

  $(".tile").click(function(){
    if (!$(this).hasClass("selected_video")) {
      if ($("li").not(this).hasClass("selected_video")) {
        $("li").not(this).removeClass("selected_video")
        $(this).removeClass("nohover")
      }

      if (!$(".two_boxes").hasClass("mobile")) {
        if ($(this).index('li.tile') % 2 == 0) {
        $("ul.tile-wrap").animate({left: "75%"}, "slow").addClass("two_boxes")
        $("div.tile-wrap").animate({left: "25%"}, "slow").addClass("two_boxes")
      } else {
        $("ul.tile-wrap").animate({left: "25%"}, "slow").addClass("two_boxes")
        $("div.tile-wrap").animate({left: "75%"}, "slow").addClass("two_boxes")
      }
      }

      $("li").not(this).addClass("nohover")
      $(this).toggleClass("selected_video")

      var description = $(this).next("article").html()
      $("div.tile-wrap").html(description)
      change_class_on_resize();
      // console.log($(this).index('li.tile'));


    } else {
      $("ul.tile-wrap").animate({left: "50%"}, "slow").removeClass("two_boxes")
      $("div.tile-wrap").animate({left: "50%"}, "slow").removeClass("two_boxes")
      $("li").not(this).removeClass("nohover")
      $(this).toggleClass("selected_video")
    }

  })


  function change_class_on_resize(){
    var window_width = $( window ).width();
    if (window_width < 900) {
      if (!$(".two_boxes").hasClass("mobile")) {
        $("ul.tile-wrap.two_boxes").animate({
          left: "50%",
          top: "250px",
        }, "slow")

        $("div.tile-wrap.two_boxes").animate({
          left: "50%",
          top: "750px",
        }, "slow")

        $(".two_boxes").addClass("mobile")

      }


    } else {


      $("ul.tile-wrap.two_boxes.mobile").animate({
        left: "25%",
        top: "50%",
      }, "slow")

      $("div.tile-wrap.two_boxes.mobile").animate({
        left: "75%",
        top: "50%",
      }, "slow")

      $(".two_boxes").removeClass("mobile")
    }
  }

  change_class_on_resize();

  $( window ).resize(function() {
    change_class_on_resize();
  });





}); // end of document.ready
