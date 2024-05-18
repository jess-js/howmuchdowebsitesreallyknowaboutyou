function defaults(){
  document.getElementById('buttonHider').style.display = 'none';
  document.getElementById('begin').style.display = 'none'
  document.getElementById("cookies").style.display = 'none';
  document.getElementById("notimportant").style.display = 'none';
  document.getElementById("centreText").style.display = 'none';
  
  document.getElementById("cart").style.display = 'none';
  document.getElementById("shopTitle").style.display = 'none';
  document.getElementById("item0").style.display = 'none';
  document.getElementById("item1").style.display = 'none';
  document.getElementById("item2").style.display = 'none';
  document.getElementById("item3").style.display = 'none';
  document.getElementById("item4").style.display = 'none';
  document.getElementById("item5").style.display = 'none';
  document.getElementById("item6").style.display = 'none';
  document.getElementById("item7").style.display = 'none';
  document.getElementById("item8").style.display = 'none';
  document.getElementById("item9").style.display = 'none';
  document.getElementById("btn0").style.display = 'none';
  document.getElementById("btn1").style.display = 'none';
  document.getElementById("btn2").style.display = 'none';
  document.getElementById("btn3").style.display = 'none';
  document.getElementById("btn4").style.display = 'none';
  document.getElementById("btn5").style.display = 'none';
  document.getElementById("btn6").style.display = 'none';
  document.getElementById("btn7").style.display = 'none';
  document.getElementById("btn8").style.display = 'none';
  document.getElementById("btn9").style.display = 'none';
  
  document.getElementById("cover").style.display = 'none';
  
  document.getElementById("continue").style.display = 'none';
  document.getElementById("no").style.display = 'none';
  document.getElementById("informationShop").style.display = 'none';
  document.getElementById("storeContinue").style.display = 'none';
  document.getElementById("belowCentre").style.display = 'none';
  
  document.getElementById("accept").style.display = 'none';
  
  document.getElementById("fake_cursor").style.display = 'none';
  document.getElementById("title").style.display = 'none';
}

defaults()


var ipAddress;
var city;
var region;
var country;
var isp;
function getIp(){
  const result = fetch('https://ipapi.co/json')
  result
    .then(response => {
    return response.json();
  })
    .then(result => {
      ipAddress = result.ip;
      city = result.city;
      region = result.region;
      country = result.country_name;
      isp = result.org;
  })
    .catch(error => {
    console.log('ERROR in Promise:', error);
  })
    .finally(() => {
      console.log("Done")
  })
  
  setTimeout(printIt, 300) // allows time for the ip to be fetched
}

function printIt(){
  console.log(ipAddress)
  console.log(city)
  console.log(region)
  console.log(country)
  console.log(isp)
}

var user_city;

 // 'ipAddress stores the ip address after it has been fetched'

getIp()








// if (borough), then = London

var os;
var os_raw
function getOS(){
  if (JSON.stringify(navigator.userAgentData).includes("macOS")) {
    os = 'macOS';
    os_raw = os;
  } else if (JSON.stringify(navigator.userAgentData).includes("Windows")) {
    os = 'Windows'
    os_raw = os;
  } else {
    
    if (JSON.stringify(navigator.userAgentData).includes("Linux")) {
      os_raw = 'Linux'
    } else {
      os_raw = 'Unknown'
    }
    
    os = 'Windows' // If none of these systems are used, it defaults to windows.
  }
}

getOS()

var browser;
function getBrowser(){
  if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("GOOGLE CHROME")) {
    browser = "Google Chrome"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("FIREFOX")) {
    browser = "Firefox"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("SAFARI")) {
    browser = "Safari"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("INTERNET EXPLORER")) {
    browser = "Internet Explorer"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("UC Browser")) {
    browser = "UC Browser"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("EPIC")) {
    browser = "Epic"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("SAMSUNG INTERNET")) {
    browser = "Samsung Internet"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("OPERA")) {
    browser = "Opera"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("EDGE")) {
    browser = "Microsoft Edge"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("VIVALDI")) {
    browser = "Vivaldi"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("YANDEX")) {
    browser = "Yandex"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("MAXATHON")) {
    browser = "Maxathon"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("TOR")) {
    browser = "TOR"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("BING")) {
    browser = "Bing"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("DUCKDUCKGO")) {
    browser = "DuckDuckGo"
  } else if (JSON.stringify(navigator.userAgentData).toUpperCase().includes ("YAHOO")) {
    browser = "Yahoo"
  } else {
    browser = "Unknown"
  }
}

getBrowser()

var i = 0;
var txt;
var speed = 50;
var whichDemo;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(whichDemo).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// setTimeout(start, 400)

let loadingScreen = document.getElementById("video");
let enterBtn = document.getElementById("begin");

function loadingManagement(){
  loadingScreen.classList.toggle('fade');
  enterBtn.style.display = 'initial';
  enterBtn.classList.toggle('fade');
}

var howmuch = document.getElementById("howmuch");
var video = document.getElementById("video");
let topTxt = document.getElementById("top");
let middleTxt = document.getElementById("middle");
let bottomTxt = document.getElementById("bottom");
function start() {
  
  howmuch.play()
  whichDemo = 'top'
  txt = '// How much do websites really know about you?';
  typeWriter()
  
  setTimeout(() => {
    document.getElementById("easycompany").play()
  i=0;
  whichDemo = 'middle'
  txt = "// Most people don't know how easy it is for companies to access your personal information.";
  typeWriter()
  }, 4000)
  
  setTimeout(() => {
    document.getElementById("nopermission").play()
  i=0;
  whichDemo = 'bottom'
  txt = "// Websites don't even have to ask for your permission.";
  typeWriter()
  }, 10000)
  
  setTimeout(() => {
  
    topTxt.classList.toggle('fade');
    
  }, 14000)
  
  setTimeout(() => {
  
    middleTxt.classList.toggle('fade');
    
  }, 14150)
  
  setTimeout(() => {
  
    bottomTxt.classList.toggle('fade');
    
  }, 14300)
  
  setTimeout(() => {
  
    document.getElementById("bloop").play();
    document.getElementById("notimportant").style.display = 'initial';
    document.getElementById("cookies").style.display = 'initial';
    
  }, 16000)
  
}



function enterClicked(){
  document.getElementById('buttonHider').style.display = 'initial';
  setTimeout("document.getElementById('buttonHider').classList.toggle('fade');", 1)
  setTimeout("document.getElementById('begin').style.display = 'none'", 202)
  setTimeout("document.getElementById('buttonHider').style.display = 'none'", 202)
  setTimeout(start, 2000)
}

//loadingManagement() //disable this line
setTimeout(loadingManagement, 6000)
function skipLoading(){
  // This exists for testing, the voiceover will not work when testing using this function, voiceover will be implemented once the website works.
  loadingScreen.style.display = 'none'
  start()
  // When disabling this function, please enable the setTimeout loadingManagement 6s call above this function to allow for everything to work together.
}

//skipLoading()

let notimportant = document.getElementById('notimportant');
let centreTxt = document.getElementById("centreText");
var cookieSum=0;
function destroyCookies(){
  
  cookieSum++;
  
  if (cookieSum == 1) {
    setTimeout("document.getElementById('cookies').style.display = 'none'", 300)
  setTimeout("notimportant.classList.toggle('fade');", 2000)
  
  topTxt.innerHTML = '';
  topTxt.classList.toggle('fade');
  middleTxt.innerHTML = '';
  middleTxt.classList.toggle('fade');
  bottomTxt.innerHTML = '';
  bottomTxt.classList.toggle('fade');
  
  setTimeout(() => {
    document.getElementById("acceptallcookies").play()
  i=0;
  whichDemo = 'top'
  txt = "// Pressing 'Accept All Cookies' grants websites the right to sell your information.";
  typeWriter()
  }, 3000)
  
  setTimeout(() => {
    document.getElementById("evenwithout").play()
  i=0;
  whichDemo = 'middle'
  txt = "// But even without your permission, they can still access your information.";
  typeWriter()
  }, 9000)
  
  setTimeout(() => {
    document.getElementById("nothirdparties").play()
  i=0;
  whichDemo = 'bottom'
  txt = "// So long as they don't provide it to third parties, that is.";
  typeWriter()
  }, 14000)
  
  setTimeout(() => {
  
    topTxt.classList.toggle('fade');
    
  }, 18700)
  
  setTimeout(() => {
  
    middleTxt.classList.toggle('fade');
    
  }, 18850)
  
  setTimeout(() => {
  
    bottomTxt.classList.toggle('fade');
    
  }, 19000)
  
  setTimeout(() => {
  
    centreTxt.style.display = 'initial';
    setTimeout("centreTxt.classList.toggle('fade');", 300)
    
  }, 20500)
  
  setTimeout(() => {
  
    setTimeout("centreTxt.classList.toggle('fade');", 300)
    
  }, 22500)
  
  setTimeout(displayInformation, 24000)
  }
  
  
  
}

var potentialLondon=0;
function displayInformation(){
  
  if (city == 'Barking and Dagenham' || city == 'Barnet' || city == 'Bexley' || city == 'Brent' || city == 'Bromley' || city == 'Camden' || city == 'Croydon' || city == 'Ealing' || city == 'Enfield' || city == 'Greenwhich' || city == 'Hackney' || city == 'Hammersmith and Fulham' || city == 'Haringey' || city == 'Harrow' || city == 'Havering' || city == 'Hillingdon' || city == 'Hounslow' || city == 'Islington' || city == 'Kensington and Chelsea' || city == 'Kingston' || city == 'Kingston upon Thames' || city == 'Lambeth' || city == 'Lewisham' || city == 'Merton' || city == 'Redbridge' || city == 'Richmond' || city == 'Richmond upon Thames' || city == 'Southwark' || city == 'Sutton' || city == 'Tower Hamlets' || city == 'Waltham Forest' || city == 'Wandsworth' || city == 'Westmisnter' || city == 'City of London' || city == 'Hammersmith' || city == 'Fulham') {potentialLondon = 1;}
  if (potentialLondon == 1 && region == 'England') {
    city = 'London'
  }
  
  centreTxt.style.color = 'red';
  centreTxt.innerHTML = 'You are currently in ' + city.bold() + ', ' + region.bold() + '.';
  
  centreTxt.classList.toggle('fade');
  
  setTimeout("centreTxt.classList.toggle('fade');", 3000);
  
  setTimeout(() => {
    
    centreTxt.innerHTML = 'Your internet service provider is ' + isp.bold() + '.';
    centreTxt.classList.toggle('fade');
    
  }, 3500)
  
  setTimeout("centreTxt.classList.toggle('fade');", 6500)
  
  setTimeout(() => {
    
    centreTxt.innerHTML = 'Your ip address is ' + ipAddress.bold() + '.';
    centreTxt.classList.toggle('fade');
    
  }, 7000)
  
  setTimeout("centreTxt.classList.toggle('fade');", 9500)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'lime';
    centreTxt.innerHTML = 'Do you want to continue?';
    centreTxt.classList.toggle('fade');
    
  }, 11000)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'lime';
    centreTxt.innerHTML = 'Do you want to continue?';
    document.getElementById('continue').style.display = 'initial';
    setTimeout("document.getElementById('continue').classList.toggle('fade');", 300)
    document.getElementById('no').style.display = 'initial';
    setTimeout("document.getElementById('no').classList.toggle('fade');", 300)
    
  }, 11500)
  
  // here!
  
}

function close404(){
  
  console.log("Close")
  
  centreTxt.classList.toggle('fade');
  document.getElementById('continue').classList.toggle('fade');
  document.getElementById('no').classList.toggle('fade');
  setTimeout("document.getElementById('no').style.display = 'none';", 299)
    setTimeout("document.getElementById('continue').style.display = 'none';", 299)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'white';
    centreTxt.innerHTML = 'We can pretend this never happened.'.bold();
    centreTxt.classList.toggle('fade');
    
  }, 1500)
  
  setTimeout(() => {
    
    centreTxt.classList.toggle('fade');
    
  }, 3500)
  
  setTimeout(() => {
    
    topTxt.innerHTML = '';
  topTxt.classList.toggle('fade');
  middleTxt.innerHTML = '';
  middleTxt.classList.toggle('fade');
    
    i=0;
    speed = 404;
    whichDemo = 'top'
    txt = "// ERROR 404";
    typeWriter()
    
  }, 4000)
  
  setTimeout(() => {
    
    i=0;
    speed = 404;
    whichDemo = 'middle'
    txt = "// Page not found.";
    typeWriter()
    
  }, 10000)
  
}

function continued(){
  centreTxt.classList.toggle('fade');
  document.getElementById('continue').classList.toggle('fade');
  document.getElementById('no').classList.toggle('fade');
  setTimeout("document.getElementById('no').style.display = 'none';", 299)
    setTimeout("document.getElementById('continue').style.display = 'none';", 299)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'lime';
    centreTxt.innerHTML = 'Good choice.';
    centreTxt.classList.toggle('fade');
    
  }, 1000)
  
  setTimeout("centreTxt.classList.toggle('fade');", 2500)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'lime';
    centreTxt.innerHTML = "To explain further, let's simulate a shopping experience.";
    centreTxt.classList.toggle('fade');
    
  }, 3000)
  
  setTimeout(() => {
    
    setTimeout("document.getElementById('cart').style.display = 'initial';", 50);
    setTimeout("document.getElementById('shopTitle').style.display = 'initial';", 100);
    setTimeout("document.getElementById('item0').style.display = 'initial';", 150);
    setTimeout("document.getElementById('item1').style.display = 'initial';", 200);
    setTimeout("document.getElementById('item2').style.display = 'initial';", 250);
    setTimeout("document.getElementById('item3').style.display = 'initial';", 300);
    setTimeout("document.getElementById('item4').style.display = 'initial';", 350);
    setTimeout("document.getElementById('item5').style.display = 'initial';", 400);
    setTimeout("document.getElementById('item6').style.display = 'initial';", 450);
    setTimeout("document.getElementById('item7').style.display = 'initial';", 500);
    setTimeout("document.getElementById('item8').style.display = 'initial';", 550);
    setTimeout("document.getElementById('item9').style.display = 'initial';", 600);
    setTimeout("document.getElementById('btn0').style.display = 'initial';", 650);
    setTimeout("document.getElementById('btn1').style.display = 'initial';", 700);
    setTimeout("document.getElementById('btn2').style.display = 'initial';", 750);
    setTimeout("document.getElementById('btn3').style.display = 'initial';", 800);
    setTimeout("document.getElementById('btn4').style.display = 'initial';", 850);
    setTimeout("document.getElementById('btn5').style.display = 'initial';", 900);
    setTimeout("document.getElementById('btn6').style.display = 'initial';", 950);
    setTimeout("document.getElementById('btn7').style.display = 'initial';", 1000);
    setTimeout("document.getElementById('btn8').style.display = 'initial';", 1050);
    setTimeout("document.getElementById('btn9').style.display = 'initial';", 1100);
    
    setTimeout("centreTxt.classList.toggle('fade');", 1500);
    
    setTimeout("document.getElementById('informationShop').style.display = 'initial';", 2000);
    setTimeout("document.getElementById('informationShop').classList.toggle('fade');", 2001);
    setTimeout("document.getElementById('cartitems').play();", 2002);
    
  }, 5000)
  
  
}

var itemNumber;
var cart = 0;
var interested = [];
function addToCart() {
  
  
  if (cart < 5) {
    
    if (cart == 4) {
    document.getElementById("storeContinue").style.display = 'initial';
    setTimeout("document.getElementById('storeContinue').classList.toggle('fade');", 1)
  }
    
  document.getElementById('btn' + itemNumber).classList.toggle('fade');
    setTimeout("document.getElementById('btn' + itemNumber).style.display = 'none';", 299)
  document.getElementById('item' + itemNumber).classList.toggle('fade'); //here glitchy
  interested.push(itemNumber);
  cart++;
  } else {
    
  }
  
  
}

var interestedProducts = [];
function nextPhase() {
  document.getElementById("cover").style.display = 'initial';
  setTimeout("document.getElementById('cover').classList.toggle('fade');", 300)
  
  setTimeout("document.querySelector('.topRow').style.display = 'none';", 599)
  setTimeout("document.querySelector('.bottomRow').style.display = 'none';", 599)
  setTimeout("document.querySelector('.topBtns').style.display = 'none';", 599)
  setTimeout("document.querySelector('.bottomBtns').style.display = 'none';", 599)
  setTimeout("document.getElementById('cart').style.display = 'none';", 599)
  setTimeout("document.getElementById('shopTitle').style.display = 'none';", 599)
  setTimeout("document.getElementById('informationShop').style.display = 'none';", 599)
  setTimeout("document.getElementById('storeContinue').style.display = 'none';", 599)
  
  setTimeout("document.getElementById('cover').classList.toggle('fade');", 600)
  setTimeout("document.getElementById('cover').style.display = 'none';", 900)
  
  topTxt.innerHTML = '';
  topTxt.classList.toggle('fade');
  middleTxt.innerHTML = '';
  middleTxt.classList.toggle('fade');
  bottomTxt.innerHTML = '';
  bottomTxt.classList.toggle('fade');
  
  setTimeout(() => {
    document.getElementById("companiesadvertisers").play()
  i=0;
  whichDemo = 'top'
  txt = "// Companies sell to advertisers, advertisers pay companies to run ads.";
  typeWriter()
  }, 1500);
  
  setTimeout(() => {
    document.getElementById("data").play()
  i=0;
  whichDemo = 'middle'
  txt = "// Specifically, they sell your data.";
  typeWriter()
  }, 6500);
  
  setTimeout(() => {
    document.getElementById("dataspecifics").play()
  i=0;
  whichDemo = 'bottom'
  txt = "// Which ads you clicked, your searches, what's in your shopping cart.";
  typeWriter()
  }, 9000);
  
  setTimeout(() => {
  
    topTxt.classList.toggle('fade');
    
  }, 15000)
  
  setTimeout(() => {
  
    middleTxt.classList.toggle('fade');
    
  }, 15150)
  
  setTimeout(() => {
  
    bottomTxt.classList.toggle('fade');
    
  }, 15300)
  
  setTimeout(() => {
  
  topTxt.innerHTML = '';
  topTxt.classList.toggle('fade');
  middleTxt.innerHTML = '';
  middleTxt.classList.toggle('fade');
  bottomTxt.innerHTML = '';
  bottomTxt.classList.toggle('fade');
    
  }, 15310)
  
  setTimeout(() => {
    document.getElementById("phonead").play()
  i=0;
  whichDemo = 'top'
  txt = "// Have you ever been talking about something and you pick up your phone, and there's an advert for it?";
  typeWriter()
  }, 16500);
  
  setTimeout(() => {
    document.getElementById("meantforyou").play()
  i=0;
  whichDemo = 'middle'
  txt = "// As if it was meant for you?";
  typeWriter()
  }, 23000);
  
  setTimeout(() => {
    document.getElementById("probablywas").play()
  i=0;
  whichDemo = 'bottom'
  txt = "// It probably was.";
  typeWriter()
  }, 25000);
  
  setTimeout(() => {
  
    topTxt.classList.toggle('fade');
    
  }, 27000)
  
  setTimeout(() => {
  
    middleTxt.classList.toggle('fade');
    
  }, 27150)
  
  setTimeout(() => {
  
    bottomTxt.classList.toggle('fade');
    
  }, 27300)
  
  setTimeout(() => {
  
    centreTxt.innerHTML = "In future, we'll be sure to reccomend ads relating to:";
    centreTxt.classList.toggle('fade');
    
  }, 28300)
  
  setTimeout(() => {
  
    
    setTimeout(() => {
      document.getElementById("belowCentre").innerHTML = interestedProducts[0].bold() + ', ' + interestedProducts[1].bold() + ', ' + interestedProducts[2].bold() + ', ' + interestedProducts[3].bold() + ', ' + interestedProducts[4].bold() + '.';
      document.getElementById("belowCentre").style.display = 'initial';
      setTimeout("document.getElementById('belowCentre').classList.toggle('fade');", 300);
    }, 300)
    
    
  }, 29500)
  
  setTimeout(() => {
    
    centreTxt.classList.toggle('fade');
  
    setTimeout("document.getElementById('belowCentre').classList.toggle('fade');", 150)
    setTimeout("document.getElementById('belowCentre').style.display = 'none';", 450)
    
  }, 36500)
  
  setTimeout(() => {
    
    centreTxt.style.color = 'white';
    centreTxt.innerHTML = 'That is, if you';
    centreTxt.classList.toggle('fade');
    
    setTimeout(() => {
      
      document.getElementById("accept").style.display = 'initial';
      setTimeout("document.getElementById('accept').classList.toggle('fade');", 300);
      
      fakeMouse()
      
    }, 1500)
    
  }, 37500)
  
}

function fakeMouse() {
  document.getElementById("bd").style.cursor = 'none';
  document.getElementById("fake_cursor").style.display = 'initial';
  
  if (os == 'macOS') {
    document.getElementById("fake_cursor").style.src = 'https://cdn.glitch.global/13f70dd3-8b82-4589-be31-92a86c0022c7/mac_cursor.png?v=1715893719823';
  } else if (os == 'windows') {
    document.getElementById('windows_cursor').style.src = 'https://cdn.glitch.global/13f70dd3-8b82-4589-be31-92a86c0022c7/windows_cursor.png?v=1715893713695';
  }
  
  setTimeout(() => {
    
    document.getElementById("click").play();
    
    document.getElementById("fake_cursor").style.display = 'none';
    centreTxt.style.display = 'none';
    document.getElementById("accept").style.display = 'none';
    
  }, 3900)
  
 setTimeout(() => {
    
    document.getElementById("title").style.display = 'initial';
    setTimeout("document.getElementById('title').classList.toggle('fade');", 300);
    
  }, 5000)
  
   setTimeout(() => {
     
     document.getElementById("bd").style.cursor = 'default';
    
  topTxt.innerHTML = '';
  topTxt.classList.toggle('fade');
  middleTxt.innerHTML = '';
  middleTxt.classList.toggle('fade');
  bottomTxt.innerHTML = '';
  bottomTxt.classList.toggle('fade');
     
  i=0;
  speed = 70;
  whichDemo = 'top'
  txt = "Ip Address: " + ipAddress;
  typeWriter()
    
  }, 7000)
  
  setTimeout(() => {
    i=0;
    speed = 70;
  whichDemo = 'middle'
  txt = "City: " + city;
  typeWriter()
  }, 9000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'bottom'
  txt = "Region: " + region;
  typeWriter()
  }, 11000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'sublayer0'
  txt = "Country: " + country;
  typeWriter()
  }, 13000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'sublayer1'
  txt = "Operating System: " + os_raw;
  typeWriter()
  }, 15000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'sublayer2'
  txt = "Internet Service Provider: " + isp;
  typeWriter()
  }, 17000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'sublayer3'
  txt = "Browser: " + browser;
  typeWriter()
  }, 20000)
  
  setTimeout(() => {
  i=0;
    speed = 70;
  whichDemo = 'sublayer4'
  txt = "Interests: " + interestedProducts[0] + ', ' + interestedProducts[1] + ', ' + interestedProducts[2] + ', ' + interestedProducts[3] + ', ' + interestedProducts[4];
  typeWriter()
  }, 22000)
  
  
}

