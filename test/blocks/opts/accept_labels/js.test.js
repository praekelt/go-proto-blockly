describe("goBlockly:blocks:opts:accept_labels:js", function() {
    var el;

    beforeEach(function () {
        el = document.createElement("div");
        Blockly.inject(document.body.appendChild(el));
    });

    afterEach(function () {
        document.body.removeChild(el);
    });

    it("should generate an Accept_Labels opt", function() {
    	var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'logic_boolean');
        
    	var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'opts_accept_labels');
        block.getInput('VALUE').connection.connect(bool.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "accept_labels: true");
    });
});
