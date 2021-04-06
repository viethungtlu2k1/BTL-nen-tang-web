// getting all required elements
const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector(".search-input");
const suggBox = searchWrapper.querySelector(".search-autocomplete");
const icon = searchWrapper.querySelector(".search-buttom");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    $(".search-drop").css("display","none");
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ '<img src="images/search-suggest.png" alt="">' + data +'</li>';
        });
        $(".search-autocomplete").addClass("active-search"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        $(".search-autocomplete").removeClass("active-search"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    $(".search-autocomplete").removeClass("active-search");


}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ '<img src="images/search-suggest.png" alt="">' + userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
