//FlatList element turns an array into a list of elements
    //this is the same as mapping through a list on regular React, but it's better to use FlatList for R-native
    //FlatList must take in two props, "data" and "renderItem"

//props - system to pass data from parent to a child
//state - system to track a piece of data that will change over time. if data changes app will rerender

//generally state variables are created in the most parent component that needs to read or change a state value
//if a child needs to read a state value, the parent can pass it down as a prop

//reducer - function that manages changes to an object
//gets called with two objects
//argument1: obj that hass all of our state in
//argument 2: obj that describes the update we want to make
//look at argument 2 and use it to decide how to change argument 1
//IMPORTANT *we never change argument 1 directly *we must always return a value to be used as argument 1

//action objs have a:
//type - string that describes the exact change operation we want to make
//payload - some data that is critical to the change operation
//ex. {type: 'change_red', payload; 15} what we want to change and by how much

//TextInput allows user to input text and that component is all that's required
//flex: 1 >> tells the container to use as much space as it possibly can ex. the entire row
//better to use align-self for certain objects to avoid making nearby objects shrink in other ways
//marginHorizontal is a good hack

//useEffect is good to have functions run once and stop instead of infidently looping ex. search bar
//hooks add more functionality to a component we create

//keyExtractor = Provides a unique key for each item in the list / React uses these keys to efficiently
    // update the UI when the list data changes. Without a unique key, React Native might unnecessarily re-render items,
    // leading to performance issues.
//renderItem = Specifies how each item in the list should be rendered.
//FlatList = a high-performance component used to render lists of data. It is optimized for handling large sets of data by only
    // rendering the visible items (and a few items just outside the viewport) instead of rendering the entire list at once.
    // This makes it memory-efficient and ideal for mobile applications.
//adding horizontal to the FlatList will allow for horizontal scrolling
//ScrollView automatically enables vitical scrolling if it detects the screen doesn't fit everything
//TouchableOpacity wraps other components so they can respond to touch interactions
//withNavigation is a special feature that allows you to skip going through parent props to access navigation

//useContext > look at the context of a different parent component and give us the value of that prop

//[...blogPosts] << means take all current posts and add them to the new one in the array

//useReducer hook >> use switch statements with action objects

//dispatch an action >> is an object that says how we want to change our current variable
    //const reducer = (state, action) >> action is the dispatch object

//filter is good to delete something as it finds a matching id then return all that don't match

//pop (found with navigation) = pops off the current view off of a stack of current views, in other words,
    //returns the user to the previous screen they were at

//() => is a callback function

//didFocus = whenever "this" component becomes the main focus(primary screen on device), do this callback function

//listener is for when we want to clean up after ourselves