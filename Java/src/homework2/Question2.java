package homework2;
import java.util.Scanner;

public class Question2 {

	public static void main(String[] args) {
		Scanner inp=new Scanner(System.in);
		  System.out.println("Enter the number to test: ");
		  int num=inp.nextInt();
		  int temp=num;
		  int len=0;
		  while(temp != 0)
		  {
		   len=len+1;
		   temp=temp/10;
		  }
		  int temp2=num;
		  int res=0;
		  int rem;
		  while(temp2 != 0)
		  {
		   int mult=1;
		   rem=temp2%10;
		   for(int i=1;i<=len;i++)
		   {
		    mult=mult*rem;
		   }
		   res=res+mult;
		   temp2=temp2/10;
		  }
		  if(res==num)
		  {
		   System.out.println(num+" is armstrong number");
		  }
		  else
		  {
		   System.out.println(num+" is not armstrong number");
		  }
		  inp.close();
	}

}
