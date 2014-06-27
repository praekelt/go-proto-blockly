(function() {
    Blockly.Blocks.state_freetext = {
        init: function() {
            this.setColour(230);
            this.appendDummyInput()
                .appendField("FREETEXT STATE");
            this.appendValueInput("NAME")
                .setCheck("String")
                .appendField("Name");
            this.appendValueInput("QUESTION")
                .setCheck("String")
                .appendField("Question");
            this.appendStatementInput("OPTS")
                .setCheck(goBlockly.blocks.opts.types)
                .appendField("Optional");
            this.appendValueInput("NEXT")
                .appendField("Next state");
            this.setTooltip('A state which displays a text, then allows the user to respond with any text.');
        }
    };
})();