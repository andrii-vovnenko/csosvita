- 1 API
Calculate the number of times an API is called as a function of input size n.
Provide a detailed explanation of how the input size influences the number of
API calls. Understanding this relationship is crucial for optimizing application
performance. Note: in all examples, integer division is used.
  - a.
    
        for(int i = 5; i < n/2; i += 5)
            api()
        

    ***Answer: (n / 2) / 5***
  - b. 
        
        for(int i = n; i > 1; i /= 2)
            api()
        
    ***Answer: log(n)***
  - c.
        
        for (int i = 0; i * i < n; i++)
            api()

    ***Answer: &#8730;n***
  - d.
     
        for (int i = 0; i < n; i++)
            for (int j = 0; j < 100; j++)
                api()

    ***Answer: n * 100***
  - e. 
  
          for (int i = 1; i <= n * n; i++)
            for (int j = 1; j <= i; j++)
              api()

    ***Answer: n^2(outer loop) * n^2(inner loop)***
  - f. 
  
          for (int i = 1; i <= n; i++)
            for (int j = 1; j < i; j *= 2)
              api()

    ***Answer: n(outer loop) * log(n)(inner loop)***
  - g.
  
          for (int i = 1; i <= n; i++)
            for (int j = 1; j <= i; j++)
              for (int k = 1; k <= j; k++)
                api()

    ***Answer: n * n * n***

  - h.
  
          for (int i = 1; i <= n; i++)
            for (int j = 1; j <= n; j += i)
              api()
            for (int j = 1; j <= i; j++)
              api()

    ***Answer: n(outer loop) * (log(n)(first inner loop) + n^2(second inner loop))***

  - i.
  
          void f(int n)
            if n == 0: return
            for (int i = 0; i < n; i++)
              api()
            f(n/2)

    ***Answer: n + n/2 + n/4 ... = 2n  ***

    - j. 
    
          void f(int n)
            if n == 0: return
            for (int i = 0; i < n; i++)
              op()
            f(n/2)
            f(n/2)

    ***Answer:  (n + 2(n/2)) + 4(n/4) + 8(n/8) ... = n * log(n)***

    # Estimate the lower bound of the time complexity
    - k.
    
          void permute(prefix: array, n: int)
            if prefix.length == n:
              print(prefix)
              return
            for (int num = 0; num < n; num++)
              if not prefix.contains(num):
                permute(prefix + [num], n)

      # permute(prefix=[], n=3) // function call example