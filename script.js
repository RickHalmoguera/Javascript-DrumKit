const playSound= (e)=>{
    if( e.code=="KeyA"){
        const audio= new Audio("./sounds/clap.wav")
        audio.play()
        clapKey.classList.add("playing")
        setTimeout(()=>{clapKey.classList.remove("playing")},20)

    }else if(e.code=="KeyS"){
        const audio= new Audio("./sounds/hihat.wav")
        audio.play()
        hihatKey.classList.add("playing")
        setTimeout(()=>{hihatKey.classList.remove("playing")},20)
    }else if(e.code=="KeyD"){
        const audio= new Audio("./sounds/kick.wav")
        audio.play()
        kickKey.classList.add("playing")
        setTimeout(()=>{kickKey.classList.remove("playing")},20)
    }else if(e.code=="KeyF"){
        const audio= new Audio("./sounds/openhat.wav")
        audio.play()
        openHatKey.classList.add("playing")
        setTimeout(()=>{openHatKey.classList.remove("playing")},20)
    }else if(e.code=="KeyG"){
        const audio= new Audio("./sounds/boom.wav")
        audio.play()
        boomKey.classList.add("playing")
        setTimeout(()=>{boomKey.classList.remove("playing")},20)
    }else if(e.code=="KeyH"){
        const audio= new Audio("./sounds/ride.wav")
        audio.play()
        rideKey.classList.add("playing")
        setTimeout(()=>{rideKey.classList.remove("playing")},20)
    }else if(e.code=="KeyJ"){
        const audio= new Audio("./sounds/snare.wav")
        audio.play()
        snareKey.classList.add("playing")
        setTimeout(()=>{snareKey.classList.remove("playing")},20)
        
    }else if(e.code=="KeyK"){
        const audio= new Audio("./sounds/tom.wav")
        audio.play()
        tomKey.classList.add("playing")
        setTimeout(()=>{tomKey.classList.remove("playing")},20)
    }else if(e.code=="KeyL"){
        const audio= new Audio("./sounds/tink.wav")
        audio.play()
        tinkKey.classList.add("playing")
        setTimeout(()=>{tinkKey.classList.remove("playing")},20)
    }
}

window.addEventListener("keypress",playSound);
