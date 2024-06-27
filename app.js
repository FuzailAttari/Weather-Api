function getsearch(){
    var getValue = document.getElementById("search")

    
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getValue.value}&units=metric&appid=a9505dd1fdb18d8facefaee82de8a0bc`)
.then (function(data){
    return data.json()

})
.then (function(data){
    console.log(data)
    var getDiv =document.getElementById("showcard")
    getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> ${data.name}</h5>
    <p class="card-text"> Temperature ${data.main.temp}</p>
    <p class="card-text"> Feels like ${data.main.feels_like}</p>
  </div>
</div>`
    getValue.value= ""

})
.catch(function(err){
    console.log(err)

})
}





// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     document.getElementById("name").innerHTML = data.name;
//     document.getElementById("bio").innerHTML = data.bio;
//     document.getElementById("location").innerHTML = data.location;
//     document.getElementById("followers").innerHTML = data.followers;
//     document.getElementById("following").innerHTML = data.following;
//     document.getElementById("avatar").src = data.avatar_url;
//     })

