import db from '../config/Firebase'

export const pozyskajDane = async () =>{
    try{
        
        // const imie = "Rychu"
        // const dane = {
        //     name:imie,
        //     wiek:1
        // }
        // await db.collection('Test').doc(imie).set(dane)

       

        const dane = await db.collection('Test').doc('Manoe').get()

        const pobraneDane = dane.data()
        alert(pobraneDane.name + " " + pobraneDane.wiek)
        

        
    }
    catch(e){
        alert(e)
    }
}

export const getUsers = async () => {
    try{
        let arrayUz = []
        const dane = await db.collection("Students").orderBy('wiek', 'desc').get()
        dane.forEach(student => {
            arrayUz.push(student.data())
        });

        return arrayUz

    }catch(error){
        alert(error)
    }
}
export const addUserToDB = async (array) => {
    try{
         db.collection("Students").doc(array.imie).set(array)
    }catch(e){
        alert(e)
    }
}