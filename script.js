// Wait until the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the color input element
    const colorPicker = document.getElementById('bgColor');
    
    // When the color changes, update the background
    colorPicker.addEventListener('input', function() {
        document.body.style.backgroundColor = colorPicker.value;
    });
});
