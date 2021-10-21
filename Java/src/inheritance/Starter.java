package inheritance;


public class Starter {

	public static void main(String[] args) {
		
		Student student1 = new Student(101, "Vegeta", 99, 'M', 100.0, 98.5, 99.0);
		
		student1.display();

		Employee employee1 = new Employee(3003, "David", 25, 'M', "Software Engineer", 1000000);
		
		employee1.display();
	}

}
