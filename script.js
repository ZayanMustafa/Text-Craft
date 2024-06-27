var boldBtn = document.getElementById('boldBtn');
var italicBtn = document.getElementById('italicBtn');
var underlineBtn = document.getElementById('underlineBtn');
var fontSizeSelector = document.getElementById('fontSizeSelector');
var fontFamilySelector = document.getElementById('fontFamilySelector');
var colorPicker = document.getElementById('colorPicker');
var editor = document.getElementById('editor');

function executeCommand(command, value = null) {
    document.execCommand(command, false, value);
}

boldBtn.addEventListener('click', function() {
    executeCommand('bold');
});

italicBtn.addEventListener('click', function() {
    executeCommand('italic');
});

underlineBtn.addEventListener('click', function() {
    executeCommand('underline');
});

fontSizeSelector.addEventListener('change', function() {
    var fontSize = this.value;
    executeCommand('fontSize', fontSize);
});

fontFamilySelector.addEventListener('change', function() {
    var fontFamily = this.value;
    executeCommand('fontName', fontFamily);
});

colorPicker.addEventListener('input', function() {
    var color = this.value;
    executeCommand('foreColor', color);
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        switch (event.key) {
            case 'b':
                event.preventDefault();
                executeCommand('bold');
                break;
            case 'i':
                event.preventDefault();
                executeCommand('italic');
                break;
            case 'u':
                event.preventDefault();
                executeCommand('underline');
                break;
        }
    }
});
