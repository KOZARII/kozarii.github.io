var opened = false;

function openCloseNavmenu() {
  $(".hamburger").toggleClass("is-active");
  opened = !opened;

  $("#navmenu").show();

  if (!opened) {
    $("#navmenu")
      .stop()
      .animate({
        right: '-200px',
        width: '150px'
      }, 200)
      .delay(400).queue(function () {
        $(this).hide();
        $(this).dequeue();
      });
  } else {
    $("#navmenu")
      .stop()
      .animate({
        right: '0px',
        width: '150px'
      }, 200);
  }
}

$(".hamburger").click(function () {
  openCloseNavmenu();
});
