window.goBlockly = window.goBlockly || {};
goBlockly.blocks = {};

goBlockly.blocks.opts = {};
goBlockly.blocks.opts.types = ['accept_labels', 'send_reply', 'continue_session', 'events'];
(function() {
    Blockly.JavaScript.textLength = function(block) {
        return goBlockly.templates['templates/blocks/misc/textLength/textLength.hbs']({
                text: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''"
            });
    };
})();

(function() {
    Blockly.Blocks.textLength = {
        init: function() {
            this.appendValueInput('VALUE')
                .setCheck('String')
                .appendField('length');

            this.setOutput(true, 'Number');
            this.setTooltip('Returns number of letters in the provided text.');
        }
    };
})();

(function() {
    Blockly.JavaScript.opts_accept_labels = function(block) {
        return goBlockly.templates['templates/blocks/opts/accept_labels/accept_labels.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
(function() {
    Blockly.Blocks.opts_accept_labels = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Accept labels");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, goBlockly.blocks.opts.types);
            this.setNextStatement(true, goBlockly.blocks.opts.types);
            this.setTooltip('Whether choice labels are accepted as the user’s responses. For eg, if accept_labels is true, the state will accepts both “1” and “Red” as responses responses if the state’s first choice is “Red”. Defaults to false.');
        }
    };
})();
// dummy function
(function() {
    Blockly.JavaScript.choice = function(block) {
        var value_label = Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_ATOMIC);
        var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
        var code = value_label + value_value;

        return [code + '.length', Blockly.JavaScript.ORDER_MEMBER];
    };
})();

(function() {
    Blockly.Blocks.choice = {
        init: function() {
            this.setColour(330);
            this.appendDummyInput()
                .appendField("Choice");
            this.appendValueInput("LABEL")
                .setCheck("String")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Label");
            this.appendValueInput("VALUE")
                .setCheck("String")
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Value");
            this.setInputsInline(true);
            this.setPreviousStatement(true, "Choice");
            this.setNextStatement(true, "Choice");
            this.setTooltip('An individual choice that the user can select inside a ChoiceState()');
        }
    };
})();

(function() {
    Blockly.JavaScript.opts_continue_session = function(block) {
        return goBlockly.templates['templates/blocks/opts/continue_session/continue_session.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();

(function() {
    Blockly.Blocks.opts_continue_session = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Continue session");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, goBlockly.blocks.opts.types);
            this.setNextStatement(true, goBlockly.blocks.opts.types);
            this.setTooltip('Whether or not this is the last state in a session. Default is true.');
        }
    };
})();
(function() {
    Blockly.JavaScript.opts_error = function(block) {
        return goBlockly.templates['templates/blocks/opts/error/error.hbs']({
                error_text: Blockly.JavaScript.valueToCode(block, 'ERROR_TEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();

(function() {
    Blockly.Blocks.opts_error = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Error");
            this.appendValueInput("ERROR_TEXT")
                .setCheck("String");
            this.setInputsInline(true);
            this.setPreviousStatement(true, goBlockly.blocks.opts.types);
            this.setNextStatement(true, goBlockly.blocks.opts.types);
            this.setTooltip('Error text to display to the user if bad user input was given.');
        }
    };
})();
(function() {
    Blockly.JavaScript.opts_send_reply = function(block) {
        return goBlockly.templates['templates/blocks/opts/send_reply/send_reply.hbs']({
                value: Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();

(function() {
    Blockly.Blocks.opts_send_reply = {
        init: function() {
            this.setColour(120);
            this.appendDummyInput()
                .appendField("Send reply");
            this.appendValueInput("VALUE")
                .setCheck("Boolean");
            this.setInputsInline(true);
            this.setPreviousStatement(true, goBlockly.blocks.opts.types);
            this.setNextStatement(true, goBlockly.blocks.opts.types);
            this.setTooltip('Whether or not a reply should be sent to the user’s message. Default is true.');
        }
    };
})();
// dummy function
(function() {
    Blockly.JavaScript.state_end = function(block) {
        return goBlockly.templates['templates/blocks/states/end/end.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                text: Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS'),
                next: Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
(function() {
    Blockly.Blocks.state_end = {
        init: function() {
            this.setColour(230);
            this.appendDummyInput()
                .appendField("END STATE");
            this.appendValueInput("NAME")
                .setCheck("String")
                .appendField("Name");
            this.appendValueInput("TEXT")
                .setCheck("String")
                .appendField("Text");
            this.appendStatementInput("OPTS")
                .setCheck(goBlockly.blocks.opts.types)
                .appendField("Optional");
            this.appendValueInput("NEXT")
                .appendField("Next state");
            this.setTooltip('A state which displays text and then ends the session.');
        }
    };
})();
(function() {
    Blockly.JavaScript.state_freetext = function(block) {
        return goBlockly.templates['templates/blocks/states/freetext/freetext.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                question: Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS'),
                next: Blockly.JavaScript.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC)
            });
    };
})();
(function() {
    Blockly.Blocks.state_freetext = {
        init: function() {
            this.setColour(230);
            this.appendDummyInput()
                .appendField("FREETEXT STATE");
            this.appendValueInput("NAME")
                .setCheck("String")
                .appendField("Name");
            this.appendValueInput("QUESTION")
                .setCheck("String")
                .appendField("Question");
            this.appendStatementInput("OPTS")
                .setCheck(goBlockly.blocks.opts.types)
                .appendField("Optional");
            this.appendValueInput("NEXT")
                .appendField("Next state");
            this.setTooltip('A state which displays a text, then allows the user to respond with any text.');
        }
    };
})();
(function() {
    Blockly.JavaScript.state_menu = function(block) {
        return goBlockly.templates['templates/blocks/states/menu/menu.hbs']({
                name: Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
                question: Blockly.JavaScript.valueToCode(block, 'QUESTION', Blockly.JavaScript.ORDER_ATOMIC),
                choices: Blockly.JavaScript.statementToCode(block, 'CHOICES'),
                opts: Blockly.JavaScript.statementToCode(block, 'OPTS')
            });
    };
})();
(function() {
    Blockly.Blocks.state_menu = {
      init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField("MENU STATE");
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("Name");
        this.appendValueInput("QUESTION")
            .setCheck("String")
            .appendField("Question");
        this.appendStatementInput("CHOICES")
            .setCheck("Choice")
            .appendField("Choices");
        this.appendStatementInput("OPTS")
            .setCheck(goBlockly.blocks.opts.types)
            .appendField("Optional");
        this.setTooltip('A ChoiceState() whose Choice() values are either state names or state options objects. Supports the same parameters as ChoiceState() except that opts.next isn’t available.');
      }
    };
})();