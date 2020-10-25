import React from "react";
import { render } from "react-dom";
import io from "socket.io-client";
import Page from "./lib/page";

const urlSearchParams = new URLSearchParams(window.location.search);
const spotifyID = urlSearchParams.get("spotifyID");

// https://www.npmjs.com/package/socket.io-client
// const backendURL = "http://0.0.0.0";
const backendURL = "https://nitrus.azurewebsites.net";

let access_token = undefined;
let room = undefined;

const socket = io(backendURL);
socket.on("connect", () => {
  socket.emit("init", spotifyID);
});

socket.on("redirectToLogin", () => {
  window.location.replace(`${backendURL}/login`);
});

socket.on("setRoom", (simpleRoom) => {
  room = simpleRoom;
  console.log("new room", room);
  render(
    <Page room={room} access_token={access_token} />,
    document.getElementById("root")
  );
});

socket.on("setAccessToken", (accessToken) => {
  access_token = accessToken;
  console.log("new access token", access_token);
  render(
    <Page room={room} access_token={access_token} />,
    document.getElementById("root")
  );
});

// render(<Page />, document.getElementById("root"));
