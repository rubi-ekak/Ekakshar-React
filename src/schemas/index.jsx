import * as Yup from "yup";

export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    // this is use for making validity in phone number
    phone_number:Yup.string().matches(new RegExp('[0-9]{7}'),"please enter correct phone number").max(11,"please enter atmost 10 digit").required("please enter your number")
})