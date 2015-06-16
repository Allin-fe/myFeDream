/**
 * Created by Administrator on 2015/6/16.
 */
window.onload = function(){
    imgLocation("container","box");
    var imgData = {"data":[{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"}]};
    window.onscroll = function () {
        if(checkFlag()){
            var cparent = document.getElementById("container");
            for(var i = 0;i<imgData.data.length;i++){
                var ccontent = document.createElement("div");
                ccontent.className = "box";
                cparent.appendChild(ccontent);
                var boximg = document.createElement("div");
                boximg.className = "box_img";
                ccontent.appendChild(boximg);
                var img = document.createElement("img");
                img.src = "images/"+imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container","box");
        }
    }
}

function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent,"box");
    var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
    var scrollTop1 = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight < scrollTop1+pageHeight){
        return true;
    }
    console.log(lastContentHeight+":"+scrollTop1+":"+pageHeight);
}


function imgLocation(parent,content){
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    //console.log(document.documentElement.clientWidth);
    //console.log(imgWidth);
    //console.log(num);
    cparent.style.cssText="width:"+imgWidth*num+"px;margin:0 auto";

    var BoxHeightArr=[];
    for(var i = 0;i < ccontent.length;i++){
        if(i<num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        }else{
            var minheight = Math.min.apply(null,BoxHeightArr);
            var minIndex = getHeightLocation(BoxHeightArr,minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] +ccontent[i].offsetHeight;
        }
    }

}
function getHeightLocation(BoxHeightArr,minheight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]==minheight)
        return i;
    }

}

function getChildElement(parent,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i = 0;i < allcontent.length; i++){
        if(allcontent[i].className == content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}