// Select The Start Game Button

document.querySelector(".control-buttons span").onclick = function () {

    // Prompt Window To Ask For Name
    var yourName = prompt("adınız neydi?");
  isim=yourName

    // If Name Is Empty
    if (yourName == null || yourName == "") {
  
      // Set Name To Unknown
    let yourName=  prompt("lütfen adınızı yazın")
  
    // Name Is Not Empty
    } else {
  
      // Set Name To Your Name
      document.querySelector(".name span").innerHTML = yourName;
  
    }
  
    // Remove Splash Screen
    document.querySelector(".control-buttons").remove();
    document.getElementById('playing').play();
    countdown()
  };
  

  // Effect Duration
  let duration = 1000;
  var trueanswer=0
  // Select Blocks Container
  let blocksContainer = document.querySelector(".memory-game-blocks");
  
  // Create Array From Game Blocks
  let blocks = Array.from(blocksContainer.children);
 
  // Create Range Of Keys
  // let orderRange = [...Array(blocks.length).keys()];
  
  let orderRange = Array.from(Array(blocks.length).keys());
  
  // console.log(orderRange);
  shuffle(orderRange);
  // console.log(orderRange);
  
  // Add Order Css Property To Game Blocks
  blocks.forEach((block, index) => {
  
    // Add CSS Order Property
    block.style.order = orderRange[index];
  
    // Add Click Event
    block.addEventListener('click', function () {
  
      // Trigger The Flip Block Function
      flipBlock(block);
      document.getElementById('click').play();
    });
  
  });
  
  // Flip Block Function
  function flipBlock(selectedBlock) {
  
    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped');
  
    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  
    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
  
      // console.log('Two Flipped Blocks Selected');
  
      // Stop Clicking Function
      stopClicking();
  
      // Check Matched Block Function
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  
    }
  
  }
  
  // Stop Clicking Function
  function stopClicking() {
  
    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');
  
    // Wait Duration
    setTimeout(() => {
  
      // Remove Class No Clicking After The Duration
      blocksContainer.classList.remove('no-clicking');
  
    }, duration);
  
  }
  
  // Check Matched Block
  function checkMatchedBlocks(firstBlock, secondBlock) {
  
    let triesElement = document.querySelector('.tries span');
  
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
     
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
      document.getElementById('success').play();
      trueanswer++
      
      if(trueanswer==10){
        setTimeout (
          function(){
            let win=document.querySelector(".win")
            win.style.display="block"
            let h1=document.querySelector(".win h1");
            h1.textContent="TEBRİKLER.."+ isim
            
          }
          ,2000)
      }
    
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);
  
      document.getElementById('fail').play();
  
    }
  
  }
  
  // Shuffle Function
  function shuffle(array) {
  
    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
    return array;
  }
  



//countdawn fun
let timer=document.querySelector(".timer")
var gameover=document.querySelector(".gameover")
//full time
var scnd=600;
function countdown() {
  setInterval(function(){
     passscn()
},1000);
}
//count
function passscn(){
    var min=Math.floor(scnd/60)
var sec = scnd%60
timer.innerHTML="0"+min+":"+sec
if(scnd<10){
    sec= "0"+ scnd%60
}
if(scnd>0){
    scnd=scnd-1
}
else{
    clearInterval
    timer.innerHTML="zamanınız bitti"
    timer.style.backgroundColor="red"
    var gameover=document.querySelector(".gameover");
    gameover.style.display="block"
}
}
let again=document.querySelector("#again").onclick=function(){
  window.location.reload()
  console.log('basıldım')
}