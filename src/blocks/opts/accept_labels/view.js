(function() {
    Blockly.Blocks.opts_accept_labels = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Accept labels");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, goBlockly.blocks.opts.types);
            this.setNextStatement(true, goBlockly.blocks.opts.types);
            this.setTooltip('Whether choice labels are accepted as the user’s responses. For eg, if accept_labels is true, the state will accepts both “1” and “Red” as responses responses if the state’s first choice is “Red”. Defaults to false.');
        }
    };
})();