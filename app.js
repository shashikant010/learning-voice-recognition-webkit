let but=document.querySelector("button");
but.addEventListener("click",()=>{
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=(evt)=>{
        console.log(evt);
        document.getElementById("speechtotext").value = evt.results[0][0].transcript;
    }
    recognition.start();
});
