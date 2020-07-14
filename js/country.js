function handlePhoneInput() {
  $(document).ready(function () {
    $("#phone").on("input", function (event) {
      const inputValue = event.target.value;
      if (inputValue === "" || inputValue === "+") {
        $("#country-flag")[0].src = "";
      }
      const datalist = $("datalist");
      const options = datalist[0].options;
      let code;
      for (let i = 0; i < options.length; i++) {
        if (inputValue === options[i].value) {
          // if (inputValue === '+1') {
          //   console.log(options[i].dataset.id)
          //   if (options[i].dataset.id === '1')
          //     code = 'us.png';
          //     break;
          //   } else {
          //     code = 'cn.png';

          //   }
          code = options[i].dataset.countryCode.toLowerCase();
          $("#country-flag")[0].src = `/images/flags/${code}.png`;
          break;
        }
      }
    });
  });
}

$(document).ready(function () {
  // $("#phone").intlTelInput({
  //   utilsScript: "js/utils.js",
  // });
  var input = document.querySelector("#phone");
  window.intlTelInput(input);
});
