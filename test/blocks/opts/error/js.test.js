describe("goBlockly:blocks:opts:error:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate an error opt with text", function() {
        var text = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        text.setFieldValue('error has occurred', 'TEXT');

        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_error');
        block.getInput('ERROR_TEXT').connection.connect(text.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "error: 'error has occurred'");
    });
});
