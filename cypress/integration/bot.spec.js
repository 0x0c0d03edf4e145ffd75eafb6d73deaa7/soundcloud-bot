// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 10; i++) {
            cy.visit('https://soundcloud.com/julianewolfmusic/juliane-wolf-sos-uground-kulturkosmos-larz-02042022', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.twitter.com',
                }
            })

            cy.wait(58000 + Math.random() * 4000)
        }
    })
})
