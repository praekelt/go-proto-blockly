(function() {
    Blockly.JavaScript.opts_choice = function(block) {
        return goBlockly.templates['templates/blocks/opts/choice/choice.hbs']({
                label: Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_ATOMIC),
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
            });
    };
})();
