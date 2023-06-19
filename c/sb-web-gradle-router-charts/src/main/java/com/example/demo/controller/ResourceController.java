package com.example.demo.controller;

import com.example.demo.domain.ResourceDO;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/resource")
public class ResourceController {
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @GetMapping("/all")
    public List<ResourceDO> all() {
        return namedParameterJdbcTemplate.query("SELECT * FROM resource LIMIT 1000", new BeanPropertyRowMapper<>(ResourceDO.class));
    }

    @PutMapping
    public void create(@RequestBody ResourceCreateParam param) {
        namedParameterJdbcTemplate.update("INSERT INTO resource (name, type, env) VALUES (:name, :type, :env)", new BeanPropertySqlParameterSource(param));
    }

    @PostMapping
    public void update(@RequestBody ResourceUpdateParam param) {
        if (param.getId() == null || param.getId() < 1) {
            return;
        }
        if (!StringUtils.hasText(param.getEnv())
            || !StringUtils.hasText(param.getName())
            || !StringUtils.hasText(param.getType())) {
            return;
        }
        namedParameterJdbcTemplate.update("UPDATE resource SET name=:name, type=:type, env=:env WHERE id=:id", new BeanPropertySqlParameterSource(param));
    }

    @PostMapping("/script")
    public void updateScript(@RequestBody ResourceScriptUpdateParam param) {
        if (param.getId() == null || param.getId() < 1) {
            return;
        }
        if (!StringUtils.hasText(param.getScript())) {
            return;
        }
        namedParameterJdbcTemplate.update("UPDATE resource SET script=:script WHERE id=:id", new BeanPropertySqlParameterSource(param));
    }

    @Data
    private static class ResourceCreateParam implements Serializable {
        private String name;
        private String type;
        private String env;
    }

    @Data
    private static class ResourceUpdateParam implements Serializable {
        private Long id;
        private String name;
        private String type;
        private String env;
    }

    @Data
    private static class ResourceScriptUpdateParam implements Serializable {
        private Long id;
        private String script;
    }
}
