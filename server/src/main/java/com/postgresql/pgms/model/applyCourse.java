package com.postgresql.pgms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "ApplyCourse")
public class applyCourse {
    private long appId;
    private long courseNo;
    private String courseName;
    private String description;
    private String status;

    
}
