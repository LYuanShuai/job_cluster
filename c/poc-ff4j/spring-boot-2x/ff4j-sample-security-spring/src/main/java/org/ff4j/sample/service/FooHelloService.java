package org.ff4j.sample.service;

public class FooHelloService implements HelloService{
    @Override
    public void hello() {
        System.out.println("hello foo~");
    }
}
