import java.util.HashSet;
import java.util.LinkedList;

public class printpermutations {
  
  public void printAllPermutations(int n, int d, HashSet<Integer> used, LinkedList<Integer> current) {
    if (d > n) {
      System.out.println(current);
      return;
    }
    for (int i = 1; i <= n; i++) {
      if (!used.contains(i)) {
        used.add(i);
        current.add(i);
        printAllPermutations(n, d + 1, used, current);
        current.removeLast();
        used.remove(i);
      }
    }
  }
  public static void main(String[] args) {
    printpermutations solver = new printpermutations();
    solver.printAllPermutations(5, 1, new HashSet<Integer>(), new LinkedList<Integer>());
  }
}
