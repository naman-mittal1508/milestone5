package com.mindtree.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name ="vehicle_name")
	private String name;
	
	@Column(name ="vehicle_type")
	private String vehicleType;
	
	@Column(name ="state")
	private String state;
	
	@Column(name ="city")
	private String city;
	
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Vehicle(String name, String vehicleType, String state, String city) {
		super();
		this.name = name;
		this.vehicleType = vehicleType;
		this.state = state;
		this.city = city;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
	
	
	
	

}
