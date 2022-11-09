//Task 1
$(function () {
  $("a").attr("target", "_blank");

  // Task 2
  $("h2.head").css("background", "green");
  $("h2.head .inner").css("fontSize", "35px");

  // Task 3.
  $("h3+div").each(function (i, el) {
    $(el).prev().before($(el));
    // console.log($(el).text());
  });

  //Task 4.
  $("[type=checkbox]").change(function () {
    if ($("[type=checkbox]:checked").length == 3)
      $(":checkbox(:checked)").prop("disabled", true);
  });
});
