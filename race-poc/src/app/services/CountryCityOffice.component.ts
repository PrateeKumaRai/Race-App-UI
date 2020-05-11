
import { Injectable } from '@angular/core';


@Injectable()
export class CountryCityOffice {
countryArry=[
    {name: 'India', city:[
	{cityname:'Bangalore',location:[{officeLoc:'EPIP'},{officeLoc:'Ecospce 6B'},{officeLoc:'RMZ Ecoworld 5B'},{officeLoc:'Divyasree TechPark'}]},
	{cityname:'Mumbai',location:[{officeLoc:'CAPGEMINI Knowledge Park IT1/IT2'},{officeLoc:'Capgemini knowledge Park(SEZ)'}]},
	{cityname:'Hyderabad',location:[{officeLoc:'SEZ Unit'},{officeLoc:'SEZ Developer'},{officeLoc:'Phoenix Infocity'}]},
	{cityname:'Bhubaneswar',location:[{officeLoc:'Infocity'}]},
	{cityname:'Chennai',location:[{officeLoc:'Techno park SEZ'},{officeLoc:'Prestige Cyber Tower'}]},
	{cityname:'Gandhinagar',location:[{officeLoc:'Mindspace SEZ'}]},
	{cityname:'Gurugram',location:[{officeLoc:'SPAZE iTech Park'}]},
	{cityname:'Noida',location:[{officeLoc:'NSEZ 139'},{officeLoc:'NSEZ 142'},{officeLoc:'Sea View Developers'}]},
	{cityname:'Salem',location:[{officeLoc:' PT Towers'}]},
	{cityname:'Pune',location:[{officeLoc:'Midas Tower'},{officeLoc:'Cerebrum IT Park'},{officeLoc:'MIDC SEZ'}]},
	{cityname:'Trichy',location:[{officeLoc:'Sivam Plaza No 5'},{officeLoc:'VRN Centre'},{officeLoc:'Muthiah Tower'}]},
	{cityname:'Kolkata',location:[{officeLoc:' Candor Tech Space'}]}
	]
	},
	{name: 'Sweden', city:[
	{cityname:'Goteborg',location:[{officeLoc:'Grafiska vägen'}]},
	{cityname:'Sogeti',location:[{officeLoc:'Solna Business Park'}]},
	{cityname:'Malmö',location:[{officeLoc:'Nordenskiöldsgatan'}]},
	{cityname:'Stockholm',location:[{officeLoc:'Fleminggatan'}]},
	{cityname:'Älmhult',location:[{officeLoc:'Hantverksgatan'}]},
	{cityname:'Växjö',location:[{officeLoc:'Kungsgatan 5'}]}
	
	]
    }
];
public constructor(

    ) { }
}