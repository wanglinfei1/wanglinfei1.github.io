/**
 * Created by Administrator on 2016/11/2.
 */
//commom
var json={};
function loadImage(arr,success){
    var count=0;
    for(var i=0; i<arr.length; i++){
        var oImg=new Image();
        (function(i){
            oImg.onload=function(){
                json[arr[i]]=this;
                count++;
                if(count==arr.length){
                    success&&success();
                }
            };
        })(i);
        oImg.src='img/img/'+arr[i]+'.png';
    }
}

function d2a(n){
    return n*Math.PI/180;
}
function a2d(n){
    return n*180/Math.PI;
}

function rnd(n,m){
    return parseInt(Math.random()*(m-n)+n);
}

//resource
var resource=['fish1','fish2','fish3','fish4','fish5','bottom','cannon1','cannon2','cannon3','cannon4','cannon5','cannon6','cannon7','bullet','coinAni1','coinAni2','web','coinText'];
//fish
var FISH_SIZE=[
    null,
    {w: 55, h: 37, collR: 17},
    {w: 78, h: 64, collR: 24},
    {w: 72, h: 56, collR: 20},
    {w: 77, h: 59, collR: 22},
    {w: 107, h: 122, collR: 29}
];
function Fish(type){
    this.x=0;
    this.y=0;
    this.type=type;
    this.rotate=0;
    this.move();
    this.count=0;
    this.speed=1;
    this.collR=FISH_SIZE[this.type].collR;
}
Fish.prototype.draw=function(gd){
    var w=FISH_SIZE[this.type].w;
    var h=FISH_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(json['fish'+this.type],
        0,h*this.count,w,h,
        -w/2,-h/2,w,h
    );
    if(this.rotate>90&&this.rotate<270){
        gd.scale(1,-1);
    }
    gd.restore();
};
Fish.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.x+=Math.cos(d2a(_this.rotate))*_this.speed;
        _this.y+=Math.sin(d2a(_this.rotate))*_this.speed;
    },30);
    setInterval(function(){
        _this.count++;
        if(_this.count==4){
            _this.count=0;
        }
    },200);
};
Fish.prototype.isIn=function(x,y){
    var a=this.x-x;
    var b=this.y-y;
    var c=Math.sqrt(a*a+b*b);
    if(c<this.collR){
        return true;
    }else{
        return false;
    }
};
//cannon
var CANNON_SIZE=[
    null,
    {w: 74, h: 74},
    {w: 74, h: 76},
    {w: 74, h: 76},
    {w: 74, h: 83},
    {w: 74, h: 85},
    {w: 74, h: 90},
    {w: 74, h: 94}
];
function Cannon(type){
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.type=type;
    this.cur=0;
    this.timer=null;
}
Cannon.prototype.draw=function(gd){
    var w=CANNON_SIZE[this.type].w;
    var h=CANNON_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(json['cannon'+this.type],
        0,h*this.cur,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
Cannon.prototype.emitChange=function(){
    var _this=this;
    clearInterval(this.timer);
    this.timer=setInterval(function(){
        _this.cur++;
        if(_this.cur==5){
            _this.cur=0;
            clearInterval(_this.timer);
        }
    },30);
};

//bullot
var BULLET_SIZE=[
    null,
    {x: 86, y: 0, w: 24, h: 26},
    {x: 62, y: 0, w: 25, h: 29},
    {x: 30, y: 0, w: 31, h: 35},
    {x: 32, y: 35, w: 27, h: 31},
    {x: 30, y: 82, w: 29, h: 33},
    {x: 0, y: 82, w: 30, h: 34},
    {x: 0, y: 0, w: 30, h: 44}
];
function Bullet(type){
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.type=type;
    this.move();
    this.speed=this.type*2;
}
Bullet.prototype.draw=function(gd){
    var x=BULLET_SIZE[this.type].x;
    var y=BULLET_SIZE[this.type].y;
    var w=BULLET_SIZE[this.type].w;
    var h=BULLET_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(json['bullet'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
Bullet.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.x+=Math.sin(d2a(_this.rotate))*_this.speed;
        _this.y-=Math.cos(d2a(_this.rotate))*_this.speed;
    },30);
};
//coin
function Coin(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.move();
    this.cur=0;
}
Coin.prototype.draw=function(gd){
    gd.save();
    gd.translate(this.x,this.y);
    switch(this.type){
        case 1:
        case 2:
        case 3:
            gd.drawImage(json['coinAni1'],
                0,60*this.cur,60,60,
                -30,-30,60,60
            );
            break;
        case 4:
        case 5:
            gd.drawImage(json['coinAni2'],
                0,60*this.cur,60,60,
                -30,-30,60,60
            );
            break;
    }
    gd.restore();
};
Coin.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.cur++;
        if(_this.cur==10){
            _this.cur=0;
        }
    },30);
    setInterval(function(){
        _this.x+=-_this.x/10;
        _this.y+=(650-_this.y)/10
    },30);
};
Coin.prototype.playSong=function(){
    var oA=new Audio();
    oA.src='img/snd/coin.wav';
    oA.play();
};
//web
var WEB_SIZE=[
    null,
    {x:333,y:373,w:87,h:86},
    {x:14,y:414,w:109,h:107},
    {x:179,y:369,w:124,h:126},
    {x:255,y:179,w:146,h:146},
    {x:2,y:245,w:160,h:154},
    {x:243,y:1,w:177,h:180},
    {x:23,y:23,w:197,h:197}
];
function Web(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.scale=1;
}
Web.prototype.draw=function(gd){
    var x=WEB_SIZE[this.type].x;
    var y=WEB_SIZE[this.type].y;
    var w=WEB_SIZE[this.type].w;
    var h=WEB_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    gd.drawImage(json['web'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
var FISH_SIZE=[
    null,
    {w: 55, h: 37, collR: 17},
    {w: 78, h: 64, collR: 24},
    {w: 72, h: 56, collR: 20},
    {w: 77, h: 59, collR: 22},
    {w: 107, h: 122, collR: 29}
];
function DieFish(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.cur=0;
    this.move();
}
DieFish.prototype.draw=function(gd){
    var w=FISH_SIZE[this.type].w;
    var h=FISH_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    if(this.rotate>90&&this.rotate<270){
        gd.scale(1,-1);
    }
    gd.drawImage(json['fish'+this.type],
        0,h*(this.cur+4),w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
DieFish.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.cur++;
        if(_this.cur==4){
            _this.cur=0;
        }
    },100);
};



