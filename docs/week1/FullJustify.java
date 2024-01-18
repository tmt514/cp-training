import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class FullJustify {
    public List<String> fullJustify(String[] words, int maxWidth) {
        ArrayList<String> answer = new ArrayList<String>();
        for (int l = 0, r = 0; l < words.length; l = r) {
            int now = 0;
            while (r < words.length && now + words[r].length() + (r - l + 1) <= maxWidth + 1) {
                now += words[r].length();
                r++;
            }
            StringBuilder sb = new StringBuilder();
            if (l+1 == r) {
                sb.append(words[l]);
            } else {
                int spaces = maxWidth - now;
                while (l < r) {
                    sb.append(words[l]);
                    l += 1;
                    if (l < r) {
                        int rep = (spaces + r-l-1) / (r-l);
                        if (r == words.length) rep = 1;
                        sb.append(" ".repeat(rep));
                        spaces -= rep;
                    }
                }
            }
            sb.append(" ".repeat(maxWidth - sb.length()));
            answer.add(sb.toString());
        }
        return answer;
    }

    public static void main(String[] args) {
      FullJustify solution = new FullJustify();
      String[] words = {"What","must","be","acknowledgment","shall","be"};
      int maxWidth = 16;
      
      System.out.println(String.join("|\n", solution.fullJustify(words, maxWidth)));
    }
}
