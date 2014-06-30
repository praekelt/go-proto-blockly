(function() {
    Blockly.JavaScript.textLength = function(block) {
        return goBlockly.templates['templates/blocks/misc/textLength/textLength.hbs']({
                text: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''"
            });
    };
})();
