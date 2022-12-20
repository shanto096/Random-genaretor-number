const GeneratorBtn = document.getElementById("generator-btn")
const inputPin = document.getElementById("input-pin")
const allValue =document.getElementById("all-input")

function generator() {
  let pin = Math.round(Math.random()*10000)
  let newPin =pin +"";
  if (newPin.length === 4) {
      return pin;  
  }else{
      return generator();
  }
}

GeneratorBtn.addEventListener('click', function () {
  const GeneratorPin = document.getElementById("pin-generator")
  GeneratorPin.innerText = generator()
})

allValue.addEventListener('click',function ( event) {

  if ( event.target.value === "undefine") {
    inputPin.value ="";
  }else{
    let show = event.target.value;
    let showpin =inputPin.value +show;
    inputPin.value = showpin;
  }
  
   })

  document.getElementById("submitBtn").addEventListener('click',function () {
  const GeneratorPin = document.getElementById("pin-generator")
      const x = Number(GeneratorPin.innerText)
      const y = Number(inputPin.value)
      if (x === y) {
          document.getElementById('checkbox1').style.visibility = "visible";
          // const checkbox1 = document.getElementById('checkbox1')
          // checkbox1.style.visibility ="visible"S
      }else{
          const checkbox2 = document.getElementById('checkbox2')
          checkbox2.style.visibility ="visible"

      }
  })

  function clearAll() {
    inputPin.value ="";
 }
 document.getElementById("clear").addEventListener('click',function () {
     clearAll();
 })