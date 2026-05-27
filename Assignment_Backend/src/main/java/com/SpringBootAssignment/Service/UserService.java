package com.SpringBootAssignment.Service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBootAssignment.Entity.User;
import com.SpringBootAssignment.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	//-------Login Validation--------------------------//
	public User loginUser(String username,String password) throws InterruptedException {
		
		Thread.sleep(2000);
		
		Optional<User> optionalUser = userRepository.findByUsernameAndPassword(username, password);
		return optionalUser.orElse(null)	;
		}
	
	//--------- Get All users------------------------------//
	public List<User> getAllUsers() throws InterruptedException{
		
		 Thread.sleep(3000);
		 
		return userRepository.findAll();
	}
	
	//---------- Add new User-------------------------------//
	public User addUser(User user) throws InterruptedException {
		
		Thread.sleep(3000); 
		
		if(userRepository.existsByUsername(user.getUsername())) {
			throw new RuntimeException("Username already exists");
		}
		
		return userRepository.save(user);
	}
	
	//---------- Delete User by using UserId---------------------//
	public void deleteUser(Long id) {
		 userRepository.deleteById(id);
	}
}
