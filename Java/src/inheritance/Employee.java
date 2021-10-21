package inheritance;

public class Employee extends Person{
	
	int empl_id;
	String title;
	double salary;
	Address addr;

	Employee(int id, String name, int age, char gender, String title, double salary) {
		
		super(name, age, gender);
		this.empl_id = id;
		this.title = title;
		this.salary = salary;
		
	}
	
	public void createAddress() {
		addr = new Address();
		
		addr.street = "212 old belwood road";
		addr.city = "Calhoun";
		addr.state = "GA";
		addr.zipcode = 30701;
	}
	
	public void display() {
		System.out.println("Id: " + this.empl_id);
		super.display();
		System.out.println("Employee title: " + this.title);
		System.out.println("Employee salary: " + this.salary);
		System.out.println("Employee address: " + addr.street);
		System.out.println();
		
	}

}
