package Labs;
import java.util.*;

public class ArrayListPractice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/* ========== ARRAYS ==========
		 * • We have 8 primitive data types in Java
		 * • Corresponding to those 8 data types has their own object (Class) entity
		 * • These object representation are included in Java
		 * • Each one of the wrapper Classes has their own methods.
		 * • Wrapper Classes: 
		 * 		int     -> Integer
		 * 		short   -> Short
		 * 		byte    -> Byte
		 * 		long    -> Long
		 * 		double  -> Double
		 * 		boolean -> Boolean
		 * 		float   -> Float
		 * 		chat    -> Character
		 * 
		 * • If you want to store objects, you have to create an array.
		 * • We can use a class called ArrayList
		 * 
		 * */
		
		// ===== ARRAYLIST =====
		// • We have to import this from utilities
		// • We can pass in a default value inside our parenthesis to determine how many elements it can accept
		// • ArrayList is resizable. As you write, it grows.
		
		// Generic: will only accept integers (Restrictive on a particular data type)
		// ArrayList <Integer> arrList = new ArrayList <Integer> (10);
		// ArrayList <String> arrList = new ArrayList <String> (10);
		
		// OBJECTS ARE ROYALTY
		// REMEMBER: Objects are the highest-level class in Java. Everything else falls under objects.
		// Non-restrictive (raw): allows us to pass in any data type
		ArrayList arrList = new ArrayList(10);
		
		// This is how we add to our list
		arrList.add("Jeffrey Huisa");
		arrList.add(25);
		arrList.add(true);
		arrList.add('M');
		arrList.add("We are going to remove this.");
		
		// This is how we remove from our list using index
		arrList.remove(4);
		
		// Prints first index of our list
		System.out.println(arrList.get(0));
		
		// Prints our whole list
		System.out.println(arrList);
		
		System.out.println();
		System.out.println("====================================");
		
		// Prints our elements individually in our list
		// Any loop can work.
		
		System.out.println("We are using a for each loop.");
		// Since we are using a non-restrictive list we use Object to access each of our elements
		for(Object i : arrList) {
			System.out.println(i);
		}
		
		// If we are using a generic/restrictive when initializing our arrLis
		// we would need to use that specific data type
		/*
		 * for(String i : arrList) {
		 *     System.out.println(i);
		 * }
		*/
		
		System.out.println("====================================");
		
		// Using a regular for loop.
		System.out.println("We are now using a regular for loop.");
		for(int i = 0; i < arrList.size(); i++) {
			System.out.println(arrList.get(i));
		}
		
		System.out.println("====================================");
		System.out.println();
		
		// Prints length of our list using size()
		System.out.println("Size: " + arrList.size());
	}

}
