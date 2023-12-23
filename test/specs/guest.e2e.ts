import GuestPage from "../pageobjects/guest.page.ts";

describe("Guest page", () => {
  it("Search data", async () => {
    await GuestPage.open();

    await GuestPage.search("Rick");

    await expect(browser).toHaveUrl("http://localhost:5173/search?name=Rick");
  });
});
