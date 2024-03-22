
.MD file guide: https://www.markdownguide.org/basic-syntax/  


![The San Juan Mountains are beautiful!](/mountain-image.png "San Juan Mountains")
# Future Features: 
    1. Just upload an image. AI will crop your image and bring your face & upper body to the middle. 

    2. Will do the same for signature. Just uplaod the image which contain a single signature with a white background. AI will detect the signature and bring it to the middle and crop the image. 

    Link: https://chat.openai.com/share/ad523c98-22e6-424c-91b6-2ee94cb79f7e


# Exams 
    NS- Not Specified

1. UPSC 
    Photograph
        max-width: NS 
        min-width: NS 
        max-height: NS 
        min-height: NS 
        max-size: 300kb 
        min-size: 20kb 
        format: jpg 

    Signature
        max-width: NS 
        min-width: NS 
        max-height: NS 
        min-height: NS 
        max-size: 300kb 
        min-size: 20kb 
        format: jpg 

2. CGPSC 
    Photograph 
        max-width: 
        min-width: 
        max-height: 
        min-height: 
        max-size: 100KB 
        min-size: 
        format: jpg 
    
    Signature

3. SSC GD 
    Photograph 
        max-width: 3.5CM  (x 37.8 px = 132.3px)
        min-width: 
        max-height: 4.5CM (x 37.8 px = 170.1px)
        min-height: 
        max-size: 50KB
        min-size: 20KB
        format: jpg

    Signature
        max-width: 4CM (x 37.8 px = 151.2px)
        min-width: 
        max-height: 2CM (x 37.8 px = 75.6px)
        min-height: 
        max-size: 20KB
        min-size: 10KB
        format: jpg

4. POLICE 

5. Indian Army 
    Photograph 
        max-width: 
        min-width: 
        max-height: 
        min-height: 
        max-size: 20KB 
        min-size: 5KB 
        format:

    Signature
        max-width: 
        min-width: 
        max-height: 
        min-height: 
        max-size: 10KB 
        min-size: 5KB 
        format: 




Photograph 
    max-width: 
    min-width: 
    max-height: 
    min-height: 
    max-size: 
    min-size: 
    format:

Signature
    max-width: 
    min-width: 
    max-height: 
    min-height: 
    max-size: 
    min-size: 
    format:

# ALGORITHMS 
 
## If only max-size (and min-size) given: ✅
    - Note: if min-size is not given then take it as 5 KB. 
    - image ko 440 X 560 (w:h = 11:14) ke ratio me le aao. (Yahi size and ratio kyo? -> because ye size decent hai ek exam-form ke image ke lie) 
        - If image-w < 440 (& image-h < 550) 
            - later: resolve this case. 

    - now check image-size kitna hai abhi. 
    - if image-size > max-size : 
        - reduce image-quality by 0.01% each time. 
        - keep reducing in loop until image-size <= max-size. 
    - if image-size < min-size : 🟡
        - increase the image-w-h by 5% in loop and check image-size each time. (we can do this because max-w-h is not given.)(maintaining the aspect ratio) 
    - if image-size > min-size & image-size < max-size : 
        - For now do nothing. 
        - later: try to improve the quality/size of the image. Try to bring the image-size more towards max-size. 
    (image-size should be around 3-4% less than the max-size. Because after downloading your device(phone,laptop etc) increases the file-size a little. That's why I'm comparing the resized-image-size with 95% of max-size) 

## If only max-w & max-h is given (min is not given): ✅
    - min-w-h is taken as 20px. 
    - set image-w-h to max-w-h. 
    - now check image-size. 
    - If image-size > max-size : 
        - reduce image-quality by 0.01% each time. 
        - keep reducing in loop untill image-size <= max-size 
    - If image-size < min-size : (#bug)
        - for now do nothing. 
        - need to thing of an algorithm. 
    - If image-size in betwwn max-size, min-size : 
        - do nothing. 
        - later: try to improve the quality/size of the image. Try to bring the image-size more towards max-size. 

    - NOTE: keep margin of 4% in image-size. Ex: if max-size is 300KB then keep the image-size at 300*0.04 = 12 => 300-18 = 288 Kb 

## If both max-w-h and min-w-h is given: 
    - same as above. 
    - first reassign min-w-h then do the same steps as above. 

## If orignal-image-size < max-size 
    - check for the condition. 
    - if yes then 
        - don't send it for lossy conversion. (means don't send quality factor. Just adjust the width and height) 


Note: for all algorithms take default values of max-size = 500Kb and min-size = 5Kb. 



# NOTE 

## Orignal image-size is reduced in data uri 
    - Examples 
        - orignal image size (on disc)- 5788727 (in Bits) 
        - data uri size - 5653053 (in Bits) 
        - diff = 135674 (bits) | 2.344% reduce 

        - orignal image size (on disc)- 717111  (in Bits) (721 KB on disc)
        - data uri size - 700304 (in Bits) 
        - diff = 16807 (bits) | 2.344% reduce 

    - Formula to get orignal size in code: 
        - OrignalSize = DataUriSize / (1 - 0.02343); 

## Binary Search ✅
    - replace your simple loop with binary search algorithm to get desired sized image.
        - Take range of qualityFactor from 1.0 to 0.01 
        - check compare the maxSize and resizedDataUriSize. 


# BACKEND 

    - Links: 
        - Introduction to Nodejs: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
        - NodeJs best practices: https://github.com/goldbergyoni/nodebestpractices 


