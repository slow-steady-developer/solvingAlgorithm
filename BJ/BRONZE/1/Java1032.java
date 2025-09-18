import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Java1032{
    public static void main(String args[]){

        BufferedReader br = null;
        BufferedWriter bw = null;
        try {
            br = new BufferedReader(new InputStreamReader(System.in));
            bw = new BufferedWriter(new OutputStreamWriter(System.out));

            int stringNumber = Integer.parseInt(br.readLine());
            String targetString = null;
            String[] targetCharArr = null;
            String[] answerArr = null;
            for(int idx = 1; idx <= stringNumber; idx++){
                targetString = br.readLine();
                targetCharArr = targetString.split("");

                for(int splitedIdx = 0; splitedIdx < targetCharArr.length; splitedIdx++){
                    if(idx == 1){
                        answerArr = targetCharArr;
                    }else{
                        if(answerArr[splitedIdx].equals(targetCharArr[splitedIdx]) == false){
                            answerArr[splitedIdx] = "?";
                        }
                    }
                }
            }

            bw.write(String.join("",answerArr));
            bw.flush();
            
        } catch (Exception e) {
            
        } finally{
            try {
                br.close();
                bw.close();
            } catch (Exception e) {
            }
        }
    }
}