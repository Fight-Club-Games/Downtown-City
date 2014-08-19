	public var play:Texture2D;
	public var goldy:NPC_inventory;
	
	function OnGUI () {
		if (GUI.Button (new Rect (Screen.width/5, Screen.height/5, 128, 128), play)) {
			if(PlayerPrefs.GetInt("gold")>=25){
				goldy.GoldDrop(25);
				Application.LoadLevel ("1");
			}
		}
	}