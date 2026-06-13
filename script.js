// smooth active navigation


const links = document.querySelectorAll(".side-icons a");


links.forEach(link=>{


link.addEventListener("click",function(){


links.forEach(item=>{

item.classList.remove("active");

});


this.classList.add("active");


});


});