let filterInput=document.getElementById("filterInput");
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
  // console.log("Key up!");
  // get value of input text
  let filterValue=document.getElementById("filterInput").value.toUpperCase();
  //console.log(filterValue);
  // get li values
  let ul = document.getElementById("names");
  let li = ul.querySelectorAll("li.collection-item")
  
  // above is array, now loop through the li collection
  for(let i=0; i<li.length; i++){
    let a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display='';
      console.log("matched!");
    }
    
    else{
      li[i].style.display='none';
    }
  }
}