(function() {
    Blockly.Blocks.state_menu = {
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
            .setCheck(goBlockly.blocks.opts.types)
            .appendField("Optional");
        this.setTooltip('A ChoiceState() whose Choice() values are either state names or state options objects. Supports the same parameters as ChoiceState() except that opts.next isn’t available.');
      }
    };
})();