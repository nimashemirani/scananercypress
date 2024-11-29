describe('Navbar Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');  // آدرس سایت شما
    });

    it('باید فروشگاه گلابی رو نمایش بده', () => {
        // بررسی نمایش عنوان
        cy.get('h1').should('contain.text', 'فروشگاه گلابی');
    });
});
