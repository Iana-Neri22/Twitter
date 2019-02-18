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
/*A cor não limpa sem o refresh, arrumar isso*/
/*Talvez usar o event listener ajude?*/ 
function charcountupdate() {
    let str = document.getElementById("tweet").value;
    let characters = 140;
      let lng = characters - str.length;
      document.getElementById("contador").innerHTML = lng;

      if(str.length >=120 && str.length<=129){
        contador.style.color = '#ffa500';
      }

      if(str.length >=130){
        contador.style.color = '#ff0000';
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