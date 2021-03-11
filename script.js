function searchvideos()
{

var input = document.getElementById("search").value

var videos = document.getElementById("videos")

var video =''

var data = fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBEdotVEC4aeKRkI1sdFfOcOZH5Myu3k-A&type=video&q=${input}`)

data.
then(function(response){
    return response.json()
})
.then(function(obj){
    obj.items.forEach(item => {
        video = `
        <iframe width="420" height="315" src = "http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen> </iframe>`
        videos.innerHTML += video;
    });
    
    
})

}



    
