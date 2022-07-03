import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import axios from "axios";
import GetMessage from "./GetMessage";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders 'Hello World!' message", async () => {
  const fakeMessage = {
    message: "Hello World!"
  };
  jest.spyOn(axios, "get").mockImplementation(() =>
    Promise.resolve({
      data: fakeMessage
    })
  );

  await act(async () => {
    render(<GetMessage />, container);
  });

  expect(container.querySelector("[data-testid='get-message']").textContent).toEqual("Hello World!");

  axios.get.mockRestore();
});
