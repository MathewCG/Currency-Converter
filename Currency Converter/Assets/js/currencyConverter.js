$(function () {
        var $inputAmount = $("#inputAmount");
        var $fCurrency = $("#fCurrency");
        var $sCurrency = $("#sCurrency");
        var $api = 'https://free.currconv.com/api/v7/convert?q=';
        var $randomUnderscore = '_';
        var $apiKey = '';
        let currencySymbol;


        $('#submit').on('click', function() {
            
            switch(sCurrency.value) {
                case "USD":
                    currencySymbol = '\u0024';
                    break;
                case "EUR":
                    currencySymbol = '\u20AC';
                    break;
                case "GBP":
                    currencySymbol = '\u00A3';
                    break;
                case "CAD":
                    currencySymbol = 'C\u0024 ';
                    break;
                case "AUD":
                    currencySymbol = 'A\u0024 ';
                    break;
                case "NZD":
                    currencySymbol = 'NZ\u0024 ';
                    break;
                case "CHF":
                    currencySymbol = 'CHF: ';
                    break;
                case "JPY":
                    currencySymbol = '\u00A5';
                    break;
            }

            $.ajax({
                type: 'GET',
                url: $api + fCurrency.value + $randomUnderscore + sCurrency.value + $apiKey,
                success: function(data) {
                    $("#converted").html("" + currencySymbol + Number.parseFloat(Object.values(data)[0] * parseInt(inputAmount.value)).toFixed(4));
                    console.log('success', Object.values(data)[0] * parseInt(inputAmount.value));
                },
                error: function() {
                    alert('error converting currency');
                }
            });
        })


});
