// dummy function
(function() {
    Blockly.JavaScript.state_end = function(block) {
        var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
        var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
        var statements_opts = Blockly.JavaScript.statementToCode(block, 'OPTS');
        var value_next = Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC);
        
        // TODO: Assemble JavaScript into code variable.
        var code = value_name + value_text + statements_opts + value_next;
        return code;
    };
})();