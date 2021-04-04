        let fixheader =  document.querySelector('#bottom_menu');
        let sticky = fixheader.clientHeight;
        sticky1 = fixheader.offsetTop;
        let top1 = document.querySelector('#top-menu');
        let topheight = top.offsetTop;
        let content = document.querySelector('.discovery');
        

        function fixNav() {
        
            if (window.innerWidth >= 993) {
             if(window.pageYOffset > sticky1) {
                document.body.style.paddingTop = sticky + 'px';
                fixheader.classList.add("fixed");
                
            }
            else {
                document.body.style.paddingTop = 0;
            fixheader.classList.remove("fixed");
            }
        }
    } 

        function fixNavmob() {
            if(window.innerWidth <= 993) {
                top1.classList.add('hide');
                content.style.paddingTop = 110 + 'px';
                fixheader.classList.add("fixed");
            }
            else {
                top1.classList.remove('hide');
                fixheader.classList.remove("fixed");
                content.style.paddingTop = 0;
            }
        }
       

window.addEventListener('DOMContentLoaded', fixNav);
window.addEventListener('DOMContentLoaded',fixNavmob);
window.addEventListener('resize', fixNavmob);
window.addEventListener('scroll', fixNav);

 
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item, i) => {
            item.classList.remove(activeClass);
            document.querySelectorAll('.card')[i].style.borderLeft = '3px solid #202F4D'
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
        document.querySelectorAll('.card')[i].style.borderLeft = '3px solid #4949C0';
     
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

tabs('.card', '.code__sheet', '.code .col-md-5', 'tabheader__item_active');
tabs('.tabber', '.discovery .video-placeholder', '.d_container', 'tabber__active')
