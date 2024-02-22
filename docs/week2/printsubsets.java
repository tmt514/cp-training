import java.util.LinkedList;

public class printsubsets {
  public LinkedList<Integer> currentSubset;
  public void printAllSubsets(int d) {
    if (d < 1) {
      System.out.println(currentSubset);
      return;
    }
    currentSubset.add(d);
    printAllSubsets(d - 1);
    currentSubset.removeLast();
    printAllSubsets(d - 1);
  }
  public static void main(String[] args) {
    printsubsets solver = new printsubsets();
    solver.currentSubset = new LinkedList<Integer>();
    solver.printAllSubsets(5);
  }
}
