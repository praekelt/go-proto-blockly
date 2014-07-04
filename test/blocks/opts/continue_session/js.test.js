describe("goBlockly:blocks:opts:continue_session:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate a continue_session opt set to true", function() {
        var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_boolean');
        
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_continue_session');
        block.getInput('VALUE').connection.connect(bool.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "continue_session: true");
    });

    it("should generate a continue_session opt set to false", function() {
        var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_boolean');
        bool.setFieldValue('false', 'BOOL');
        
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_continue_session');
        block.getInput('VALUE').connection.connect(bool.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "continue_session: false");
    });
});
