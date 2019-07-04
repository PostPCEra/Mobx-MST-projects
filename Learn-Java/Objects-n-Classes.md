# Notes on Objects & Classes

```
// 1.  Worst --------
Public class Primes() {
  int numberofPrimes = 10 ;  // default
  
  Primes() {      // constructor no args
        // not good practice , as next programmers needs to spend time to look at 'data fields' and reason about it
  }
  
   Primes(int howmany) {
        this.numberofPrimes = howmany;
    }
  

}

// 2.  Bad --------
Public class Primes() {
  int numberofPrimes ;
  
  Primes() {       
        this.numberofPrimes = 10 ;
  }
  
  Primes(int howmany) {
      this.numberofPrimes = howmany;
  }

}

// 3.  GOOD --------
Public class Primes() {
  int numberofPrimes ;
  
  Primes(int howmany) {
      this.numberofPrimes = howmany;
  }
  
  Primes() {      
        int howmany = 10 ; // set default then call other Constructor ; this approach is very clear to Next programmer
        Primes(howmany) ;  
  }

}

```
