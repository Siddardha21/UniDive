package com.project.unidive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.unidive.entity.User;


@Repository
public interface UserRepo extends JpaRepository<User, Long>{

	@Query( value = "select * from users where email = :email", nativeQuery = true)
	User findbyEmail(@Param("email") String email);

	@Query( value = "select * from users where id = :id", nativeQuery = true)
	User findUserById(@Param("id") Long id);

	@Query( value = "select * from users where email = :email and password = :password", nativeQuery = true)
	User autheticateUser(@Param("email") String email, @Param("password") String password);

	@Query( value = "select * from users where email = :email and securityQuestion = :securityQuestion and securityAnswer = :securityAnswer", nativeQuery = true)
	User validateUser(@Param("email") String email,@Param("securityQuestion") String securityQuestion, @Param("securityAnswer") String securityAnswer);

	@Query( value = "update users set password = :password where email = :email", nativeQuery = true)
	void changePassword(@Param("email") String email, @Param("password") String password);


}
