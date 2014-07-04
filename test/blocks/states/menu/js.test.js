describe("goBlockly:blocks:states:menu:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate a Menu State", function() {
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'state_menu');

        var value_name = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_name.setFieldValue('name', 'TEXT');
        block.getInput('NAME').connection.connect(value_name.outputConnection);
        
        var value_question = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value_question.setFieldValue('question', 'TEXT');
        block.getInput('QUESTION').connection.connect(value_question.outputConnection);
        
        assert.equal(Blockly.JavaScript.workspaceToCode(), [
                "self.states.add('name', function(name) {",
                "    return new MenuState(name, {",
                "        question: 'question',",
                "        choices: [", // for choices
                "",
                "        ].join('\\n')",
                "", // for opts
                "    });",
                "});",
                ""
                ].join('\n')
            );
    });
});
