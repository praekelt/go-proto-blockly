var el;

beforeEach(function () {
	el = document.createElement("div");
	Blockly.inject(document.body.appendChild(el));
});

afterEach(function () {
	document.body.removeChild(el);
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
