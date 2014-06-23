(function() {
    Blockly.JavaScript.Choice = function(block) {
		var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
		var value_state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC);
  
  		var arg0 = value_name + value_state;

        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();
