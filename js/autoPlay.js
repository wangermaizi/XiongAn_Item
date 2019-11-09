function Swiper(selector,urlList) {
    //获取容器
    this.swiper = document.querySelector(selector);
    this.swiper.innerHTML = `
        <div class="imglist"></div>
        <div class="btn">
            <div class="leftbtn"></div>
            <div class="rightbtn"></div>
        </div>
        <div class="circlelist"></div>`;
    var imgListDiv = document.querySelector(selector+' .imglist');
    var circlelistDiv = document.querySelector(selector+' .circlelist');
    //图片地址的生成
    urlList.forEach(function (item,index) {
        var newDiv = document.createElement('div');
        //图片样式
        newDiv.className = 'img';
        //图片地址
        newDiv.style.backgroundImage = 'url('+item+')';
        //追加图片
        imgListDiv.appendChild(newDiv);
        //没生成一张图片便增加一个小圆球
        //创建小圆球
        var circleList = document.createElement('div');
        //小球样式
        circleList.className = 'circle';
        //追加小球
        circlelistDiv.appendChild(circleList);
    });
    //自此轮播图的轮廓样子就算是完成了,接下来就是添加方法

    //初始化
    //获取所有的图片
    this.imgList = document.querySelectorAll(selector+' .imglist .img');
    //获取所有的小圆球
    this.circleList = document.querySelectorAll(selector+' .circlelist .circle');
    //首先获取左右的按钮元素
    this.leftBtn = document.querySelector(selector+' .btn .leftbtn');
    this.rightBtn = document.querySelector(selector+' .btn .rightbtn');

    //默认是第几张图
    this.z_index = 0;

    this.renderImg(this.z_index);

    //设置左边的点击事件
    var that = this;
    this.leftBtn.onclick = function(){
        that.z_index--;
        if(that.z_index < 0){//注意这里的算法，是小于而不是等于
            that.z_index = that.imgList.length - 1;
        }
        that.renderImg(that.z_index);
        /*console.log(z_index);*/
    };
    //设置右边的点击事件
    this.rightBtn.onclick = function(){
        that.z_index++;
        if(that.z_index>= that.imgList.length){
            that.z_index = 0;
        }
        that.renderImg(that.z_index);
        /*console.log(z_index);*/
    };

    //设置小圆球的控制方法
    //.forEach(function(){})这里面会有一个回调函数是必须写的
    this.circleList.forEach(function (item, index) {
        //console.log(item);
        //console.log(index);
        item.onclick = function () {
            that.z_index = index;
            //注意!!!
            //这里的that.renderImg(index),是会报错的,因为形参不对
            that.renderImg(that.z_index)
        }
    });

    //自动播放
    /*this.autoplay1 =setInterval(function () {
        that.z_index++;
        if(that.z_index>=that.imgList.length){
            that.z_index = 0;
        }
        that.renderImg(that.z_index);
    },2000)*/

}
//类方法-->可以考虑在原形上设置一个类方法
Swiper.prototype.renderImg = function(z_index){
    var that = this;
    this.imgList.forEach(function(item,index){
        //console.log('第'+ index +'个内容',item);
        //输出的是具体的标签内容
        //会连续输出3次，直到输出完所有的内容
        //item输出内容，index输出索引值
        /*console.log('索引值'+index);//标签内容所在数组的索引值*/
        if(that.z_index == index){
            /*console.log(z_index === index);//结果为true*/
            that.imgList[z_index].style.zIndex = '10';
            that.imgList[z_index].style.opacity = '1';
            that.circleList[index].className = 'active';//注意这里的写法，这里引入的是它所属的索引值
        }else{
            item.style.zIndex = '0';
            item.style.opacity = '0';
            that.circleList[index].className = 'circle';
        }
    })
};