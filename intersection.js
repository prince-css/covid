window.onload=()=>{
   
    
    
    
    var nav=document.getElementsByTagName("nav")[0];
    var offsetValue= nav.offsetTop;
    
    
    window.addEventListener("scroll",()=>{


        console.log(nav.offsetParent);
        console.log(window.pageYOffset,nav.offsetTop);


        if(window.pageYOffset >= offsetValue){
            nav.classList.add("sticky");
        }
        else{
            nav.classList.remove("sticky");
        }
    });
   
   
   
   
   
   
   
   
   
    let target= document.getElementById("onnanno2");
    
    
    const options={
        threshold:0.0,
    };
    let observer= new IntersectionObserver((entries,observer)=>{
          //if(entries[0].intersectionRatio>=0.5){
            console.log(entries[0]);
           // nav[0].classList.toggle("topnav-out");
        //}
        
    },options);
    observer.observe(target);
}
