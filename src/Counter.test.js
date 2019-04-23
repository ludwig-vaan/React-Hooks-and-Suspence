import React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "react-testing-library";

afterEach(() => {   
  window.localStorage.removeItem('count');
})

test("increment", () => {
    const { container } = render(<Counter />);
    const button = container.firstChild;
    expect(button.textContent).toBe("0");
    fireEvent.click(button);
    expect(button.textContent).toBe("1");
});


test('reads and writes to localStorage', () => { 
  window.localStorage.setItem("count", 4);
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe("4");
  fireEvent.click(button);
  expect(button.textContent).toBe("5");
  expect(window.localStorage.getItem("count")).toBe('5')
})
