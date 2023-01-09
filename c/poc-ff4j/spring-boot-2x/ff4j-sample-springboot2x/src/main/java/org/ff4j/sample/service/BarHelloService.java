package org.ff4j.sample.service;

public class BarHelloService implements HelloService{
    @Override
    public String hello() {
        return "hello bar~";
    }
}
