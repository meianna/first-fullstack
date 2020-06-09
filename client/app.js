$(document).ready(function () {
  $("#btnSubmit").on("click", function () {
    $.ajax({
      type: "GET",
      url: "/api/test",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });

  $("#btnSubmit2").on("click", function () {
    $.ajax({
      type: "GET",
      url: "/api/test2",
      dataType: "json",
    }).then((res) => {
      console.log(res);
    });
  });
});
