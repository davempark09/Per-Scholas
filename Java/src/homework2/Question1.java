package homework2;
import java.util.Scanner;

public class Question1 {

	public static void main(String[] args) {
		
		Scanner myInp = new Scanner(System.in);
		System.out.println("Enter the start number: ");
		int startNum = myInp.nextInt(); 
		System.out.println("Enter the end number: ");
		int endNum = myInp.nextInt(); 
		int first = 0;
		int second = 1;
		int sum;
		System.out.print(first);
		System.out.print(" "+second);	
		for (int i=startNum; i<=endNum;i++) {
			sum=first+second;    
			System.out.print(" "+sum);    
			first=second;    
			second=sum;	
		}
		myInp.close();
	}
	
}
