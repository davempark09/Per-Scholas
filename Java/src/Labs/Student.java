package Labs;

public class Student {
	static final String top1 = "StudentID";
	static final String top2 = "First Name";
	static final String top3 = "Last Name";
	static final String top4 = "Student Email";
	static final String top5 = "Subject 1";
	static final String top6 = "Subject 2";
	static final String top7 = "Subject 3";

	int studentID;
	String fName;
	String lName;
	String email;
	double sub1;
	double sub2;
	double sub3;

	public Student() {
		
	}
	public Student(int studentID, String fName, String lName, String email, double sub1, double sub2, double sub3) {
		this.studentID = studentID;
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.sub1 = sub1;
		this.sub2 = sub2;
		this.sub3 = sub3;
	}
	
	void displayInfo() {
		System.out.println(this.studentID + " " + this.fName + " " + this.lName + " " + this.email + " " + this.sub1 + " " + this.sub2 + " " + this.sub3);
	}
	
	void getAverage(){
		System.out.println("Average of subjects: " + (this.sub1+this.sub2+this.sub3)/3);
	}
	
	static void head() {
		System.out.println(top1 + " " + top2 + " " + top3 + " " + top4 + " " + top5 + " " + top6 + " " + top7);
	}
	public static void main(String[] args) {
		head();
		System.out.println();
	Student s1 = new Student(0001, "Dave", "Park", "davempark@gmail.com", 99, 95, 90);
	s1.displayInfo();
	s1.getAverage();
	System.out.println();
	
	Student s2 = new Student(0002, "Idk", "Person", "person2@gmail.com", 90, 88, 91);
	s2.displayInfo();
	s2.getAverage();
	
	}
}
