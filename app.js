document.getElementById("targetBar").value = targetValue;
document.getElementById("targetBar").addEventListener("input", function(){
    let newTarget = document.getElementById("targetBar").value
    document.getElementById("targetValue").innerText = newTarget;
    targetValue = parseInt(newTarget);
});

let box1Value = 0;
let box2Value = 0;
document.getElementById("box1").innerText = box1Value;
document.getElementById("box2").innerText = box2Value;

document.getElementById("button1").addEventListener("click", function(){
    box1Value++;
    document.getElementById("box1").innerText = box1Value;
    checkWin();
})

document.getElementById("button2").addEventListener("click", function(){
    box2Value++;
    document.getElementById("box2").innerText = box2Value;
    checkWin();
})


function checkWin(){
    if(box1Value >= targetValue || box2Value >= targetValue){
        alert("Congratulation! You Won!!");
    }
}
  function resetFunction(){
    document.getElementById("resetFunction").reset();
  }