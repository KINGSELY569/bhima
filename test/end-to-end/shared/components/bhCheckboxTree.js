/* global element, by */

const FU = require('../FormUtils');

module.exports = {
  selector : '[data-bh-checkbox-tree]',
  toggle : async (labels, id) => {
    const locator = (id) ? by.id(id) : by.css(this.selector);
    const tree = element(locator);
    await FU.series(labels, async (label) => tree.$(`[data-label="${label}"]`).click());
  },

  toggleAllCheckboxes : (id) => {
    const locator = (id) ? by.id(id) : by.css(this.selector);
    const tree = element(locator);
    return tree.$('[data-root-node]').click();
  },
};
