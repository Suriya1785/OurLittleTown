/*Description: window onload Init script to assign function on button for Tour Explorer 
 *Author: HartCode Programmer
 *Date:08/02/2019
 */

/* This function is called during window onload of the Tour Explorer page and 
 * assign function to the button
 * No parameters
 * Calls: None
 */
"Use Strict";
window.onload = function() {
    const selectCategoryField = document.getElementById("selectCategory");
    let tourListField = document.getElementById("tourList");

    selectCategoryField.onchange = function() {
        let selectCategory = selectCategoryField.options[selectCategoryField.selectedIndex].value;
        // define the array with key tourist inputs
        listOfTouristSpot = [
            { category: "Sightseeing", title: "Kuberan Falls", description: "Spend an afternoon searching for our invisible falls. Pan for gold while you look", cost: 29.99 },
            { category: "Sightseeing", title: "Kumbeshwar temple", description: "Spend an evening by praying lord shiva", cost: 10.99 },
            { category: "Sightseeing", title: "Nageshwar temple", description: "Spend an night during Navarathri by praying lord shiva", cost: 10.99 },
            { category: "Adventure", title: "River Madhi", description: "Spend 2 hours by boat and enjoy the rid", cost: 5.99 },
            { category: "Adventure", title: "River Bhavani", description: "Spend an hour and eat roadside fish fry, amazing feeling", cost: 9.99 },
            { category: "Adventure", title: "Mount Rockfort", description: "Climb and make a workout for being healthy", cost: 3.99 },
            { category: "Museums/Galleries", title: "Amazing cartwheel", description: "Visit our great science museum with the list of cart wheels and different sizes from ancient history.", cost: 20.99 },
            { category: "Museums/Galleries", title: "Chola temple", description: "Visit our golden temple and look at sculptures from 1800.", cost: 15.99 },
        ]
        tourListField.innerHTML = " ";
        let tourListConcat = " ";

        // loop through the object array and create the output for matching selection and publish it into p tag.

        for (i = 0; i < listOfTouristSpot.length; i++) {
            if (listOfTouristSpot[i].category == selectCategory) {
                tourListConcat = tourListConcat + ("Title: " + listOfTouristSpot[i].title + "<br>" + " Description:" + listOfTouristSpot[i].description + "<br>" + " Cost: " + listOfTouristSpot[i].cost + "<br>");
            }
        }
        tourListField.innerHTML = tourListConcat;
    }
};