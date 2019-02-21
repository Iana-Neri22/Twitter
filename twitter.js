const disableButton = () => document.querySelector('#sendTweet').disabled = true;
window.addEventListener("load", disableButton);

const typing = () => {
    const text = document.getElementById("tweet").value;
    const button = document.querySelector('#sendTweet')
        if(text.length > 0 && text.length <=140) { 
            button.disabled = false; 
        } 
        else{
          button.disabled = true; 
        }
}

const counter = () => {
    const str = document.getElementById("tweet").value.length;
    const lng =  140 - str;
      document.getElementById("contador").innerHTML = lng;

      if(str >=120 && str<=129){
        contador.style.color = '#ffa500';
      }

      else if(str >=130){
        contador.style.color = '#ff0000';
      } 

      else{
        contador.style.color = "#008000"
      }
  }

  const autoResize = () =>{
    const textArea = document.getElementById('tweet');
    while (textArea.scrollHeight > textArea.offsetHeight)
    {
        textArea.rows += 1;
    }
}

const tweet = document.querySelector('#tweet');
tweet.addEventListener("keyup", typing);
tweet.addEventListener("keyup", counter);
tweet.addEventListener("keydown", autoResize);

const clean = () =>{
    document.getElementById("tweet").value = " ";
    document.getElementById('sendTweet').disabled = true;
    document.getElementById("contador").innerHTML = 140;
    contador.style.color = "#008000"
}

const horario = () =>{
    let data = new Date ();
    let horas = data.getHours ();
    let minutos = data.getMinutes ();

    if (minutos < 10){
        minutos = "0" + minutos;
    }

    let horaTweet = horas + ":" + minutos
    return horaTweet;
}

const twittar = () =>{
    const tweet = document.getElementById("tweet").value;
    return tweet
    }

const printarTweet = () =>{

        let campo = document.createElement("textarea");
        campo.textContent = horario() + " " + twittar()
        campo.setAttribute("class", "txtAreaTweet");
        
        document.body.appendChild(campo)}
        
let sendTweet= document.getElementById("sendTweet");
sendTweet.addEventListener("click", printarTweet);
sendTweet.addEventListener("click", clean);