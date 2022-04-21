
import javax.swing.JOptionPane;

public class Quiz {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String question = "What is the capital of Bangladesh?\n";
		question += "A. Delhi \n";
		question += "B. Dhaka \n";
		question += "C. Colombo \n";
		question += "D. Jakarta \n";
		String answer = JOptionPane.showInputDialog(question);
		answer = answer.toUpperCase();
		
		if (answer.equals("B")) {
			 JOptionPane.showMessageDialog(null,"Correct!");
			} else if (answer.equals("A")){
				JOptionPane.showMessageDialog(null,"Incorrect. Please try again.");
			} else if (answer.equals("C")){
				JOptionPane.showMessageDialog(null,"Incorrect. Please try again.");
			} else if (answer.equals("D")){
				JOptionPane.showMessageDialog(null,"Incorrect. Please try again.");
			} else {
				JOptionPane.showMessageDialog(null,"Invalid answer. Please enter A, B, C, or D.");
			}
	}

}
