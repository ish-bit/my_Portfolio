export const handleDownloadResume = () => {
    console.log("download>>>>>>>>")
    // Replace 'https://example.com/file.pdf' with your actual file URL
    const fileUrl = 'src/assets/file/IshikaRastogi.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Ishika_Rastogi.pdf'); // Set the desired file name here

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up: remove the temporary anchor element
    document.body.removeChild(link);
  };
