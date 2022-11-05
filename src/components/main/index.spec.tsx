import { render } from "@test";

import { Main } from "./index";
import * as auth0 from "@auth0/nextjs-auth0";

describe("Main component testing with testing-library", () => {
    jest.spyOn(auth0, "useUser").mockReturnValue({
        user: {},
        isLoading: false,
        checkSession: function (): Promise<void> {
            throw new Error("Function not implemented.");
        },
    });
    it("renders without crashing", () => {
        const component = render(<Main />);

        expect(component).toBeTruthy();
    });

    it("renders texts successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Technical Test for Nimble");
    });

    it("renders button successfuly", () => {
        const { getByText } = render(<Main />);

        getByText("Docs");
    });
});
