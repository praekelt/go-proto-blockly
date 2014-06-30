// dummy function
(function() {
    Blockly.JavaScript.state_end = function(block) {
        return goBlockly.templates['templates/blocks/states/end/end.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                text: Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS'),
                next: Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();