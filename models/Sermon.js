var keystone = require('keystone');
var Types = keystone.Field.Types;

var Sermon = new keystone.List('Sermon')

Sermon.add({
    preacher: {type: Types.Name },
    date: {type: Types.Date},
    text: {type: Types.Text},
    transcript: {type: Types.Text}
})