/////////////////////////// 
//////////////////////////
// Timeline slider ////
///////////////////////////
///////////////////////////



var updateInterval;        
var sliderID
var twnID







        
function animationSlider(twn){
  twnID =twn;
  var animDura = twn.duration(); 
  var w =document.querySelector("#mainContent").offsetWidth;
  var h = document.querySelector('#mainContent').offsetHeight;


  var dimension = [w,h]
var body_ = document.getElementsByTagName("BODY")[0]
  
  body_.style.width="800px";
  body_.style.height="800px";



  var localPreview = document.querySelector("#_localPreview");

  
  var container = document.createElement("div")
  container.setAttribute("id","container");
  
  document.body.appendChild(container);
  let containerDiv = document.querySelector("#container");
   containerDiv.style.width = w +"px";
   containerDiv.style.height = "50px";
   containerDiv.style.overflow = "hidden";
   containerDiv.style.position = "relative";
   containerDiv.style.top = (h+1)+"px";
   containerDiv.style.backgroundColor="darkgray"

  


  
    var slider = document.createElement("INPUT");
  slider.setAttribute("type", "range");
  slider.setAttribute("max", animDura);   
  slider.setAttribute("min", 0); 
  slider.setAttribute("value", 0);          
  slider.setAttribute("id","slider");
  slider.setAttribute("step",0.01);    
  slider.setAttribute("onChange","updatePause()")  
  containerDiv.appendChild(slider);
   sliderID=document.querySelector("#slider"); 
       sliderID.style.width=(w-(w*0.3))+"px"
       sliderID.style.position="absolute";        
       sliderID.style.top="0px"; 
       sliderID.style.right="0px";
       // slicerID.style.color="black"


  sliderID.addEventListener("click", function(){
        pauseContainer.style.display ="none";
         playContainer.style.display ="block";
         twn.pause(sliderID.value);

    
  })

  sliderID.addEventListener("mousemove", function(){
                   twn.pause(sliderID.value);
                   pauseContainer.style.display ="none";
                   playContainer.style.display ="block";
                  var timelineContainer = document.querySelector("#timelineCounter");
                   var tweenTime = twn.time();
                   var twoDecimal =tweenTime.toFixed(2);
        timelineContainer.innerHTML = twoDecimal;
                 clearInterval(updateInterval);

    
  })
  


  
/// playbutton

    var playDiv = document.createElement("div");
    playDiv.setAttribute("id","playContainer");
    containerDiv.appendChild(playDiv);
    
    var playContainer = document.querySelector('#playContainer');
     playContainer.style.width="23px";
     playContainer.style.top="0px";
     playContainer.style.left="10px";
     playContainer.style.position="absolute";
     playContainer.style.display="none";
     playContainer.style.cursor="pointer";
    playContainer.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16.912" viewBox="0 0 10 16.912"><path id="Path_1" data-name="Path 1" d="M463.078,326.535l10,8.456-10,8.456Z" transform="translate(-463.078 -326.535)"/></svg>'

/// pause buttom
 var pauseDiv = document.createElement("div");
    pauseDiv.setAttribute("id","pauseContainer");
    containerDiv.appendChild(pauseDiv);
    
    var pauseContainer = document.querySelector('#pauseContainer');
     pauseContainer.style.width="23px";
     pauseContainer.style.top="0px";
     pauseContainer.style.left="10px";
     pauseContainer.style.position="absolute";
     pauseContainer.style.cursor="pointer";
    pauseContainer.innerHTML='<svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13"><rect id="Rectangle_1" data-name="Rectangle 1" width="4" height="13"/><rect id="Rectangle_2" data-name="Rectangle 2" width="4" height="13" transform="translate(6)"/></svg>'
    
// timer 
var timelineCOunt = document.createElement("div");
    timelineCOunt.setAttribute("id","timelineCounter");
    containerDiv.appendChild(timelineCOunt);

var timelineContainer = document.querySelector("#timelineCounter");
     timelineContainer.style.width=(w*0.05)+"px";
     timelineContainer.style.top="0px";
     timelineContainer.style.left="30px";
     timelineContainer.style.position="absolute"
      timelineContainer.style.fontSize="14px"
  
     timelineContainer.innerHTML =twn.time()



    pauseContainer.addEventListener("click", function(){
        twn.pause(sliderID.value);
         pauseContainer.style.display ="none";
         playContainer.style.display ="block"

    
  });

  

  
    playContainer.addEventListener("click", function(){
        twn.play();
         pauseContainer.style.display ="block";
         playContainer.style.display ="none";
          callConst(slider,twn);

    
  });
   

    var myTimeout = setTimeout(callConst(slider,twn), 5);

}




    function callConst(v,twB){
              updateInterval= setInterval(function(){
                  v.value=twB.time();
                  var timelineContainer = document.querySelector("#timelineCounter");
                   var tweenTime = twB.time();
                   var twoDecimal =tweenTime.toFixed(2);
                  timelineContainer.innerHTML = twoDecimal;
              }, 10);
    }
   
function updateSlider(t){

    sliderID.setAttribute("value",t.time());

}      

function updatePause(){
  twnID.pause(sliderID.value);
}