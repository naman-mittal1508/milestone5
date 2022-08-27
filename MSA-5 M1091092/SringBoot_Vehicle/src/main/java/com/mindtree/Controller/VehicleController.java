package com.mindtree.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.Entity.Vehicle;
import com.mindtree.Repository.VehicleRepository;
import com.mindtree.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class VehicleController {
	
	@Autowired
	private VehicleRepository vehicleRepo;
	
	//getAllEmployee
	
	@GetMapping("/vehicle")
	public List<Vehicle> getAllVehicle()
	{
		return vehicleRepo.findAll();
	}
	
	// create an employee
	
	@PostMapping("/vehicle")
	public Vehicle createVehicle(@RequestBody Vehicle vehicle)
	{
		return vehicleRepo.save(vehicle);
	}
	
	//get employee by id
	
	@GetMapping("/vehicle/{id}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id)
	{
		Vehicle vehicle = vehicleRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Sorry! No Vehicle is having this id :"+id));
		return ResponseEntity.ok(vehicle);
	}

}
