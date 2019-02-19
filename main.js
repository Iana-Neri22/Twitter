/*Linha de código que desativa o botão enviar*/ 
document.getElementById('sendTweet').disabled = true;
const typing = () => {
    let texto = document.getElementById("tweet").value;
        if(texto.length > 0) { 
            document.getElementById('sendTweet').disabled = false; 
        } else { 
            document.getElementById('sendTweet').disabled = true;
        }
}

const counter = () => {
    let str = document.getElementById("tweet").value;
    let characters = 140;
      let lng = characters - str.length;
      document.getElementById("contador").innerHTML = lng;

      if(str.length <120){
          contador.style.color = "#000";
      }

      if(str.length >=120 && str.length<=129){
        contador.style.color = '#ffa500';
      }

      if(str.length >=130){
        contador.style.color = '#ff0000';
      }

      if(str.length > 140){
        document.getElementById('sendTweet').disabled = true;
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
}

let sendTweet= document.getElementById("sendTweet");
sendTweet.addEventListener("click", twittar);
sendTweet.addEventListener("click", clean);

