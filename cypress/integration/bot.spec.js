describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 29; i++) {

            cy.visit('https://soundcloud.com/dilivius-lenni/dilivius-lenni-27-jahre-distillery-leipzig-19102019-24h-wohnzimmer-dj-set', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.facebook.com',
                }
            })

            cy.wait(60000 + Math.random() * 2000)
        }
    })
})
