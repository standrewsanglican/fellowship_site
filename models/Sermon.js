var keystone = require('keystone');
var Types = keystone.Field.Types;
var moment = require('moment');

var Sermon = new keystone.List('Sermon', { defaultSort: "-date"})

Sermon.add({
    title: {type: Types.Text, initial: true},
    preacher: {type: Types.Name, initial: true },
    given_on: {type: Types.Text, initial: true},
    text: {type: Types.Text, initial: true},
    transcript: {type: Types.Text, initial: true},
    recording: {type: Types.Text, initial: true},
    date: {type: Types.Date, initial: true},    
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
Sermon.schema.virtual('text.urlEncoded').get(function () {
    return encodeURI(this.text);
})
Sermon.defaultColumns = 'title, preacher, date'
Sermon.register();
