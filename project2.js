let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newb=document.querySelector("#new");
let msg=document.querySelector("#msg");
let msgcon=document.querySelector(".msg-con");

let turno = true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turno=true;
    enable1();
    msgcon.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turno){
        box.innerText="O";
        turno=false
       }
       else{
        box.innerText="X";
        turno=true

       }
       box.disabled=true;
       checkwin();

    });

});
const disable1=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enable1=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congatulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disable1();

};
const checkwin=()=>{
    for( let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
newb.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

