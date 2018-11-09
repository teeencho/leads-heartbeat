
Feature('Referral link');
let assert = require('assert');

Scenario('Test referral link', (I) => {

  //I.amOnPage('/retail/hunting-valley-doodads.html');
  //I.see('Hunting Valley DooDads');
  I.amOnPage('/pets/canidae.html');
  I.see('Canidae Pet Foods');
  within('.prf-cta__form-link-wrappr', () => {
    I.click({css: '.leadgen_link'})
  });

  I.wait(5);
  let tabs = I.grabNumberOfOpenTabs();
  assert(tabs, 2);
  I.switchToNextTab(1);
  I.seeInTitle('Sample program 2.0 Consumer Affairs | CANIDAE®');
});
