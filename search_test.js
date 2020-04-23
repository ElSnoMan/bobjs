Feature('search');

Scenario('Search for opposite of puppies', (I) => {
    I.amOnPage('https://google.com');
    I.fillField('[name="q"]', 'opposite of puppies');
    I.pressKey('Enter');
    I.seeInTitle('opposite of puppies');
    I.click('Images')
    I.wait(5);
});
