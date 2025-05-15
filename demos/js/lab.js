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
   
    $(popup2).fadeOut(2300);

    setTimeout(() => {
      overlay.style.display = "none";
    }, 2300);
    
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


document.addEventListener("mousemove", function(e) {
    const btn = document.getElementById("closeBtn");
    

    const rect = btn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - btnCenterX;
    const dy = e.clientY - btnCenterY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const minScale = 0.25;
    const maxScale = 1.5;
    const threshold = 500; 

    let scale = maxScale;
    if (distance < threshold) {
        scale = minScale + ((distance / threshold) * (maxScale - minScale));
    }

    btn.style.transform = `scale(${scale})`;
});


// ------------------------------------------------------



window.addEventListener('DOMContentLoaded', () => {
  const pieces = document.querySelectorAll('.piece');
  const target = document.getElementById('targetZone');
  const finalBtn = document.getElementById('finalCloseBtn');
  let placedCount = 0;

  pieces.forEach((piece, index) => {
    piece.style.left = `${Math.random() * 500}px`;
    piece.style.top = `${Math.random() * 250}px`;

    piece.onmousedown = (e) => {
      const offsetX = e.clientX - piece.offsetLeft;
      const offsetY = e.clientY - piece.offsetTop;

      const onMove = (e) => {
        piece.style.left = `${e.clientX - offsetX}px`;
        piece.style.top = `${e.clientY - offsetY}px`;
      };

      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);

        const p = piece.getBoundingClientRect();
        const t = target.getBoundingClientRect();

        const inside = (
          p.left >= t.left && p.right <= t.right &&
          p.top >= t.top && p.bottom <= t.bottom
        );

        if (inside) {
      
          placedCount++;
          if (placedCount === pieces.length) {
            finalBtn.style.display = 'block';
          }

        }
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    };
  });
});





