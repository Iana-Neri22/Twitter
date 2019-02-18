/*Linha de código que desativa o botão enviar*/ 
document.getElementById('sendTweet').disabled = true;

function twittar(){
    let tweet = document.getElementById("tweet").value;
    document.getElementById("myTweet").innerHTML = tweet;
    }

function typing(){
    let texto = document.getElementById("tweet").value;
        if(texto.length > 0) { 
            document.getElementById('sendTweet').disabled = false; 
        } else { 
            document.getElementById('sendTweet').disabled = true;
        }
}

function charcountupdate() {
    let str = document.getElementById("tweet").value;
    let characters = 140;
      let lng = characters - str.length;
      document.getElementById("contador").innerHTML = lng;

      if(str.length >=120){
          
      }

      if(str.length >= 140){
        document.getElementById('sendTweet').disabled = true;
      }
  }

/*let botaoEnviar = document.getElementById("sendTweet")
function twittar(){
    let tweet = document.getElementById("tweet").value;
    document.getElementById("myTweet").innerHTML = tweet;
    }
botaoEnviar.addEventListener("click", twittar);



function stoppedTyping(){
    let texto = getElementById("tweet").value;

    if(texto.value.length > 0) { 
        document.getElementById('sendTweet').disabled = false; 
    } else { 
        document.getElementById('sendTweet').disabled = true;
    }
}




//document.getElementById('sendTweet').disabled = true;

/*function stoppedTyping(){
    if(this.value.length > 0) { 
        document.getElementById('sendTweet').disabled = false; 
    } else { 
        document.getElementById('sendTweet').disabled = true;
    }
}
function verify(){
    if (tweet === null){
        alert("Put some text in there!")
        return
    }
    
}*/