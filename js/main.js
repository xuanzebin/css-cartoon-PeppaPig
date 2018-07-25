!function(){

let result=`#code{
    padding:20px;
    background:#FFC4E0;
    font-family:Monaco;
}
.wrapper{
    background:#89B9F7;
    height:inherit;
    display:flex;
    justify-content:center;
    align-items:center;
}
/* 高亮一下代码 */
.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

.PeppaPig{
    position:relative;
}
.mainHead{
    width:160px;
    height:160px;
    border:5px #E795C0 solid;
    background:#FFC4E0;
    -webkit-border-radius:55%;
    border-radius:55% 45% 45% 55%/60% 55% 45% 40%;
    position:absolute;
}
.eye{
    width:31px;
    height:31px;
    border:5px #E795C0 solid;
    border-radius:50%;
    background:white;
    position:absolute;
    z-index:1;
}
.eye.left{
    left:35px;
    top:-5px;
}
.eye.right{
    left:71px;
    top:12px;
}
.eye::before{
    content:'';
    display:block;
    position:absolute;
    top:5px;
    left:2px;
    width:11px;
    height:11px;
    background:#000000;
    border-radius:50%;
}
.mouse{
    position:absolute;
    bottom:30px;
    left:50%;
    margin-left:-55px;
    width:94px;
    height:150px;
    border:5px #EF3F85 solid;
    border-radius:0% 0% 100% 100%;
    border-top-color:transparent;
    border-right-color:transparent;
    border-left-color:transparent;
    transform:rotate(25deg)
}
.cheek{
    position:absolute;
    right:16px;
    bottom:40px;
    width:50px;
    height:50px;
    border-radius:50%;
    background:#F5AACB;
}
.nose{
    position:absolute;
    right:33%;
    margin-top:3px;
    width:135px;
    height:95px;
    border:5px solid #E795C0;
    border-radius:100% 0% 0% 100%;
    background:#FFC4E0;
    border-right-color:transparent;
    transform-origin:top right;
    transform:rotate(25deg)
}
.nose::before{
    position:absolute;
    content:'';
    display:block;
    width:60px;
    height:50px;
    background:#FFC4E0;
    left:58%;
    top:48%;
}
.noseEnd{
    position:absolute;
    left:-5px;
    top:50%;
    margin-top:-33px;
    width:50px;
    height:66px;
    border:5px solid #E795C0;
    border-radius:50%;
    background:#FFC4E0;
}
.noseEnd::before,.noseEnd::after{
    content:'';
    display:block;
    width:8px;
    height:8px;
    border-radius:50%;
    background:#E795C0;
}
.noseEnd::before{
    position:absolute;
    top:50%;
    margin-top:-4px;
    left:8px;
}
.noseEnd::after{
    position:absolute;
    top:50%;
    margin-top:-4px;
    right:12px;
}
.ear{
    width:25px;
    height:44px;
    border:5px solid #E795C0;
    background:#FFC4E0;
    border-radius:50% 50% 20% 20%/40% 40% 60% 60%;
    z-index:-1; 
}
.ear.right{
    position:absolute;
    right:25px;
    top:-29px;
    transform:rotate(25deg);
    z-index:-2; 
}
.ear.left{
    position:absolute;
    right:60px;
    top:-44px;
    transform:rotate(10deg)
}
.pigBody{
    position:relative;
    width:172px;
    height:131px;
    z-index:1;
}

.mainBody{
    width:172px;
    height:131px;
    border:5px solid #EE5253;
    border-radius:50% 50% 0% 0%/100% 100% 0% 0%;
    background:#F8756D;
    position:absolute;
    top:0;
    margin-top:-41px;
}
.hand{
    width:77px;
    height:7px;
    background:#FFC4E0;
    border-radius:5px;
}
.hand.left{
    position:absolute;
    right:89%;
    bottom:80px;
    margin-bottom:41px;
}
.hand.right{
    position:absolute;
    left:88%;
    bottom:80px;
    transform-origin:left center;
    transform:rotate(30deg);
    margin-bottom:41px;
}   
.hand.left::before,
.hand.left::after,
.hand.right::before,
.hand.right::after{
    opacity: 1;
    display:block;
} 
.foot{
    position:absolute;
    top:100%;
    width:8px;
    height:40px;
    background:#FFC4E0;
    margin-top:-45px;
    z-index:-2;
}
.foot::before{
    content:'';
    display:block;
    width:46px;
    height:12px;
    background:#333333;
    position:absolute;
    bottom:-3px;
    right:0;
    border-radius:20% 80% 80% 20%/50% 50% 30% 50%;
}
.foot.left{
    left:45px;
}
.foot.right{
    right:45px;
}
.shadow{
    width:167px;
    height:32px;
    background:#678BB9;
    border-radius:50%;
    position:absolute;
    top:100%;
    left:-12px;
    z-index:-3;
    margin-top:-23px;
}
/* 至此，我们的小猪佩奇就画完啦~~ */
.PeppaPig{
    transform:translateY(90px);
}
#peppapigImg{
    display:block;
    opacity: 1;
}
`
let n=0
let during=0
let id=setTimeout(function fn1(){
    n+=1
    code.innerHTML=Prism.highlight(result.substring(0,n), Prism.languages.css, 'css');
    styleCode.innerHTML=result.substring(0,n)
    code.scrollTop=code.scrollHeight
    if (n<result.length){
        id=setTimeout(fn1,during)
    }
},during)

$('.endButton').on('click',(buttonTarget)=>{
    clearTimeout(id)
    code.innerHTML=Prism.highlight(result.substring(0,result.length-1), Prism.languages.css, 'css');
    styleCode.innerHTML=result.substring(0,result.length-1)
    code.scrollTop=code.scrollHeight
})

if ('ontouchstart' in document.body) {
    $('.head').on('touchstart',()=>{
        $('.hand.right').addClass('active')
    })
    $('.head').on('touchend',()=>{
        $('.hand.right').removeClass('active')
    })
} else {
    $('.head').on('mouseenter',()=>{
        $('.hand.right').addClass('active')
    })
    $('.head').on('mouseleave',()=>{
        $('.hand.right').removeClass('active')
    })
}

}.call()
