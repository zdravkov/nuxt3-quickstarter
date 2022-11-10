<template>
    <form-element :style="{ maxWidth: '650px' }">
          <fieldset class="k-form-fieldset">
              <field
                  :name="'username'"
                  :label="'User Name'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <forminput
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></forminput>
                </template>
              </field>
                 <field
                  :name="'champion'"
                  :label="'Champion'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <forminput
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></forminput>
                </template>
              </field>
              <field
                  :name="'goalscorer'"
                  :label="'Top goalscorer'"
                  :component="'myTemplate'"
                >
                <template v-slot:myTemplate="{props}">
                    <forminput
                      v-bind="props"
                      @change="props.onChange"
                      @blur="props.onBlur"
                      @focus="props.onFocus"
                    ></forminput>
                </template>
              </field>
            <div class="k-form-buttons">
              <kbutton
                :theme-color="'primary'"
                :type="'submit'"
                :disabled="!kendoForm.allowSubmit"
              >
                Submit
              </kbutton>
              <kbutton @click="signOut" 
              >
                Sign Out
              </kbutton>
            </div>
          </fieldset>
        </form-element>
</template>
<script>
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import { Button } from "@progress/kendo-vue-buttons";

export default {
    components: {
      field: Field,
      'form-element': FormElement,
      forminput: FormInput,
      kbutton: Button
    },
    inject: {
      kendoForm: { default: {} },  
    },
    methods: {
        async signOut() {
            const supabase = useSupabaseClient()
            try {
            // loading.value = true
                let { error } = await supabase.auth.signOut()
                if (error) throw error
            } catch (error) {
                alert(error.message)
            } finally {
            //  loading.value = false
            }
        }
    }
};

</script>