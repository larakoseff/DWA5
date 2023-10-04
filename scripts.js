// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

    if (dividend === "" || divider === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      } else {
          result.innerText = Math.floor(dividend / divider);
      }
      
    if (dividend > 0 && divider < 0) {
        result.innerText = "Division not performed. Invalid number provided. Try again.";
      } else {
        try {
          result.innerText = Math.floor(dividend / divider);
        } catch (e) {
            console.log("Error:", e)
        }
      }  
      
      if ( isNaN(dividend) || isNaN(divider)) {
        document.body.innerHTML = /* html */ `Something critical went wrong. Please reload the page`
        }

    });

    