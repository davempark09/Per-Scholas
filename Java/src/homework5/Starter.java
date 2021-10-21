package homework5;
import java.util.*;

public class Starter {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Student Id: ");
		int id = input.nextInt();
		input.nextLine();
		System.out.println("Student Name: ");
		String name = 	input.nextLine();
		System.out.println("Student Age: ");
		int age = input.nextInt();
		System.out.println("Student Gender: ");
		char gender = input.next().charAt(0);
		System.out.println("Student Subject 1: ");
		int sub1 = input.nextInt();
		System.out.println("Student Subject 2: ");
		int sub2 = input.nextInt();
		System.out.println("Student Subject 3: ");
		int sub3 = input.nextInt();
		input.nextLine();
		Student student1 = new Student(id, name, age, gender, sub1, sub2, sub3);
		student1.display();
		
		
		
		System.out.println();
		System.out.println("Employee Id: ");
		int id2 = input.nextInt();
		input.nextLine();
		System.out.println("Employee Name: ");
		String name2 = 	input.nextLine();
		System.out.println("Employee Age: ");
		int age2 = input.nextInt();
		System.out.println("Employee Gender: ");
		char gender2 = input.next().charAt(0);
		System.out.println("Employee Salary: ");
		int sal = input.nextInt();
		input.nextLine();
		Employee employee = new Employee(id2, name2, age2, gender2, sal);
		
		employee.display();
		
		
		
		Person1 per1 = new Person1();

		System.out.println("Enter the Person name: ");
		per1.setName(input.nextLine());	
		System.out.println("Enter the Person ID: ");
		per1.setId(input.nextInt());
		input.nextLine();
		System.out.println("Enter the Person email: ");
		per1.setEmail(input.nextLine());
		input.close();
		
		System.out.println();
		System.out.println("Person Info");
		System.out.println("-----------");
		System.out.println("Name: " + per1.getName());
		System.out.println("ID: " + per1.getId());
		System.out.println("Email: " + per1.getEmail());

	}

}
