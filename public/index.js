function myFunction(x) {
  if (x.matches) {
    document.getElementById("mg").style.position="static";
  } else {
    document.getElementById("mg").style.position="sticky";
  }
}
var x = window.matchMedia("(max-width: 700px)");
window.addEventListener( 'load' , function() {
myFunction(x);
x.addListener(myFunction);
});
