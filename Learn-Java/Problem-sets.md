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

Ref: https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
```
// Program to print all prime factors 
import java.io.*; 
import java.lang.Math; 
  
class GFG 
{ 
    // A function to print all prime factors 
    // of a given number n 
    public static void primeFactors(int n) 
    { 
        // Print the number of 2s that divide n 
        while (n%2==0) 
        { 
            System.out.print(2 + " "); 
            n /= 2; 
        } 
  
        // n must be odd at this point.  So we can 
        // skip one element (Note i = i +2) 
        for (int i = 3; i <= Math.sqrt(n); i+= 2) 
        { 
            // While i divides n, print i and divide n 
            while (n%i == 0) 
            { 
                System.out.print(i + " "); 
                n /= i; 
            } 
        } 
  
        // This condition is to handle the case whien 
        // n is a prime number greater than 2 
        if (n > 2) 
            System.out.print(n); 
    } 
  
    public static void main (String[] args) 
    { 
        int n = 315; 
        primeFactors(n); 
    } 
} 
```
