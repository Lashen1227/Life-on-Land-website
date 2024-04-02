// Description: Cursor effect
const cursor = document.getElementById("cursor");

const moveCursor = (e)=> {
  const mouseY = e.clientY;  // Get the mouse Y position
  const mouseX = e.clientX;  // Get the mouse X position
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;  // Move the cursor to the mouse position
}
window.addEventListener('mousemove', moveCursor)

/* 
<link rel="stylesheet" href="css/cursor.css"/>         => Paste this to your head tag
<div class="cursor rounded move" id="cursor"></div>    => Paste this tag to your body tag under the navigation bar
<script src="cursor.js"></script>                      => Paste this to your end of the body tag
*/