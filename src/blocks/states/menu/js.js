(function() {
    Blockly.JavaScript.state_menu = function(block) {
        return goBlockly.templates['templates/blocks/states/menu/menu.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                question: Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC),
                choices: Blockly.JavaScript.statementToCode(block, 'CHOICES'),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS')
            });
    };
})();