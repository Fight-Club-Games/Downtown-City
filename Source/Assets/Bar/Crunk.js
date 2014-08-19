	public var crunk:Texture2D;
	public var goldy:NPC_inventory;
	
	function OnGUI () {
		if (GUI.Button (new Rect (Screen.width/5, Screen.height/5, 100, 120), crunk)) {
			if(PlayerPrefs.GetInt("gold")>=100){
				goldy.GoldDrop(100);
				if(PlayerPrefs.GetInt("time")==1) PlayerPrefs.SetInt("time",0);
				else PlayerPrefs.SetInt("time",1);
				Application.LoadLevel ("DowntownCity");
			}
		}
	}