# Java Problme sets

## sets given in 'Introduction to JAVA programming' class at West Vally collage ( summber `19)
- 1. Write a program to print Fizz Buzz
- 2. Write a program to print largest number in an array
- 3. write a program to sort a number array
- 4. Write a program to return 'all prime factors' of a given number. example : Factors(20) -->  2 x 2 x 5 ; Factors(35) -->  7 x 5
- 5. write a program to merge two different arrays (which are sorted already) into a new arry which should sorted.


```
public class Factors {
    private int givenNumber ; 
    Factors(int number) {
        this.givenNumber = number;
    }
    
    public int[] getallFactors() {
        int arrFactors[] = new int[1000];  // should be arrayList of Integeres ;
        int indx = 0;
        int factor1 = 2; //start with first prime factor 2
        boolean more = true ;
        while (more) {
        
            int factor2 = get2ndFactor( factor1, number);
            if ( factor2 == factor1 ) {
                more = false;
            }
            
            if ( factor2 == 0 ) {
                factor1++ ;   // next value for factor1, but 'number' is still same
            }
            else if (factor2 > 0) {
                number = factor2 ;  // new value for 'number' , but factor1 still same
                arrFactors[indx++] = factor1 ;
            }
                     
        }  // end of while
        return arrFactors;
    }
    
    private int get2ndFactor(int factor1,  int number) {
        int factor2 =  number / factor1;
        if ( number % factor1 > 0) {
            factor2 = 0;
        }
        return factor2;
    }

}
```
