package com.SpringBootAssignment.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringBootAssignment.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	//-------- Find the user using UserName and Password---------------//
	Optional<User> findByUsernameAndPassword(String username,String password);
	
	//--------- checking of user exists in database----------------------//
	boolean existsByUsername(String username);

}
