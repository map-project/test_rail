function loadJSON(file, callback) 
{   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () 
    {
          if (xobj.readyState == 4 && xobj.status == "200") 
          {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }  
 function load() 
{
   loadJSON("https://githbub.github.io/delhi-metro-stations/metro.json", function(response) 
   {
  		//alert(response);
        var actual_JSON = eval('(' +response+')');//JSON.parse(response);
        console.log(actual_JSON);
       _s=actual_JSON.username;
        _z=actual_JSON.password;
       
    });
}
