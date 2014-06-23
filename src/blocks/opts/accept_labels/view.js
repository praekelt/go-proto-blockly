(function() {
    Blockly.Blocks.accept_label = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Accept Label");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "accept_label");
            this.setNextStatement(true, "accept_label");
            this.setTooltip('');
        }
    };
})();