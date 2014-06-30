(function() {
    Blockly.JavaScript.textLength = function(block) {
        var value_text = Blockly.JavaScript.valueToCode(
            block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''";
        return goBlockly.templates['templates/blocks/misc/textLength/textLength.hbs']({text: value_text});
    };
})();
