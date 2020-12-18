let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billAmount = document.getElementById("billamount").value;
  let tippercentage = document.getElementById("Percentage").value;

  const tipamount = (document.getElementById("tipamount").value =
    (billAmount * tippercentage) / 100);

  document.getElementById("totalbill").value =
    parseFloat(billAmount) + parseFloat(tipamount);
});
