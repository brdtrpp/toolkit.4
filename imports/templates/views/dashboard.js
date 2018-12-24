// This file is an example of how to perform different
// tasks per template at different moments


// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.dashboard.onCreated = function() {

    // Code for the singleview template
};

// Running code only when the template has been fully rendered
Template.dashboard.onRendered = function() {

    // Code for the singleview template

};

// Adding events per template
Template.dashboard.events({

    'click .customevent': function(event, template) {

        event.currentTarget.innerHTML = '<strong>Hello from custom event!</strong>';

    }
});
