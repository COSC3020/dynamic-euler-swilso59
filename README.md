# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

## Answer 

Looking at the The algorithm we have a check for the base case that runs in constant time `if` $n = 0$. 
For $n > 0$ the code goes to the `for` loop which iterates $n$ times. Which gives us linear time .Inside the `for` loop we only execute operations that take constant time.  
This gives us the worst-case time complexity of $\Theta(n)$. 

## Plagiarism Acknowledgement

I conducted this assignment on my own. The First step I took was to determine where the reapeated work was occuring. I initially converted each function to a iteritave version to avoid recurrsion. This seemed promising but looking at the `e` function I noticed that there was reapeated work still happening at the point where I was calling the `factorial` function to detemine the result. This was causing repeated work where each iteration if `e` was computing the factorial and not re-using the previously computed factoiral results. From here I moved forward to implementing the factorial computation into the `e` function. In the test code I use the given reursive version of `factorial` and `e` to compare the results. 

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
