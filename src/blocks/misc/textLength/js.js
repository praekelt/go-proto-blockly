(function() {
    Blockly.JavaScript.textLength = function(block) {
        var arg0 = Blockly.JavaScript.valueToCode(
            block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''";
        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();
