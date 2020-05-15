The Flow of Data in this example is ->

We have 3 distinct components -> Parents & 2 child (first-child-component & second-child-component)

Parent has a Property - subjectsIWantToLearn which is a list of Subjects & becomes the input for the secondChildComponent

Also, We have the FirstChild which creates a output which pushes the newly added subject into the parents existing list of subjects. So when the button is pressed the value from the FirstChild is emmited out the parent as an Output & once the parent is updated the SecondChild pulls the value as input.