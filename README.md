
1. resize the image - dimentions. 
2. compress the image - quality. 
    1. Lossy compression 
    2. Lossless compression 


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

## If only max-size (and min-size) diya hai: 
    - Note: if min-size is not given then take it as 0 KB. 
    - image ko 440 X 560 (w:h = 11:14) ke ratio me le aao. (Yahi size and ratio kyo? -> because ye size decent hai ek exam-form ke image ke lie) 
    - now check image-size kitna hai abhi. 
    - if image-size > max-size : 
        - reduce image-quality by 0.01% each time. 
        - keep reducing in loop untill image-size <= max-size.  
    - if image-size < min-size : 
        - increase the image-w-h by 5% in loop and check image-size each time. (maintaining the aspect ratio) 
    - if image-size > min-size & image-size < max-size : 
        - For now do nothing. 
        - later: try to improve the quality/size of the image. Try to bring the image-size more towards max-size. 
    (image-size should be around 3-4% less than the max-size. Because after downloading your device(phone,laptop etc) increases the file-size a little) 

## If max-w & max-h diya ho: 
    - min-w-h is taken as 5px. 
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

## If max-w-h and min-w-h diya ho: 
    - same as above. 
    - first reassign min-w-h then do the same steps as above. 

Note: for all algorithms take default values of max-size = 500Kb and min-size = 5Kb. 

