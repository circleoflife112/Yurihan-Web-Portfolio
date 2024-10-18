$(".thread").hover(function () {
  let $this = $(this);

  if ($this.hasClass("thread")) {
    $($this).removeClass("thread");
  } else {
    $($this).addClass("thread_hover");
  }
});

//siblings 활용

$(".thread").hover(function () {
  $(this).addClass("thread");

  $(this).siblings(".thread").hasClass("thread_hover");
});
