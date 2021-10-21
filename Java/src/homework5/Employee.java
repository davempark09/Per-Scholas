package homework5;

public class Employee extends Person implements PersonInterface {
	
	int emp_id;
	double emp_salary;
	
	Employee(int id, String name, int age, char gender, double salary) {
		
		super(name, age, gender);
		this.emp_id = id;
		this.emp_salary = salary;
	}
	
	public void display() {
		
		System.out.println();
		System.out.println(ORGANIZATION);
		System.out.println("Employee Info");
		System.out.println("-----------");
		System.out.println("Id: " + this.emp_id);
		super.display();
		System.out.println("Salary: " + this.emp_salary);
		System.out.println("Employee NetSalary: " + calculate(15000));
		System.out.println("Employee Work Time: " + compute(4, 40));
		System.out.println("Emplyoee Total Yearly Costs: " + total(10000, 300, 700));
		System.out.println();
		
	}
	
	public double calculate(int bonus) {
		
		double netsalary = bonus + this.emp_salary;
		return netsalary;
		
	}
	
	public int compute(int num1, int num2) {
		
		int workTime = num2 - num1;
		return workTime;
		
	}
	
	public int total(int q, int w, int e) {
		int totalCost1 = (q+w+e);
		return totalCost1;
	}
	
}