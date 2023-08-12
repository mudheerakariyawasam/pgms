package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CourseRepo extends JpaRepository<course,Long> {
}
