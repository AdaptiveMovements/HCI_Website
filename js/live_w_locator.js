$(function() {
    var App = {
        init : function() {
            Quagga.init({
                inputStream : {
                    name : "Live",
                    type : "LiveStream"
                },
                decoder : {
                    readers : ["code_128_reader"]
                },
                readyFunc : function() {
                    App.attachListeners();
                    Quagga.start();
                }
            });
        },
        attachListeners : function() {
            $(".controls .reader-group").on("change", "input", function(e) {
                e.preventDefault();
                Quagga.setReaders([e.target.value + "_reader"]);
            });
        },
        detachListeners : function() {
            $(".controls .reader-group").off("change", "input");
        },
        lastResult : null
    };

    App.init();

    Quagga.onDetected(function(result) {
        
            window.location.href='barcodeProd.html';
        
    });

});
