window.addEventListener("load",()=>{
    StealJokeWithFetch();
    document.getElementById("back").src=images[0];
});
var images=["./images/chuck.png",
"./images/chuck_norris_PNG18.png",
"./images/chuck_norris_PNG26.png"];
async function StealJokeWithFetch(){
    const JokeSourse ='https://pereselakilya.github.io/Chusks-Jokes/Random Jokes/JokeSource.json';
    const joke=await fetch(JokeSourse);
    const jokeText=await joke.json();
    var jokesArr=jokeText["text"];
    document.getElementById("joke").innerText=jokesArr[Math.floor(Math.random()*jokesArr.length)].toString();
    document.getElementById("back").src=images[Math.floor(Math.random()*images.length)];
    document.body.style.backgroundColor ="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}
