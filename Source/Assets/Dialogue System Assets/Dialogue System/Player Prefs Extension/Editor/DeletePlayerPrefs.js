// Adds a dropdown menu button to the Unity Toolbar named Tools/Delete All Player Prefs
@MenuItem ("Tools/Delete All Player Prefs")
// Creates a static function called DeleteAllPlayerPrefs() for the button
static function DeleteAllPlayerPrefs() {
	// Actual code to delete PlayerPrefs, then send a debug notification to the console
	PlayerPrefs.DeleteAll();
	Debug.Log ("Deleted PlayerPrefs Data");
}