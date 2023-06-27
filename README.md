# leadsTrackerLead Tracker Extension
This project is a Chrome extension called "Lead Tracker" that allows you to save and manage website URLs as leads. It provides a user interface where you can enter URLs, save them as leads, open leads in new tabs, delete all leads, and view a list of saved leads.

HTML Structure
The index.html file contains the following structure:
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- External CSS -->
    <link href="styles.css" rel="stylesheet">

    <!-- Title -->
    <title>Lead Tracker</title>
</head>
<body>
    <!-- Input field and buttons -->
    <input id="input-el" type="text">
    <button id="input-btn">SAVE INPUT</button>
    <button id="tab-btn">SAVE TAB</button>
    <button id="delete-btn">DELETE ALL</button>

    <!-- List of saved leads -->
    <ul id="ul-el"></ul>

    <!-- External JavaScript -->
    <script src="index.js"></script>
</body>
</html>

JavaScript Functionality
The index.js file contains JavaScript code that adds functionality to the Lead Tracker extension. It performs the following tasks:

Retrieves saved leads from the local storage and renders them on the page.
Saves user input as a lead and updates the local storage.
Deletes all leads and clears the local storage.
Saves the URL of the current tab as a lead and updates the local storage.

CSS Styling
The styles.css file contains CSS rules that define the appearance and layout of the Lead Tracker extension. It includes styling for the following elements:

Body: Sets the overall styling for the extension's body.
Input field: Defines the styling for the input field where users can enter URLs.
Buttons: Defines the styling for the input buttons, including their hover effects.
List items: Defines the styling for the individual lead items in the list.
Please note that this README file is specific to the Lead Tracker extension you have created. If you have any further questions or need assistance with any specific aspect of the extension, please let me know.
