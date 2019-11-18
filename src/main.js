// 将存html的代码同时存到给用户看的盒子和存样式的style盒子中
import str from './style.js'
let player = {
    string: '',
    n: 0,
    time: 100,
    id: undefined,
    events: {
        '#pauseBtn': 'pause',
        '#playBtn':  'play',
        '#slowBtn': 'slow',
        '#normalBtn': 'normal',
        '#fastBtn': 'fast'
    },
    ui: {
        html: document.querySelector('#html'),
        style: document.querySelector('#style')
    },
    init(){
        player.bindEvent()
        player.play()

    },
    bindEvent() {
        for(let key in player.events) {
            if(player.events.hasOwnProperty(key)){
                document.querySelector(key).onclick = player[player.events[key]]
            }
        }
    },
    run() {
        if(player.n >= str.length){
            clearInterval(player.id)
            return
        }
        if(str[player.n] === '\n'){
            player.string += '<br>'
        }else {
            player.string += str[player.n]
        }
        player.ui.html.innerHTML = player.string
        player.ui.html.scrollTop = 99999 //如果设置了超出这个容器可滚动的值, scrollTop 会被设为最大值.
        player.n += 1
        player.ui.style.innerHTML = str.substring(0, player.n)
    },
    play() {
        player.id = setInterval(player.run, player.time)
    },
    pause() {
        clearInterval(player.id)
    },
    slow() {
        player.pause()
        player.time = 200
        player.play()
    },
    normal() {
        player.pause()
        player.time = 100
        player.play()
    },
    fast(){
        player.pause()
        player.time = 0
        player.play()
    }

}

player.init()


