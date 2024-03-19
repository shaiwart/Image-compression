
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
    max-width: 
    min-width: 
    max-height: 
    min-height: 
    max-size: 100KB 
    min-size: 
    format: jpg 

3. SSC 
4. POLICE 


max-width: 
min-width: 
max-height: 
min-height: 
max-size: 
min-size: 
format:

# ALGORITHMS 

## agar only max-size (and min-size) diya hai: 
    - image ko 440 X 560 (w:h = 11:14) ke ratio me le aao. 
    - now check image ka size kitna hai abhi. 
    - if image ka size max-size se bada hai to- 
        - image ke width & height ko thoda sa reduce karo BUT maintain the raito.  
        - repeat the process jab tak image ka size max-size se kam na ho jaye. 
    - if image ka size min-size se kam hai to- 
        - width & height ko increase karte jao (maintaining the ratio)  
    - if image ka size min-size & max-size ke mid me hai to- 
        - keep increasing 
    (image ka size max-size ke 85-95% hona chahiye for better quality)

## 
