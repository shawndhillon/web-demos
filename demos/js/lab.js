function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function openPopup2() {
  document.getElementById("popup").style.display = "none";

  const popup = document.getElementById("popup");
  const popup2 = document.getElementById("popup2");

  popup2.style.top = popup.style.top;
  popup2.style.left = popup.style.left;

  popup2.style.display = "block";
}


function closeAll() {
  const popup = document.getElementById("popup");
  const popup2 = document.getElementById("popup2");
  const overlay = document.getElementById("overlay");

  if (popup) {
    popup.style.display = "none";
  }

  if (popup2) {
   
    $(popup2).fadeOut(1700);

    setTimeout(() => {
      overlay.style.display = "none";
    }, 1700);
    
    const sound = new Audio('sounds/smited.mov'); 
    sound.play();

    //popup2.style.display = "none";

    return;
  }

  
  if (overlay) {
    overlay.style.display = "none";
  }
}

function openRandomPopup() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");

  const maxX = window.innerWidth - 400;
  const maxY = window.innerHeight - 400;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  popup.style.left = `${randomX}px`;
  popup.style.top = `${randomY}px`;

  overlay.style.display = "block";
  popup.style.display = "block";
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


