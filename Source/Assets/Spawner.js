#pragma strict

public var arrow:GameObject;
public var chance:int = 100;

function Update () {
	if(Random.Range(0,chance) == 1){
		Instantiate(arrow,transform.position,transform.rotation);
		}
}