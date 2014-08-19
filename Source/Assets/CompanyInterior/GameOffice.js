#pragma strict

	public var computer:GUIText;
	public var money:NPC_inventory;
	private var curKey:int;
	private var needNewKey:boolean=true;
	public var timer:float = 0;
	
	// Update is called once per frame
	function Update (){
	if(timer<=0){
		if (needNewKey) {
						curKey = RandomKey ();
						computer.text = "Press the " + curKey + " key.";
						needNewKey = false;
						}
				}
				else{
				timer -= Time.deltaTime;
			if(timer<=0){
				needNewKey = true;
				}
				}
}

	function RandomKey(){
				return Random.Range (0, 9);
	}
	function OnGUI() {
    if (Event.current.type == EventType.KeyDown) {
    KeyPressedEventHandler();
    }
    }
     
    function KeyPressedEventHandler() {
    if(timer<=0){
   		if (curKey < 10) {
						if (Input.GetKey (curKey.ToString())) {
								money.GoldPickUp(1);
								computer.text = "You earned money! :)";
								timer = 1;
						}
						else{
							computer.text = "You pressed the wrong button! :(";
							timer = 3;
							}
				}
		}	
    }