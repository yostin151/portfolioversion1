// Add event listener to the download CV button
document.getElementById("downloadCvButton").addEventListener("click", function() {
    // Replace the '#' with the actual path to your CV file
    var cvFileId= '1PyiYZ4uPZxsybx5SrOkcJnT1JdHxrCDd';
    var cvFilePath = 'https://drive.google.com/uc?export=download&id=' + cvFileId;
    
    // Create a temporary link element
    var downloadLink = document.createElement("a");

    // Set the download link's attributes
    downloadLink.href = cvFilePath;
    downloadLink.target = '_blank';
    downloadLink.download = "Yostin_Poveda_CV.pdf";

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link to start the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
});

