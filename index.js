var randomnumber1=Math.floor(Math.random()*6)+1;      //1-6
//alert(randomnumber1)

var img="dice"+randomnumber1+".png";

var imgsource="images/"+img;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsource);



var randomnumber2=Math.floor(Math.random()*6)+1;

var img1="dice"+randomnumber2+".png";

var imgsource1="images/"+img1;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsource1)

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🏳️Player one wins";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="🏳️Player two wins";
}
else 
{
    document.querySelector("h1").innerHTML="😆😎Match Draw"
}