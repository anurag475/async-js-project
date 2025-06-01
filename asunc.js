let searchbtn=Document.queryselector(".search")
let usernameinput=Document.queryselector(".usernameinp");
let card=document.querySelector(".card")


function getprofiledata(username){
return fetch(`https://api.github.com/users/${username}`).then(raw=>{
    if(!raw.ok) throw new Error("user not found");
    return raw.json();

}

)
}
function getprofilerepo(username)
{
return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw=>{
    if(!raw.ok) throw new error("data cant be fetched");
    return raw.json();
})
}
function decorateprofiledata(){
    let data=<div class="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-inner backdrop-blur-lg transition-all duration-300">
      <h2 class="text-2xl font-semibold mb-3 text-cyan-400">GitHub Data</h2>
      <p class="text-gray-300">After submitting the URL, GitHub profile details will appear here.</p>

      
      <div class="grid sm:grid-cols-2 gap-6 mt-6">
        <div class="bg-gray-900/60 p-4 rounded-xl">
          <p class="text-gray-400 text-sm">Name</p>
          <p class="font-medium text-white">John Doe</p>
        </div>
        <div class="bg-gray-900/60 p-4 rounded-xl">
          <p class="text-gray-400 text-sm">Username</p>
          <p class="font-medium text-white">johndoe</p>
        </div>
        <div class="bg-gray-900/60 p-4 rounded-xl">
          <p class="text-gray-400 text-sm">Public Repos</p>
          <p class="font-medium text-white">42</p>
        </div>
        <div class="bg-gray-900/60 p-4 rounded-xl">
          <p class="text-gray-400 text-sm">Followers</p>
          <p class="font-medium text-white">1280</p>
        </div>
      </div>
    </div>
  </div>

}
getprofilerepo("async").then(function(data){
    console.log(data);
})

searchbtn.addEventListener("click",function(){
   let username=usernameinput.value.trim();
    if (username.length>0){
        getprofiledata(username).then((data)=>{
            decorateprofiledata(data);
            
            

        });
    }
    else{
        alert();
    }

})

