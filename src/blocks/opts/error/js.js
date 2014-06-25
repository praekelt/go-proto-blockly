// dummy function
(function() {
    Blockly.JavaScript.error = function(block) {
        var value_error_text = Blockly.JavaScript.valueToCode(block, 'ERROR_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = value_error_text;
        return code;
    };
})();