let str = `/*现在给大家在下面画一个皮卡丘*/
    /*首先皮卡丘的皮肤是黄色的*/
   .pikachu {
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgb(250, 230, 0);
    width: 100vw;
    height: 50vh;
}
/*现在画皮卡丘的鼻子*/
.nose {
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: 100px;
    border: 10px solid;
    border-color: black transparent black transparent;
    border-bottom: none;
}
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose .upNose {
    position: absolute;
    top: -17px;
    left: -10px;
    width: 20px;
    height: 8px;
    border: 1px solid black;
    border-radius: 10px 10px 0 0;
    background: black;
}
/*鼠标经过鼻子的时候,鼻子可以左右晃动*/
.nose:hover {
    transform-origin: center bottom;
    animation: wave 200ms linear infinite;
}
/*接下来画的时左右眼睛*/
.eye {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -32px;
    width: 64px;
    height: 64px;
    border: 3px solid black;
    border-radius: 50%;
    background: rgb(60, 60, 60);
}
.eye.left {
    transform: translateX(-100px);
}
.eye.right {
    transform: translateX(100px);
}

.eye::after {
    display: inline-block; /*伪元素默认为内联元素*/
    position: absolute;
    left: 10px;
    content: '';
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 3px solid black;
    border-radius: 50%;
}
/*现在是嘴巴的主场,首先画皮卡丘的嘴唇*/
.mouth {
    width: 180px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    top: 120px;
    overflow: hidden;
}
.mouth .up {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 1;
}
.mouth .up > div {
    border: 3px solid;
    position: absolute;
    top: 0px;
    width: 90px;
    height: 30px;
    background: rgb(250, 230, 0);
}
.mouth .up .left {
    left: 0;
    border-radius: 0 0 0 50px;
    border-color: transparent transparent black black;
    transform: rotate(-20deg);
}
.mouth .up .right {
    right: 0;
    border-radius: 0 0 50px 0;
    border-color: transparent black black black;
    transform: rotate(20deg);
}
.mouth .up .left::before {
    position: absolute;
    right: -3px;
    top: 0;
}
.mouth .up .right::before, .mouth .up .left::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 25px;
    background: rgb(250, 230, 0);
}
.mouth .up .right::before {
    position: absolute;
    left: -3px;
    top: 0;
}
/*接下来画的是皮卡丘的小舌头*/
.mouth .down {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 188px;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 3px solid black;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 1000px;
    border-radius: 88px / 390px;
    background: #9B000A;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    position: absolute;
    bottom: -50px;
    left: 50%;
    margin-left: -100px;
    background: #FF485F;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
/*嘴巴画好了,就可以进行最后一步,画皮卡丘的两个红脸蛋子,哈哈*/
.face {
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -45px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: red;
    border: 3px solid black;
}
.face.left {
    transform: translateX(-140px);
}
.face.right{
    transform: translateX(140px);
}
/*好啦,萌萌的皮卡丘就画好啦。*/
`
export default str