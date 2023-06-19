package com.example.demo;

import com.example.demo.controller.HelloController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {
    @Autowired
    private HelloController helloController;

    @Test
    void contextLoads() {
        Assertions.assertNotNull(helloController);
    }

}

