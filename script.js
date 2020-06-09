

function validate() {
  let email = document.getElementById("email").value;
  let regx = /^([a-z0-9_-]+)+@(gmail|outlook|hotmail).([a-z]{2,8})(\.[a-z]{2,8})?$/;

  if(regx.test(email)){
    document.getElementById("result").innerHTML="e-mail válido";
    document.getElementById("result").style.visibility="visible"
    document.getElementById("result").style.color="white";
    return false;
  }
  else
  {
    document.getElementById("result").innerHTML="e-mail inválido";
    document.getElementById("result").style.visibility="visible"
    document.getElementById("result").style.color="pink";
    return false;
  }
}
