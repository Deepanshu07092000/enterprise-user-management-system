package com.SpringBootAssignment.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootAssignment.Entity.User;
import com.SpringBootAssignment.Service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws InterruptedException {
		return userService.loginUser(user.getUsername(), user.getPassword());
	}

}
