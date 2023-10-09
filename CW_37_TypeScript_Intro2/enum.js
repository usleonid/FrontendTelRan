var Active;
(function (Active) {
    Active[Active["CHANGE_PASSWORD"] = 0] = "CHANGE_PASSWORD";
    Active[Active["EDIT_PROFILE"] = 1] = "EDIT_PROFILE";
    Active[Active["DEFAULT"] = 2] = "DEFAULT";
})(Active || (Active = {}));
var active1 = Active.CHANGE_PASSWORD;
console.log(active1);
active1 = Active.DEFAULT;
console.log(active1);
var active2 = Active[1];
console.log(active2);
