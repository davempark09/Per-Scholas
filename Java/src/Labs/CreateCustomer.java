package Labs;
import java.util.ArrayList;
import java.util.Scanner;

public class CreateCustomer {

	public static void main(String[] args) {
		
		// CHECK THIS OUT
		// Since our classes our inside our package, it has access to each other.
		
		Customer c1 = new Customer();
		Customer c2 = new Customer();
		Customer c3 = new Customer();
		
		// Divider
		System.out.println("Customer 1");
		System.out.println("----------");
		
		// Here we are setting values using our setter methods inside our Customer.java
		// Currently we are hardcoding values, but this may be a place to take in user input
		c1.setName("Bobby");
		c1.setEmail("bobby@gmail.com");
		c1.setAddress("123 My Neighbor");
		c1.setId();

		// Here we are grabbing the values using our getter methods inside our Customer.java
		System.out.println(c1.getName());
		System.out.println(c1.getEmail());
		System.out.println(c1.getAddress());
		System.out.println(c1.getId());
	
		// Divider
		System.out.println();
		System.out.println("Customer 2");
		System.out.println("----------");

		// Customer 2 set values
		c2.setName("Totoro");
		c2.setEmail("yourneighbor@studioghilbi.com");
		c2.setAddress("123 My Neighbor");
		c2.setId();

		
		// Customer 2 print values
		System.out.println(c2.getName());
		System.out.println(c2.getEmail());
		System.out.println(c2.getAddress());
		System.out.println(c2.getId());
		
		// ========== MORNING LAB ==========
		/*
		 * Task: Create new Customers in Customer.java. Use your getters and print
		 * values. Do not hard code your values. You will ask the user for input
		 * (scanner) and pass on the user inputs in your setters. We want to add an ID
		 * and attach it to each Customer. You want to attach it inside a constructor.
		 * Just like what we did yesterday with "count++" inside our constructors in
		 * Person.java 
		 * 
		 * ===== OUTPUT ===== 
		 * Name: abc 
		 * ID: 1 
		 * Address: 123 whatever st
		 * Email: peanutbutter@gmail.com 
		 * phone: 7867676876
		 */
		
		// new scanner
		/*
		 * Scanner scan = new Scanner(System.in);
		 * 
		 * System.out.println(); System.out.println("------------------");
		 * System.out.println("Add a new Customer");
		 * System.out.println("------------------"); System.out.println("Enter name: ");
		 * String name = scan.nextLine();
		 * 
		 * c3.setName(name); System.out.println("c3 name: " + c3.getName());
		 */
		
		
		System.out.println("===========================================");
		System.out.println("        PRINTING FROM THE ARRAYLIST        ");
		System.out.println("===========================================");
		
		// We are using the Customer Class to restrict
		ArrayList <Customer> myCustomers = new ArrayList <Customer>();
		myCustomers.add(c1);
		myCustomers.add(c2);
		
		for(Customer cust: myCustomers) {
			System.out.println(cust.getName());
			System.out.println(cust.getEmail());
			System.out.println(cust.getAddress());
		}
	}

}