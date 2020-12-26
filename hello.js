let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billamount").value);
  let tippercentage = document.getElementById("Percentage").value;

  console.log(billAmount, tippercentage);

  const tipamount = (document.getElementById("tipamount").value =
    (billAmount * tippercentage) / 100).toFixed(3);

  // console.log(billAmount, tippercentage);
  console.log(tipamount);

  const totalvalue = (document.getElementById("totalbill").value =
    parseFloat(billAmount) + parseFloat(tipamount));

  console.log(totalvalue);
});
