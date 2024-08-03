/*
 Modified Mozilla JavaScript code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#iterating_map_with_for...of
 by implementing custom map values and displaying HTML button elements from 5 map sets.

 Mozilla QuerySelectorAll: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

 Mozilla Click Events: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#javascript

 W3Schoold replace method: https://www.w3schools.com/jsref/jsref_replace.asp

 innerText: https://stackoverflow.com/a/7731827

 Mozilla Map .get(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get

 Mozilla JavaScript Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 Mozilla textContent: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

 Medium article about Arrays v.s. Maps: https://medium.com/@ntnprdhmm/reducing-time-complexity-using-a-map-15298ceeebcd

 W3Schools Toggle Button: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

 CSS Scan Blog Remove Bullet Points: https://getcssscan.com/blog/how-to-remove-bullets-from-li-css
*/

const menuBtnCont = document.getElementById("menuBtnCont");

const menuBtnArr = [];
menuBtnArr.push("Buona Journata Halal Food Truck", "Kinky Taco", "Moshe’s Falafel", "Jainnetto's Pizza", "Wafels & Dingers");

//Map of Buona Journata Halal Food Truck's menu item names and prices
const bjhfdMap = new Map();
bjhfdMap.set("foodName1", "$5.99");
bjhfdMap.set("foodName2", "$2.99");
bjhfdMap.set("foodName3", "$10.25");

//Map of Kinky Tacos' Menu item names and prices
const ktMap = new Map();
ktMap.set("Uncle Fatty’s Fried Chicken Tacos", "$12.99");
ktMap.set("Kinky Loaded Tacos", "$13.95");
ktMap.set("Saditty Salmon Tacos", "$15.99");
ktMap.set("Smack Yo Momma Catfish Taco", "$6.49");
ktMap.set("Back Alley Beef Tacos", "$12.99");
ktMap.set("Churro Sundae", "$9.99");
ktMap.set("Cajun Fries", "$4.99");
ktMap.set("Chips", "$3.99");
ktMap.set("2 Churros", "$5.99");

//Map of Moshe's Falafel's menu item names and prices
const mfMap = new Map();
mfMap.set("foodName1", "$1.99");
mfMap.set("foodName2", "$2.32");
mfMap.set("foodName3", "$10.25");

//Map of Jainnetto's Pizza's menu item names and prices
const jpMap = new Map();
jpMap.set("foodName1", "$1.00");
jpMap.set("foodName2", "$8.99");
jpMap.set("foodName3", "$16.50");

//Map of Wafels & Dingers's menu item names and prices
const wdMap = new Map();
wdMap.set("foodName1", "$10.99");
wdMap.set("foodName2", "$12.35");
wdMap.set("foodName3", "$11.25");

//Array to store all food location maps
const mapArr = [];
mapArr.push(bjhfdMap , ktMap, mfMap, jpMap, wdMap);
//console.log(mapArr);

const menuTitle = document.getElementById("menuTitle");

const menuTextContainer = document.getElementById("menuTxtCont");
const menuTxtList = document.getElementById("menuTxtList");
menuTxtList.style.listStyleType = "none"; //Hide bullet points from HTML <li></li> tags.

/*
for(const [key, value] of bjhfdMap) {
    //console.log(key + ": " + value);
    const listItem = document.createElement("li");
    listItem.textContent = key + ": " + value;

    menuTxtList.appendChild(listItem);
}

for(const [key, value] of ktMap) {
    //console.log(key + ": " + value);
    const listItem = document.createElement("li");
    listItem.textContent = key + ": " + value;

    menuTxtList.appendChild(listItem);
}
*/

for(let i = 0; i < menuBtnArr.length; i++) {
    const menuBtn = document.createElement("button");
    menuBtn.setAttribute('type', 'button');
    menuBtn.setAttribute('id', 'menuBtn' + i);

    const divListWrapper = document.createElement("div");
    divListWrapper.setAttribute('id', 'foodMenu' + i);

    //Create hidden list items held with div containers to be unhidden with menu button presses.
    for(const [key, value] of mapArr[i]) {
        //console.log(key + ": " + value);
        const listItem = document.createElement("li");
        listItem.textContent = key + ": " + value;

        divListWrapper.appendChild(listItem);

        divListWrapper.style.display = "none";
        
        menuTxtList.appendChild(divListWrapper);
    }

    menuBtn.addEventListener("click", () => {

        menuTitle.textContent = menuBtnArr[i];
    
        //console.log(menuTitle.textContent);
        
        /*
        const foodMenuGroup = document.getElementById("foodMenu" + i);

        if(foodMenuGroup.style.display == "none") {
            foodMenuGroup.style.display = "block";
        } else {
            foodMenuGroup.style.display = "none";
        }
        */

    });

    const menuBtnTxt = document.createTextNode(menuBtnArr[i]);

    menuBtn.appendChild(menuBtnTxt);
    
    menuBtnCont.appendChild(menuBtn);
}

const foodMenuGroup0 = document.getElementById("foodMenu0");
const foodMenuGroup1 = document.getElementById("foodMenu1");
const foodMenuGroup2 = document.getElementById("foodMenu2");
const foodMenuGroup3 = document.getElementById("foodMenu3");
const foodMenuGroup4 = document.getElementById("foodMenu4");

menuBtn0.addEventListener("click", () => {

    if(foodMenuGroup0.style.display == "none") {
        foodMenuGroup0.style.display = "block";

        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    } else {
        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    }
});

menuBtn1.addEventListener("click", () => {

    if(foodMenuGroup1.style.display == "none") {
        foodMenuGroup1.style.display = "block";

        foodMenuGroup0.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    } else {
        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    }
});

menuBtn2.addEventListener("click", () => {

    if(foodMenuGroup2.style.display == "none") {
        foodMenuGroup2.style.display = "block";

        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    } else {
        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    }
});

menuBtn3.addEventListener("click", () => {

    if(foodMenuGroup3.style.display == "none") {
        foodMenuGroup3.style.display = "block";

        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup4.style.display = "none";
    } else {
        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    }
});


menuBtn4.addEventListener("click", () => {

    if(foodMenuGroup4.style.display == "none") {
        foodMenuGroup4.style.display = "block";

        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
    } else {
        foodMenuGroup0.style.display = "none";
        foodMenuGroup1.style.display = "none";
        foodMenuGroup2.style.display = "none";
        foodMenuGroup3.style.display = "none";
        foodMenuGroup4.style.display = "none";
    }
});

/*
const menuBtnMap = new Map();
menuBtnMap.set(0, "Buona Journata Halal Food Truck");
menuBtnMap.set(1, "Kinky Taco");
menuBtnMap.set(2, "Moshe’s Falafel");
menuBtnMap.set(3, "Jainnetto's Pizza");
menuBtnMap.set(4, "Wafels & Dingers");

for(const [key, value] of menuBtnMap) {
    const menuBtn = document.createElement("button");
    menuBtn.setAttribute('type', 'button');
    menuBtn.setAttribute('id', 'menuBtn' + key);

    const menuBtnTxt = document.createTextNode(value);

    menuBtn.appendChild(menuBtnTxt);
    
    menuBtnCont.appendChild(menuBtn);
}

const menuTitle = document.getElementById("menuTitle");

const kinkyTacosMenuItemNames = [];
kinkyTacosMenuItemNames.push(
    "Uncle Fatty’s Fried Chicken Tacos", "Kinky Loaded Tacos", "Saditty Salmon Tacos", "Smack Yo Momma Catfish Taco", "Back Alley Beef Tacos",
    "Churro Sundae", "Cajun Fries", "Chips", "2 Churros"
    );

const kinkyTacosMenuItemPrices = [];
kinkyTacosMenuItemPrices.push("$12.99", "$13.95", "$15.99", "$6.49", "$12.99", "$9.99", "$4.99", "$3.99", "$5.99");

menuBtn0.addEventListener("click", () => {
    const currMenuTitleTxt = menuTitle.innerText;

    const menuTitleContents = menuTitle.innerHTML;
    menuTitle.innerHTML = menuTitleContents.replace(currMenuTitleTxt, menuBtnMap.get(0));

});
*/
