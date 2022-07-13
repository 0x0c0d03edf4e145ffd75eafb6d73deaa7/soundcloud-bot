describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 26; i++) {
            cy.visit('https://soundcloud.com/mariemontexier/marie-montexier-turmbuhne-at-fusion-festival-2022', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.facebook.com',
                }
            })
            cy.wait(60000 + Math.random() * 2000)
        }
    })
})
