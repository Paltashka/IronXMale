function handlePhoneInput() {
  $(document).ready(function () {
    $("#phone").on("input", function (event) {
      const inputValue = event.target.value;
      
      if (inputValue === '' || inputValue === '+') {
        $('#country-flag')[0].src = '';
      }
      const datalist = $('datalist');
      const options = datalist[0].options;
      for (let i = 0; i < options.length; i++) {
        if (inputValue === options[i].value) {
          const code = options[i].dataset.countryCode.toLowerCase();
          console.log(code);
          $('#country-flag')[0].src = `/images/flags/${code}.png`;
          break;
        }
      }
    });
  });
}
