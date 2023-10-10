let btnVal = document.querySelectorAll(".btn");
let inpVal = document.getElementById("inp");
let smallInpVal = document.getElementById("smallinp");
let strings = "";

btnVal.forEach((val) => {
   val.addEventListener("click", (e) => {
      if (e.target.textContent == "=") {
         strings = eval(strings);
         inpVal.value = strings;
      } else if (e.target.textContent == "C") {
         strings = "";
         inpVal.value = strings;
         smallInpVal.value = " ";
      }else if (e.target.textContent == "AC") {
         strings = strings.slice(0,-1);
         inpVal.value = strings;
      } else {
         strings += val.textContent;
         inpVal.value = strings;

         setInterval(() => {
            smallInpVal.value = "= " + eval(strings);
         }, 1000);

      }
   });
});

console.log();
