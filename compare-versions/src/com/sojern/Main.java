package com.sojern;

import java.awt.desktop.SystemEventListener;
import java.util.function.DoubleToIntFunction;

public class Main {
    static int versionCompare(String version1, String version2) {
        String[] v1Split = version1.split("[.]",-1);
        String[] v2Split = version2.split("[.]",-1);
        for(int i = 0 ; i<v1Split.length||i<v2Split.length; i++) {
            int p1, p2 ;
            try {
                p1 = Integer.parseInt(v1Split[i]);
            } catch(ArrayIndexOutOfBoundsException e) {
                p1 = 0;
            }
            try {
                p2 = Integer.parseInt(v2Split[i]);
            } catch(ArrayIndexOutOfBoundsException e) {
                p2 =0 ;
            }
            if (p1 > p2) return 1;
            if (p1 < p2) return -1;
        }
        return 0;
    }

    public static void main(String[] args) {
        String version1 = "1.2.33";
        String version2 = "1.2.33.2";
        System.out.println(versionCompare(version1, version2));
    }
}
