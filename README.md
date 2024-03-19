
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
    - image ko 440 X 560 (w:h = 11:14) ke ratio me le aao. (Yahi size and ratio kyo? -> because ye size decent hai ek exam-form ke image ke lie) 
    - now check image ka size kitna hai abhi. 
    - if image ka size max-size se bada hai to- 
        - image ke width & height ko thoda sa reduce karo BUT maintain the raito.  
        - repeat the process jab tak image ka size max-size se kam na ho jaye. 
    - if image ka size min-size se kam hai to- 
        - width & height ko increase karte jao (maintaining the ratio)  
    - if image ka size min-size & max-size ke mid me hai to- 
        - keep increasing 
    (image ka size max-size ke 85-95% hona chahiye for better quality)

## If max-w & max-h diya ho: 
    - image ko max-w-h pe le aao. 
    - now check image ka size. 
    - If image-size > max-size 
        - reduce image-quality by 0.01% each time. 
        - keep reducing in loop untill image-size <= max-size 
    - NOTE: keep margin of 6% in image-size. Ex: if max-size is 300KB then keep the image-size at 300*0.06 = 18 , 300-18 = 282Kb
    

## If max-w, max-h and min-w, min-h diya ho: 
    - 