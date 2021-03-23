document.addEventListener('DOMContentLoaded', ()=> {
 

        let fixheader =  document.querySelector('#bottom_menu');
        let sticky = fixheader.offsetTop;
        let top = document.querySelector('#top-menu');
        let topheight = top.offsetTop;
        
        
        function fixNav() {
        
            

             if(window.pageYOffset > sticky) {

                document.body.style.paddingTop = sticky + 'px';
                fixheader.classList.add("fixed");
            }
            else {
                document.body.style.paddingTop = 0;
            fixheader.classList.remove("fixed");
            }
        }


window.addEventListener('scroll', fixNav);

})


