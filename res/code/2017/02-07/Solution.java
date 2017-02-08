import java.io.*;
import java.util.Scanner;

/*
 * Binghamton ACM February 7th, 2017
 * A python solution to the problem posed here:
 *     https://www.hackerrank.com/contests/buacm/challenges/maximum-in-a-unimodal-array/
 */
public class Solution {
    public static void main(String[] args) {
        // Parse input
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++) arr[i] = in.nextInt();
        in.close();

        // Set search space bounds and declare midpoint var
        int start = 0;
        int end = n - 1;
        int mid = 0;

        // Binary search loop: Base case is when the search space is empty
        while(end - start > 0) {
            // Calculate the midpoint of the space
            mid = (start + end) / 2;

            if(arr[mid] < arr[mid + 1])
                // At a rising portion of the array
                start = mid + 1;
            else 
                // At a falling portion of the array
                end = mid;
        }
        System.out.println(arr[end]);    
    }
}
