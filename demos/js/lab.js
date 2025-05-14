function openPopup() {
  document.getElementById("popup1").style.display = "block";
}

function openPopup2() {
  document.getElementById("popup1").style.display = "none";
  document.getElementById("popup2").style.display = "block";
}

function closeAll() {
  document.getElementById("popup1").style.display = "none";
  document.getElementById("popup2").style.display = "none";
}


// click listener for button
$("#captcha").click(function(){

    // get value of input field
    const input = $("#input").val();

    if (input != "DVDirs"){
        $("#output").html('<div class="text"><p>' + 'Try Again' +'</p></div>');
        $("#input").val("");
    } else {
        $("#input").val("");
        closeAll();
    }

});


