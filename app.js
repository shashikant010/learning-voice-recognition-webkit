let but=document.querySelector("button");
function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=(evt)=>{
        console.log(evt);
        document.getElementById("speechtotext").value = evt.results[0][0].transcript;
    }
    recognition.start();
    recognition.onend=()=>{
        recognition.start(); 
    }
}
but.addEventListener("click",voice());
