
const app= Vue.createApp({
    data(){
        return {
            usuarios:[],
                       
        }
    },
    methods: {
        agregarUsuario() {
            
            var x=false;
            var usuario=document.getElementById("id").value;
           
            
            for(var i =0;i<=this.usuarios.length;i++)
            {
                if(usuario===this.usuarios[i])
                {
                    x=true
                }                    
            } 
            if(x!=true)
            {
                this.usuarios.push (usuario)
            }
            
            console.log(this.usuarios)
        }
      }
    
}) //creando App de vue