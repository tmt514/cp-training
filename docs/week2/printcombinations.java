import java.util.LinkedList;

public class printcombinations {

  public void printAllCombinations(int n, int k, int d, int now, LinkedList<Integer> current) {
    if (d > k) {
      System.out.println(current);
      return;
    }
    while (now <= n) {
      current.add(now);
      printAllCombinations(n, k, d + 1, now + 1, current);
      current.removeLast();
      now++;
    }
  }
  public static void main(String[] args) {
    printcombinations solver = new printcombinations();
    solver.printAllCombinations(5, 3, 1, 1, new LinkedList<Integer>());
  }
}
