#pragma strict

public var texture:Texture2D;

function OnGUI () {

		if (GUI.Button (new Rect (Screen.width/5, Screen.height/2, 122, 120),texture)) {
		if(PlayerPrefs.GetInt("gold") >= 10000){
			Application.LoadLevel ("youwin");
				}
	}
	}