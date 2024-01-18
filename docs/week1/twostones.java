import java.util.Scanner;

public class twostones {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int number = scanner.nextInt();
    if (number % 2 == 1) {
      System.out.println("Alice");
    } else {
      System.out.println("Bob");
    }
  }
}
