package com.sojern.mathws;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.NoSuchElementException;

@Service
public class MathService {
    public double min(NumbersList numbersList) {
        double[] numbers = numbersList.getNumbers();
        return Arrays.stream(numbers).min().orElseThrow(NoSuchElementException::new);
    }
    public double max(NumbersList numbersList) {
        double[] numbers = numbersList.getNumbers();
        return Arrays.stream(numbers).max().orElseThrow(NoSuchElementException::new);
    }
    public double avg(double[] numbers) {
        return Arrays.stream(numbers).average().orElseThrow(NoSuchElementException::new);
    }
    public double median(double[] numbers) {
        Arrays.sort(numbers);
        int middle = numbers.length/2;
        if (numbers.length%2 == 1) {
            return numbers[middle];
        } else {
            return (numbers[middle-1] + numbers[middle]) / 2.0;
        }
    }
    public double percentile(NumbersList numbersList) {
        double[] numbers = numbersList.getNumbers();
        Arrays.sort(numbers);
        int q = numbersList.getQuantifier();
        int ordinalRank =  (int) Math.ceil((q/100.0)*numbers.length);
        return numbers[ordinalRank-1];
    }
}
