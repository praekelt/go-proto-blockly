describe("goBlockly:blocks:opts:accept_labels:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate an accept_labels opt", function() {
    	var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_boolean');
        
    	var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_accept_labels');
        block.getInput('VALUE').connection.connect(bool.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "accept_labels: true");
    });

    it("should generate an accept_labels opt set to false", function() {
        var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_boolean');
        bool.setFieldValue('false', 'BOOL');
        
        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_accept_labels');
        block.getInput('VALUE').connection.connect(bool.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "accept_labels: false");
    });
});
