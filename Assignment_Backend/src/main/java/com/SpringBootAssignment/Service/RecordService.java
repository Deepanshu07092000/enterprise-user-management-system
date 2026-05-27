package com.SpringBootAssignment.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBootAssignment.Entity.Record;
import com.SpringBootAssignment.Repository.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository recordRepository;
	
	//------------ Fetch the records based on userId--------------//
	public List<Record> getRecordsByUserId(Long userId){
		
		try {
			
			//------ Simulating API Delay-----------//
			Thread.sleep(3000);
		}
		catch(InterruptedException e) {
			e.printStackTrace();
		}
		return recordRepository.findByUserId(userId);
	}

}
