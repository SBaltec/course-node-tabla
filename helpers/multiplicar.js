const fs = require('fs')
const colors  = require('colors');

const crearArchivo = (base = 5 )=> {

return new Promise((resolve, reject)=> 
{   let  salida='';
 

   console.log('==========================');
console.log(`========Tabla del ${colors.blue(base)}=========`);
console.log('==========================');

for(let i=0; i<=10; i++)
{
   salida+=` ${base} x ${i} = ${base*i} \n`;
}
//  fs.writeFile(` tabla-${base}.txt `, salida, (err)=>{
//     if (err) throw err;
//     console.log('archivo creado');
//  })

 fs.writeFileSync(` tabla-${base}.txt `, salida)
 
 
 resolve(`tabla-${base}.txt`)
reject(`Error ${err}`)
    
})

}

const crearArchivo2 = async(base = 5, listar = false, hasta = 10 )=> {

   try 
   {  
   let  salida='';
   
   for(let i=0; i<=hasta; i++)
   {
      salida+=` ${base} x ${i} = ${base*i} \n`;
   }

   if(listar){
      console.log(`==========================\n
      ========Tabla del`.bgCyan,colors.blue(base),`=========\n
      ========================== \n`.bgCyan)
    console.log(salida);
   }
    fs.writeFileSync(`./salida/tabla-${base}-2.txt `, salida)
    
    
    return(`tabla-${base}.txt`)
       
   }
   catch(error){
      throw error;
   }
   
   }

module.exports={
   crearArchivo, 
   crearArchivo2
}