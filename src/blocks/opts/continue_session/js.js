(function() {
    Blockly.JavaScript.opts_continue_session = function(block) {
        return goBlockly.templates['templates/blocks/opts/continue_session/continue_session.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
