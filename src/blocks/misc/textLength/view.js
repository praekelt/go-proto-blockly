(function() {
    Blockly.Blocks.textLength = {
        init: function() {
            this.appendValueInput('VALUE')
                .setCheck('String')
                .appendField('length');

            this.setOutput(true, 'Number');
            this.setTooltip('Returns number of letters in the provided text.');
        }
    };
})();
