package homework5;

public class Student extends Person implements PersonInterface {

	int stud_id;
	double subject1, subject2, subject3;
	
	Student(int id, String name, int age, char gender, double s1, double s2, double s3) {
		
		super(name, age, gender);
		this.stud_id = id;
		this.subject1 = s1;
		this.subject2 = s2;
		this.subject3 = s3;
	}
	
	public void display() {
		
		System.out.println();
		System.out.println(ORGANIZATION);
		System.out.println("Student Info");
		System.out.println("-----------");
		System.out.println("Id: " + this.stud_id);
		super.display();
		System.out.println("Subject 1 score: " + this.subject1);
		System.out.println("Subject 2 score: " + this.subject2);
		System.out.println("Subject 3 score: " + this.subject3);
		System.out.println("Student Score Average: " + calculate(3));
		System.out.println("Student Study Time: " + compute(5, 25));
		System.out.println("Student Total Yearly Costs: " + total(25000, 1000, 500));
		System.out.println();

	}
	
	public double calculate(int totalSubjects) {
		double average = ((this.subject1 + this.subject2 + this.subject3)/totalSubjects);
		return average;
	}
	
	public int compute(int i, int j) {
		
		int studyTime = j - i;
		return studyTime;
		
	}
	
	public int total(int num3, int num4, int num5) {
		int totalCost = (num3+num4+num5);
		return totalCost;
	}
	
}
