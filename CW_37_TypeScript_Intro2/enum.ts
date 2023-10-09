// enum Active {
//     CHANGE_PASSWORD, EDIT_PROFILE, DEFAULT
// }

// let active1 = Active.CHANGE_PASSWORD;
// console.log(active1);
// active1 = Active.DEFAULT;
// console.log(active1);
// const active2 = Active[1];
// console.log(active2);


enum Active {
    CHANGE_PASSWORD = 'changePassword', 
    EDIT_PROFILE = 'editProfile', 
    DEFAULT = 'default'
}
