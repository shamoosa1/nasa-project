// once the button is clicked, call the getFetch method
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value // store the date entered into choice
    
     // nasa url string interpolated into the format of yyyy/mm/dd as per NASA's API rules
    const url = `https://api.nasa.gov/planetary/apod?api_key=FdNBc6m84t4tfHShojKYDJ1lCAADU23yA1FF24Nk&date=${choice}`
    
    // convert the response into JSON format
    fetch(url) 
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.media_type == 'video'){ // if nasa media_type property is a video, set its url into the iframe html tag
                document.querySelector('iframe').src = data.url 
                document.querySelector('img').style.display = "none";
            }

            else if (data.media_type == 'image'){ // if media_type is an img, set img html tag to the src given in the 'hdurl' property 
                document.querySelector('img').src = data.hdurl
                document.querySelector('iframe').style.display = "none"; // do not display the videos from recent dates entered
            }
            
            // if there is no data on this date, display the msg from the API 
            if (data.explanation == undefined){ 
                document.querySelector("h3").textContent = data.msg
                document.querySelector('iframe').style.display = "none"; 
                document.querySelector('img').style.display = "none"; 
                // document.querySelector(".container").style.display = none;
            }
            // otherwise, display the explanation of the photo/img displayed
            else{ 
                document.querySelector('h3').innerText = data.explanation
            }
            // center all images and videos
            document.querySelector(".container",).setAttribute("align", "center")
            })
            
        .catch(err => {
            console.log("error" + err)})
        }
