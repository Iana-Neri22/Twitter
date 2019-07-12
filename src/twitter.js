window.addEventListener("load", () => document.querySelector("#sendTweet").disabled = true);

typing = () => {
  const text = document.getElementById("tweet").value;
  const button = document.querySelector("#sendTweet");
  if (text.length > 0 && text.length <= 140) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
};

counter = () => {
  const str = document.getElementById("tweet").value.length;
  const lng = 140 - str;
  document.getElementById("contador").innerHTML = lng;

  if (str >= 120 && str <= 129) {
    contador.style.color = "#ffa500";
  } else if (str >= 130) {
    contador.style.color = "#ff0000";
  } else {
    contador.style.color = "#008000";
  }
};

autoResize = () => {
  const textArea = document.getElementById("tweet");
  while (textArea.scrollHeight > textArea.offsetHeight) {
    textArea.rows += 1;
  }
};

const tweet = document.querySelector("#tweet");
tweet.addEventListener("keyup", typing);
tweet.addEventListener("keyup", counter);
tweet.addEventListener("keydown", autoResize);

clean = () => {
  document.getElementById("tweet").value = " ";
  document.getElementById("sendTweet").disabled = true;
  document.getElementById("contador").innerHTML = 140;
  contador.style.color = "#008000";
};

horario = () => {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();

  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  if (horas < 10) {
    horas = "0" + horas;
  }

  let horaTweet = horas + ":" + minutos;
  return horaTweet;
};

twittar = () => {
  const tweet = document.getElementById("tweet").value;
  return tweet;
};

printTweet = () => {
  let lista = document.getElementById("showTweets");

  let campo = document.createElement("textarea");
  campo.setAttribute("class", "txtAreaTweet");
  campo.textContent = horario() + " " + twittar();

  lista.insertBefore(campo, lista.childNodes[0]);
};

const sendTweet = document.getElementById("sendTweet");
sendTweet.addEventListener("click", printTweet);
sendTweet.addEventListener("click", clean);