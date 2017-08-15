console.log('Loaded!');
var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = "100px";
    };
    
   
    var button = document.getElementById("counter");
    counter = 0;
    button.onclick = function()
    {
        counter = counter + 1;
        var span = document.getElementById("count");
        span.innerHTML = counter.toString();
        
    };