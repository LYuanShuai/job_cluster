package com.example.demo.domain;

import lombok.Data;

import java.util.Date;

@Data
public class ResourceDO {
    private Long id;
    private String script;
    private String type;
    private String name;
    private Date gmtCreate;
    private Date gmtModified;
    private String env;
}
