describe("goBlockly:blocks:opts:choice:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate a choice opt with label and value", function() {
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_choice');

        var label = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        label.setFieldValue('states:label', 'TEXT');
        block.getInput('LABEL').connection.connect(label.outputConnection);

        var value = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        value.setFieldValue('value', 'TEXT');
        block.getInput('VALUE').connection.connect(value.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "new Choice('states:label', 'value'),");
    });
});
