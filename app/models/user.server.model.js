var mongoose                    =   require('mongoose');
var Schema                      =   mongoose.Schema;

var UserSchema                  =   new Schema({
    firstName:String,
    lastName:String,
    email:String,
    userName:String,
    password:String,
    created:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);