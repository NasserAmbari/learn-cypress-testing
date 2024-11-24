describe('Login Page - OrangeHRM Demo', () => {
    const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
  
    beforeEach(() => {
      cy.visit(baseUrl); // Membuka halaman login sebelum setiap test case
    });
  
    it('should display the login page correctly', () => {
      // Verifikasi elemen halaman
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible').and('contain', 'Login');
    });
  
    it('should not login with invalid credentials', () => {
      // Masukkan kredensial salah
      cy.get('input[name="username"]').type('invalidUser');
      cy.get('input[name="password"]').type('invalidPass');
      cy.get('button[type="submit"]').click();
  
      // Verifikasi pesan error
      cy.get('.oxd-alert-content').should('be.visible').and('contain', 'Invalid credentials');
    });
  
    it('should login successfully with valid credentials', () => {
      // Masukkan kredensial benar
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      // Verifikasi navigasi ke dashboard
      cy.url().should('include', '/dashboard');
      cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
    });
  
    it('should show validation errors when fields are empty', () => {
      // Klik tombol login tanpa mengisi field
      cy.get('button[type="submit"]').click();
  
      // Verifikasi pesan validasi
      cy.get('.oxd-input-group__message')
        .should('have.length', 2) // 2 pesan validasi (username & password)
        .and('contain', 'Required');
    });

    it('should navigate to reset password page when clicked on "Forgot your password?"', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
        // Klik link "Forgot your password?"
        cy.contains('Forgot your password?').click();
      
        // Verifikasi URL mengarah ke halaman reset password
        cy.url().should('include', '/auth/requestPasswordReset');
    });

    it('should display social media login buttons and they should be clickable', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('be.visible').click();
        cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').should('be.visible').click();
        cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').should('be.visible').click();
        cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').should('be.visible').click();
    });    
      
  });
  