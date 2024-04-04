 import UiButton from './UiButton';
 

 export default {
   title : 'Ui-Kit/UiButton',
   component: UiButton,
   tags: ['autodocs'],
 };


 const Template = (args) => <UiButton {...args} />

 const props = {
  text: 'Hello', 
  onClick: ()=> {console.log('%conClick trigger ' , 'color: yellow; background: grey; font-size: x-large')},
   disabled: false,
   theme : "light",
   classes: '',
 }

 export const Light = Template.bind({})

 Light.args = {
    ...props,
    theme: 'light'
 }

 export const Dark = Template.bind({})

 Dark.args = {
    ...props,
    theme: 'dark'
 }

 export const Disables = Template.bind({})

 Disables.args = {
    ...props,
    disabled: true,
 }