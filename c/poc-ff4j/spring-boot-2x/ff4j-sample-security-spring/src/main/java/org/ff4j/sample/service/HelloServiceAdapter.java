package org.ff4j.sample.service;

import org.ff4j.FF4j;
import org.ff4j.core.Feature;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloServiceAdapter implements HelloService, InitializingBean {

    private static final String FEATURE_HELLO_FOO = "feature_hello_foo";

    @Autowired
    public FF4j ff4j;

    @GetMapping("hello")
    @Override
    public void hello() {
        if (ff4j.check(FEATURE_HELLO_FOO)) {
            new FooHelloService().hello();
        } else {
            new BarHelloService().hello();
        }
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        // Everybody can see it
        if (!ff4j.exist(FEATURE_HELLO_FOO)) {
            ff4j.createFeature(new Feature(FEATURE_HELLO_FOO, true));
        }
    }
}
