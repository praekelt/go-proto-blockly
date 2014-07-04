(function() {
    Blockly.Blocks.opts_choice = {
        init: function() {
            this.setColour(330);
            this.appendDummyInput()
                .appendField("Choice");
            this.appendValueInput("LABEL")
                .setCheck("String")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Label");
            this.appendValueInput("VALUE")
                .setCheck("String")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Value");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "Choice");
            this.setNextStatement(true, "Choice");
            this.setTooltip('An individual choice that the user can select inside a ChoiceState()');
        }
    };
})();
