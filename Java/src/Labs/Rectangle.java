package Labs;

public class Rectangle {

	int length;
	int width;
	
	void area() {
		System.out.println("The area of the rectangle is: " + length*width);
	}
	
	
	
	public static void main(String[] args) {
		Rectangle rect1 = new Rectangle();
		rect1.length = 6;
		rect1.width = 8;
		rect1.area();
	
		Rectangle rect2 = new Rectangle();
		rect2.length = 9;
		rect2.width = 11;
		rect2.area();
	}
}
