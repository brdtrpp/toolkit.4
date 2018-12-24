// Running code only when the template has been created, BUT NOT RENDERED YET!!
Template.process.onCreated = function() {


};

// Running code only when the template has been fully rendered
Template.process.onRendered = function() {

};

// Adding events per template
Template.process.events({

});

// Adding events per template
Template.process.helpers({
  temp(){
    console.log(this);
  }
});
