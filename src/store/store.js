import {defineStore} from 'pinia'

import {ref} from 'vue'

export const useAdminStore = defineStore("admin",()=>{
    let loading = ref(false)
    const inicio = async (email,password) =>{
        try {
            loading.value=true
            

        return datos
        }
        catch (error){
            loading.value=true
            throw error;
        }finally{
            loading.value=false
        }
    }
    
    return{
        inicio, loading
    }
})
