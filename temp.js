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
      while(qualityFactor > 0 && resizedDataUriSize > imageProperties.maxSize * 0.95) { // keep resizing until you get desired size 
        resizedDataUri = resizeImage(imgElement, imageProperties.maxWidth, 
          imageProperties.maxHeight, qualityFactor); // width, height 
        resizedDataUriSize = getDataUriFileSize(resizedDataUri); 
  
          console.log(counter, 'resizedSize:', resizedDataUriSize, 'factor:', qualityFactor); 
          qualityFactor = qualityFactor - 0.01; 
          counter++; 
          // if(counter == 100) {
          //   console.log('inside break');
          //   break; 
          // }
      }


      let lowestQuality = 0.000; 
      let highestQuality = 1.000; 
      let midQuality; 
      let ansQuality; 

      while(lowestQuality < highestQuality) {
        midQuality = (lowestQuality+highestQuality)/2; 

        resizedDataUri = resizeImage(imgElement, imageProperties.maxWidth, 
            imageProperties.maxHeight, midQuality); // width, height 
          resizedDataUriSize = getDataUriFileSize(resizedDataUri); 

        if(resizedDataUriSize > imageProperties.maxSize * 0.95) {
            highestQuality = midQuality - 0.001; 
        }
        else if(resizedDataUriSize < imageProperties.maxSize * 0.95) {
            lowestQuality = midQuality + 0.001; 
            ansQuality = midQuality; 
        }
        else { // means exact equal 
            ansQuality = midQuality; 
            break; 
        }
      }

      resizedDataUri = resizeImage(imgElement, imageProperties.maxWidth, 
        imageProperties.maxHeight, ansQuality); // width, height 
      resizedDataUriSize = getDataUriFileSize(resizedDataUri); 

  
  
      
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