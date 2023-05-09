document.querySelector("#backBtn").style.display = "none";

const submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  const floorData = document.getElementById("floorNumber").value;

  const LiftData = document.getElementById("LiftNumber").value;

  if (floorData == "" || LiftData == "") {
    document.querySelector(".alertMsg").innerHTML =
      "Please provide possible values ! ";
  } else if (floorData < 1 || LiftData < 1) {
    document.querySelector(".-VEalertMsg").innerHTML =
      "Please provide Positive values ! ";
  } else {
    document.querySelector(".SubmitPage").style.display = "none";

    document.querySelector("#backBtn").style.display = "block";

    createFloors();
  }
});

const BackBtn = document.getElementById("backBtn");

BackBtn.addEventListener("click", () => {
  document.querySelector(".GeneratedPage").style.display = "none";
  document.querySelector("#backBtn").style.display = "none";
  document.querySelector(".SubmitPage").style.display = "flex";
  document.location.reload();
});

function createFloors() {
  let floorData = document.getElementById("floorNumber").value;

  for (let x = floorData; x > 0; x--) {
    const floor = document.createElement("div");
    floor.className = "floors";

    const floorNumber = document.createElement("div");
    floorNumber.className = "floorNumber";

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const name = document.createElement("span");
    name.textContent = `F- ${x}`;

    const up = document.createElement("button");
    up.className = "up";
    up.textContent = "UP";
    up.addEventListener("click", () => {
      movementOfLifts(x);
    });

    const down = document.createElement("button");
    down.className = "down";
    down.textContent = "DOWN";
    down.addEventListener("click", () => {
      movementOfLifts(x);
    });

    const hrLine = document.createElement("div");
    hrLine.className = "hrLine";

    const hr = document.createElement("hr");
    hrLine.appendChild(hr);

    buttons.appendChild(name);
    buttons.appendChild(up);
    buttons.appendChild(down);

    floorNumber.appendChild(buttons);

    floor.appendChild(floorNumber);
    floor.appendChild(hrLine);

    document.querySelector(".GeneratedPage").appendChild(floor);
  }

  let LiftData = document.getElementById("LiftNumber").value;

  const liftSection = document.createElement("div");
  liftSection.className = "liftSection";

  for (let y = 1; y <= LiftData; y++) {
    const lifts = document.createElement("div");
    lifts.className = "lifts";
    lifts.setAttribute("data-liftStatus", "free");
    lifts.setAttribute("data-lift-position", "1");

    const doors = document.createElement("div");
    doors.className = "doors";

    const leftDoor = document.createElement("div");
    leftDoor.className = "leftDoor";

    const rightDoor = document.createElement("div");
    rightDoor.className = "rightDoor";
    rightDoor.textContent = `L-${y}`;

    doors.appendChild(rightDoor);
    doors.appendChild(leftDoor);

    lifts.appendChild(doors);

    liftSection.appendChild(lifts);
  }

  const GetFloor = document.querySelectorAll(".floorNumber");

  const LiftBox = GetFloor[GetFloor.length - 1];

  LiftBox.appendChild(liftSection);
}

function movementOfLifts(floorNo) {
  console.log(floorNo);

  const lifts = Array.from(document.querySelectorAll(".lifts"));

  const freeLift = lifts.find((lift) => lift.dataset.liftstatus === "free");
  


console.log("free lift position - "+Number(freeLift.dataset.liftPosition));
  
const liftPosition = Math.abs(
  Number(freeLift.dataset.liftPosition) - floorNo
  );
  console.log("output position - "+liftPosition)

  freeLift.style.transform = `translateY(${-120 * Math.abs(floorNo-1)}px)`;
  freeLift.style.transition = `all ${2 * liftPosition}s linear`;
  freeLift.setAttribute("data-liftStatus", "busy");

  

  setTimeout(() => {
DoorOpenClose(freeLift)
    setTimeout(() =>{
        freeLift.setAttribute("data-liftStatus", "free")
    },5500);
    freeLift.setAttribute("data-lift-position", `${floorNo}`);
},  Math.abs(liftPosition) * 2000)
  
}

function DoorOpenClose(freelift) {
  let door = freelift.firstChild;
 
  setTimeout(() => {
    door.children[0].style.transform = "translateX( -40px)";
    door.children[0].style.transition = "all 2.5s ease-in-out";

    door.children[1].style.transform = "translateX( 40px)";
    door.children[1].style.transition = "all 2.5s ease-in-out";
  }, 0 );

  setTimeout(() => {
    door.children[0].style.transition = "all 2.5s ease-in-out";
    door.children[0].style.transform = "translateX( 0px)";

    door.children[1].style.transition = "all 2.5s ease-in-out";
    door.children[1].style.transform = "translateX(0px)";
    
  }, 2500);
  
}