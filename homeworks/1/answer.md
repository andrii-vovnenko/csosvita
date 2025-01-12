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

    ***Answer: For each i from outer loop, inner loop runs approximately log(i), because j grows exponentially multiplied by 2 every iteration till lower than i. n(outer loop) * log(n)(inner loop)***
  - g.
  
          for (int i = 1; i <= n; i++)
            for (int j = 1; j <= i; j++)
              for (int k = 1; k <= j; k++)
                api()

    ***Answer: Lets broke these loops to three devided loops, each of them depends on outer loop and runs by n time, so we could say that overall its works by n * n * n = n^3. Or formula for three nested loops can be used n(n+1)(n+2) / 6 in order to calculate accurate count api calls***

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

    ***Answer: n + n/2 + n/4 ... = n***

  - j. 
  
        void f(int n)
          if n == 0: return
          for (int i = 0; i < n; i++)
            op()
          f(n/2)
          f(n/2)

    ***Answer:  (n + 2(n/2)) + 4(n/4) + 8(n/8) ... = n * log(n)***

  - k. Estimate the lower bound of the time complexity
  
        void permute(prefix: array, n: int)
          if prefix.length == n:
            print(prefix)
            return
          for (int num = 0; num < n; num++)
            if not prefix.contains(num):
              permute(prefix + [num], n)

    ***Answer: n! recursive calls  and for each recursive call n^2 will be made (for loop and contains). Algorithm should calculate every permutation so the lower and higher bound equal n^2 * n!***

- 2
  - A. What is the space complexity of examples i, j, k in the first task? Note
      that no tail recursion is applied.
       - i. 
      
              void f(int n)
                if n == 0: return
                for (int i = 0; i < n; i++)
                  api()
                f(n/2)
          
          ***Answer: space complexity of for loop is 1, function call`s it-self with n / 2 till n != 0, so space complexity is log(n)***
      - j.

            void f(int n)
              if n == 0: return
              for (int i = 0; i < n; i++)
                op()
              f(n/2)
              f(n/2)

          ***Answer: space complexity is log(n), second recursive call will not affect space, because firstly first call will be done***

      - k.

            void permute(prefix: array, n: int)
              if prefix.length == n:
                print(prefix)
                return
              for (int num = 0; num < n; num++)
                if not prefix.contains(num):
                  permute(prefix + [num], n)

          ***Answer The depth of call stack will not exceed n calls, each new branch will not start till previous finish***
              
              like 1
                  / \
                 2   3
                /     \
               3       2
  - B. ***Answer N * L hash table can consists of N words, max length is L***
- 6
  - 1.
    https://leetcode.com/problems/majority-element/submissions/1506101502/
          
          var majorityElementLinear = function(nums) {
            let max;
            const map = {};
            for (const num of nums) {
              map[num] = (map[num] || 0) + 1;
              
              if (!max || map[num] > map[max]) {
                max = num;
              }
            }

            return max;
          };

    https://leetcode.com/problems/majority-element/submissions/1506123884/
          
          var majorityElementQuadratic = function(nums) {
            const half = nums.length / 2;
            for (const num of nums) {
              let count = 0;
              for (const n of nums) {
                if (n === num) {
                  count++;
                }
              }
              
              if (count > half) {
                return num;
              }
            }
          };
  - 2. 
    https://leetcode.com/problems/majority-element/submissions/1506177790/

        var majorityElement = function(nums) {
          const half = Math.ceil(nums.length / 2);
          const candidate = [nums[0], 0];
          for (const num of nums) {
            if (num === candidate[0]) {
              candidate[1]++;
            } else {
              candidate[1]--;
            }

            if (candidate[1] === half) {
              return candidate[0];
            }

            if (candidate[1] === 0) {
              candidate[0] = num;
              candidate[1] = 1;
            }
          }

          return candidate[0]
        };

