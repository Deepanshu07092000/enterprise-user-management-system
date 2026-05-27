package com.SpringBootAssignment.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootAssignment.Service.UserService;
import com.SpringBootAssignment.Entity.User;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private UserService userService;
	
	
	//----------- Get all the users from Database--------------------------------//
	@GetMapping("/users")
	public List<User> getAllUsers() throws InterruptedException{
		return userService.getAllUsers();
	}
	
	//---------- Add new User----------------------------------------------------//
	@PostMapping("/add-user")
	public User addUser(@RequestBody User user) throws InterruptedException {
		return userService.addUser(user);
	}
	
	//----------- Delete user by id-----------------------------------------------//
	@DeleteMapping("/delete-user/{id}")
	public String deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
		return "User Deleted Successfully";
	}

}
