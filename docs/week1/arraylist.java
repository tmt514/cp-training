import java.util.ArrayList;

public class arraylist {
  public static void main(String[] args) {
    ArrayList<String> strings = new ArrayList<String>();
    strings.add("one");
    strings.add("two");
    strings.add("three");
    strings.add("four");
    String all = String.join("+", strings);
    System.out.println(all);
  }
}
