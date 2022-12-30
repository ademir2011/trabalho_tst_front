import { signUp } from "$lib/services/auth_service";

 /** @type {import('./$types').Actions} */
 export const actions = {
    default: async ( {request}:any ) => {
        const form = await request.formData();

        try {

            const response = await signUp({
                name: form.get('name'), 
                email: form.get('email'), 
                password: form.get('password')
            });
    
            console.log(response.body);
        } catch (e) {
            return { success: false };
        }
    
        return { success: true };
    }
};


