var el;

beforeEach(function () {
	el = document.createElement("div");
	Blockly.inject(document.body.appendChild(el));
});

afterEach(function () {
	document.body.removeChild(el);
});

describe("goBlockly:blocks:textLength:js", function() {
    it("should generate a text length lookup", function() {
        var text = Blockly.Block.obtain(Blockly.mainWorkspace, 'text');
        text.setFieldValue('foo', 'TEXT');

        var block = Blockly.Block.obtain(Blockly.mainWorkspace, 'textLength');
        block.getInput('VALUE').connection.connect(text.outputConnection);

        assert.equal(Blockly.JavaScript.workspaceToCode(), "'foo'.length;\n");
    });
});
