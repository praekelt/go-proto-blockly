beforeEach(function () {
	Blockly.inject(document.body.appendChild(document.createElement("div")));
});

describe("goBlockly:blocks:simpleState:js", function() {
    it("should generate a text length lookup", function() {
        var text = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        text.setFieldValue('foo', 'TEXT');

        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'simpleState');
        block.getInput('NAME').connection.connect(text.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "'foo'.length");
    });
});