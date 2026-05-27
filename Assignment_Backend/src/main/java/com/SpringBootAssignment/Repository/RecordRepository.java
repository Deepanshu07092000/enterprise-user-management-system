package com.SpringBootAssignment.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBootAssignment.Entity.Record;

import java.util.List;


public interface RecordRepository extends JpaRepository<Record, Long> {
	
	//------ Get records based on userId----------------//
	List<Record> findByUserId(Long userId);

}
