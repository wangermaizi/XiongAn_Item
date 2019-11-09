const navliDiv = document.querySelectorAll('.navli');
const receiveBtn = document.querySelector('.receive_detail');
const post = document.querySelector('.postAssess_detail');
const protect = document.querySelector('.protect_detail');
receiveBtn.style.display = 'block';
post.style.display = 'none';
protect.style.display = 'none';
for (let i = 0; i < navliDiv.length; i++) {
    navliDiv[i].onclick = function () {
        navliDiv.forEach(function (item,index) {
            item.classList.remove('border_line');
        });
        this.classList.add('border_line');
        if (i == 0) {
            receiveBtn.style.display = 'block';
            post.style.display = 'none';
            protect.style.display = 'none';
        }else if (i == 1) {
            receiveBtn.style.display = 'none';
            post.style.display = 'block';
            protect.style.display = 'none';
        }else {
            receiveBtn.style.display = 'none';
            post.style.display = 'none';
            protect.style.display = 'block';
        }
    }
}

//设置弹框
const btn = document.querySelector('#protect .btn');
console.log(btn);
const msg = {
    title:'请问是否拨打求助电话',
    content:'400 830 8339',
    cancel:'取消',
    confirm:'呼叫',
};
btn.onclick = function (e) {
    console.log(e);
    tkAlert(msg)
};