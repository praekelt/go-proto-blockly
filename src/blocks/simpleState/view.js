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
		        .setCheck("state")
		        .appendField("Next state");
		    this.setTooltip('A simple state containing any number of choices');
        }
    };
})();
