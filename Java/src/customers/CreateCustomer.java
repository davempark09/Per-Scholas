package customers;
import java.util.Scanner;

public class CreateCustomer {

	public static void main(String[] args) {
		
		
		Customer c1 = new Customer();
		
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the name: ");
		c1.setName(input.nextLine());	
		System.out.println("Enter the e-mail: ");
		c1.setEmail(input.nextLine());
		System.out.println("Enter the address: ");
		c1.setAddress(input.nextLine());
		System.out.println("Enter the phone number: ");
		c1.setPhone(input.nextInt());
		input.nextLine();

		
		Customer c2 = new Customer();
		
		System.out.println("Enter the name: ");
		c2.setName(input.nextLine());	
		System.out.println("Enter the e-mail: ");
		c2.setEmail(input.nextLine());
		System.out.println("Enter the address: ");
		c2.setAddress(input.nextLine());
		System.out.println("Enter the phone number: ");
		c2.setPhone(input.nextInt());
		input.nextLine();

		
		Customer c3 = new Customer();
		
		System.out.println("Enter the name: ");
		c3.setName(input.nextLine());	
		System.out.println("Enter the e-mail: ");
		c3.setEmail(input.nextLine());
		System.out.println("Enter the address: ");
		c3.setAddress(input.nextLine());
		System.out.println("Enter the phone number: ");
		c3.setPhone(input.nextInt());
		input.nextLine();

		
		System.out.println("Name: " + c1.getName());
		System.out.println("E-mail: " + c1.getEmail());
		System.out.println("Address: " + c1.getAddress());
		System.out.println("Phone: " + c1.getPhone());
		System.out.println("ID: " + c1.getRandomNum());
		System.out.println();
		
		System.out.println("Name: " + c2.getName());
		System.out.println("E-mail: " + c2.getEmail());
		System.out.println("Address: " + c2.getAddress());
		System.out.println("Phone: " + c2.getPhone());
		System.out.println("ID: " + c2.getRandomNum());
		System.out.println();
		
		System.out.println("Name: " + c3.getName());
		System.out.println("E-mail: " + c3.getEmail());
		System.out.println("Address: " + c3.getAddress());
		System.out.println("Phone: " + c3.getPhone());
		System.out.println("ID: " + c3.getRandomNum());
		System.out.println();
		input.close();
		
		
		
		
		
	}

}
