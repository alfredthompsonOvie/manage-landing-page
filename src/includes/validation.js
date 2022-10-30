import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule, configure } from "vee-validate";

import { required, email } from "@vee-validate/rules";


export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("email", email);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: "This field is required",
          email: "Please insert a valid email",
        }
        
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`;
        
        return message
      }
    })
  }
}