// dummy function
(function() {
    Blockly.JavaScript.Choice = function(block) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        var value_state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC);
  
        var code = value_name + value_state;

        return [code + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();
