let filterInput= document.querySelector('.filter-search');
let searchBox=document.querySelector('.search-box');
let body=document.querySelector('body');
let pointerFocus=false;

searchBox.addEventListener('mouseover',
(e)=>{
    filterInput.style.width="16em";
    filterInput.style.padding="2px 2px 5px 5px";
})

searchBox.addEventListener('mouseout',
(e)=>{
    if(filterInput.value===''&&pointerFocus===false){
    filterInput.style.width="0";
    filterInput.style.padding="0";
    }
    
})

filterInput.addEventListener('focus',
(e)=>{
    filterInput.style.width="16em";
    filterInput.style.padding="2px 2px 5px 5px";
    pointerFocus=true;
})

filterInput.addEventListener('blur',
(e)=>{
    if(filterInput.value===''){
    filterInput.style.width="0";
    filterInput.style.padding="0";
    }
    pointerFocus=false;
})
filterInput.style.cursor="pointer";




filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    let filterValue=document.querySelector('.filter-search').value.toUpperCase();

    let li=document.querySelectorAll('li.collection-list');

    li.forEach((x,i)=>{
        let a= li[i].querySelector('a');

        if(a.innerHTML.toLocaleUpperCase().indexOf(filterValue)>-1){
            li[i].style.display='';
        } else {
            li[i].style.display='none';
        }
    })

}

const btn2 = document.querySelector('#v2');

btn2.onclick = function( ) {
    console.log("You clicked me")
    console.log("I hope it worked")
}