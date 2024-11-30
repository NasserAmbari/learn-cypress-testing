const DirectoryPage = require('../pages/directoryPage');
const LoginPage = require('../pages/loginPage');
const USERNAME = "Admin";
const PASSWORD = "admin123";

const NAME_EMPLOYEE = "Peter";
const JOB_TITLE = "Chief Financial Officer";
const LOCATION = "New York Sales Office";

describe('Directory Tests', () => {
    const directoryPage = new DirectoryPage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.loginToDashboard(USERNAME, PASSWORD);
        directoryPage.visit(); 
    });
    
    it('should search employee', () => {
        directoryPage.enterEmployeeName(NAME_EMPLOYEE);
        directoryPage.selectJobTitle(JOB_TITLE);
        directoryPage.selectLocation(LOCATION);
        directoryPage.clickSearch();
        directoryPage.validateSearchFromFetch(NAME_EMPLOYEE, JOB_TITLE, LOCATION);
    });

    it('should search employee without Name Employee', () => {
        directoryPage.selectJobTitle(JOB_TITLE);
        directoryPage.selectLocation(LOCATION);
        directoryPage.clickSearch();
        directoryPage.validateSearchFromFetch("", JOB_TITLE, LOCATION);
    });

    it('should search employee without Job Title', () => {
        directoryPage.selectJobTitle(JOB_TITLE);
        directoryPage.selectLocation(LOCATION);
        directoryPage.clickSearch();
        directoryPage.validateSearchFromFetch(NAME_EMPLOYEE, "", LOCATION);
    });

    it('should search employee without Location', () => {
        directoryPage.selectJobTitle(JOB_TITLE);
        directoryPage.selectLocation(LOCATION);
        directoryPage.clickSearch();
        directoryPage.validateSearchFromFetch(NAME_EMPLOYEE, JOB_TITLE, "");
    });
});
