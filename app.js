let but=document.querySelector("button");
function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=(evt)=>{
        console.log(evt);
    }
    recognition.start();
}
but.addEventListener("click",voice);
