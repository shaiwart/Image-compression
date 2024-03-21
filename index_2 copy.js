let maxSize = 20; // in KB
let minSize = 5; // in KB
let maxWidth = 440; // in px 
let maxHeight = 560; // in px 

const imageProperties = {
  maxSize: maxSize, 
  minSize: minSize, 
  maxWidth: maxWidth, 
  minWidth: '', 
  maxHeight: maxHeight, 
  minHeight: '', 
  format: '', 
  imageName: '', 
  size: '', 
  width: '', 
  height: ''
}

const form = document.querySelector('#upload-image-form');


form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Get data URI of the selected image 
  
  const formData = new FormData(e.currentTarget);
  const photoField = formData.get('photo');
  const dataUri = await getDataUri(photoField); 

  imageProperties.size = getDataUriFileSize(dataUri) / (1 - 0.02343); 
  console.log('orignalSize:', imageProperties.size,'maxSize*0.95' ,imageProperties.maxSize * 0.95); 
  
  const imgElement = document.createElement('img');
  imgElement.addEventListener('load', () => { 
    imageProperties.width = imgElement.width; 
    imageProperties.height = imgElement.height; 

    let resizedDataUriSize = 51200; 
    let qualityFactor = 1.0; 
    let resizedDataUri = ''; 


    let counter = 1; 
    while(resizedDataUriSize > imageProperties.maxSize * 0.95) { // keep resizing until you get desired size 
      resizedDataUri = resizeImage(imgElement, imageProperties.maxWidth, 
        imageProperties.maxHeight, qualityFactor); // width, height 
      resizedDataUriSize = getDataUriFileSize(resizedDataUri); 

        console.log(counter, 'resizedSize:', resizedDataUriSize, 'factor:', qualityFactor); 
        qualityFactor = qualityFactor - 0.01; 
        counter++; 
        if(counter == 100) {
          console.log('inside break');
          break; 
        }
    }


    
    const imgPreview = document.querySelector('#img-preview'); // set image-preview 
    imgPreview.src = resizedDataUri; 
    imgPreview.style.width = imageProperties.maxWidth; 
    imgPreview.style.height = imageProperties.maxHeight;  

    document.querySelector('#resized-image-size').innerText = getDataUriFileSize(resizedDataUri); 
    document.querySelector('#orignal-image-size').innerText = imageProperties.size; 
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

function resizeImage (imgElement, wantedWidth, wantedHeight, qualityFactor) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const aspect = imgElement.width / imgElement.height;

  canvas.width = wantedWidth;
  canvas.height = wantedHeight;

  ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', qualityFactor); 
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
  const byteString = atob(dataUri.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: 'image/jpeg' }); // Adjust the type as needed
  const fileSizeInBytes = blob.size;
  const fileSizeInKB = fileSizeInBytes / 1024;
  return fileSizeInKB;
}