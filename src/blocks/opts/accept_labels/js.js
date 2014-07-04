(function() {
    Blockly.JavaScript.opts_accept_labels = function(block) {
        return goBlockly.templates['templates/blocks/opts/accept_labels/accept_labels.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();