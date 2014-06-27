(function() {
    Blockly.Blocks.state_end = {
        init: function() {
            this.setColour(230);
            this.appendDummyInput()
                .appendField("END STATE");
            this.appendValueInput("NAME")
                .setCheck("String")
                .appendField("Name");
            this.appendValueInput("TEXT")
                .setCheck("String")
                .appendField("Text");
            this.appendStatementInput("OPTS")
                .setCheck(goBlockly.blocks.opts.types)
                .appendField("Optional");
            this.appendValueInput("NEXT")
                .appendField("Next state");
            this.setTooltip('A state which displays text and then ends the session.');
        }
    };
})();