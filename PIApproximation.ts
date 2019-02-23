/*
    https://www.codewars.com/kata/550527b108b86f700000073f
*/
export class G964 {
    public static iterPi(epsilon: number): number[] {
      let iteration = 0, sum = 0;
    
      for ( iteration; Math.abs(Math.PI - sum) > epsilon; iteration++ ) {
        sum += (1 /( 2 * iteration  + 1)) *  Math.pow(-1, iteration) * 4;       
      }
  
      return [iteration, Math.round((sum) * 1e10) / 1e10];
    }
}