$(document).ready(function() {
  $("#survey").submit(function(event) {
    const nameInput = $("input#name").val();
    const foodInput = $("#food").val();
    const iceCreamFlavorInput = $("input:radio[name=flavor]:checked").val();
    const favoriteColorInput = $("#color").val();
    const dateOfBirthInput = $("#dob").val();

    $(".name").text(nameInput);
    $(".dob").text(dateOfBirthInput);
    $(".food").text(foodInput);
    $(".color").text(favoriteColorInput);
    $(".flavor").text(iceCreamFlavorInput);

    $("#results").show();

    event.preventDefault();
  });
});
