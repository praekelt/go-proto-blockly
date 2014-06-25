// dummy function
(function() {
    Blockly.JavaScript.choice = function(block) {
        var value_label = Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_ATOMIC);
        var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
        var code = value_label + value_value;

        return [code + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();
