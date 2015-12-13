$(document).ready(function() {
  $("form").on("submit", function(event){
    event.preventDefault();

    var name = $("#grocery_name").val();

    if (name) {
      submitItemViaAjax(name);
    } else {
      alert("Please provide a valid grocery item!");
    }

  });

  $("ul").on("click", "button", function(event) {
      event.preventDefault();
      var name = $("#grocery_trash").val();

      $(this).parent().remove(name);
  });

});

var submitItemViaAjax = function(name) {
  var request = $.ajax({
    method: "POST",
    url: "/groceries",
    data: { name: name }
  });

  request.done(function(responseData) {
    $("#grocery-list").append("<li>" + name + "</li>");
  });
}

var removeItemViaAjax = function(name) {
  var request = $.ajax({
    method: "DELETE",
    url: "/groceries",
    data: { name: listitem }
  });

  request.done(function(responseData) {
    $("#grocery-list").detach("<li>" + name + "</li>");
  });
}
