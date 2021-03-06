//
// @name Menu
// @description  Function for closing the menu (cannot be done with just :target selector)
//
HelsingborgPrime = HelsingborgPrime || {};
HelsingborgPrime.Helper = HelsingborgPrime.Helper || {};

HelsingborgPrime.Helper.Datepicker = (function ($) {

    function Datepicker() {
        this.init();
    }

    Datepicker.prototype.init = function () {
        // Single date
        $('.datepicker').datepicker({
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            showOtherMonths: true,
            selectOtherMonths: true
        });

        // Date range
        $('.datepicker-range.datepicker-range-from').datepicker({
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            showOtherMonths: true,
            selectOtherMonths: true,
            onClose: function(selectedDate) {
                $('.datepicker-range.datepicker-range-to').datepicker('option', 'minDate', selectedDate);
            }
        });

        $('.datepicker-range.datepicker-range-to').datepicker({
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            showOtherMonths: true,
            selectOtherMonths: true,
            onClose: function(selectedDate) {
                $('.datepicker-range.datepicker-range-from').datepicker('option', 'maxDate', selectedDate);
            }
        });
    };

    return new Datepicker();

})(jQuery);

/* Datepicker language */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["../widgets/datepicker"], factory);
    } else {
        factory( jQuery.datepicker );
    }
}(function(datepicker) {
    datepicker.regional.sv = {
        closeText: "Stäng",
        prevText: "&#xAB;Förra",
        nextText: "Nästa&#xBB;",
        currentText: "Idag",
        monthNames: [ "Januari","Februari","Mars","April","Maj","Juni",
        "Juli","Augusti","September","Oktober","November","December" ],
        monthNamesShort: [ "Jan","Feb","Mar","Apr","Maj","Jun",
        "Jul","Aug","Sep","Okt","Nov","Dec" ],
        dayNamesShort: [ "Sön","Mån","Tis","Ons","Tor","Fre","Lör" ],
        dayNames: [ "Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag" ],
        dayNamesMin: [ "Sö","Må","Ti","On","To","Fr","Lö" ],
        weekHeader: "Ve",
        dateFormat: "yy-mm-dd",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    datepicker.setDefaults(datepicker.regional.sv);

    return datepicker.regional.sv;
}));
