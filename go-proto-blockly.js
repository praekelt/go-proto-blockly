window.goBlockly = {};

goBlockly.blocks = {};

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

// dummy function
(function() {
    Blockly.JavaScript.accept_labels = function(block) {
        var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = value_value;
        return code;
    };
})();
(function() {
    Blockly.Blocks.accept_labels = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Accept labels");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setNextStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setTooltip('');
        }
    };
})();
// dummy function
(function() {
    Blockly.JavaScript.Choice = function(block) {
		var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
		var value_state = Blockly.JavaScript.valueToCode(block, 'STATE', Blockly.JavaScript.ORDER_ATOMIC);
  
  		var code = value_name + value_state;

        return [code + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.Choice = {
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
		    this.setPreviousStatement(true, "Choice");
		    this.setNextStatement(true, "Choice");
		    this.setTooltip('A state choice');
        }
    };
})();

// dummy function
(function() {
    Blockly.JavaScript.continue_session = function(block) {
        var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = value_value;
        return code;
    };
})();
(function() {
    Blockly.Blocks.continue_session = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Continue session");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setNextStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setTooltip('');
        }
    };
})();
// dummy function
(function() {
    Blockly.JavaScript.send_reply = function(block) {
		var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
		// TODO: Assemble JavaScript into code variable.
		var code = value_value;
		return code;
	};
})();
// dummy function
(function() {
    Blockly.Blocks.send_reply = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Send reply");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setNextStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setTooltip('');
        }
    };
})();
// dummy function
(function() {
	Blockly.JavaScript.MenuState = function(block) {
		var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
		var value_question = Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC);
		var statements_choices = Blockly.JavaScript.statementToCode(block, 'CHOICES');
		var statements_opts = Blockly.JavaScript.statementToCode(block, 'OPTS');
		// TODO: Assemble JavaScript into code variable.
		var code = value_name + value_question + statements_choices + statements_opts;
		return code;
	};
})();
(function() {
	Blockly.Blocks.MenuState = {
	  init: function() {
	    this.setColour(230);
	    this.appendDummyInput()
	        .appendField("MENU STATE");
	    this.appendValueInput("NAME")
	        .setCheck("String")
	        .appendField("Name");
	    this.appendValueInput("QUESTION")
	        .setCheck("String")
	        .appendField("Question");
	    this.appendStatementInput("CHOICES")
	        .setCheck("Choice")
	        .appendField("Choices");
	    this.appendStatementInput("OPTS")
	        .setCheck(["error", "accept_labels", "send_reply", "continue_session", "events"])
	        .appendField("Optional");
	    this.setTooltip('');
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
		        .appendField("SIMPLE STATE");
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
