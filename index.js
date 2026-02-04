


const buttons = document.querySelectorAll(".z");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const productName = btn.dataset.name;

  
    cart.push(productName);


    localStorage.setItem("cart", JSON.stringify(cart));


    btn.innerText = "Added to  cart";
    btn.disabled = true;

    console.log(cart);
  });
});


 document.getElementById("y").addEventListener("click",(event)=>{
  event.preventDefault();
  const username=document.getElementById("username").value;
  const password=document.getElementById("password").value;
  if(username ==="bala" && password === "1234"){
 window.location.href="https://www.amazon.in/?&ext_vrnc=hi&tag=googinhydr1-21&ref=pd_sl_28ors6rnjl_b&adgrpid=60611463244&hvpone=&hvptwo=&hvadid=617724335923&hvpos=&hvnetw=g&hvrand=4146810767462969069&hvqmt=b&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9154667&hvtargid=kwd-298319537966&hydadcr=15413_2322997&mcid=4d25e2f0001a39a4aa6b1f5b55e2c793";
  }
  else{
    document.getElementById("msg").innerText="login failed";
  }
});