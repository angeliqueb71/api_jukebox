// console.log("hello");

SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

function Jukebox(){
  this.player = SC.stream("/tracks/274942852")
}

var jukebox=new Jukebox();

SC.get("/tracks/274942852").then(function(response){
  document.querySelector("#sanz").setAttribute("href", response.permalink_url);
  document.querySelector("#partio").setAttribute("href", response.user.permalink_url);
  document.getElementById("genre").innerHTML = "Genre: " + response.genre;
  document.getElementById("description").innerHTML = " : " + response.description;
  document.getElementById("cover").src = response.artwork_url;
  document.getElementById("release").innerHTML = "Release Date: " + response.release_month + '/' + response.release_day + '/'+ response.release_year;
  console.log(response);
});

var playButton=document.querySelector("#play");
var pauseButton=document.querySelector("#pause");
var stopButton=document.querySelector("#stop");

Jukebox.prototype.play=function(){
  this.player.then(function(player){
    player.play();
  })
}


Jukebox.prototype.pause=function(){
  this.player.then(function(player){
    player.pause();
  })
}

Jukebox.prototype.stop=function(){
  this.player.then(function(player){
    player.pause();
  })
}


playButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.play();
})

pauseButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.pause();
})
stopButton.addEventListener("click",function(event){
  event.preventDefault();
  jukebox.stop();
})

// <div class="header__middle">
//   <div class="header__search" role="search">
//     <form class="headerSearch"><input class="headerSearch__input sc-input g-all-transitions-300" placeholder="Search" type="search" name="q" autocomplete="off" aria-label="Search" aria-autocomplete="list" aria-owns="searchMenuList">
// <button class="headerSearch__submit submit sc-ir" type="submit">Search</button>
// </form>
//   </div>
// </div>
