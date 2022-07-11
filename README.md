# c6-weather-dashboard

## Application Link
https://patrickthegu.github.io/c6-weather-dashboard/

## Description
The weather dashboard uses the openweathermap one call API to retrieve data for current weather conditions and a 5 day forecast based on a search input of a City. Temperature, wind, humidity and UV Index is shown as well as weather emoji's.

## Screenshot
![image](https://user-images.githubusercontent.com/104100016/178249416-6765595b-4917-46a9-913a-2a6ce0a2f68b.png)

## User Story
People who want to check the weather in cities around the world to plan travels accordingly


## Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Usage
User enters search input of city that they want weather info for.
Weather information is then retrieved and displayed on the page.

(Search history in local storage is incomplete)
