package com.SpringBootAssignment.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootAssignment.Service.RecordService;
import com.SpringBootAssignment.Entity.Record;

@RestController
@RequestMapping("/records")
@CrossOrigin(origins = "*")
public class RecordController {
	
	@Autowired
	private RecordService recordService;
	
	@GetMapping("/{userId}")
	public List<Record> getRecords(@PathVariable Long userId){
		return recordService.getRecordsByUserId(userId);
		
	}
	
}
