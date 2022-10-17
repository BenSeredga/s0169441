document.getElementById("tpack").classList.add("d-none");
document.getElementById("eradios").classList.add("d-none");
window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("tsel");
  s[0].addEventListener("change", function(event) {
    window.select = event.target;
    let radios = document.getElementById("eradios");
    let checks = document.getElementById("tpack")
    //console.log(select.value);
    // Можно использовать getElementsByClassName()
    

    if (select.value == "0") {
      checks.classList.add("d-none");
      radios.classList.add("d-none");
      
    }
    else if (select.value == "1"){
      checks.classList.add("d-none");
      radios.classList.remove("d-none");
    }
    else if (select.value == "2"){
      checks.classList.remove("d-none");
      radios.classList.add("d-none");
    }
    else{
      checks.classList.add("d-none");
      radios.classList.add("d-none");
    }
  });
  
  let r = document.querySelectorAll(".eradios input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
    });    
  });
  
});


const selectTovar = document.getElementById('ttype');
const upack = document.getElementById("check1");
const optionBtns = document.querySelectorAll('.opti1');
const optionChks = document.getElementById('tpack');
const rangeCount = document.querySelectorAll("#tcount");
const result = document.getElementById("outcost");


const prices =[
  {
    name: "ze",
    cost: 10000
  },
  {
    name: "akw",
    cost: 5000
  },
  {
    name: "truba",
    cost: 1000
  },
  {
    name: "none",
    cost: 0
  }
]


let currentPrice = prices[3].cost;

selectTovar.addEventListener("change", () => {
  if(selectTovar.value==0){
    currentPrice = prices[3].cost;
    currentCost = opts[3].cost;
    currentPack=packs[0].cost;
    upack.checked=false;
    result.innerHTML="";
  }
  else if(selectTovar.value==1){
    currentPrice = prices[0].cost;
    currentCost = opts[3].cost;
    currentPack=packs[0].cost;
    upack.checked=false;
  }
  else if(selectTovar.value==2){
    currentPrice = prices[1].cost;
    currentCost = opts[3].cost;
    currentPack=packs[0].cost;
    upack.checked=false;
  }
  else if(selectTovar.value==3){
    currentPrice = prices[2].cost;
    currentCost = opts[3].cost;
    currentPack=packs[0].cost;
    upack.checked=false;
  }
  calculation(currentCount, currentPack, currentCost, currentPrice);
  //console.log(currentPrice);
  //console.log(currentCost);
  //console.log(currentPack);
})




const opts = [
  {
    name: "wr",
    cost: 1500
  },
  {
    name: "blr",
    cost: 0
  },
  {
    name: "rr",
    cost: 3000
  },
  {
    name: "noopts",
    cost: 0
  }
]


let currentCost = opts[3].cost;
for(let opt of optionBtns){
  opt.addEventListener('click', () => {
    for(let item of optionBtns){
      item.classList.remove("active");
    }
    opt.classList.add("active");
    takeActiveOpt(opt);
    calculation(currentCount, currentPack, currentCost, currentPrice);
  })
}

const takeActiveOpt = currentActive => {
  const dataAttrValue = currentActive.dataset.name;
  const currentOpt = opts.find(opt => opt.name === dataAttrValue);
  currentCost = currentOpt.cost;
  console.log(currentCost);
  console.log(currentPack);
};


const packs = [
  {
    name: "nopack",
    cost: 0
  },
  {
    name: "ispack",
    cost: 2000
  }
]

let currentPack = packs[0].cost;

optionChks.addEventListener('change', () =>{
  if (currentPack==0)currentPack=packs[1].cost;
  else currentPack=packs[0].cost;
  console.log(currentPack);
  calculation(currentCount, currentPack, currentCost, currentPrice);
})

let currentCount = 1;

for (let input of rangeCount){
  input.addEventListener('input', ()=>{
    
    currentCount=(input.value);
    console.log(currentCount);
    calculation(currentCount, currentPack, currentCost, currentPrice);
  })

}

const calculation = (Count, Pack, Cost, Price) => {
  if (Count<1)Count=1;
  if (Price == 0)result.innerHTML = "";
  let res = (Count*Price)+(Count*Cost)+Pack;
  result.innerHTML = res;
}



