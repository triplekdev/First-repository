let curValue // declared outside so both handlers can see it
let sign
const sel = document.getElementById("sel")
sel.addEventListener('input', (e) => {
  curValue = e.target.value// update the shared variable
  
  switch (curValue) {
    case 'en-IN':
      sign = "₹"
      break;
    
    case 'en-NG':

      sign = "₦"
      break;
      
    case 'en-US':

      sign = "$"
      break;
    
    case 'en-GB':

      sign = "£"
      break;
      
    case 'en-DE':

      sign = "€"
      break;
    
    
      
    default:

      
  }
})

document.addEventListener("DOMContentLoaded", function() { //this makes sure it shows immediately the page is loaded
  const total = document.getElementById("total")
  const rate = document.getElementById("rate")
  const time = document.getElementById("time")
  //accessing the values of each of the inputs
  total.addEventListener("input", () => uptotal(total.value)); //problem was from not making a function to house the updating function and also using this is a problem 
  rate.addEventListener("input", () => uprate(rate.value));
  time.addEventListener("input", () => uptime(time.value));
  //functions for showing their values on the span element below the sliders 
  uptotal(total.value);
  uprate(rate.value);
  uptime(time.value);
  console.log(total.value)
})

function uptotal(value) {
  //for accessing the span elements and inputing the values into them
  document.getElementById("ival").innerText =  `${parseInt(value).toLocaleString(curValue)}`
}

function uprate(value) {
  //for accessing the span elements and inputing the values into them
  document.getElementById("rval").innerText = `${parseFloat(value)}`
}

function uptime(value) {
  //for accessing the span elements and inputing the values into them
  document.getElementById("pval").innerText = `${parseFloat(value)}`
}



function CalFD() {
  console.log(curValue)
  console.log(sign) // now it’s available here and i can now access because i declared it outside of both handlers
  if (curValue === undefined) {
  sel.classList.add("shake");
		invalid.style.visibility = "visible";
		
		setTimeout(function() {
			sel.classList.remove("shake");
			invalid.style.visibility = "hidden"
		},800);
	} 

  //Creating a function for the button for the calculation of the values below the button ✅
  const tvalue = parseFloat(document.getElementById("total").value) //getting the values of all the sliders
  const rvalue = parseFloat(document.getElementById("rate").value)
  const pvalue = parseFloat(document.getElementById("time").value)
  //the algorithm behind the FD calculator 👇
  const n = 4
  const tamt = tvalue * Math.pow((1 + (rvalue / 100) / n), n * pvalue); //made a mistake of forgetting to put a '.' between the Math and pow therefore causing an error 🤦
  const estvalue = tamt - tvalue;
  
  document.getElementById("inv").innerText = sign + `${parseInt(tvalue).toLocaleString(`${curValue}`)}`
  document.getElementById("est").innerText = sign + `${Math.round(estvalue).toLocaleString( `${curValue}`)}`
  document.getElementById("tval").innerText = sign + `${Math.round(tamt).toLocaleString( `${curValue}`)}`
  
  
}
