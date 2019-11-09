var xx = {
    eventAll:{

    },
    //设置初始化
    init:function(selector){
        selector.eventAll = {};
        selector.addEvent = this.addEvent;
        selector.emit = this.emit;
        selector.removeEvent = this.removeEvent;
        selector.touchData = {};
        //判断触发方向
        selector.ontouchstart = function (e) {
            //console.log(e.touches[0].pageX);
            this.touchData.startX = e.touches[0].pageX;
            this.touchData.startY = e.touches[0].pageY;
        };
        selector.ontouchmove = function (e) {
            this.touchData.endX = e.touches[0].pageX;
            this.touchData.endY = e.touches[0].pageY;
        };
        selector.ontouchend = function (e) {
            this.resultX = this.touchData.endX-this.touchData.startX;
            this.resultY = this.touchData.endY-this.touchData.startY;
            if ((Math.abs(this.resultX)>Math.abs(this.resultY)) && (Math.abs(this.resultX)>100)){
                if (this.resultX < 0) {
                    this.emit('swiperLeft','hello world');
                }else{
                    this.emit('swiperRight',e);
                }
            }else if ((Math.abs(this.resultX) < Math.abs(this.resultY)) && (Math.abs(this.resultY)>100)){
                if (this.resultY<0){
                    this.emit('swiperTop','hello world')
                } else{
                    this.emit('swiperBottom','ADM yes')
                }
            }
        }
    },
    addEvent:function (eventName,callBackFn) {

        if (this.eventAll[eventName] == undefined){
            this.eventAll[eventName] = [];
        }
        this.eventAll[eventName].push(callBackFn)
    },
    emit:function (eventName,eventMsg) {
        if (this.eventAll[eventName] != undefined){
            this.eventAll[eventName].forEach(function (item,index) {
                item(eventMsg);
            })
        }
    },
    removeEvent:function (eventName, callBackFn) {
        var that = this;
        this.eventAll[eventName].forEach(function (item, index) {
            if (item == callBackFn) {
                that.eventAll[eventName].splice(index,1)
            }
        })
    }
};