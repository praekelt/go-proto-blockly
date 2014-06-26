// dummy function
(function() {
    Blockly.JavaScript.state_menu = function(block) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        var value_question = Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC);
        var statements_choices = Blockly.JavaScript.statementToCode(block, 'CHOICES');
        var statements_opts = Blockly.JavaScript.statementToCode(block, 'OPTS');
        // TODO: Assemble JavaScript into code variable.
        var code = value_name + value_question + statements_choices + statements_opts;
        return code;
    };
})();