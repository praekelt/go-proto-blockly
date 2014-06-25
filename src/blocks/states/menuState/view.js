(function() {
    Blockly.Blocks.MenuState = {
      init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("MENU STATE");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("Name");
        this.appendValueInput("QUESTION")
            .setCheck("String")
            .appendField("Question");
        this.appendStatementInput("CHOICES")
            .setCheck("Choice")
            .appendField("Choices");
        this.appendStatementInput("OPTS")
            .setCheck(["error", "accept_labels", "send_reply", "continue_session", "events"])
            .appendField("Optional");
        this.setTooltip('');
      }
    };
})();