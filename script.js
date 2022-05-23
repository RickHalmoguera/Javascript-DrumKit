const playSound= (e)=>{
    if( e.code=="KeyA" || e.target.id == "clapKey"){
        
        const audio= new Audio("./sounds/clap.wav")
        audio.currentTime = 0
        audio.currentTime = 0
        audio.play()
        clapKey.classList.add("playing")
        setTimeout(()=>{clapKey.classList.remove("playing")},20)

    }else if(e.code=="KeyS" || e.target.id == "hihatKey"){
        const audio= new Audio("./sounds/hihat.wav")
        audio.currentTime = 0
        audio.play()
        hihatKey.classList.add("playing")
        setTimeout(()=>{hihatKey.classList.remove("playing")},20)
    }else if(e.code=="KeyD" || e.target.id == "kickKey"){
        const audio= new Audio("./sounds/kick.wav")
        audio.currentTime = 0
        audio.play()
        kickKey.classList.add("playing")
        setTimeout(()=>{kickKey.classList.remove("playing")},20)
    }else if(e.code=="KeyF" || e.target.id == "openHatKey"){
        const audio= new Audio("./sounds/openhat.wav")
        audio.currentTime = 0
        audio.play()
        openHatKey.classList.add("playing")
        setTimeout(()=>{openHatKey.classList.remove("playing")},20)
    }else if(e.code=="KeyG" || e.target.id == "boomKey"){
        const audio= new Audio("./sounds/boom.wav")
        audio.currentTime = 0
        audio.play()
        boomKey.classList.add("playing")
        setTimeout(()=>{boomKey.classList.remove("playing")},20)
    }else if(e.code=="KeyH" || e.target.id == "rideKey"){
        const audio= new Audio("./sounds/ride.wav")
        audio.currentTime = 0
        audio.play()
        rideKey.classList.add("playing")
        setTimeout(()=>{rideKey.classList.remove("playing")},20)
    }else if(e.code=="KeyJ" || e.target.id == "snareKey"){
        const audio= new Audio("./sounds/snare.wav")
        audio.currentTime = 0
        audio.play()
        snareKey.classList.add("playing")
        setTimeout(()=>{snareKey.classList.remove("playing")},20)
        
    }else if(e.code=="KeyK" || e.target.id == "tomKey"){
        const audio= new Audio("./sounds/tom.wav")
        audio.currentTime = 0
        audio.play()
        tomKey.classList.add("playing")
        setTimeout(()=>{tomKey.classList.remove("playing")},20)
    }else if(e.code=="KeyL" || e.target.id == "tinkKey"){
        const audio= new Audio("./sounds/tink.wav")
        audio.currentTime = 0
        audio.play()
        tinkKey.classList.add("playing")
        setTimeout(()=>{tinkKey.classList.remove("playing")},20)
    }
}

window.addEventListener("keypress",playSound);
window.addEventListener("touchstart",playSound)
window.addEventListener("click",playSound)
