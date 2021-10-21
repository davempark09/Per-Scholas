package homework3;
import java.util.Scanner;

	public class Calculator {
	static void add() {
		Scanner myNum = new Scanner(System.in);
		System.out.println("Enter the first number: ");
		int num1 = myNum.nextInt(); 
		System.out.println("Enter the second number: ");
		int num2 = myNum.nextInt();
		int result = num1 + num2;
		System.out.println("The result it: " + result);
		myNum.close();
	}
	
	static void sub() {
		Scanner myNum = new Scanner(System.in);
		System.out.println("Enter the first number: ");
		int num1 = myNum.nextInt(); 
		System.out.println("Enter the second number: ");
		int num2 = myNum.nextInt();
		int result = num1 - num2;
		System.out.println("The result it: " + result);
		myNum.close();
	}
	
	static void mult() {
		Scanner myNum = new Scanner(System.in);
		System.out.println("Enter the first number: ");
		int num1 = myNum.nextInt(); 
		System.out.println("Enter the second number: ");
		int num2 = myNum.nextInt();
		int result = num1 * num2;
		System.out.println("The result it: " + result);
		myNum.close();
	}
	
	static void divide() {
		Scanner myNum = new Scanner(System.in);
		System.out.println("Enter the first number: ");
		int num1 = myNum.nextInt(); 
		System.out.println("Enter the second number: ");
		int num2 = myNum.nextInt();
		int result = num1 / num2;
		System.out.println("The result it: " + result);
		myNum.close();
	}
	
	
	public static void main(String[] args) {
				
		Scanner myOper = new Scanner(System.in);
		System.out.println("Select an operation(1=Add, 2=Subtract, 3=Multiply, 4=Divide, 5=Exit): ");
		int oper = myOper.nextInt();
						
		switch (oper) {
			case 1:
				add();
				break;
			case 2: 
				sub();
				break;
			case 3: 
				mult();
				break;
			case 4:
				divide();
				break;
			case 5:
				myOper.close();
				break;
			default:
				System.out.println("Invalid Input");
			}
			myOper.close();
		}
	}