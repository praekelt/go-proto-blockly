// dummy function
(function() {
    Blockly.JavaScript.send_reply = function(block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_value;
		return code;
	};
})();