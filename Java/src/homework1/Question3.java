package homework1;

public class Question3 {

	public static void main(String[] args) {
		
		int nums = 24;
		if (nums%2!=0) {
			System.out.println("Cool");
		} else if (nums>=2 && nums<=5) {
			System.out.println("Not Cool");
		} else if (nums>=6 && nums<=20) {
			System.out.println("Cool");
		} else if (nums>20) {
			System.out.println("Not Cool");
		}
	}
}
