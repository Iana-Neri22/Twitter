/*Linha de código que desativa o botão enviar*/ 
document.getElementById('sendTweet').disabled = true;
const typing = () => {
    const text = document.getElementById("tweet").value;
        if(text.length > 0 && text.length <=140) { 
            document.getElementById('sendTweet').disabled = false; 
        } 
        else{
          document.getElementById('sendTweet').disabled = true;
        }

}

const counter = () => {
    const str = document.getElementById("tweet").value;
      let lng =  140 - str.length;
      document.getElementById("contador").innerHTML = lng;

      if(str.length <120){
          contador.style.color = "#008000";
      }

      if(str.length >=120 && str.length<=129){
        contador.style.color = '#ffa500';
      }

      if(str.length >=130){
        contador.style.color = '#ff0000';
      } 
  }

let tweet = document.getElementById("tweet");
tweet.addEventListener("keyup", typing);
tweet.addEventListener("keyup", counter);

const twittar = () =>{
    let tweet = document.getElementById("tweet").value;
    document.getElementById("myTweet").innerHTML = tweet;
    }

const clean = () =>{
    document.getElementById("tweet").value = " ";
    document.getElementById('sendTweet').disabled = true;
    document.getElementById("contador").innerHTML = 140;
}

let sendTweet= document.getElementById("sendTweet");
sendTweet.addEventListener("click", twittar);
sendTweet.addEventListener("click", clean);
sendTweet.addEventListener("click", horario);

function autoResize()
    {
        objTextArea = document.getElementById('tweet');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }

function horario(){
    var data = new Date ();
    var horas = data.getHours ();
    var minutos = data.getMinutes ();

    if (horas < 10){
        horas = "0" + horas;
    }
    if (minutos < 10){
        minutos = "0" + minutos;
    }

    document.getElementById("horario").innerHTML = horas + ":" + minutos
}