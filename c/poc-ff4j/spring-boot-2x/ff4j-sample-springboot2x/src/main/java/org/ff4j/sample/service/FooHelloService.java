package org.ff4j.sample.service;

public class FooHelloService implements HelloService{
    @Override
    public String hello() {
        return "hello foo~";
    }
}
