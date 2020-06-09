function validate() {
  let email = document.getElementById("email").value;
  let regx = /^([a-z0-9_-]+)+@(gmail|outlook|hotmail).([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if(regx.test(email)){
    document.getElementById("result").innerHTML="e-mail válido";
    document.getElementById("result").style.visibility="visible"
    document.getElementById("result").style.color="white";
    document.getElementById("email").style.borderColor="#59E659";
    window.setTimeout(resetStyle, 2000);
    //return false so the page doesn't update itself on keypress
    return false;
  }
  else
  {
    document.getElementById("result").innerHTML="e-mail inválido";
    document.getElementById("result").style.visibility="visible"
    document.getElementById("result").style.color="pink";
    document.getElementById("email").style.borderColor="#E65963";
    window.setTimeout(resetStyle, 2000);
    //return false so the page doesn't update itself on keypress
    return false;
  }
}

function resetStyle() {
  document.getElementById("result").style.visibility="hidden"
  document.getElementById("result").style.color="white";
  document.getElementById("email").style.borderColor="white";
}
