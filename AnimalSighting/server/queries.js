const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'animalsightings',
  password: 'password',
  port: 5432,
})
const getSpecies = (request, response) => {
  pool.query('SELECT * FROM endangered ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const getEventsById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM events WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

const addToEndangered = (request, response) => {
  
  const { commonname, conservationstatus } = request.body; //, event_date, description
  console.log(request.body)

  pool.query('INSERT INTO endangered (commonname, conservationstatus) VALUES ($1, $2) RETURNING *', [commonname, conservationstatus], (error, results) => {//, event_date, description//, event_date, description
    if (error) {
      throw error
    }
    // response.status(201).send(`Event added with ID: ${results.insertId}`)
    response.status(200).json(results.rows)
  })
}

// const deleteEvent = (request, response) => {
//   const id = (request.params.id)
//   console.log(request.params.id)

//   pool.query('DELETE FROM events WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//     //response.send + request.query("Id")//.send(`User deleted with ID: ${id}`)
//   })
// }
const getSightings = (request, response) => {
  pool.query('SELECT * FROM sightings ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getHarbor = (request, response) => {
  pool.query("SELECT * FROM sightings WHERE nickname = 'Harbor' ", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addToSighting = (request, response) => {
  
  const { nickname, timestamp, location, img } = request.body; //, event_date, description
  console.log(request.body)

  pool.query('INSERT INTO sightings (nickname, timestamp_of_sighting, location, sighting_img) VALUES ($1, $2, $3, $4) RETURNING *', [nickname, timestamp, location, img], (error, results) => {//, event_date, description//, event_date, description
    if (error) {
      throw error
    }
    // response.status(201).send(`Event added with ID: ${results.insertId}`)
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getSpecies,
    // getEventsById,
    addToEndangered,
    addToSighting ,
    // deleteEvent,
    getHarbor,
    getSightings,
}