# Weathered

This web app accepts city/state combination for anywhere in the US and displays an hour-by-hour weather forecast for the next seven days. It was originally written in vanilla javascript, but it has been re-made with the React framework. This has led to a vast improvement in the app's quality. It is still a very young app and needs a lot of further development, which is discussed below.

## Built with React

This popular javascript framework was chosen because of its ability to create small, reusable components. Because of this, there is only one Day component and one Hour component and the app is able to render as many instances of those components as is necessary. It also allows you to only render components under certain conditions. There is a Loading component which is only rendered while the project is being loaded. Currently the loading component is not really necesary because all it does is display the word "loading", but in the future, I plan to make it a bit more entertaining.

## Features

### Search by city and state

This app currently only returns weather for the united states. This decision was made to limit the number of possible inputs. As I continue to develop this app, I will work on expanding the search options.

### APIs used

This app makes use of two APIs:

#### geocode.maps.co

This api takes the city and state and returns the coodinates in latitude and longitude.

#### api.weather.gov

This api takes the latitude and longitude and returns a variety of options for results. The one I have used for this app is the hour-by-hour forecast, but there is room for the app to make use of these other options in the future.

### API response sorting

The weather.gov api returns back a lot of data which is unnecessary for this project. One of the components of the app cleans this up and returns only the required data in a format that is usable. The component then groups the responses by date and passess each dated group into its own Day component, which renders the date and a series of Hour components.

## Further Development

Most of the components in this app need more work to be the best they can be.

### changes to the Hour component

The Hour component will be made to display an icon instead of showing the weather condition in text. The text version will still display when the icon can't or when using a screen reader.

### Making use of more result types and the React Router

The app currently only uses the hourly data provided by weather.gov, but there are many more options. These other options will be displayed in a header, allowing the user to toggle between different types of results. This will be enabled by the React Router.

### More effective object sorting

There is an inefficiency in the app when it sorts the json response data. it creates several unecessary arrays. My solution to this is just to remove the arrays, but in the future I will fix it so that it does not create the unecessary arrays in the first place.

### Known issue: crashing on invalid input

This app does not validate user input and so if the app is given a city/state combination for which there are no coordinates, the app will crash. This issue is the reason why you can only select from the 50 US states, but both of these bugs will be corrected in the future.

### Better Loading component

Currently, the Loading component displays the word "loading" and that is all. In the near future I plan to change this so that it cycles through "loading" with no period, then, one, two, three and back to none. Eventually, I plant to add some loading animation.

### Styling improvements

The app needs a new color scheme and a few other design features like dates that stick to the top of the window, expandable and collapsable lists, times which all line up with one another. Almost all my effort on this project has been to make it functional, and the styling will come in the future.

