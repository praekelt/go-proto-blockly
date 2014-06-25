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
