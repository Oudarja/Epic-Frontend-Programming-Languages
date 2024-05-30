function Quadratic_Equation_Solve(a, b, c) 
{
    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;
  
    // Check if the equation has real roots
    if (discriminant < 0) 
    {
        return []; // No real roots
    } 
    else if (discriminant === 0)
    {
      // One real root
      const root = -b / (2 * a);
      return [root];
    } 
    else
     {
      // Two real roots
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    }
  }
  


console.log(Quadratic_Equation_Solve(1, -8, 72)); // x^2 - 8*x + 72 -> []
console.log(Quadratic_Equation_Solve(1, 12, 36)); // x^2 + 12*x + 36 -> [-6]
console.log(Quadratic_Equation_Solve(1, 6, 1)); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097,-5.82842712474619]