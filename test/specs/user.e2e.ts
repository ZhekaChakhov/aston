import UserPage from "../pageobjects/user.page.ts";

describe("User page", () => {
  it("Sign up", async () => {
    await UserPage.open();

    await UserPage.signup();

    await expect(UserPage.favorites).toBeExisting();
  });
});
