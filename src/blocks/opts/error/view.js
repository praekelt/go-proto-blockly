(function() {
    Blockly.Blocks.opts_error = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Error");
            this.appendValueInput("ERROR_TEXT")
                .setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setNextStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setTooltip('Error text to display to the user if bad user input was given.');
        }
    };
})();