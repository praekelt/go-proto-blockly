window.goBlockly = {};

goBlockly.blocks = {};

(function() {
    Blockly.JavaScript.choice = function(block) {
    	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || "";
  		var statements_choices = Blockly.JavaScript.statementToCode(block, 'CHOICES') || "";
  		var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || "";

  		var arg0 = value_name + statements_choices + value_next;

        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.choice = {
        init: function() {
		    this.setColour(230);
		    this.appendDummyInput()
		        .appendField("SimpleState");
		    this.appendValueInput("NAME")
		        .setCheck("String")
		        .appendField("Name");
		    this.appendStatementInput("CHOICES")
		        .setCheck("Array")
		        .appendField("Choices");
		    this.appendValueInput("NEXT")
		        .setCheck("String") // would ideally be a drop down menu or function of some kind
		        .appendField("Next state");
		    this.setTooltip('A simple state containing any number of choices');
        }
    };
})();

(function() {
    Blockly.JavaScript.simpleState = function(block) {
    	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC) || "";
  		var statements_choices = Blockly.JavaScript.statementToCode(block, 'CHOICES') || "";
  		var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || "";

  		var arg0 = value_name + statements_choices + value_next;

        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.simpleState = {
        init: function() {
		    this.setColour(230);
		    this.appendDummyInput()
		        .appendField("SimpleState");
		    this.appendValueInput("NAME")
		        .setCheck("String")
		        .appendField("Name");
		    this.appendStatementInput("CHOICES")
		        .setCheck("Array")
		        .appendField("Choices");
		    this.appendValueInput("NEXT")
		        .setCheck("String") // would ideally be a drop down menu or function of some kind
		        .appendField("Next state");
		    this.setTooltip('A simple state containing any number of choices');
        }
    };
})();

(function() {
    Blockly.JavaScript.textLength = function(block) {
        var arg0 = Blockly.JavaScript.valueToCode(
            block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''";
        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.textLength = {
        init: function() {
            this.appendValueInput('VALUE')
                .setCheck('String')
                .appendField('length');

            this.setOutput(true, 'Number');
            this.setTooltip('Returns number of letters in the provided text.');
        }
    };
})();
