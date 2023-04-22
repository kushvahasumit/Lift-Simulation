document.querySelector("#backBtn").style.display = "none";

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  const floorData = document.getElementById("floorNumber").value;

  const LiftData = document.getElementById("LiftNumber").value;

  if (floorData == "" || LiftData == "") {
    document.querySelector(".alertMsg").innerHTML='Please provide possible values ! ';
  }else if(floorData <  1 || LiftData <1 ){
    document.querySelector(".-VEalertMsg").innerHTML='Please provide Positive values ! ';
  } else {
    document.querySelector(".SubmitPage").style.display = "none";

    // document.querySelector(".GeneratedPage").style.display = "block";

    document.querySelector("#backBtn").style.display = "block";

    createFloors()
    
  }
});

const BackBtn = document.getElementById("backBtn");
// console.log(BackBtn)
BackBtn.addEventListener("click", () => {
  document.querySelector(".GeneratedPage").style.display = "none";
  document.querySelector("#backBtn").style.display = "none";
  document.querySelector(".SubmitPage").style.display = "flex";
  document.location.reload();
   
});

function createFloors(){
  let floorData = document.getElementById("floorNumber").value;
// console.log(floorData)
 
for (let x = floorData; x > 0 ; x--) {

const floor  = document.createElement('div')
floor.className='floors';

const floorNumber = document.createElement('div')
floorNumber.className='floorNumber';

const buttons = document.createElement('div')
buttons.className='buttons';

const name = document.createElement('span')
name.textContent =`F- ${x}`;
 
const up = document.createElement('button')
up.className='up';
up.textContent='UP';
up.addEventListener("click", ()=>{
  DoorOpenClose(x)

  movementOfLifts(x) 
  // document.querySelector(".liftSection").style.transition = "transform 2s ease-in-out" ;
  // document.querySelector(".liftSection").style.transform = `translateY(${-120 * (x-1)}px)`;
})

const down = document.createElement('button')
down.className='down';
down.textContent='DOWN';
down.addEventListener("click", ()=>{
  DoorOpenClose(x)
 

  movementOfLifts(x)
  // document.querySelector(".liftSection").style.transition = "transform 2s ease-in-out" ;
  // document.querySelector(".liftSection").style.transform = `translateY(${-120 * (x-1)}px)`;

})


const hrLine = document.createElement('div')
hrLine.className='hrLine';

const hr = document.createElement('hr')
hrLine.appendChild(hr);
 
buttons.appendChild(name)
buttons.appendChild(up)
buttons.appendChild(down)
 
floorNumber.appendChild(buttons)
 
floor.appendChild(floorNumber)
floor.appendChild(hrLine)
 
document.querySelector(".GeneratedPage").appendChild(floor );
 
}

let LiftData = document.getElementById("LiftNumber").value;
// console.log(LiftData)
const liftSection = document.createElement('div')
liftSection.className='liftSection'
 
 for (let y = 0; y < LiftData; y++) {

  const lifts = document.createElement('div')
  lifts.className='lifts'
  

  const doors = document.createElement('div')
  doors.className='doors'

//   const liftName = document.createElement('div')
// liftName.textContent =`L - ${y}`;
  

  const leftDoor = document.createElement('div')
  leftDoor.className='leftDoor'
  // leftDoor.textContent =`L`;
 
  const rightDoor = document.createElement('div')
  rightDoor.className='rightDoor'
  rightDoor.textContent =`L-${y}`;


  doors.appendChild(rightDoor)
  doors.appendChild(leftDoor)
  // doors.appendChild(liftName)

  lifts.appendChild(doors)

 liftSection.appendChild(lifts)
  //  document.querySelector(".liftSection").style.transition = "transform 2s ease-in-out" ;

//  document.querySelector(".liftSection").style.transform = `translateY(${-120 * x-1}px)`;
  
}
 
const GetFloor = document.querySelectorAll(".floorNumber");
  
const LiftBox = GetFloor[GetFloor.length - 1];
// console.log(LiftBox)
LiftBox.appendChild(liftSection);

}

function movementOfLifts(x){ 
  console.log(x) 

  // document.querySelector(".rightDoor" ).style.transition = "all 2.5s ease-in-out" ;
  // document.querySelector(".rightDoor").style.transform = "translateX(-40px)" ;
 
  // document.querySelector(".leftDoor").style.transition = "all 2.5s ease-in-out" ;
  // document.querySelector(".leftDoor").style.transform = "translateX(40px)" ;

//  DoorOpenClose()
 document.querySelector(".lifts").style.transform = `translateY(${-120 * (x-1)}px)`;
  

  document.querySelector(".lifts").style.transitionDuration =`${2 * Math.abs(x)}s`;

  // document.querySelector(".lifts").style.transition = "all 2s ease-in-out" ;
  // setTimeout(function() {  document.querySelector(".rightDoor" ).style.transition = "all 2.5s ease-in-out" ;
  // document.querySelector(".rightDoor").style.transform = "translateX( 40px)" ;
 
  // document.querySelector(".leftDoor").style.transition = "all 2.5s ease-in-out" ;
  // document.querySelector(".leftDoor").style.transform = "translateX(-40px)" ;}, 2000);
  
 
}

function DoorOpenClose(x) {
  // const gates = document.querySelectorAll('.doors')
  let Door1 = document.querySelector('.leftDoor');
  let Door2 = document.querySelector('.rightDoor');


  setTimeout(() => {
Door1.style.transition = "all 2.5s ease-in-out" ;
Door1.style.transform = "translateX( 40px)"  ;

Door2.style.transition = "all 2.5s ease-in-out" ;
Door2.style.transform = "translateX(-40px)"  ;

  },1500*x);

  setTimeout(() => {
    Door1.style.transition = "all 2.5s ease-in-out" ;
    Door1.style.transform = "translateX( 0px)"  ;
    
    Door2.style.transition = "all 2.5s ease-in-out" ;
    Door2.style.transform = "translateX(0px)"  ;
  },4000+(x*1500))
}

 

