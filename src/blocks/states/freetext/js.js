// dummy function
(function() {
    Blockly.JavaScript.state_freetext = function(block) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        var value_question = Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC);
        var statements_opts = Blockly.JavaScript.statementToCode(block, 'OPTS');
        var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
        
        // TODO: Assemble JavaScript into code variable.
        var code = value_name + value_question + statements_opts + value_next;
        return code;
    };
})();