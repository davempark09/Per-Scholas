package homework2;
import java.util.Scanner;

public class Question3 {
	
	public static void main(String[] args) {	
		Scanner myInp = new Scanner(System.in);
		System.out.println("Enter string to test: ");
		String inp = myInp.nextLine(); 
		String back = "";
		
		for(int i=inp.length()-1; i>=0; i--) {
			back=back+inp.charAt(i);
		}
		if(inp.equalsIgnoreCase(back)) {
			System.out.println("The string is a Palindrome");
		}
		else {
			System.out.println("The string is not a Palindrome");
		}
		myInp.close();
	}
}
