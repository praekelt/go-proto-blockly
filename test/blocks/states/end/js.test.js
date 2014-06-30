describe("goBlockly:blocks:states:end:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate an End State", function() {
        var value_name = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_name.setFieldValue('name', 'TEXT');
        
        var value_text = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_text.setFieldValue('text', 'TEXT');
        
        var value_next = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_next.setFieldValue('next', 'TEXT');
        
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'state_end');
        block.getInput('NAME').connection.connect(value_name.outputConnection);
        block.getInput('TEXT').connection.connect(value_text.outputConnection);
        block.getInput('NEXT').connection.connect(value_next.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), [
                "self.states.add('name', function(name) {",
                "    return new EndState(name, {",
                "",
                "        text: 'text',",
                "        next: 'next'",
                "    });",
                "});"
                ].join('\n')
            );
    });
});