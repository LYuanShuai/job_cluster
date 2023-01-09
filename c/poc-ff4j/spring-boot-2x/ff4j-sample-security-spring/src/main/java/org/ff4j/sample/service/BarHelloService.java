package org.ff4j.sample.service;

public class BarHelloService implements HelloService{
    @Override
    public void hello() {
        System.out.println("hello bar~");
    }
}
