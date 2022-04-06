// untitled.spec.js created with Cypress

describe('My First Test', () => {
    it('Does not do much!', () => {
        for (let i = 0; i <= 24; i++) {
            cy.visit('https://soundcloud.com/julianewolfmusic/juliane-wolf-sos-uground-kulturkosmos-larz-02042022', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.instagram.com',
                }
            })

            cy.wait(38000 + Math.random() * 4000)
            
            cy.visit('https://soundcloud.com/julianewolfmusic/juliane-wolf-dj-set-wilde-mohre-festival-2021-firletanz-wildschreck-17-07-2021?in=julianewolfmusic/sets/dj-sets', {
                headers: {
                    'user-agent': 'Opera/7.0 ' + Math.random(),
                    'referrer': 'https://www.instagram.com',
                }
            })
            
            cy.wait(38000 + Math.random() * 4000)
        }
    })
})
