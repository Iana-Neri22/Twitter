/*function twittar(){
let tweet = document.getElementById("tweet").value;
document.getElementById("myTweet").innerHTML = tweet;
}*/
let botaoEnviar = document.getElementById("sendTweet")
function twittar(){
    let tweet = document.getElementById("tweet").value;
    document.getElementById("myTweet").innerHTML = tweet;
    }
botaoEnviar.addEventListener("click", twittar);