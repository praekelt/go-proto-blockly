(function() {
    Blockly.JavaScript.opts_error = function(block) {
        return goBlockly.templates['templates/blocks/opts/error/error.hbs']({
                error_text: Blockly.JavaScript.valueToCode(block, 'ERROR_TEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
