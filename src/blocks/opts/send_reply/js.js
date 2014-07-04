(function() {
    Blockly.JavaScript.opts_send_reply = function(block) {
        return goBlockly.templates['templates/blocks/opts/send_reply/send_reply.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
