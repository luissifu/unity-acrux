﻿#pragma strict

public var enemy_pfbs : GameObject[];
public var enemy_container_pfb : GameObject;
public var maxEnemiesPerRoom : int = 3;

public function enemies_for(room : GameObject) {
	var container : GameObject = Instantiate(enemy_container_pfb, room.transform.position, Quaternion.identity);
	container.transform.parent = room.transform;
	
	for (var i : int = 0; i < maxEnemiesPerRoom; i++)
	{
		var esel : int = Mathf.FloorToInt(Random.value * enemy_pfbs.Length);
		var enemy : GameObject = Instantiate(enemy_pfbs[esel], room.transform.position, Quaternion.identity);
		enemy.transform.parent = container.transform;
	}
	
}