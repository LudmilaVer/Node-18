
interface ConcatFunction {
    (str1: string, str2: string): string;
  }
  
  const concatStrings: ConcatFunction = (str1, str2) => {
    return str1 + str2;
  };
  
  console.log(concatStrings("How, ", "are you?!"));