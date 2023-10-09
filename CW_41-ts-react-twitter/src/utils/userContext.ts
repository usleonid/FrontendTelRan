import React from "react";

export const UserContext = React.createContext({
    name: '',
    avatar: '',
    followers: 0,
    following: 0,
    changeName: (name: string) => {},
    changeAvatar: (url: string) => {},
    changeFollowers: (sum: number) => {},
    changeFollowing: (sum: number) => {}
});