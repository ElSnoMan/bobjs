const { I } = inject();
// Add in your custom step files

Given('I want to see what the opposite of puppies is', () => {
  I.amOnPage('https://google.com');
});

When('I search for {string} in Google', () => {
  I.fillField('[name="q"]', 'opposite of puppies');
  I.pressKey('Enter');
});

Then('I should see puppies', () => {
  I.seeInTitle('opposite of puppies');
});
