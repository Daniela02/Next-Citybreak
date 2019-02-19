function myFunction(x) {
  if (x.matches) {
    document.getElementById("mg").style.position="static";
  } else {
    document.getElementById("mg").style.position="sticky";
  }
}
function view(id) {
  var checkBox = document.getElementById(id+'I');
  var text = document.getElementById(id);
  if (checkBox.checked == true)
    {
      text.style.display = "block";
      text.style.visibility="visible";
    }
   else
    text.style.display = "none";
}
var x = window.matchMedia("(max-width: 700px)");
window.addEventListener( 'load' , function() {
myFunction(x);
x.addListener(myFunction);
});
