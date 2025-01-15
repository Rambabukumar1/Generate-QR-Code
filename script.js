const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('GenerateBtn');  
const downloadBtn = document.getElementById('DownloadBtn');  

const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
    
});


downloadBtn.addEventListener('click', (e) => {
    
        let img = document.querySelector('.qr-body img');

        if (img !== null)
    {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    } 
    else
     {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
     }
});


function isEmptyInput()
{
              // if(qrText.value.length > 0){
         // generateQRCode();
         // }
         // else{
         // alert("Enter the text or URL to generate you QR code");
         // }
    qrText.value.length > 0 ? generateQRCode(): 
    alert("Enter the text or URL  to generate you QR code");
}

function generateQRCode() 
{
    qrContainer.innerHTML = "";
    const qrCode = new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}


downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const img = qrContainer.querySelector('img'); 
    if (img) {
        const imgSrc = img.src;
        downloadBtn.href = img.Src;  
      downloadBtn.download = "qr-code.png";  
    }
});

