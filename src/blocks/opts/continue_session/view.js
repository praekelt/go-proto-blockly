(function() {
    Blockly.Blocks.opts_continue_session = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Continue session");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setNextStatement(true, ["error", "accept_labels", "send_reply", "continue_session", "events"]);
            this.setTooltip('Whether or not this is the last state in a session. Default is true.');
        }
    };
})();