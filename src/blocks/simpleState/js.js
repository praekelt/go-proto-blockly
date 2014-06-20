(function() {
    Blockly.JavaScript.simpleState = function(block) {
    	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || "";
  		var statements_choices = Blockly.JavaScript.statementToCode(block, 'CHOICES') || "";
  		var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || "";

  		var arg0 = value_name + statements_choices + value_next;

        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();
