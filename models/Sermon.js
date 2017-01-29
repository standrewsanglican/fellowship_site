var keystone = require('keystone');
var Types = keystone.Field.Types;
var moment = require('moment');

var Sermon = new keystone.List('Sermon')

Sermon.add({
    title: {type: Types.Text},
    preacher: {type: Types.Name },
    given_on: {type: Types.Text},
    text: {type: Types.Text},
    transcript: {type: Types.Text},
    recording: {type: Types.Text},
    date: {type: Types.Date},    
})

//Make sure date is normal
Sermon.schema.pre('save', function(next){
    let new_date
    console.log(new_date = moment(this.given_on, "D MMM YYYY").toDate());
    this.date = new_date
    if (!moment(this.date).isValid()){
        this.date = moment(this.given_on, "D MMM YYYY").toDate()
        console.log(this);
        if (!moment(this.date).isValid()){
            console.error(this.given_on)
        } 

    } else {
        next();
    }
})

Sermon.register();
