const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

//tests currently not functioning when server is running, attempting to write out tests anyways

test("show all Robots list", async () => {
    let roboListBtn = await driver.findElement(By.id("see-all"));
    await roboListBtn.click();
    let botContainer = await driver.findElement(By.id("all-bots"));
    expect (botContainer.isDisplayed()).toBe(true)
    await driver.sleep(4000)

})

test("draws robots", async () => {
    let drawRoboList = await driver.findElement(By.id("choices"));
    
})