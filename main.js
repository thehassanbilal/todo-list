const toDoList = [];

const del = (index) => {
  console.log("index here", index);
};

const display = () => {
  return (document.getElementById(
    "displayList"
  ).innerHTML = `<ol style="background-color: green;"
        ${toDoList.map((listItem, index) => {
          return `<li id=${index} >${listItem} 
            <div>
                <button>Update</button>
                <button onclick="${() => del()}">Delete</button>
            </div>
             </li>`;
        })}
        </ol>`);
};

const input = () => {
  const userInput = document.getElementById("user-input").value;
  toDoList.unshift(userInput);
  console.log(toDoList);

  display();
};

let colors = ["red", "blue", "pink", "green", "yellow"];
let temp = "";
let elesRed = "";

const displayColoredBlocks = () => {
  colors.map((color) => {
    temp =
      temp +
      `<div style="width:80px;height: 80px;color: aliceblue;background-color:${color}" >${color}</div>`;
  });
  document.getElementById("temp").innerHTML = temp;
};

const displayWithOutRed = () => {
  colors.filter((color) => {
    if (color !== "red")
      elesRed =
        elesRed +
        `<div style="width:80px;height: 80px;color: aliceblue;background-color:${color}" >${color}</div>`;
  });
  document.getElementById("elesRed").innerHTML = elesRed;
};
