/*-----------PRODUCT-SECTION-SLIDER------------------------------------*/

let productGalleryLeftArrow = document.getElementById("left-arrow");
let productGalleryRightArrow = document.getElementById("right-arrow");
let productPic = document.getElementById("product-pic");
let productGalleryPicLinks = ["https://www.oppictures.com/SINGLEIMAGES/350/212519.JPG", "http://www.oppictures.com/SINGLEIMAGES/350/STT190004_1_2.JPG", "http://images.wbmason.com/350/L_MOW144930_RM.jpg", "http://images.wbmason.com/350/L_JAM96600200RM.JPG"];
let productCaption = document.getElementById("product-caption");
let productGalleryCaptions = ["25% Cotton Business Paper, White, 20 lbs., Wove, 8-1/2 x 11, 500/Box, FSC","Strathmore Ultimate White Wove Specialty, 8 1/2 x 11, 70 lb., 2000/CT","Mohawk Light Gray Smooth Writing, 8.5 x 11, 24 lb., 500/RM, 10 RM/CT", "JAM Paper® Recycled Parchment Paper, 8 1/2 x 11, Blue, 500/RM"];
let productGalleryBubbles = document.getElementsByClassName("slider-bubble");


productGalleryRightArrow.addEventListener("click", (event) => {
  var picLink = productPic.getAttribute("src");
  var picLinkCurrIndex = productGalleryPicLinks.indexOf(picLink);
  var picLinkNewIndex;
  if (picLinkCurrIndex + 1 > productGalleryPicLinks.length - 1) {
    picLinkNewIndex = 0;
  }
  else {
    picLinkNewIndex = picLinkCurrIndex + 1;
  }  
  productPic.setAttribute("src", productGalleryPicLinks[picLinkNewIndex]);

  productCaption.innerText = (productGalleryCaptions[picLinkNewIndex]);
  for (i = 0; i < productGalleryBubbles.length; i++) {
    if (i ===  picLinkNewIndex) {
      productGalleryBubbles[i].classList.add("slider-bubble-selected");
    }
    else {
      productGalleryBubbles[i].classList.remove("slider-bubble-selected");
    }    
  }
  productPic.classList.add("slider-pic-selected");
  
  setTimeout(picAnimation = () => {
    productPic.classList.remove("slider-pic-selected");
  },600);
  
});

productGalleryLeftArrow.addEventListener("click", (event) => {
  var picLink = productPic.getAttribute("src");
  var picLinkCurrIndex = productGalleryPicLinks.indexOf(picLink);
  var picLinkNewIndex;
  if (picLinkCurrIndex - 1 < 0) {
    picLinkNewIndex = productGalleryPicLinks.length - 1;
  }
  else {
    picLinkNewIndex = picLinkCurrIndex - 1;
  }  
  productPic.setAttribute("src", productGalleryPicLinks[picLinkNewIndex]);
  productCaption.innerText = (productGalleryCaptions[picLinkNewIndex]);
  
  for (i = 0; i < productGalleryBubbles.length; i++) {
    if (i ===  picLinkNewIndex) {
      productGalleryBubbles[i].classList.add("slider-bubble-selected");
      
    }
    else {
      productGalleryBubbles[i].classList.remove("slider-bubble-selected");
    }    
  }
  productPic.classList.add("slider-pic-selected");
  
  setTimeout(picAnimation = () => {
    productPic.classList.remove("slider-pic-selected");
  },600);
  
});
/*-------------------------------------------------------------*/


/*-------------SECTION-3-PRICE-CHART------------------------------*/
Chart.defaults.global.defaultFontColor = "Black";
Chart.defaults.global.defaultFontFamily = "Poppins";
let priceChartElement = document.getElementById("pricechart");


let priceData = {
  label: "Avg Per Unit Cost ($)",
  data: [14, 18, 20, 17],
  backgroundColor: [
    "rgba(232, 105, 105, 0.50)",
    "rgba(105, 183, 232, 0.50)",
    "rgba(232, 227, 105, 0.50)",
    "rgba(210, 105, 232, 0.50)"
  ]
};

var priceBarChart = new Chart(priceChartElement, {
    type: 'horizontalBar',
    data: {
      labels: ["Totally Real Paper Co.", "Competitor 1", "Competitor 2", "Competitor 3"],
      datasets: [priceData],
    }, 
    options: {
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }      
        }]
      }
    }

});
/*--------------------------------------------------------*/

/*-------------SECTION-4-PIE-CHART------------------------------*/
var marketChartElement = document.getElementById("pie");


var marketData = {
  labels: ["Totally Real Paper Co.", "Competitor 1", "Competitor 2", "Competitor 3"],
  datasets: [{
    label: "Contract Model Market Share",
    data: [61, 24, 7, 8],
    backgroundColor: [
      "rgba(232, 105, 105, 0.40)",
      "rgba(105, 183, 232, 0.40)",
      "rgba(232, 227, 105, 0.40)",
      "rgba(210, 105, 232, 0.40)"
    ],
    borderColor: [
      "rgba(0, 0, 0, 0.65)",
      "rgba(0, 0, 0, 0.65)",
      "rgba(0, 0, 0, 0.65)",
      "rgba(0, 0, 0, 0.65)",
    ],
    borderWidth: [1,1,1,1]
  }]
};

var marketPieChart = new Chart(marketChartElement, {
    type: 'pie',
    data: marketData, 
    options: {}

});
/*----------------------------------------------------------------------*/
/*-----------------SECTION-4-LINE-CHART---------------------------------*/
var stockChartElement = document.getElementById("line");


var stockData = {
  labels: ["2014", "2015", "2016", "2017"],
  datasets: [{
      label: "Totally Real Paper Co.",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(232, 105, 105, 0.40)",
      borderColor: "rgba(232, 105, 105, 0.80)",
      borderCapStyle: 'square',
      borderDash: [], 
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "yellow",
      pointHoverBorderColor: "brown",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [56, 60,65,62]
     
    }, {
      label: "Competitor 1",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(105, 183, 232, 0.40)",
      borderColor: "rgba(105, 183, 232, 0.80)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [34, 23,35,32]
     
    }, {
      label: "Competitor 2",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(232, 227, 105, 0.40)",
      borderColor: "rgba(232, 227, 105, 0.80)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "black",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [40, 42,38,39]
    }, {
      label: "Competitor 3",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(210, 105, 232, 0.40)",
      borderColor: "rgba(210, 105, 232, 0.80)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "white",
      pointBorderWidth: 1,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "brown",
      pointHoverBorderColor: "yellow",
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: [43, 44,45,40]
     
    }

  ]
};

var options = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                     display: true,
                     labelString: 'Average Yearly Share Price ($)',
                     fontSize: 10 
                  }
            }]            
        }  
};

var stcockChart = new Chart(stockChartElement, {
  type: 'line',
  data: stockData,
  options: options
});
/*---------------------------------------------------------------------------*/
/*-----------------DEFINE-LINK-ELEMENTS--------------------------------------*/
let productLink = document.getElementById("product-link");
let pricingLink = document.getElementById("pricing-link");
let investLink = document.getElementById("invest-link");
let aboutLink = document.getElementById("about-link");
let careersLink = document.getElementById("careers-link");
let homeLink = document.getElementById("home-link");

/*---------------------------------------------------------------------------*/
/*-------------DEFINE-SECTION-ELEMENTS-------------------------------------*/
let productSec = document.getElementById("product-section");
let pricingSec = document.getElementById("pricing-section");
let investSec = document.getElementById("invest-section");
let aboutSec = document.getElementById("about-section");
let careersSec = document.getElementById("careers-section");
let secContainer = document.getElementById("section-container");

/*---------------------------------------------------------------------------*/
/*-----------------PRODUCT-SECTION-SMOOTH-SCROLL-----------------------------*/

let windowHeight = window.innerHeight;
let productYCoordinate = windowHeight  + 25;
let pricingLinkYCoordinate = (2*windowHeight)  + 50;
let investLinkYCoordinate = (3*windowHeight)  + 75;
let aboutLinkYCoordinate = (4*windowHeight)  + 100;
let careersLinkYCoordinate = (5*windowHeight)  + 125;

productLink.addEventListener("click",(event) => {
  

  if (productYCoordinate !== window.scrollY) {
    for(i=0; i < productSec.children.length; i++) {
      productSec.children[i].classList.add("show-div");
    }
    setTimeout(removeAnimationClass = () => {
      for(i=0; i < productSec.children.length; i++) {
        productSec.children[i].classList.remove("show-div");
      } 
    },1500);
    window.scrollTo({
      top: productYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  else {
    window.scrollTo({
      top: productYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

});



pricingLink.addEventListener("click",(event) => {
  

  if (pricingLinkYCoordinate !== window.scrollY) {
    for(i=0; i < pricingSec.children.length; i++) {
      pricingSec.children[i].classList.add("show-div");
    }
  
    setTimeout(removeAnimationClass = () => {
      for(i=0; i < pricingSec.children.length; i++) {
        pricingSec.children[i].classList.remove("show-div");
      }
      
    },1500);
    window.scrollTo({
      top: pricingLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
    else {
     window.scrollTo({
       top: pricingLinkYCoordinate, 
       left: 0, 
       behavior: 'smooth'
     });
    }  
});


investLink.addEventListener("click",(event) => {


  if (investLinkYCoordinate !== window.scrollY) {
    for(i=0; i < investSec.children.length; i++) {
      investSec.children[i].classList.add("show-div");
    }
    setTimeout(removeAnimationClass = () => {
      for(i=0; i < investSec.children.length; i++) {
        investSec.children[i].classList.remove("show-div");
      } 
    },1500);
    window.scrollTo({
      top: investLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
    else {
     window.scrollTo({
       top: investLinkYCoordinate, 
       left: 0, 
       behavior: 'smooth' 
     });
    } 
});



aboutLink.addEventListener("click",(event) => {
  
  if (aboutLinkYCoordinate !== window.scrollY) {
    for(i=0; i < aboutSec.children.length; i++) {
      aboutSec.children[i].classList.add("show-div");
    }
    setTimeout(removeAnimationClass = () => {
      for(i=0; i < aboutSec.children.length; i++) {
        aboutSec.children[i].classList.remove("show-div");
      } 
    },1500);
    window.scrollTo({
      top: aboutLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  else{
    window.scrollTo({
      top: aboutLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth'
    }); 
  }
});
careersLink.addEventListener("click",(event) => {
  

  if (careersLinkYCoordinate !== window.scrollY) {
    for(i=0; i < careersSec.children.length; i++) {
      careersSec.children[i].classList.add("show-div");
    }
    setTimeout(removeAnimationClass = () => {
      for(i=0; i < careersSec.children.length; i++) {
        careersSec.children[i].classList.remove("show-div");
      } 
    },2000);
    window.scrollTo({
      top: careersLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  else {
    window.scrollTo({
      top: careersLinkYCoordinate, 
      left: 0, 
      behavior: 'smooth' 
    });
  }  
});

homeLink.addEventListener("click",(event) => {
  window.scrollTo({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
});

/*---------------------------------------------------------------------------*/
/*-----------------NAV-BAR-HIGHLIGHTING--------------------------------------*/
window.addEventListener("scroll", (event) => { 
  if (window.scrollY > 0 && window.scrollY < (productYCoordinate-110)) {
    var index = 0;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }
  else if (window.scrollY >= (productYCoordinate-110) && window.scrollY < (pricingLinkYCoordinate - 115)) {
    console.log("activated");
    var index = 1;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }
  else if (window.scrollY >= (pricingLinkYCoordinate-115) && window.scrollY < (investLinkYCoordinate - 115)) {
    console.log("activated");
    var index = 2;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }
  else if (window.scrollY >= (investLinkYCoordinate - 115) && window.scrollY < (aboutLinkYCoordinate-115)) {
    console.log("activated");
    var index = 3;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }
  else if (window.scrollY >= (aboutLinkYCoordinate-115) && window.scrollY < (careersLinkYCoordinate-115)) {
    console.log("activated");
    var index = 4;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }
  else if (window.scrollY >= (careersLinkYCoordinate-115)) {
    console.log("activated");
    var index = 5;
    var links = document.getElementsByClassName("navlink");

    for (i = 0; i < links.length; i++){
      if (i === index) {
        links[i].classList.add("on-section");
      }
      else {
        links[i].classList.remove("on-section");
      }
    }

  }



});


/*---------------------------------------------------------------------------*/