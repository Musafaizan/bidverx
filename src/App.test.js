import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the BidVerx landing page", () => {
  render(<App />);
  const heading = screen.getAllByText(/Bid Smarter/i)[0];
  expect(heading).toBeInTheDocument();
});