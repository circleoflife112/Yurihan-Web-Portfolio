$(".thread").hover(function () {
  let $this = $(this);

  if ($this.hasClass("thread_hover")) {
    $($this).removeClass("thread_hover");
  } else {
    $($this).addClass("thread_hover");
  }
});

//siblings 활용

$(".thread").hover(function () {
  $(this).addClass("thread_hover");

  $(this).siblings(".thread_hover").removeClass("thread_hover");
});
