package homework4;
import java.util.Scanner;

public class Computer {

	private String name;
	private int year;
	private int cost;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}
	
	public static void main(String[] args) {
		
		Computer comp1 = new Computer();
		
		Scanner input = new Scanner(System.in);
		System.out.println("Enter the name: ");
		comp1.setName(input.nextLine());	
		System.out.println("Enter the year: ");
		comp1.setYear(input.nextInt());
		System.out.println("Enter the cost: ");
		comp1.setCost(input.nextInt());
		input.close();
		
		System.out.println();
		System.out.println("Name: " + comp1.getName());
		System.out.println("Year: " + comp1.getYear());
		System.out.println("Cost: " + comp1.getCost());
	}
}
