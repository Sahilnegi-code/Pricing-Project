let checkedBox = document.getElementById("toggle");
console.log(checkedBox);
let box1Price = document.getElementsByClassName("price-design")[0];
console.log(box1Price.textContent);

let box2Price = document.getElementsByClassName("price-design")[1];
console.log(box2Price.textContent);

let box3Price = document.getElementsByClassName("price-design")[2];
console.log(box3Price.textContent);

console.log(checkedBox.checked);
checkedBox.addEventListener("change", function () {
  if (checkedBox.checked) {
    console.log("Checkbox is checked");
    box1Price.innerHTML = `<span class="dollar"> $ </span>19.9`;
    box2Price.innerHTML = `<span class="dollar"> $ </span>24.99`;
    box3Price.innerHTML = `<span class="dollar"> $ </span>39.99`;
  } else {
    console.log("Checkbox is not checked");
    box1Price.innerHTML = `<span class="dollar">$</span>199.99`;
    box2Price.innerHTML = `<span class="dollar">$</span>249.99`;
    box3Price.innerHTML = `<span span class="dollar">$</span>399.99`;
  }
});
