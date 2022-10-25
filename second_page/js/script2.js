document.getElementById("tpack").classList.add("d-none");
document.getElementById("eradios").classList.add("d-none");
window.addEventListener("DOMContentLoaded", function (event) {
  let s = document.getElementsByName("tsel");
  s[0].addEventListener("change", function(event) {
    window.select = event.target;
    let radios = document.getElementById("eradios");
    let checks = document.getElementById("tpack");
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
});
const selectTovar = document.getElementById("ttype");
const upack = document.getElementById("check1");
const optionBtns = document.querySelectorAll(".opti1");
const optionChks = document.getElementById("tpack");
const rangeCount = document.querySelectorAll("#tcount");
const result = document.getElementById("outcost");
const prices =[
  {
    cost: 10000,
    name: "ze"
  },
  {
    cost: 5000,
    name: "akw"
  },
  {
    cost: 1000,
    name: "truba"
  },
  {
    cost: 0,
    name: "none"
  }
];


let currentPrice = prices[3].cost;

selectTovar.addEventListener("change", function (tevent) {
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
});




const opts = [
  {
    cost: 1500,
    name: "wr"
  },
  {
    cost: 0,
    name: "blr"
  },
  {
    cost: 3000,
    name: "rr"
  },
  {
    cost: 0,
    name: "noopts"
  }
];


let currentCost = opts[3].cost;
for(let opt of optionBtns){
  opt.addEventListener("click", () => {
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

optionChks.addEventListener("change", () =>{
  if (currentPack==0)currentPack=packs[1].cost;
  else currentPack=packs[0].cost;
  console.log(currentPack);
  calculation(currentCount, currentPack, currentCost, currentPrice);
})

let currentCount = 1;

for (let input of rangeCount){
  input.addEventListener("input", ()=>{
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



$(document).ready(function(){
  $(".next").click(function(){
    var currentImage1 = $(".curry1");
    var currentImage2 = $(".curry2");
    var currentImage3 = $(".curry3");
    var currentImage4 = $(".curry4");
    var currentImage1Index = $(".curry1").index();
    var currentImage2Index = $(".curry2").index();
    var currentImage3Index = $(".curry3").index();
    var currentImage4Index = $(".curry4").index();
    var nextImageIndex = currentImage4Index + 1;
    var nextImage = $(".img").eq(nextImageIndex);
    
    currentImage1.removeClass("curry1");
    currentImage1.removeClass("order-1");
    currentImage1.addClass("d-none");
    currentImage1 = $(".curry2");
    currentImage1.removeClass("curry2");
    currentImage1.removeClass("order-2");
    currentImage1.addClass("order-1");
    currentImage1.addClass("curry1");
    currentImage2 = $(".curry3");
    currentImage2.removeClass("curry3");
    currentImage2.removeClass("order-3");
    currentImage2.removeClass("d-none");
    currentImage2.removeClass("d-lg-block");
    currentImage2.addClass("order-2");
    currentImage2.addClass("curry2");
    currentImage3 = $(".curry4");
    currentImage3.removeClass("curry4");
    currentImage3.removeClass("order-4");
    currentImage3.addClass("order-3");
    currentImage3.addClass("curry3");
    currentImage3.addClass("d-none");
    currentImage3.addClass("d-lg-block");



    if(nextImageIndex === ($(".img:last").index()+1)){
      $(".img").eq(0).addClass("curry4");
      $(".img").eq(0).addClass("order-4");
      $(".img").eq(0).addClass("d-none");
      $(".img").eq(0).addClass("d-lg-block");
      //$(".img").eq(0).removeClass("d-none");
    }
    else{
      nextImage.addClass("curry4");
      nextImage.addClass("order-4");
      nextImage.addClass("d-none");
      nextImage.addClass("d-lg-block");
      //nextImage.removeClass("d-none");
    }
  });
  $(".prev").click(function(){
    var currentImage1 = $(".curry1");
    var currentImage2 = $(".curry2");
    var currentImage3 = $(".curry3");
    var currentImage4 = $(".curry4");
    var currentImage1Index = $(".curry1").index();
    var currentImage2Index = $(".curry2").index();
    var currentImage3Index = $(".curry3").index();
    var currentImage4Index = $(".curry4").index();
    var prevImageIndex = currentImage1Index-1;
    var prevImage = $(".img").eq(prevImageIndex);

    currentImage4.removeClass("curry4");
    currentImage4.removeClass("order-4");
    currentImage4.addClass("d-none");
    currentImage4.removeClass("d-lg-block");
    currentImage4 = $(".curry3");
    currentImage4.removeClass("curry3");
    currentImage4.removeClass("order-3");
    currentImage4.addClass("order-4");
    currentImage4.addClass("curry4");

    currentImage3 = $(".curry2");
    currentImage3.removeClass("curry2");
    currentImage3.removeClass("order-2");
    currentImage3.addClass("order-3");
    currentImage3.addClass("curry3");
    currentImage3.addClass("d-none");
    currentImage3.addClass("d-lg-block");

    currentImage2 = $(".curry1");
    currentImage2.removeClass("curry1");
    currentImage2.removeClass("order-1");
    currentImage2.addClass("order-2");
    currentImage2.addClass("curry2");
    currentImage2.removeClass("d-none");
    currentImage2.removeClass("d-lg-block");

    prevImage.addClass("curry1");
    prevImage.addClass("order-1");
    prevImage.removeClass("d-none");
    prevImage.removeClass("d-lg-block");


  });
});


