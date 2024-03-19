const form = document.querySelector('#upload-image-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get data URI of the selected image 
  debugger;
  const formData = new FormData(e.currentTarget);
  const photoField = formData.get('photo');
  const dataUri = await getDataUri(photoField);
  
  const imgElement = document.createElement('img');
  imgElement.addEventListener('load', () => {
    const resizedDataUri = resizeImage(imgElement, 440, 560); // width, height 
    const imgPreview = document.querySelector('#img-preview'); 
    imgPreview.src = resizedDataUri; 
    // imgPreview.style.width = '800px'; 
    downloadDataUri(resizedDataUri, "resized image"); 

  });
  imgElement.src = dataUri;  // while setting the src to an image element, it starts loading 
                        // We have already set an event Listener to do further task once image is loaded 
});



// this method returns Data URI of the selected image 
function getDataUri (field) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(field); 
  });
}

function resizeImage (imgElement, wantedWidth, wantedHeight) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const aspect = imgElement.width / imgElement.height;

  canvas.width = wantedWidth;
  canvas.height = wantedHeight;

  ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 1.0); 
} 


function reduceImageQuality() {

}


// Download the resized image 
function downloadDataUri(dataUri, fileName) {
  const link = document.createElement('a');
  link.href = dataUri;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function getDataUriFileSize(dataUri) {
  
}