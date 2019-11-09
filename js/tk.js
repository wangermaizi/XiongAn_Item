/**
 * Created by LSY on 2019/10/19.
 */
function tkAlert(ags){
    var btn = document.querySelector('button');
    var body = document.querySelector('body');
    var zhezhao = document.createElement('div');
    zhezhao.className = 'zhezhao';
    zhezhao.innerHTML = `<div class="alert">
    <div class="header">
    <span class="title">`+ags.title+`</span>
    <div class="close">x</div>
    </div>
    <div class="main">`+ags.content+`</div>
    <div class="btnList">
    <div class="btn">`+ags.cancel+`</div>
    <div class="btn">`+ags.confirm+`</div>
    </div>
    </div>`;
    body.appendChild(zhezhao);

    //在里面创建
    var close = document.querySelector('.alert .header .close');
    console.log(document.querySelector('.alert .header .close'));
    close.onclick = function(){
        body.removeChild(zhezhao);
    };
    var trueBtn = document.querySelector('.btnList .btn');
    trueBtn.onclick = function(){
        typeof ags.confirmFn() == "function"?ags.confirmFn():console.log('error');
        body.removeChild(zhezhao);
    };
    var falseBtn = document.querySelectorAll('.btnList .btn')[1];
    falseBtn.onclick = function(){
        typeof ags.cancelFn() == 'function'?ags.cancelFn():console.log('error');
        body.removeChild(zhezhao);
    }
}
