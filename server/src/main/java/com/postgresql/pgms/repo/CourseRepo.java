package com.postgresql.pgms.repo;

import com.postgresql.pgms.model.course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface CourseRepo extends JpaRepository<course,Long> {
    @Query("""
SELECT courseId,courseNo,courseName,semester,credit,hallName,programId FROM course ORDER BY courseId DESC
""")
    List<Object> findAllCourses();
}
