function convertToBinary() {

  const text = document.getElementById("inputText").value;

  const binary = text

    .split("")

    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))

    .join(" ");

  document.getElementById("outputText").value = binary;

}

function convertToText() {

  const binary = document.getElementById("inputText").value;

  const text = binary

    .split(" ")

    .map(bin => String.fromCharCode(parseInt(bin, 2)))

    .join("");

  document.getElementById("outputText").value = text;

}

function copyToClipboard() {

  const output = document.getElementById("outputText");

  output.select();

  document.execCommand("copy");

  alert("Copied to clipboard!");

}
