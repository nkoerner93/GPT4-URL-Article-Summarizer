function copyToClipboard(text) {
  const el = document.createElement("textarea"); // Create a textarea element
  el.value = text; // Set the value of the textarea to the text to be copied
  el.setAttribute("readonly", ""); // Make it read-only to be tamper-proof
  el.style.position = "absolute";
  el.style.left = "-9999px"; // Move the textarea off the screen
  document.body.appendChild(el); // Append the textarea to the HTML document

  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before

  el.select(); // Select the textarea content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)

  document.body.removeChild(el); // Remove the textarea from the HTML document

  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
}

export default copyToClipboard;
