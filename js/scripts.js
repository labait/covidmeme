
var data = [];
var previousIndexes = [];

function loadJson() {
  var url = "./data.php";
  $.getJSON(url, function (_data) {
    data = _data;
    console.log(data);
    showMeme();
  });
}


function getMemeItem(){
  var index = false;
  do {
    var nextIndex = Math.floor(Math.random() * data.length);
    console.log("index " + nextIndex + "?");
    if (previousIndexes.indexOf(nextIndex) == -1) {
      index = nextIndex
      previousIndexes.push(nextIndex);
    }
  } while (!index)
  console.log(previousIndexes)
  if (previousIndexes.length == data.length) previousIndexes = [] 
  var item = data[index];
  return item;
}


function showMeme(){
  var item = getMemeItem();
  var memePath = "./meme/" + item.filename;
  console.log(memePath)
  $("#meme").attr("src", memePath)
}


$(function(){
  loadJson();
  $("#meme").on("click", function(){
    showMeme();
  })
})