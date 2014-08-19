	// Interpolate light color between two colors back and forth
	var duration : float = 1.0;
	var color0 : Color = Color.red;
	var color1 : Color = Color.blue;
	
	function Update () {
		// set light color
		var t : float = Mathf.PingPong (Time.time, duration) / duration;
		light.color = Color.Lerp (color0, color1, t);
	}