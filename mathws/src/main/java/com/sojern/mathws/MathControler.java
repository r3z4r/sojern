package com.sojern.mathws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.font.NumericShaper;

@RestController
public class MathControler {
    private final MathService ms;

    @Autowired
    public MathControler(MathService mathService){
        this.ms = mathService;
    }

    @PostMapping("/min")
    public double min(@RequestBody NumbersList numbersList){
        return ms.min(numbersList);
    }
    @PostMapping("/max")
    public double max(@RequestBody NumbersList numbersList){
        return ms.max(numbersList);
    }
    @PostMapping("/avg")
    public double avg(@RequestBody double[] numbers){
        return ms.avg(numbers);
    }
    @PostMapping("/median")
    public double median(@RequestBody double[] numbers){
        return ms.median(numbers);
    }
    @PostMapping("/percentile")
    public double percentile(@RequestBody NumbersList numbersList){
        return ms.percentile(numbersList);
    }
}
