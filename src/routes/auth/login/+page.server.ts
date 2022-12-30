import { signIn } from "$lib/services/auth_service";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ( {request}:any ) => {
        const form = await request.formData();

        let name_data;
        let email_data;
        let token_data;
        
        try {

            const response = await signIn({
                email: form.get('email'), 
                password: form.get('password')
            });
    
            const { user } = await response.json();

            if(response.ok) {
                console.log(user);
                name_data = user.name;
                email_data = user.email;
                token_data = user.token;
            }

        } catch (e) {
            console.log(e);
            return { success: false };
        }
     
        return { success: true, user: {
            name: name_data,
            email: email_data,
            token: token_data
        } }; 
    }
};