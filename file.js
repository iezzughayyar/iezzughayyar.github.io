function greet()
        {
        let name = document.querySelector('#vorname').value;
        document.querySelector("h1").innerHTML = "hello you stupid " + name;
        }
        //
function counter()
        {
        document.querySelector("h2").innerHTML ++;
        }

        //
        document.querySelector("#red").onclick = function ()
        {
        document.querySelector("body").style.backgroundColor="red";
        }

        document.querySelector("#blue").onclick = function ()
        {
        document.querySelector("body").style.backgroundColor="blue";
        }

        document.querySelector("#green").onclick = function ()
        {
        document.querySelector("body").style.backgroundColor="green";
        }

        document.querySelector("#c").onclick = function ()
        {
        document.querySelector("body").style.backgroundColor="white";
        }
        //

        document.querySelector("select").onchange=function(){
            document.querySelector("p").style.fontSize= this.value;
        }

function blink(){
            let p = document.querySelector("p");
            if (p.style.visibility==="hidden"){
                p.style.visibility="visible";
            }
            else{
                p.style.visibility="hidden";
            }

        }

window.setInterval(blink, 100);

navigator.geolocation.getCurrentPosition(function(position) {
window.alert(position.coords.latitude + " " + position.coords.longitude);
});
