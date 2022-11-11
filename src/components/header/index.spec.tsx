import { render } from "@test";

import { Header } from "./index";
import * as auth0 from "@auth0/nextjs-auth0";

describe("Header component testing with testing-library", () => {
    jest.spyOn(auth0, "useUser").mockReturnValue({
        user: {},
        isLoading: false,
        checkSession: function (): Promise<void> {
            throw new Error("Function not implemented.");
        },
    });
    const { getByTestId } = render(<Header />);

    const container = getByTestId("container");

    it("renders without crashing", () => {
        expect(container.parentElement).toBeTruthy();
    });

    it("renders successfuly next.js logo", () => {
        expect(container.firstChild).toBeDefined();
    });
});
