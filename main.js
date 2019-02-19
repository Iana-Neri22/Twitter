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
    const lng =  140 - str.length;
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

  const autoResize = () =>{
        const textArea = document.getElementById('tweet');
        while (textArea.scrollHeight > textArea.offsetHeight)
        {
            textArea.rows += 1;
        }
    }

let tweet = document.getElementById("tweet");
tweet.addEventListener("keyup", typing);
tweet.addEventListener("keyup", counter);
tweet.addEventListener("keydown", autoResize);

const twittar = () =>{
    let tweet = document.getElementById("tweet").value;
    document.getElementById("myTweet").innerHTML = tweet;
    }

const clean = () =>{
    document.getElementById("tweet").value = " ";
    document.getElementById('sendTweet').disabled = true;
    document.getElementById("contador").innerHTML = 140;
}

/*Criar a variavel das horas aqui fora = retorno do horario*/ 
const horario = () =>{
    let data = new Date ();
    let horas = data.getHours ();
    let minutos = data.getMinutes ();

    if (minutos < 10){
        minutos = "0" + minutos;
    }

    const horaTweet = document.getElementById("horario").innerHTML = horas + ":" + minutos
    return horaTweet;
}

let sendTweet= document.getElementById("sendTweet");
sendTweet.addEventListener("click", twittar);
sendTweet.addEventListener("click", clean);
sendTweet.addEventListener("click", horario);