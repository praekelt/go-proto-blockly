// dummy function
(function() {
    Blockly.JavaScript.state_freetext = function(block) {
        return goBlockly.templates['templates/blocks/states/freetext/freetext.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                question: Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS'),
                next: Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();