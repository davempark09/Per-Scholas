package customers;

public class Customer {

	private String name;
	public int id=999;
	private int invoice;
	private String address;
	private String email;
	private int phone;
	public double randomNum = Math.floor(Math.random()*id);
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPhone() {
		return phone;
	}
	public void setPhone(int phone) {
		this.phone = phone;
	}
	public double getRandomNum() {
		return randomNum;
	}

	
	
	
	


}
