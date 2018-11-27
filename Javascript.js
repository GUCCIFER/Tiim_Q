window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }
$(document).ready(function() {
	$("#runner").on('mouseover', function(){
    var offset = $(this).offset();
    var goX = Math.random() < 0.5 ? -1 : 1;
    var goY = Math.random() < 0.5 ? -1 : 1;
    var targetSize = 70;
    if(goX > 0 && offset.left + targetSize * goX + targetSize> 1200
      || goX < 0 && offset.left + targetSize * goX  - targetSize < 0) {
        goX = goX * (-1);
    }
    
    if(goY > 0 && offset.top + targetSize * goY + targetSize> 700
      || goY < 0 && offset.top + targetSize * goY - targetSize< 0) {
        goY = goY * (-1);
    }
    $(this).css('top', offset.top + 70 * goY);
    $(this).css('left', offset.left + 70 * goX);
});
});