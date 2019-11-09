//开始设置通知页面
const notice = document.querySelector('.notice');
const header = document.querySelector('.header');
const main_news = document.querySelector('.main_news');
const content = document.querySelector('.main_content');
const footer = document.querySelector('.footer');
const noticeMain = document.querySelector('.notice-index');
const notice_list = document.querySelectorAll('.notice_list');
noticeMain.style.display = 'none';
function disPlayNone(header,news,content,noticeMain){
    header.style.display = 'none';
    news.style.display = 'none';
    content.style.display = 'none';
    noticeMain.style.display = 'none';
}
function disPlayBlock(header,news,content,noticeMain) {
    header.style.display = 'flex';
    news.style.display = 'block';
    content.style.display = 'flex';
    noticeMain.style.display = 'block';
}
//disPlayNone(header,main_news,content);
//设置通知点击事件
notice.addEventListener('click',function () {
    disPlayNone(header,main_news,content,noticeMain);
    noticeMain.style.display = 'block';
    notice_list.forEach(function (item, index) {
        item.style.display = 'block';
    })
});
//设置返回事件
const left_partDiv = document.querySelector('.notice-index .header .left_part');
left_partDiv.addEventListener('click',function () {
    noticeMain.style.display = 'none';
    const notice_index = document.querySelector('.notice-index');
    disPlayBlock(header,main_news,content,noticeMain);
    notice_index.style.display = 'none';
});


