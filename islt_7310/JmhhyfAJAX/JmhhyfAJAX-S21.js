// Majority is Lecture/TA help below

var middleDiv = document.getElementById("midContain");
var rightDiv = document.getElementById("rightContain");
var manifest = "";
var cameraDictionary = {}
var slideIndex = 1;
var innerCarousel = document.getElementById("slideshow-container");


function fetchManifest(){
    
    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function(){
        
        if(xmlHttp.status == 200) {
            var response = xmlHttp.responseText;
            
            manifest = JSON.parse(response);
            
            manifest = (manifest['photo_manifest'].photos);
            
            let i;
            for(i = 0; i < manifest.length; i++) {
                cameraDictionary[manifest[i].sol] = manifest[i].cameras;
            }
            //console.log(cameraDictionary);
        }
    }
    
    xmlHttp.open("GET", "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity?api_key=sd03DYZF16up4UvGbziXb0oYjWcTm1arqDwdZxa7");
    
    xmlHttp.send();
}

function fetchCameras(){
    var sol = document.getElementById("marsSol").value;
    var cameraList = cameraDictionary[sol];
    console.log(cameraList);
    
    document.getElementById("marsCam").innerHTML = "                    <option value=''>Please Select a Camera</option>";
    
    if(cameraList == null){
        alert("Error, no photos for this Sol or Camera");
    }
    else{
        for(var i = 0; i < cameraList.length; i++){
        document.getElementById("marsCam").innerHTML += '<option value="'+cameraList[i]+'">'+cameraList[i]+'</option>';
        }
    }
}


function roverSubmit(){
    var imgList
    
    innerCarousel.innerHTML = '<p class="load">Loading...</p>';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function(){
        
        if (xmlHttp.status == 200){
            var response = xmlHttp.responseText;
            
            imgList = JSON.parse(response);
            
            imgList = (imgList['photos']);
            console.dir(imgList);
            
            
            innerCarousel.innerHTML = '<a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a>';
            
            
            for(var i = 0; i < imgList.length; i++){
                console.log(imgList[i].img_src);
                
                var itemString = '<div class="mySlides"><h4 class="picTitle">Opportunity Photos</h4><br>';
                
                itemString += '<img class="appear" src="' + imgList[i].img_src + '" alt="First slide">';
                
                itemString += '</div>';
                
                innerCarousel.innerHTML += itemString;
                        
            }
            var rightContent = "<h4 class='undLine'>Rover: Opportunity</h4>" +"<br><h5 class='undLine'>" + "Launch Date: 6-7-2003" +"<br><br><h5 class='undLine'>Description:</h5>"+"<p>"+ "Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed 'Oppy', is a robotic rover that was active on Mars from 2004 until the middle of 2018. Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A) touched down on the other side of the planet. With a planned 90- sol duration of activity (slightly less than 92.5 Earth days), Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to exceed its operating plan by 14 years, 46 days (in Earth time), 55 times its designed lifespan. By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles)." +"</p>" ;
            
            rightDiv.innerHTML = rightContent;
                
                
            showSlides(slideIndex);
           
        }
    
    }
    xmlHttp.open("GET", "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol="+document.getElementById("marsSol").value+"&camera="+document.getElementById("marsCam").value+"&api_key=sd03DYZF16up4UvGbziXb0oYjWcTm1arqDwdZxa7", "true");
    
    xmlHttp.send();
}


function apodSubmit() {
    
    var dateGet = document.getElementById("apodDate").value;
    console.log(dateGet);
    
    var selected = new Date(dateGet);
    var now = new Date();
    
    console.log(now);
    
    if (selected > now) {
      alert("Please Select a Current or Past date");
        
    }
    else{
        
        var xmlHttp = new XMLHttpRequest();
    
        xmlHttp.onload = function() {
            if (xmlHttp.status == 200) {
                
                var apodXML = xmlHttp.responseXML;
                
                innerCarousel.innerHTML = '<a class="prev" onclick="apodSlides(-1)">&#10094;</a><a class="next" onclick="apodSlides(1)">&#10095;</a>';

                var rightContent = "<h4 class='undLine'>Title:</h4><h4>"+apodXML.getElementsByTagName("title")[0].innerHTML+"</h4><br><h5 class='undLine'>Date:"+apodXML.getElementsByTagName("date")[0].innerHTML+"<br><h5 class='undLine'>Description:</h5>"+"<p>"+apodXML.getElementsByTagName("explanation")[0].innerHTML+"</p>" 

                rightDiv.innerHTML = rightContent;
                
                innerCarousel.innerHTML += "<h4 class='picTitle'>Astronomy Photo of the Day</h4><br><img src='"+apodXML.getElementsByTagName("url")[0].innerHTML+"'alt='apod' class='appear'>";
            }
        };

    

        xmlHttp.open("GET", "https://apod.treyshaw.com:5000/v1/apod/?date=" + dateGet + "&api_key=sd03DYZF16up4UvGbziXb0oYjWcTm1arqDwdZxa7");

        xmlHttp.send();
    } 
}

//TA Help 

function apodSlides(n){
    var dateGet = document.getElementById("apodDate");
    dateGet.stepUp(n);
    apodSubmit();
}

// Help from https://www.w3schools.com/howto/howto_js_slideshow.asp BELOW

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  

  slides[slideIndex-1].style.display = "block";
}
    
// Lecture/TA Help Above 