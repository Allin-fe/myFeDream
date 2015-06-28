/**
 * Created by Administrator on 2015/6/28.
 */
window.onload = function () {
    var oleft = document.getElementById("left");
    oleft.onmousemove = function (){
        startmove(0,10);
    };
    oleft.onmouseout = function () {
        startmove(-200,-10)
    }
};

var timer = null;
function startmove(otarget,speed){
    clearInterval(timer);

    var oleft = document.getElementById("left");
    timer = setInterval(function(){
        if(oleft.offsetLeft==otarget){
            clearInterval(timer);
        }else{
            oleft.style.left = oleft.offsetLeft+speed+"px";
        }

    },30);
}
