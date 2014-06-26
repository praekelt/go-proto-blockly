(function() {
    // Blockly does something really crazy, it looks for a script tag with
    // `src` that matches the regexp `(.+)[\/]blockly_uncompressed\.js$`:
    // https://code.google.com/p/blockly/source/browse/trunk/
    // blockly_uncompressed.js#7
    //
    // This doesn't work with karma, since the file served by karma will have a
    // `src` thing that looks something like:
    // `.../blockly_uncompressed.js?4e71865b...`.
    var script = document.createElement('script');
    script.src = '/base/bower_components/blockly/blockly_uncompressed.js';
    document.body.appendChild(script);
})();
