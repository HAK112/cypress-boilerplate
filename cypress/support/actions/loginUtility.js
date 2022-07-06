import input from "../../utilities/input";
import loginPage from "../pages/loginPage.json"
import click from "../../utilities/click";
class LoginUtility {

   enterUsername(email){
       input.typeTextBySelector(loginPage.login_email,email);
   }

    enterPassword(password){
        input.typeTextBySelector(loginPage.login_password,password);
    }

    clickLoginButton(){
        click.clickButton(loginPage.login_button);
    }
}

export default new LoginUtility();
