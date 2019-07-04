# Java Problme sets

## sets
1. Write a program to print 'all prime factors' of a given number. 
- example : Factors(20) -->  2 x 2 x 5 ; Factors(35) -->  7 x 5
```
public class Factors {
    private int givenNumber ; 
    Factors(int number) {
        this.givenNumber = number;
    }
    
    public int[] getallFactors() {
        int arrFactors[] = new int[1000];  // should be arrayList of Integeres ;
        int indx = 0;
        int factor1 = 2;
        boolean more = true ;
        while (more) {
        
            factor2 = get2ndFactor( factor1, number);
            if ( factor2 == factor1 ) {
                more = false;
            }
            
            if ( factor2 == 0 ) {
                factor1++ ;   // do with next number
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
