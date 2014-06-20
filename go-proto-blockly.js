window.goBlockly = {};

goBlockly.blocks = {};

(function() {
    Blockly.JavaScript.choice = function(block) {
		var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
		var value_state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC);
  
  		var arg0 = value_name + value_state;

        return [arg0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.choice = {
        init: function() {
		    this.setColour(330);
		    this.appendDummyInput()
		        .appendField("Choice");
		    this.appendValueInput("NAME")
		        .setCheck("String")
		        .setAlign(Blockly.ALIGN_RIGHT)
		        .appendField("Name");
		    this.appendValueInput("STATE")
		        .setCheck("String")
		        .setAlign(Blockly.ALIGN_RIGHT)
		        .appendField("State");
		    this.setInputsInline(true);
		    this.setPreviousStatement(true, "choice");
		    this.setNextStatement(true, "choice");
		    this.setTooltip('A state choice');
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
		        .setCheck("choice")
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
