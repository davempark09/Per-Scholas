package Labs;
import java.util.Scanner;

public class temp {

	public static void main(String[] args) {
		 Scanner input = new Scanner(System.in);
		 
		 String[] pharse = {"she", "sells", "sea", "shells", "at", "the", "sea", "shore", "sea", "the"};
		 int count = 0;
		 
		 System.out.println ("Please enter a word");
		
		 
		
		 String guess =  input.next();
		 System.out.println(guess);
//		 guess == pharse[i]
		 for (int i = 0; i < pharse.length-1; i++) {
			if (guess.equals(pharse[i])) {
				
				count++;
			}
				
				
				 
		 }
		 System.out.println("the " + guess + " was counted " +count + " times");	 
	} 
	
		 }
