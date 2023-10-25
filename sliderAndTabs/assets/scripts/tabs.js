let tabs = document.getElementsByClassName("tab");
let tabsArr = Array.from(tabs);
let selectContent = document.getElementById('select-tab');
let selectContentLogo =  document.getElementById('logo');
tabsArr.forEach(tab => {
    tab.addEventListener('click',function(){
        selectContent.style.backgroundColor = getComputedStyle(this).backgroundColor;
        selectContentLogo.innerHTML = this.innerHTML.replace("2x","10x");
    })
});
