/*
    https://www.codewars.com/kata/56484848ba95170a8000004d
*/
export class G964 {
    public static gps = (s, x) => {
      let max = 0;
      for( let i = 1; i < x.length; i++){
          let tempSpeed = (3600 * (x[i] - x[i-1])) / s;
          if( max < tempSpeed )
              max = tempSpeed;
      };
      return max;
    }  
}