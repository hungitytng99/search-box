var inputSearch = document.getElementById('search-input');
var searchContent = document.getElementsByClassName('search-content')[0];
var ulDropdown = document.getElementsByClassName('search-list')[0];

function search() {
    var itemHTML = document.getElementsByClassName('search-item__link');
    var input = document.getElementById('search-input').value;
    var contentConverted = [];
    var inputConvert = nonAccentVietnamese(input);
    var liDisplay = document.getElementsByClassName('search-item');
    var isHad = false;
    for (var i = 0; i < itemHTML.length; i++) {
        contentConverted[i] = nonAccentVietnamese(itemHTML[i].innerHTML);
    }
    for (var i = 0; i < contentConverted.length; i++) {
        if (contentConverted[i].indexOf(inputConvert) > -1) {
            liDisplay[i].style.display = "block";
            isHad = true;
        } else {
            liDisplay[i].style.display = "none";
        }
    }
}


function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str;
}

function setInput(value) {
    var textSelected = value.getElementsByTagName("div")[0].innerHTML;
    document.getElementById('search-input').value = textSelected;
    // document.getElementsByClassName('dropdown-search')[0].style.display = "none";
}



inputSearch.onfocus = () => {
    searchContent.classList.add('show-dropdown');
}

document.onclick = (e) => {
    if (e.target != inputSearch && e.target != ulDropdown) {
        searchContent.classList.remove('show-dropdown');
    }

}