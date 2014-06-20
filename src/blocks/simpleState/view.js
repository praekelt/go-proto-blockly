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
