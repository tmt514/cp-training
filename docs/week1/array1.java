import java.util.Scanner;

public class array1 {
  public static void main(String[] args) {
    int[][] a;
    a = new int[100][];
    for (int i = 0; i < 100; i++) {
      a[i] = new int[i];
      for (int j = 0; j < i; j++) {
        a[i][j] = i + j;
      }
      System.out.println(a[i].length);
    }
  }
}
