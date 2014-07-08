@CustomEditor(NPC_firstPerson)
class E_NPC_firstPerson extends Editor {
	override function OnInspectorGUI () {
		GUILayout.Label ("");
		GUILayout.Label ("1-Set Player to the player object.");
		GUILayout.Label ("2-Set Talk Text to the GUIText TalkText");
		GUILayout.Label ("3-Set the size value for Textures and");
		GUILayout.Label ("   Talk Lines to the same value.");
		GUILayout.Label ("  -This value is represents how many");
		GUILayout.Label ("   pages of speech the conversation has.");
		GUILayout.Label ("  -Each of the elements represents a");
		GUILayout.Label ("   page of speech.");
		GUILayout.Label ("");
		DrawDefaultInspector ();
		target.textScrollSpeed = EditorGUILayout.IntSlider ("Text Scroll Speed", target.textScrollSpeed, 1, 20);
		ProgressBar (target.textScrollSpeed / 20.0, " <--Faster     Text Scroll Speed     Slower--> ");
		GUILayout.Label ("");
	}
	function ProgressBar (value : float, label : String) {

		var rect : Rect = GUILayoutUtility.GetRect (18, 18, "TextField");
		EditorGUI.ProgressBar (rect, value, label);
		EditorGUILayout.Space ();
	}
}