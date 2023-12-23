import CharactersPage from "../pageobjects/characters.page.ts";

describe("Character page", () => {
  it("load data", async () => {
    await CharactersPage.loadData();
  });
});
