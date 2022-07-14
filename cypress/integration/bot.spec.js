describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 1; i++) {
            cy.visit('https://soundcloud.com/mariemontexier/marie-montexier-turmbuhne-at-fusion-festival-2022', {
            //cy.visit('https://soundcloud.com/andreas-henneberg/andreas-henneberg-at-fusion-festival-2022-turmbuhne', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.facebook.com',
                }
            });
            cy.wait(60000 * 8 + Math.random() * 6 * 60000);
        }
    })
})
