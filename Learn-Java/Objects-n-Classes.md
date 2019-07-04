# Notes on Objects & Classes

```
Public class Primes() {
  int numberofPrimes = 10 ;  // default
  
  Primes() {      // constructor no args
        // not good practice , as next programmers needs to spend time to look at 'data fields' and reason about it
  }
  
  Primes(int howmany) {
      this.numberofPrimes = howmany;
  }

  Primes() {      
        int howmany = 10 ; // set default then call other Constructor ; this approach is very clear to Next programmer
        Primes(howmany) ;  
  }

}

```
