 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=FdNBc6m84t4tfHShojKYDJ1lCAADU23yA1FF24Nk&date=${choice}`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.media_type == 'video'){ // if nasa media_type is a video, show video using video 'url' property
                document.querySelector('iframe').src = data.url 
            }
            else if (data.media_type == 'image'){ // if it is an img, set img to the src given in the 'hdurl' property 
                document.querySelector('img').src = data.hdurl
            }
            
            document.querySelector('h3').innerText = data.explanation // replace current h3 with the NASA photo explanation
            // if (document.querySelector("h3") == undefined){
            //     document.querySelector("h3").innerText = "No data found. Please select a later date."
            // }
        })
        .catch(err => {
            console.log("error" + err)})
        }
