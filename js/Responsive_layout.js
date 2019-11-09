function xys() {
    var msg = navigator.userAgent;
    var html = document.querySelector('html');
    var screenWidth;
    var rem;
    //rem布局
    screenWidth = window.innerWidth;
    console.log(screenWidth);
    rem = screenWidth / 62.75;//屏幕的宽度除以设计稿占满全屏的宽度为多少rem
    html.style.fontSize = rem+'px';
    if (msg.indexOf('iPhone') != -1){
        html.classList.add('iPhone');
        wd();
    }else if (msg.indexOf('Android') !=-1) {
        html.classList.add('Android');
        wd();
    }else if (msg.indexOf('Chrome') != -1){
        html.classList.add('Chrome');
        screenWidth = window.innerWidth;
        //console.log(screenWidth);
        rem = screenWidth / 6;//屏幕的宽度除以设计稿占满全屏的宽度为多少rem
        html.style.fontSize = rem+'px';
    }else if (msg.indexOf('iPad') != -1){
        html.classList.add('iPad')
    }
    else{
        html.classList.add('unknown')
    }
    function wd() {
        var ico = document.querySelector('.ico');
        if (window.innerWidth<640) {
            /*ico.className = 'ico';
            //ico.classList.add('small');*/
            html.classList.add('lt640');
            html.classList.add('lt960');
            html.classList.add('lt1200');
        }else if (window.innerWidth < 960) {
            /*ico.className = 'ico';
            //ico.classList.add('middle');*/
            html.classList.add('gt640');
            html.classList.add('lt960');
            html.classList.add('lt1200');
        }else if (window.innerWidth < 1200) {
            /*ico.className = 'ico';
            //ico.classList.add('big');*/
            html.classList.add('gt640');
            html.classList.add('gt960');
            html.classList.add('lt1200');
        }
        else{
            /*ico.className = 'ico';*/
            //ico.classList.add('maxbig');
            html.classList.add('gt1200')
        }
    }
    wd();
}
xys();
window.onresize = function () {
    var html = document.querySelector('html');
    html.className = '';
    xys()
};