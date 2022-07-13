function clicou(){
  let menu =  document.getElementById('area');
  if (menu.style.height == '0px') {
    menu.style.height  = '200px';
}
else{
    menu.style.height = '0px';
}
}
clicou()
function cor(params) {
  if (document.getElementById('l').classList.contains('dark')) {
    document.getElementById('l').classList.remove('dark');
    document.getElementById('l').classList.add('b');
  }
  else{
    document.getElementById('l').classList.remove('b');
    document.getElementById('l').classList.add('dark');
  }
  }
  function ano(){
    let ano =  document.getElementById('ga');
    if ( ano.style.display == "none") {
      ano.style.display = "block";
      
    }
    else{
      ano.style.display = "block";
      ano.style.display = "none";
      
    }
  }
  
  


  
  
  

