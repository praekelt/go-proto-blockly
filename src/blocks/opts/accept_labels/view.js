(function() {
    Blockly.Blocks.accept_labels = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Accept Labels");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "accept_labels");
            this.setNextStatement(true, "accept_labels");
            this.setTooltip('');
        }
    };
})();