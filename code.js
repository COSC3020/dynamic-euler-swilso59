function e(n) {
    if (n === 0) return 1;
    
    let sum = 1; 
    let currentFactorial = 1;

    for (let i = 1; i <= n; i++) {
        // Compute i! incrementally
        currentFactorial *= i; 
        
        let term = 1.0 / currentFactorial;
        // Add the current term to the sum
        sum += term; 
    }

    return sum;
}
