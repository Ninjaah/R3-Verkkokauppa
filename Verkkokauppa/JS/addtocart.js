
function cartClick(itemId, ItemName) {

    var x = itemId;
    var y = ItemName;
    if (itemId === 6 || itemId === 8 || itemId === 11) {
        y = ItemName+"\""
    }
    console.log(x + " " + y + " added to cart");

    localStorage.ostoskori += ","+x;
    console.log(localStorage.getItem("ostoskori"));
}
