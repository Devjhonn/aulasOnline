const Database = require('./db');
const createProffy = require('./creatProffy')


Database.then(async (db) => {
    proffyValue = {
      name: 'F.Society',
      avatar:'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/6882831431553666420-512.png',
      whatsapp:'9854152',
      bio:'Entusiasta das melhores tecnologias de invasão avançada.<br><br>Apaixonado por testar sua segurança e por mudar a vida das empresas através de experiências. Mais de 200.000 empresas já passaram por uma das minhas invasões.', 

    }

    classValue = {
        subject: 1,
        cost:'20',
        //proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class id vira pelo banco de dados, apos inserirmos a classes
        {
            weekday:1,
            time_from: 720,
            time_to: 1220 
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1231 
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos
    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // trazer juntos os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha, por ex: é das 8h -18hrs
    //o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = '1'
        AND class_schedule.weekday = '0'
        AND class_schedule.time_from <= '1300'
        AND class_schedule.time_to > '1300'
    
    `)
       // console.log(selectClassesSchedules)
})