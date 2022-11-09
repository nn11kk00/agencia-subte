var reel = document.getElementById("img-reel").style.display = 'block';
var iframe = document.getElementById("projectplayer").style.display = 'none';

function ocultar() {
  var reel = document.getElementById("img-reel").style.display = 'none';
  var iframe = document.getElementById("projectplayer").style.display = 'block';

  var divIframe = document.getElementById("div-iframe").style.padding = '50% 0 0 0';
  return
}


/**Matar proceso de autoscrolling */
$('.carousel').carousel({
  interval: false,
});
/** */