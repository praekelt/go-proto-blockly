describe("goBlockly:blocks:states:freetext:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate a Freetext State", function() {
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'state_end');

        var value_name = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_name.setFieldValue('name', 'TEXT');
        block.getInput('NAME').connection.connect(value_name.outputConnection);
        
        var value_question = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_question.setFieldValue('text', 'TEXT');
        block.getInput('QUESTION').connection.connect(value_question.outputConnection);
        
        var value_next = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_next.setFieldValue('next', 'TEXT');
        block.getInput('NEXT').connection.connect(value_next.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), [
                "self.states.add('name', function(name) {",
                "    return new FreetextState(name, {",
                "",
                "        question: 'question',",
                "        next: 'next'",
                "    });",
                "});"
                ].join('\n')
            );
    });
});